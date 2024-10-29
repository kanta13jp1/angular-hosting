import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

interface ToDo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: admin.firestore.Timestamp;
}

export const createToDo = functions.https.onCall(async (request: functions.https.CallableRequest) => {
  const data = request.data as Partial<ToDo>;
  functions.logger.info("createToDo called", { data });

  if (!data.id || typeof data.id !== 'string') {
    throw new functions.https.HttpsError('invalid-argument', 'The function must be called with a valid id.');
  }

  const newToDo: ToDo = {
    id: data.id,
    title: data.title || '',
    completed: data.completed || false,
    createdAt: admin.firestore.Timestamp.now(),
  };

  try {
    await admin.firestore().collection("todos").doc(newToDo.id).set(newToDo);
    return { success: true, id: newToDo.id };
  } catch (error) {
    functions.logger.error("Error creating todo", error);
    throw new functions.https.HttpsError('internal', 'An error occurred while creating the todo.');
  }
});

export const listToDos = functions.https.onCall(async (_request: functions.https.CallableRequest) => {
  functions.logger.info("listToDos called");
  try {
    const snapshot = await admin.firestore().collection("todos").get();
    return snapshot.docs.map((doc) => doc.data() as ToDo);
  } catch (error) {
    functions.logger.error("Error listing todos", error);
    throw new functions.https.HttpsError('internal', 'An error occurred while listing todos.');
  }
});

export const deleteToDo = functions.https.onCall(async (request: functions.https.CallableRequest) => {
  const data = request.data as { id: string };
  functions.logger.info("deleteToDo called", { data });

  if (!data.id || typeof data.id !== 'string') {
    throw new functions.https.HttpsError('invalid-argument', 'The function must be called with a valid id.');
  }

  try {
    const docRef = admin.firestore().collection("todos").doc(data.id);
    const doc = await docRef.get();

    if (!doc.exists) {
      throw new functions.https.HttpsError('not-found', 'The requested todo does not exist.');
    }

    await docRef.delete();
    return { success: true, id: data.id };
  } catch (error) {
    functions.logger.error("Error deleting todo", error);
    throw new functions.https.HttpsError('internal', 'An error occurred while deleting the todo.');
  }
});

export const helloWorld = functions.https.onCall(async (_request: functions.https.CallableRequest) => {
  return {
    message: "Firebase test successful!",
  };
});
