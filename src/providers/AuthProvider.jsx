import React, { createContext, useState, useEffect, useContext } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const AuthContext = createContext()

export function useAuth(){ return useContext(AuthContext) }

export default function AuthProvider({ children }){
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, (u)=>{ setUser(u); setLoading(false) })
    return ()=>unsub()
  },[])

  if(loading) return <Box sx={{display:'flex', justifyContent:'center', mt:8}}><CircularProgress/></Box>
  const logout = async ()=>{ try{ await signOut(auth);}catch(e){console.warn('signOut failed', e);} }; return <AuthContext.Provider value={{user, logout}}>{children}</AuthContext.Provider>
}
