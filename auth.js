import { auth } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// ---------- SIGN UP ----------

window.signup = async function () {

  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  try {

    await createUserWithEmailAndPassword(auth, email, password);

    alert("Account created successfully!");

  } catch (error) {

    alert(error.message);

  }

};

// ---------- LOGIN ----------

window.login = async function () {

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {

    await signInWithEmailAndPassword(auth, email, password);

    alert("Welcome back!");

  } catch (error) {

    alert(error.message);

  }

};

// ---------- LOGOUT ----------

window.logout = async function () {

  await signOut(auth);

};

// ---------- USER STATE ----------

onAuthStateChanged(auth, (user) => {

  if (user) {

    console.log("Logged in:", user.email);

  } else {

    console.log("Logged out");

  }

});