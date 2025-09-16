import React, { useState } from 'react';
import mangas from '../data/mangas.json';
import './Catalog.css';

const colorMap = { 'Ação':'#1f6feb','Aventura':'#2ea36f','Romance':'#d94b86','Dark':'#263238','Shounen':'#26408b','Fantasia':'#f89f2b','Comédia':'#d65a3b','Dublado':'#19a974','Drama':'#7c5fb2','Escolar':'#6b5250','Slice of Life':'#ec7da9','Sobrenatural':'#6f55d8','Sci-Fi':'#00a7b5' };

export default function Catalog(){
  const [query,setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const cats = Array.from(new Set(mangas.flatMap(m=>m.tags || [])));

  const visible = mangas.filter(m => {
    const matchesCat = selected ? (m.tags || []).includes(selected) : true;
    const matchesQuery = m.title.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="catalog-page">
      <input   className="catalog-search search-bar" placeholder="O que você está procurando?" value={query} onChange={e=>setQuery(e.target.value)} />

      <div className="chips-row" role="list">
        <button className={'chip ' + (selected===null?'chip-active':'')} onClick={()=>setSelected(null)} style={{background:'#444'}}>Tudo</button>
        {cats.map(c => (
          <button key={c} onClick={()=>setSelected(c)} className={'chip ' + (selected===c?'chip-active':'')} style={{background: colorMap[c]||'#666'}}>{c}</button>
        ))}
      </div>

      <div className="catalog-results">
        {visible.map(m => (
          <div key={m.id} className="catalog-card">
            <img src={m.image} alt={m.title} />
            <div className="card-title">{m.title}</div>
            <div style={{marginTop:8,color:'var(--muted)'}}>{m.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
