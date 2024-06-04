import express from 'express'
import 'dotenv/config'

const servidor = express()

const PUERTO = process.env.PUERTO || 5000

servidor.listen(PUERTO,() =>{
    console.log('El servidor se abrio en el puerto ' + PUERTO)
})