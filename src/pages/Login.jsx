import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import GoogleIcon from '@mui/icons-material/Google'
import { auth, provider } from '../firebase'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Login(){

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleEmail(e){
    e.preventDefault()
    setLoading(true)
    try{
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/home')
    }catch(err){ alert(err.message) }
    setLoading(false)
  }

  async function handleGoogle(){
    try{
      await signInWithPopup(auth, provider)
      navigate('/home')
    }catch(err){ alert(err.message) }
  }

  return (
    <Container component='main' maxWidth='xs' sx={{bgcolor:'#fff3e6', borderRadius:2, mt:8, py:4}}>
      <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Avatar src={'/src/assets/logo.png'} sx={{width:92, height:92, mb:2}} variant='square' />
        <Typography component='h1' variant='h5'  sx={{ color: '#000', fontWeight: 'bold', mt: 1 }}>Manga Store</Typography>
        <Box component='form' onSubmit={handleEmail} sx={{mt:1, width:'100%'}}>
          <TextField margin='normal' required fullWidth label='Email' autoFocus value={email} onChange={(e)=>setEmail(e.target.value)} />
          <TextField margin='normal' required fullWidth label='Senha' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
          <Button type='submit' fullWidth variant='contained' sx={{mt:3, mb:2}}>Entrar</Button>
          <Button fullWidth variant='outlined' startIcon={<GoogleIcon/>} onClick={handleGoogle}>Entrar com Google</Button>
          <Grid container sx={{mt:2}}>
            <Grid item xs>
              <Link href='/forgot' variant='body2'>Esqueci minha senha</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
