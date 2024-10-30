import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { onCall } from 'firebase-functions/v2/https';

initializeApp();

// 型定義
interface ArticleData {
  id: string;
  title: string;
  content: string;
  createdAt: FirebaseFirestore.Timestamp;
  updatedAt: FirebaseFirestore.Timestamp;
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

export const createArticle = onCall<CreateArticleRequest>(async (request) => {
  const { data } = request;
  console.info("createArticle called", { data });
  const { id, ...articleData } = data;

  if (typeof id !== "string") {
    throw new Error("The function must be called with a valid id.");
  }

  try {
    const db = getFirestore();
    const timestamp = FirebaseFirestore.Timestamp.now();
    const newArticle: ArticleData = {
      ...articleData,
      id,
      createdAt: timestamp,
      updatedAt: timestamp,
    };
    await db.collection("articles").doc(id).set(newArticle);
    return { success: true, id };
  } catch (error) {
    console.error("Error creating article", error);
    throw new Error("An error occurred while creating the article.");
  }
});

export const listArticle = onCall(async () => {
  console.info("listArticle called");
  try {
    const db = getFirestore();
    const snapshot = await db.collection("articles").orderBy("id").get();
    return snapshot.docs.map((doc) => doc.data() as ArticleData);
  } catch (error) {
    console.error("Error listing articles", error);
    throw new Error("An error occurred while listing articles.");
  }
});

export const getArticle = onCall<GetArticleRequest>(async (request) => {
  const { data } = request;
  console.info("getArticle called", { data });
  const { id } = data;

  if (typeof id !== "string") {
    throw new Error("The function must be called with a valid id.");
  }

  try {
    const db = getFirestore();
    const doc = await db.collection("articles").doc(id).get();
    if (!doc.exists) {
      throw new Error("The requested article does not exist.");
    }
    return doc.data() as ArticleData;
  } catch (error) {
    console.error("Error getting article", error);
    throw new Error("An error occurred while retrieving the article.");
  }
});

export const deleteArticle = onCall<DeleteArticleRequest>(async (request) => {
  const { data } = request;
  console.info("deleteArticle called", { data });
  const { id } = data;

  if (typeof id !== "string") {
    throw new Error("The function must be called with a valid id.");
  }

  try {
    const db = getFirestore();
    await db.collection("articles").doc(id).delete();
    return { success: true, id };
  } catch (error) {
    console.error("Error deleting article", error);
    throw new Error("An error occurred while deleting the article.");
  }
});

export const helloWorld = onCall(async () => {
  return {
    message: "Firebase test successful!",
  };
});
