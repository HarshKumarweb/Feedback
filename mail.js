const firebaseConfig = {
  //   copy your firebase config informations
const firebaseConfig = {
    apiKey: "AIzaSyAeF1DGTjnfoFOSW5kO0FTjeI-GqTwo3A4",
    authDomain: "contactform-7a8e2.firebaseapp.com",
    databaseURL: "https://contactform-7a8e2-default-rtdb.firebaseio.com",
    projectId: "contactform-7a8e2",
    storageBucket: "contactform-7a8e2.appspot.com",
    messagingSenderId: "1093687480740",
    appId: "1:1093687480740:web:9620b2d6224e272422b131"
  };
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
