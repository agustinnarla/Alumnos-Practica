import express from 'express'
import 'dotenv/config'
import { ruta } from './rutas/rutas.mjs'
const servidor = express()

servidor.use('/',ruta)

const PUERTO = process.env.PUERTO || 5000

servidor.listen(PUERTO,() =>{
    console.log('El servidor se abrio en el puerto ' + PUERTO)
})