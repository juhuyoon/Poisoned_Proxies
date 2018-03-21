
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAZ5ZrtgqHBA5U2PySfA77GgptWCoDnDC8",
    authDomain: "poisonproxies-c22ad.firebaseapp.com",
    databaseURL: "https://poisonproxies-c22ad.firebaseio.com",
    projectId: "poisonproxies-c22ad",
    storageBucket: "poisonproxies-c22ad.appspot.com",
    messagingSenderId: "293019946548"
  };
  firebase.initializeApp(config);
// Get elements
var inputEmail = document.getElementById('inputEmail');
var inputPassword = document.getElementById('inputPassword');
var btnSignup = document.getElementById('createAccount');
var btnLogin = document.getElementById('login');

// Add login event
btnLogin.addEventListener('click', e => {
  var email = inputEmail.value;
  var pass = inputPassword.value;
  var auth = firebase.auth();
  // Sign in
  var promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});
// signup event
btnSignup.addEventListener('click', e =>{
    var email = inputEmail.value;
  var pass = inputPassword.value;
  var auth = firebase.auth();
  // Sign in
  var promise = auth.createUser WithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));

});
firebase.auth().omAuthStateChanged(firebaseUser => {
  if(firebaseUser) {
    console.log(firebaseUser);
    }else {
      console.log('not logged in');
    }
  }
})