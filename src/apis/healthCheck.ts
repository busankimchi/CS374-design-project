import firebase from 'firebase';

export const healthCheck = async () => {
  const snapshot = await firebase.firestore().collection('test').get();

  const result = snapshot.docs.map((doc) => {
    const data = doc.data();
    return data;
  });
  return result;
};
