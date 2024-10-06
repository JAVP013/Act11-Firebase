// firebase/firebase.js
const { initializeApp } = require("firebase/app"); // Cambiar a require
const { getAnalytics } = require("firebase/analytics"); // Cambiar a require

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDRwJn1WAbMastmahmwGBdwwaSRI23mdQ8",
  authDomain: "actividad02-77148.firebaseapp.com",
  projectId: "actividad02-77148",
  storageBucket: "actividad02-77148.appspot.com",
  messagingSenderId: "943004503716",
  appId: "1:943004503716:web:effc4a25532fb6617c2031",
  measurementId: "G-WVP1WPNM2R"
};

// Inicializa Firebase
const firebaseApp = initializeApp(firebaseConfig);
console.log('Firebase ha sido inicializado correctamente:', firebaseApp); // Opcional: Verificar inicialización
module.exports = firebaseApp; // Exportar la instancia de Firebase