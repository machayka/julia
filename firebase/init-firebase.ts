"use client";
import { Analytics, getAnalytics } from "firebase/analytics";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

let analytics: Analytics | undefined;

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

if (typeof window !== "undefined" && !getApps().length) {
  initializeApp(firebaseConfig);
  analytics = getAnalytics();
}

export const firebaseApp = getApp();
export const firebaseAuth = getAuth();
export const firestore = getFirestore();
export const firebaseStorage = getStorage();
export const firebaseFunctions = getFunctions();
export { analytics };
