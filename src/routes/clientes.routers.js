import { Router } from 'express'
import { getClientes, createClientes, updateClientes, deleteClientes, getCliente } from '../controllers/clientes.controllers.js'

const router = Router()

router.get('/clientes', getClientes)

router.get('/clientes/:id', getCliente)

router.post('/clientes', createClientes)

router.patch('/clientes/:id', updateClientes)

router.delete('/clientes/:id', deleteClientes)

export default router 