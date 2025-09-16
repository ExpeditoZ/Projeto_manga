import React from 'react';
import { useAuth } from '../providers/AuthProvider';
import './Profile.css';

export default function Profile(){
  const { user, logout } = useAuth();
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={user?.photoURL || '/src/assets/manga1.jpg'} alt="avatar" className="profile-avatar"/>
        <h2 className="profile-name">{user?.displayName || user?.name || 'Usuário'}</h2>
        <div className="profile-email">{user?.email || 'email@exemplo.com'}</div>
        <button className="logout-btn" onClick={logout}>Sair</button>
      </div>
    </div>
  );
}