// ─── Tico Capital Group — Firebase Configuration ───────────────────────────
import { initializeApp }                    from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getFirestore, collection, getDocs, addDoc, updateDoc,
         deleteDoc, doc, onSnapshot, serverTimestamp,
         setDoc, query, orderBy, getDoc }   from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';
import { getAuth, signInWithEmailAndPassword,
         signOut, onAuthStateChanged }       from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';

const firebaseConfig = {
  apiKey:            "AIzaSyA545fmz2Ufs29IdEh7UPTHMJtMiG6_ay0",
  authDomain:        "tico-capital-group.firebaseapp.com",
  projectId:         "tico-capital-group",
  storageBucket:     "tico-capital-group.firebasestorage.app",
  messagingSenderId: "428129532061",
  appId:             "1:428129532061:web:592a4d342c4b857d39bc74"
};

const app  = initializeApp(firebaseConfig);
const db   = getFirestore(app);
const auth = getAuth(app);

// ── Expose globally so the React bundle can access them ──────────────────────
window._db   = db;
window._auth = auth;
window._fsUtils = {
  collection, getDocs, addDoc, updateDoc, deleteDoc,
  doc, onSnapshot, serverTimestamp, setDoc, query,
  orderBy, getDoc,
  // Auth helpers
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
};

console.log('[Firebase] ✅ Conectado al proyecto:', app.options.projectId);
