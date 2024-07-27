const firebaseConfig = {
    apiKey: "AIzaSyANsn7WXKw03HN43n0ef4XsUL9s_LUu5s4",
    authDomain: "website-c9786.firebaseapp.com",
    databaseURL: "https://website-c9786-default-rtdb.firebaseio.com",
    projectId: "website-c9786",
    storageBucket: "website-c9786.appspot.com",
    messagingSenderId: "401283240626",
    appId: "1:401283240626:web:cb7af4e8d88b1141de2fab",
    measurementId: "G-9NZG4RX6CR"
  };
   firebase.initializeApp(firebaseConfig);

  var orderForm = firebase.database().ref("orderform");
  document.getElementById("orderform").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var contact = getElementVal("contact");
  var state = getElementVal("state");
  var address = getElementVal("address");

  saveMessages(name, contact, state, address);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("orderform").reset();
}

const saveMessages = (name, contact, state, address) => {
  var neworderForm = orderForm.push();

  neworderForm.set({
    name: name,
    contact: contact,
    state: state,
    address: address,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};