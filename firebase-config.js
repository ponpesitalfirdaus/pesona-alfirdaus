// =========================================================================
// KONFIGURASI TERPUSAT HYBRID: FIREBASE + GOOGLE DRIVE / SHEETS
// =========================================================================
const GAS_URL = "https://script.google.com/macros/s/AKfycbw4APJqKIcWVgs1yk29KHmuIeArlCDcu0rruBauZkOOmUmGig9Wvqy2aIKq7_gaUPGkOg/exec";
const DRIVE_FOLDER_ID = "1i0VnagJrNxjQRWgo-qXZyrzIRX7l85WFZDw3ji6c0ncve_g9hrh811Wwd6l8sojQjbiH1eN";
const ADMIN_CONFIRM_WA = "6285267743284";
const LOGO_URL = "https://lh3.googleusercontent.com/d/1Ca6RhNsv0aFWD4EMdkr8uCcSuPDESTpv";

// GANTI NILAI DI BAWAH INI DENGAN CONFIG DARI FIREBASE CONSOLE ANDA:
const FIREBASE_CONFIG = {
  apiKey: "PASTE_API_KEY_ANDA",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
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
