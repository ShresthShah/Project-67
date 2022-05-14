import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCUushxZ4DgNayWWMPAKy8zIRTX1Y362mg",
    authDomain: "team-voting-app-448cb.firebaseapp.com",
    databaseURL: "https://team-voting-app-448cb-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-448cb",
    storageBucket: "team-voting-app-448cb.appspot.com",
    messagingSenderId: "905071934762",
    appId: "1:905071934762:web:a8fcfac95ecce7e664b253",
    measurementId: "G-CR33NKB04T"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();