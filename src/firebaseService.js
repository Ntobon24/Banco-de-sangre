import { db } from './firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

// Función para guardar formulario
export const saveForm = async (collectionName, formData) => {
  try {
    await addDoc(collection(db, collectionName), formData);
    console.log('Documento añadido correctamente');
  } catch (error) {
    console.error('Error al añadir documento:', error);
  }
};

// Función para obtener datos
export const getForms = async (collectionName) => {
  const data = [];
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.error('Error al obtener documentos:', error);
  }
  return data;
};