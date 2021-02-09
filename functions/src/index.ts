import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const createArticle = functions.https.onCall(async (data, context) => {
  console.log("functions.https.onCall() createArticle");
  console.log("admin = ", admin);
  await admin.firestore().collection("articles").doc().set({
    body: "Article!!",
  });
});

export const listArticle = functions.https.onCall(async (data, context) => {
  console.log("functions.https.onCall() listArticle");
  const dd = await admin.firestore().collection("articles").get();
  console.log("dd = ", dd);
  return dd.docs.map((doc) => doc.data());
});

export const helloWorld = functions.https.onCall(async (data, context) => {
  return {
    message: "firebase test!!!",
  };
});
