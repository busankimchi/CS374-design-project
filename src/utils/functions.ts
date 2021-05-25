import firebase from 'firebase';

export const TimestampToDate = (timestamp: firebase.firestore.Timestamp) => {
  return timestamp.toDate();
};

export const DateToTimestamp = (date: Date) => {
  return firebase.firestore.Timestamp.fromDate(date);
};
