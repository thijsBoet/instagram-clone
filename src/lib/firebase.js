import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import { seedDatabase } from '../seed';

const config = {
	apiKey: 'AIzaSyBoMFj8vf6QMSN6JZO3XvAiBChiM0FT7dc',
	authDomain: 'instagram-98684.firebaseapp.com',
	projectId: 'instagram-98684',
	storageBucket: 'instagram-98684.appspot.com',
	messagingSenderId: '478401526510',
	appId: '1:478401526510:web:b60326e493b1a2501811ff',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase)

export { firebase, FieldValue };
