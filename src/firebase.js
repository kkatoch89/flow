import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyAa00XcVVgsPNI-my3GA-AgAVjTh-Zt0As',
	authDomain: 'project-five-b1afe.firebaseapp.com',
	databaseURL: 'https://project-five-b1afe.firebaseio.com',
	projectId: 'project-five-b1afe',
	storageBucket: 'project-five-b1afe.appspot.com',
	messagingSenderId: '653508419721',
	appId: '1:653508419721:web:768aeb69f0823e91cd2658',
};
firebase.initializeApp(firebaseConfig);

export default firebase;
