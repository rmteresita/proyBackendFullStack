import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'imshawol24',
    port: 3306,
    database: 'farmacia'

})