import firebase from 'firebase';

export interface HealthCheckRespnse {
  // eslint-disable-next-line camelcase
  health_check: string;
  status: string;
}

export const healthCheck = async () => {
  const snapshot = await firebase.firestore().collection('test').get();

  const result = snapshot.docs.map((doc) => {
    const data = doc.data() as HealthCheckRespnse;
    return data;
  });
  return result[0];
};
