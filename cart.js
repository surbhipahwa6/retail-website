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

  firebase.database().ref('store/items/sprite/2l').on('value',gotPrice1);
  function gotPrice1(data){
  var price=data.val();
  document.getElementById("s1").innerHTML = price; }
  
   firebase.database().ref('store/items/sprite/500ml').on('value',gotPrice2);
  function gotPrice2(data){
  var price=data.val();
  document.getElementById("s2").innerHTML = price;}
   
   firebase.database().ref('store/items/fanta/500ml').on('value',gotPrice3);
  function gotPrice3(data){
  var price=data.val();
  document.getElementById("f1").innerHTML = price;
  }
    firebase.database().ref('store/items/fanta/2l').on('value',gotPrice4);
  function gotPrice4(data){
  var price=data.val();
  document.getElementById("f2").innerHTML = price;
  }
      firebase.database().ref('store/items/maaza/500ml').on('value',gotPrice5);
  function gotPrice5(data){
  var price=data.val();
  document.getElementById("m1").innerHTML = price;
  }
      firebase.database().ref('store/items/maaza/2l').on('value',gotPrice6);
  function gotPrice6(data){
  var price=data.val();
  console.log(price);
  document.getElementById("m2").innerHTML = price;
  }
  firebase.database().ref('store/items/limca/500ml').on('value',gotPrice7);
  function gotPrice7(data){
  var price=data.val();
  document.getElementById("l1").innerHTML = price;
  }
      firebase.database().ref('store/items/limca/2l').on('value',gotPrice8);
  function gotPrice8(data){
  var price=data.val();
  document.getElementById("l2").innerHTML = price;
  }
  firebase.database().ref('store/items/coca cola/500ml').on('value',gotPrice9);
  function gotPrice9(data){
  var price=data.val();
  document.getElementById("c1").innerHTML = price;
  }
      firebase.database().ref('store/items/coca cola/2l').on('value',gotPrice10);
  function gotPrice10(data){
  var price=data.val();
  document.getElementById("c2").innerHTML = price;
  }
  