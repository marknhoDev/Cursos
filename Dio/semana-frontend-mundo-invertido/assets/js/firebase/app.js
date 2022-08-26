  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
    // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBxJtP-H4p1VaOmO811W0Ro5_xdvebgqDg",
    authDomain: "pagina-mundo-invertido.firebaseapp.com",
    projectId: "pagina-mundo-invertido",
    storageBucket: "pagina-mundo-invertido.appspot.com",
    messagingSenderId: "1062263482160",
    appId: "1:1062263482160:web:63a803b4bcb494b5508af5",
    measurementId: "G-N5GYQE8MMV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
export default app