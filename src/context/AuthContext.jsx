import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthContext = createContext();

export function useAuth(){ return useContext(AuthContext); }

export function AuthProvider({ children }){
  const [user, setUser] = useState(null);

  useEffect(()=>{
    // subscribe to firebase auth state
    try{
      const unsubscribe = onAuthStateChanged(auth, (u)=>{
        if(u){
          setUser({ displayName: u.displayName, email: u.email, photoURL: u.photoURL, uid: u.uid });
        } else {
          setUser(null);
        }
      });
      return ()=> unsubscribe && unsubscribe();
    }catch(e){
      // if firebase not configured, keep null
      console.warn('onAuthStateChanged failed', e);
    }
  },[]);

  const logout = async ()=>{
    try{ await signOut(auth); }catch(e){ console.warn('signOut failed', e); }
  };

  return <AuthContext.Provider value={{ user, logout }}>{children}</AuthContext.Provider>;
}
