import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const createArticle = functions.https.onCall(async (request: functions.https.CallableRequest) => {
  const data = request.data;
  functions.logger.info("createArticle called", { data });
  const { id, ...articleData } = data;

  if (typeof id !== 'string') {
    throw new functions.https.HttpsError('invalid-argument', 'The function must be called with a valid id.');
  }

  try {
    await admin.firestore().collection("articles").doc(id).set(articleData);
    return { success: true, id };
  } catch (error) {
    functions.logger.error("Error creating article", error);
    throw new functions.https.HttpsError('internal', 'An error occurred while creating the article.');
  }
});

export const listArticle = functions.https.onCall(async (_request: functions.https.CallableRequest) => {
  functions.logger.info("listArticle called");
  try {
    const snapshot = await admin.firestore().collection("articles").orderBy("id").get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    functions.logger.error("Error listing articles", error);
    throw new functions.https.HttpsError('internal', 'An error occurred while listing articles.');
  }
});

export const getArticle = functions.https.onCall(async (request: functions.https.CallableRequest) => {
  const data = request.data;
  functions.logger.info("getArticle called", { data });
  const { id } = data;

  if (typeof id !== 'string') {
    throw new functions.https.HttpsError('invalid-argument', 'The function must be called with a valid id.');
  }

  try {
    const doc = await admin.firestore().collection("articles").doc(id).get();
    if (!doc.exists) {
      throw new functions.https.HttpsError('not-found', 'The requested article does not exist.');
    }
    return { id: doc.id, ...doc.data() };
  } catch (error) {
    functions.logger.error("Error getting article", error);
    throw new functions.https.HttpsError('internal', 'An error occurred while retrieving the article.');
  }
});

export const deleteArticle = functions.https.onCall(async (request: functions.https.CallableRequest) => {
  const data = request.data;
  functions.logger.info("deleteArticle called", { data });
  const { id } = data;

  if (typeof id !== 'string') {
    throw new functions.https.HttpsError('invalid-argument', 'The function must be called with a valid id.');
  }

  try {
    await admin.firestore().collection("articles").doc(id).delete();
    return { success: true, id };
  } catch (error) {
    functions.logger.error("Error deleting article", error);
    throw new functions.https.HttpsError('internal', 'An error occurred while deleting the article.');
  }
});

export const helloWorld = functions.https.onCall(async (_request: functions.https.CallableRequest) => {
  return {
    message: "Firebase test successful!",
  };
});
