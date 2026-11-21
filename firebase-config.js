// =========================================================================
// KONFIGURASI TERPUSAT HYBRID: FIREBASE + GOOGLE DRIVE / SHEETS
// =========================================================================
const GAS_URL = "https://script.google.com/macros/s/AKfycbw4APJqKIcWVgs1yk29KHmuIeArlCDcu0rruBauZkOOmUmGig9Wvqy2aIKq7_gaUPGkOg/exec";

// Struktur Lengkap 5 Folder Google Drive
const DRIVE_FOLDER_ROOT = "1K2wJSKK1PeqtwtQWFvfkm-ekix8t7pQp"; // ID Folder Besar / Utama (Semua Berkas, Flyer & Banner)
const DRIVE_FOLDER_BUKTI = "1i0VnagJrNxjQRWgoO-qXZyrzIRX7l85WFZDw3ji6c0ncve_g9hrh811Wwd6l8sojQjbiH1eN"; // Folder Penampung Bukti Pembayaran
const DRIVE_FOLDER_ID = DRIVE_FOLDER_BUKTI; // Alias kompatibilitas default bukti pembayaran

const DRIVE_FOLDER_AUDIO_ROOT = "1dDB5y_8eL2-qccCbXjGtg4OVZecG0VLK"; // ID Folder Besar Upload Instrumen Solosong & Tari Kreasi
const DRIVE_FOLDER_AUDIO_SOLOSONG = "1bI4WfnXjoCHyexfYemrKmeWpfvcBm0O2"; // ID Folder Penampung Audio Solosong
const DRIVE_FOLDER_AUDIO_TARI = "1SqJlhYQHtXVL7JsEb75IsthSpg03k77P"; // ID Folder Penampung Audio Tari Kreasi

const ADMIN_CONFIRM_WA = "6285267743284";
const LOGO_URL = "https://lh3.googleusercontent.com/d/1Ca6RhNsv0aFWD4EMdkr8uCcSuPDESTpv";

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
