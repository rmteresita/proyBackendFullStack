import express from 'express'
import productosRoutes from './routes/productos.routes.js'
import clientesRoutes from './routes/clientes.routers.js'
import empleadosRoutes from './routes/empleados.routers.js'
import indexRoutes from './routes/index.routes.js'
import {PORT} from './config.js'

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api',productosRoutes)
app.use('/api',clientesRoutes)
app.use('/api',empleadosRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Esta ruta no se encuentra'
    })
})

app.listen(PORT)
console.log('Server running on port', PORT)
