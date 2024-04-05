import {pool} from '../config/db.js';


const consultar = async () => {
    const SQLQuery = {
        rowMode: "array",
        text:"SELECT * FROM musicos",
    };
    const response = await pool.query(SQLQuery);
    console.log("Mostrando Musicos Registrados: ", response.rows);
    }
consultar()