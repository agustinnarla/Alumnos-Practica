import { pool } from "../database/coneccion.mjs";

const traerDatos = async(peticion,respuesta)=>{
    const datos = await pool.query("SELECT * FROM datos")
    respuesta.json(datos.rows)
}

const agregarDatos = async(peticion,respuesta) =>{
    const datos = await pool.query("INSERT INTO datos (dni,nombre,apellido)" + "VALUES ($1,$2,$3)",[45086990,"Agustin","Arla"])
    respuesta.json(datos.rowCount)
}

export {traerDatos,agregarDatos}