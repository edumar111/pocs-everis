import  firebase from 'firebase';

// Initialize Firebase
 var config = {
    apiKey: "AIzaSyDdlm0CY20tzKxdR1i48gW-d66TLBAB71A",
    authDomain: "digital-identity-85750.firebaseapp.com",
    databaseURL: "https://digital-identity-85750.firebaseio.com",
    projectId: "digital-identity-85750",
    storageBucket: "digital-identity-85750.appspot.com",
    messagingSenderId: "64836702494"
  };
 
 





const FireBaseTools =  (_parent) => {

	firebase.initializeApp(config);
	firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
		    console.log(`Usuario logueado con correo: ${user.email}`)
		    _parent.setState({
		    	loginStatus:true
		    })
		  } else {
		    console.log('Usuario no se encuentra logueado')
		    _parent.setState({
		    	loginStatus:false
		    })
		  }
		});
	return firebase;
}
export default FireBaseTools