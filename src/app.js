import express from 'express';
import { pool } from './db.js';
import { PORT } from './config.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Ruta principal para el dashboard
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/views/dashboard.html'));
});

// Ruta para obtener usuarios
app.get('/api/users', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users');
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});


app.listen(PORT, () => {
  console.log('Server on port', PORT);
});
