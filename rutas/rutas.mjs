import { Router } from "express";
import { traerDatos,agregarDatos } from "../funciones/funciones.mjs";
export const ruta = Router()

ruta.get('/alumnos',traerDatos)
ruta.post('/alumnos',agregarDatos)