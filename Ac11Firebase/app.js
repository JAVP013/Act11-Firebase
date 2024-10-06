const express
  = require('express');
const bodyParser = require('body-parser');
const projectRoutes  = require('./routes/projectRoutes');

// Importa Firebase desde firebaseConfig.js
const firebaseApp = require('./firebase/firebase'); // Asegúrate de que el camino sea correcto
console.log('Firebase ha sido importado correctamente:', firebaseApp);

const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/projects', projectRoutes);
app.use('/auth', authRoutes);

app.use((req, res, next) => {
    res.status(404).json({ code: 404, message: 'Ruta no encontrada' });
});

module.exports = app;