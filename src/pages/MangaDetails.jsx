import { useParams } from "react-router-dom";
import mangas from "../data/mangas.json";
import { useState, useEffect } from "react";
import "./MangaDetails.css";

export default function MangaDetails() {
  const { id } = useParams();
  const manga = mangas.find(m => m.id.toString() === id);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  const toggleFavorite = () => {
    if (!manga) return;
    let favs = [...favorites];
    if (favs.includes(manga.id)) {
      favs = favs.filter(f => f !== manga.id);
    } else {
      favs.push(manga.id);
    }
    setFavorites(favs);
    localStorage.setItem("favorites", JSON.stringify(favs));
  };

  if (!manga) return <div style={{ padding: 16 }}>Mangá não encontrado</div>;

  const available = manga.stock === undefined ? true : Boolean(manga.stock);

  return (
    <div className="manga-details">
      <h2>Detalhes</h2>
      <div className="manga-header">
        <img src={manga.image} alt={manga.title} />
        <div className="manga-info">
          <h3>{manga.title}</h3>
          <p className="author">{manga.author}</p>
          
          {/* Preço */}
          <p className="price">{manga.price || "Preço indisponível"}</p>

          <div className="buttons-row">
            <button className="buy-btn">Comprar</button>
            <button className="fav-btn" onClick={toggleFavorite}>
              {favorites.includes(manga.id) ? "❤️ Favorito" : "🤍 Favoritar"}
            </button>
          </div>
          
          <p className={`status ${available ? "available" : "unavailable"}`}>
            {available ? "Disponível" : "Esgotado"}
          </p>
        </div>
      </div>
      <div className="tags">
        {manga.tags?.map(t => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
      <p className="description">{manga.description || "Sem descrição disponível."}</p>
    </div>
  );
}
