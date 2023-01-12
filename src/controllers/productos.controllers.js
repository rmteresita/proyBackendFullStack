import {pool} from '../db.js'

export const getProductos = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM productos')
    res.json(rows)
}

export const getProducto = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM productos WHERE id = ?', [req.params.id])
    
    if (rows.length <= 0 ) return res.status(404).json({
        message: 'No tenemos este producto en la base de datos :c'
    })

    res.json(rows[0])
}

export const createProductos = async (req, res) => {
    const { nombre, precio } = req.body
    const [rows] = await pool.query('INSERT INTO productos (nombre, precio) VALUES (?, ?)', [nombre, precio])
    res.send({ 
        id: rows.insertId,
        nombre,
        precio,
     })
}

export const deleteProductos = async (req, res) => {
    const [result] = await pool.query('DELETE FROM productos WHERE id = ?', [req.params.id])
    
    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'No tenemos este producto en la base de datos :c'
    })
    res.send('El producto ha sido eliminado')
}

export const updateProductos = async (req, res) => {
    const {id} = req.params
    const {nombre, precio} = req.body
    
    const [result] = await pool.query('UPDATE productos SET nombre = IFNULL(?, nombre), precio = IFNULL(?, precio) WHERE id = ?', [nombre, precio, id])
    console.log(result)
    if (result.affectedRows === 0) return res.status(400).json({
        message: 'No tenemos este producto en la base de datos :c'
    })
    const [rows] = await pool.query('SELECT * FROM productos WHERE id =?', [id])
    res.json(rows[0])
}

