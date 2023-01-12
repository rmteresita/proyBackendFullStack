import {pool} from '../db.js'

export const getClientes = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM clientes')
    res.json(rows)
}

export const getCliente = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM clientes WHERE id = ?', [req.params.id])
    
    if (rows.length <= 0 ) return res.status(404).json({
        message: 'No tenemos este cliente en la base de datos :c'
    })

    res.json(rows[0])
}

export const createClientes = async (req, res) => {
    const { nombre, direccion } = req.body
    const [rows] = await pool.query('INSERT INTO clientes (nombre, direccion) VALUES (?, ?)', [nombre, direccion])
    res.send({ 
        id: rows.insertId,
        nombre,
        direccion,
     })
}

export const deleteClientes = async (req, res) => {
    const [result] = await pool.query('DELETE FROM clientes WHERE id = ?', [req.params.id])
    
    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'No tenemos este cliente en la base de datos :c'
    })
    res.send('El cliente ha sido eliminado')
}

export const updateClientes = async (req, res) => {
    const {id} = req.params
    const {nombre, direccion} = req.body
    
    const [result] = await pool.query('UPDATE clientes SET nombre = IFNULL(?, nombre), direccion = IFNULL(?, direccion) WHERE id = ?', [nombre, direccion, id])
    console.log(result)
    if (result.affectedRows === 0) return res.status(400).json({
        message: 'No tenemos este cliente en la base de datos :c'
    })
    const [rows] = await pool.query('SELECT * FROM clientes WHERE id =?', [id])
    res.json(rows[0])
}