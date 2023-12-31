const firebaseConfig = {
    apiKey: "AIzaSyAzsHOS4D8Sg_ofJrUQGD-MsJkXVU9YJ10",
    authDomain: "am-web-admin.firebaseapp.com",
    databaseURL: "https://am-web-admin-default-rtdb.firebaseio.com",
    projectId: "am-web-admin",
    storageBucket: "am-web-admin.appspot.com",
    messagingSenderId: "920858578134",
    appId: "1:920858578134:web:fe20ee76faa1002e468d77"
  };


//Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Create Reference for Database
const database = firebase.database()

const ref = database.ref('friedley-ins/contact')

//Get Contact Form Data from HTML
const form = document.getElementById('contactForm');
const alert = document.querySelector('.contact-form-alert');

form.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal('name');
  var phone = getElementVal('phone');
  var message = getElementVal('message');

  ref.push({
    name:name,
    phone:phone,
    message:message,
    date:Date()
  })

  alert.style.display="block";

  setTimeout(() =>{
    alert.style.display="none";
  }, 2000)
  form.reset();
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
}