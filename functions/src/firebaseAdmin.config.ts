import * as admin from "firebase-admin";

admin.initializeApp();

export const adminInstance = admin;
export const db = admin.firestore();
