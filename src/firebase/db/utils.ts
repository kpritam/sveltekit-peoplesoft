import firebase from 'firebase';

export type DatabaseRef = firebase.database.Reference;
export type DataSnapshot = firebase.database.DataSnapshot;

export const dbRef = (path?: string): DatabaseRef => firebase.database().ref(path);
