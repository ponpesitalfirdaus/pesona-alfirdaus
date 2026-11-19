// =========================================================================
// KONFIGURASI TERPUSAT HYBRID: FIREBASE + GOOGLE DRIVE / SHEETS
// =========================================================================
const GAS_URL = "https://script.google.com/macros/s/AKfycbw4APJqKIcWVgs1yk29KHmuIeArlCDcu0rruBauZkOOmUmGig9Wvqy2aIKq7_gaUPGkOg/exec";
const DRIVE_FOLDER_ID = "1i0VnagJrNxjQRWgo-qXZyrzIRX7l85WFZDw3ji6c0ncve_g9hrh811Wwd6l8sojQjbiH1eN";
const ADMIN_CONFIRM_WA = "6285267743284";
const LOGO_URL = "https://lh3.googleusercontent.com/d/1Ca6RhNsv0aFWD4EMdkr8uCcSuPDESTpv";

// GANTI NILAI DI BAWAH INI DENGAN CONFIG DARI FIREBASE CONSOLE ANDA:
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAMRrskSuQVVjr9sHAtCxgmiRep2QnVzUg",
  authDomain: "pesona-al-firdaus.firebaseapp.com",
  projectId: "pesona-al-firdaus",
  storageBucket: "pesona-al-firdaus.firebasestorage.app",
  messagingSenderId: "969672634728",
  appId: "1:969672634728:web:5dbf8bafe2e234fd8d66dd"
};

function isFirebaseConfigured() {
  return FIREBASE_CONFIG && FIREBASE_CONFIG.apiKey && !FIREBASE_CONFIG.apiKey.startsWith("PASTE_");
}

let db = null;
let auth = null;

if (typeof firebase !== "undefined" && isFirebaseConfigured()) {
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
  db = firebase.firestore();
  auth = firebase.auth();
}
