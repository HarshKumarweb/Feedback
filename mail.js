const firebaseConfig = {
  //   copy your firebase config informations
const firebaseConfig = {
  apiKey: "AIzaSyD2nW9mWQi6_RnbkJsVNyYmd-VgBbIpt4Y",
  authDomain: "feedback-d2637.firebaseapp.com",
  projectId: "feedback-d2637",
  storageBucket: "feedback-d2637.appspot.com",
  messagingSenderId: "142373895485",
  appId: "1:142373895485:web:16ab710dda6f15566f9954",
  measurementId: "G-M5WFEDXLGR"
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
