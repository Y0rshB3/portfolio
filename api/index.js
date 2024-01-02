const express = require('express');
const mysql = require('mysql');
const env = require('dotenv').config();

// Conexión a la base de datos
const db = mysql.createConnection({
  host: env.hostDatabase,
  user: env.userDatabase,
  password: env.passwordDatabase,
  database: env.database
});

db.connect();

const app = express();

// Endpoint para obtener datos
app.get('/datos', (req, res) => {
  db.query('SELECT * FROM mi_tabla', (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

// Iniciar el servidor
const PORT = env.portListen || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});