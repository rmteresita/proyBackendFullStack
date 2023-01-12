import {pool} from '../db.js'

export const getEmpleados = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM empleados')
    res.json(rows)
}

export const getEmpleado = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM empleados WHERE id = ?', [req.params.id])
    
    if (rows.length <= 0 ) return res.status(404).json({
        message: 'No tenemos este empleado en la base de datos :c'
    })

    res.json(rows[0])
}

export const createEmpleados = async (req, res) => {
    const { nombre, turno } = req.body
    const [rows] = await pool.query('INSERT INTO empleados (nombre, turno) VALUES (?, ?)', [nombre, turno])
    res.send({ 
        id: rows.insertId,
        nombre,
        turno,
     })
}

export const deleteEmpleados = async (req, res) => {
    const [result] = await pool.query('DELETE FROM empleados WHERE id = ?', [req.params.id])
    
    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'No tenemos este empleado en la base de datos :c'
    })
    res.send('El empleado ha sido eliminado')
}

export const updateEmpleados = async (req, res) => {
    const {id} = req.params
    const {nombre, turno} = req.body
    
    const [result] = await pool.query('UPDATE empleados SET nombre = IFNULL(?, nombre), turno = IFNULL(?, turno) WHERE id = ?', [nombre, turno, id])
    console.log(result)
    if (result.affectedRows === 0) return res.status(400).json({
        message: 'No tenemos este empleado en la base de datos :c'
    })
    const [rows] = await pool.query('SELECT * FROM empleados WHERE id =?', [id])
    res.json(rows[0])
}