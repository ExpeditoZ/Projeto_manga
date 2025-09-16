import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './CategoryRow.css'

export default function CategoryRow({ title, mangas }) {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  useEffect(()=>{
    const fav = JSON.parse(localStorage.getItem('favorites')||'[]');
    setFavorites(fav);
  },[])

  function toggleFav(id,e){
    e?.stopPropagation();
    let fav = JSON.parse(localStorage.getItem('favorites')||'[]');
    if(fav.includes(id)) fav = fav.filter(x=>x!==id)
    else fav.push(id)
    localStorage.setItem('favorites', JSON.stringify(fav))
    setFavorites(fav)
    document.body.dispatchEvent(new Event('favchange'))
  }

  return (
    <div className="category-row">
      <h2 className="category-title">{title}</h2>
      <div className="manga-scroll">
        {mangas.map((manga) => (
          <div
            key={manga.id}
            className="manga-card"
            onClick={() => navigate(`/manga/${manga.id}`)}
          >
            <div className="manga-thumb">
              <img src={manga.image} alt={manga.title} />
            </div>
            <div className="manga-meta">
              <p className="manga-name">{manga.title}</p>
              <button className={'fav-btn '+(favorites.includes(manga.id)?'faved':'')} onClick={(e)=>toggleFav(manga.id,e)} aria-label="favorite">
                {favorites.includes(manga.id) ? '♥' : '♡'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
