import { Router } from 'express'
import { getProductos, createProductos, updateProductos, deleteProductos, getProducto } from '../controllers/productos.controllers.js'

const router = Router()

router.get('/productos', getProductos)

router.get('/productos/:id', getProducto)

router.post('/productos', createProductos)

router.patch('/productos/:id', updateProductos)

router.delete('/productos/:id', deleteProductos)

export default router 