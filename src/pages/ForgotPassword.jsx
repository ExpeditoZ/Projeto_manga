import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function ForgotPassword(){
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e){
    e.preventDefault()
    setSent(true)
  }

  return (
    <Container maxWidth='sm' sx={{mt:8}}>
      <Box sx={{bgcolor:'#fff', p:3, borderRadius:2}}>
        <Typography variant='h6'>Recuperar senha</Typography>
        {!sent ? (
          <Box component='form' onSubmit={handleSubmit} sx={{mt:2}}>
            <TextField fullWidth label='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <Button type='submit' variant='contained' sx={{mt:2}}>Enviar</Button>
          </Box>
        ) : (
          <Typography sx={{mt:2}}>Se este email estiver cadastrado, enviaremos um link de redefinição.</Typography>
        )}
      </Box>
    </Container>
  )
}
