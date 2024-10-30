import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

// 型定義
interface ArticleData {
  id: string;
  title: string;
  content: string;
  createdAt: admin.firestore.Timestamp;
  updatedAt: admin.firestore.Timestamp;
}

interface CreateArticleRequest {
  id: string;
  title: string;
  content: string;
}

interface DeleteArticleRequest {
  id: string;
}

interface GetArticleRequest {
  id: string;
}

export const createArticle = functions.https.onCall(async (request) => {
  const data = request.data as CreateArticleRequest;
  functions.logger.info("createArticle called", { data });
  const { id, ...articleData } = data;

  if (typeof id !== "string") {
    throw new functions.https.HttpsError("invalid-argument", "The function must be called with a valid id.");
  }

  try {
    const timestamp = admin.firestore.Timestamp.now();
    const newArticle: ArticleData = {
      ...articleData,
      id,
      createdAt: timestamp,
      updatedAt: timestamp,
    };
    await admin.firestore().collection("articles").doc(id).set(newArticle);
    return { success: true, id };
  } catch (error) {
    functions.logger.error("Error creating article", error);
    throw new functions.https.HttpsError("internal", "An error occurred while creating the article.");
  }
});

export const listArticle = functions.https.onCall(async (_request) => {
  functions.logger.info("listArticle called");
  try {
    const snapshot = await admin.firestore().collection("articles").orderBy("id").get();
    return snapshot.docs.map((doc) => doc.data() as ArticleData);
  } catch (error) {
    functions.logger.error("Error listing articles", error);
    throw new functions.https.HttpsError("internal", "An error occurred while listing articles.");
  }
});

export const getArticle = functions.https.onCall(async (request) => {
  const data = request.data as GetArticleRequest;
  functions.logger.info("getArticle called", { data });
  const { id } = data;

  if (typeof id !== "string") {
    throw new functions.https.HttpsError("invalid-argument", "The function must be called with a valid id.");
  }

  try {
    const doc = await admin.firestore().collection("articles").doc(id).get();
    if (!doc.exists) {
      throw new functions.https.HttpsError("not-found", "The requested article does not exist.");
    }
    return doc.data() as ArticleData;
  } catch (error) {
    functions.logger.error("Error getting article", error);
    throw new functions.https.HttpsError("internal", "An error occurred while retrieving the article.");
  }
});

export const deleteArticle = functions.https.onCall(async (request) => {
  const data = request.data as DeleteArticleRequest;
  functions.logger.info("deleteArticle called", { data });
  const { id } = data;

  if (typeof id !== "string") {
    throw new functions.https.HttpsError("invalid-argument", "The function must be called with a valid id.");
  }

  try {
    await admin.firestore().collection("articles").doc(id).delete();
    return { success: true, id };
  } catch (error) {
    functions.logger.error("Error deleting article", error);
    throw new functions.https.HttpsError("internal", "An error occurred while deleting the article.");
  }
});

export const helloWorld = functions.https.onCall(async (_request) => {
  return {
    message: "Firebase test successful!",
  };
});
