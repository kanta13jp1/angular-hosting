import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const createArticle = functions.https.onCall(async (data, context) => {
  console.log("functions.https.onCall() createArticle");
  console.log("data = ", data);
  const id = data.id;
  console.log("id = ", id);
  const result = await admin.firestore().collection("articles")
      .doc(String(id)).set(data);
  return result;
});

export const listArticle = functions.https.onCall(async (data, context) => {
  console.log("functions.https.onCall() listArticle");
  const dd = await admin.firestore().collection("articles").orderBy("id").get();
  console.log("dd.docs.map((doc) => doc.data()) = ",
      dd.docs.map((doc) => doc.data()));
  return dd.docs.map((doc) => doc.data());
});

export const deleteArticle = functions.https.onCall(async (data, context) => {
  console.log("functions.https.onCall() deleteArticle");
  console.log("data = ", data);
  const id = data.id;
  console.log("id = ", id);
  const dd = await admin.firestore().collection("articles").get();
  dd.docs.forEach((doc) =>
    console.log("doc.id = ", doc.id));
  const doc = await admin.firestore().collection("articles").doc(String(id));
  console.log("doc().id = ", doc.id);
  const result = await doc.delete();
  return result;
});

export const helloWorld = functions.https.onCall(async (data, context) => {
  return {
    message: "firebase test!!!",
  };
});
