import React from 'react';
import CategoryRow from '../components/CategoryRow';
import mangas from '../data/mangas.json';

export default function Home() {
  return (
    <div className="app-container">
      <div className="container">
        
        {/* Header com logo pequena + título preto */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 12 }}>
          <img
            src={"/src/assets/logo.png"}
            alt="logo"
            style={{ width: "60px", filter: "brightness(0) invert(1)" }}
          />
          <h1 style={{ color: "#ffffffff", fontSize: "20px", fontWeight: "bold" }}>
            Manga Store
          </h1>
        </div>

        {/* Seções */}
        <div className="section" style={{ marginTop: 12 }}>
          <CategoryRow title="Recém lançados" mangas={mangas.slice(0, 6)} />
        </div>

        <div className="section" style={{ marginTop: 6 }}>
          <CategoryRow title="Os mais lidos da semana" mangas={mangas.slice(6, 12)} />
        </div>

        <div className="section" style={{ marginTop: 6 }}>
          <CategoryRow title="Recomendados" mangas={mangas.slice(12, 18)} />
        </div>
      </div>
    </div>
  );
}
