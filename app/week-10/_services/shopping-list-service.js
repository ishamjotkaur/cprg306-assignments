import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
    const snapshot = await getDocs(collection(db, `users/${userId}/items`));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  };
  
  export const addItem = async (userId, item) => {
    const docRef = await addDoc(collection(db, `users/${userId}/items`), item);
    return docRef.id;
  };