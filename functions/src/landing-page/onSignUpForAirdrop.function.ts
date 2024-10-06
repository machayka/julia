import {logger} from "firebase-functions";
import {HttpsError, onCall} from "firebase-functions/v2/https";
import {db} from "../firebaseAdmin.config";
import {FirestoreCollection} from "../utils/collections.model";
import {sendEmail} from "../utils/sendEmail";

export const onContactFormSign = onCall(async ({data}) => {
  const {email} = data;

  if (!email || !validateEmail(email)) {
    throw new HttpsError("invalid-argument", "Invalid email format");
  }

  try {
    await db.collection(FirestoreCollection.AIRDROPS).add({
      email: email,
      timestamp: new Date(),
    });

    const subject = `Agreem Bid: ${email} zapisał się na Airdrop`;
    const mailTemplate = "signedUpForAirdrop.html";

    await sendEmail({email: email}, subject, mailTemplate);

    return {
      status: "success",
      message: "Email successfully registered for airdrop",
    };
  } catch (error) {
    logger.error("Błąd wysyłania e-maila lub zapisu do bazy", error);
    throw new HttpsError("internal", "Błąd przetwarzania żądania");
  }
});

// Funkcja do walidacji emaila
function validateEmail(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
