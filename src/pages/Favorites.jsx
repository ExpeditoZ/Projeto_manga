import React, {useEffect, useState} from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import mangas from '../data/mangas.json'
import { useNavigate } from 'react-router-dom'

export default function Favorites(){
  const [list,setList] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    const fav = JSON.parse(localStorage.getItem('favorites')||'[]')
    const items = mangas.filter(m => fav.includes(m.id))
    setList(items)
  },[])

  return (
    <Container sx={{mt:4, mb:10}}>
      <Typography variant='h5'>Favoritos</Typography>
      {list.length===0 ? <Typography sx={{mt:2}}>Você ainda não tem favoritos.</Typography> : (
        <Grid container spacing={2} sx={{mt:2}}>
          {list.map(m=>(
            <Grid item xs={6} sm={4} md={3} key={m.id}>
              <div style={{cursor:'pointer'}} onClick={()=>navigate(`/manga/${m.id}`)}>
                <img src={m.image} alt={m.title} style={{width:'100%', height:200, objectFit:'cover', borderRadius:8}}/>
                <Typography sx={{mt:1}}>{m.title}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  )
}
