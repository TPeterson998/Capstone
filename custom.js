//The capstone javascript files page


//Filename: custom.js

//Author:  Trent P., Melinda Chirila
//Date:    4/2019


//Function List
//=============
//containing the functions
//variables
//.getElementById

// Script for side navigation
// this script pives the side nav spacing and size
function w3_open() {
  var x = document.getElementById("mySidebar");
  x.style.width = "300px";
  x.style.paddingTop = "10%";
  x.style.display = "block";
}

// Close side navigation
// This sets the display of the side nav to none so that it disapears
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

// Used to toggle the menu on smaller screens when clicking on the menu button
// This allows the top nav to be clicked open out of the nav picture while the screen is smaller
function openNav() {
  var x = document.getElementById("navSmall");
  if (x.className.indexOf("show") == -1) {
    x.className += " show";
  } else {
    x.className = x.className.replace(" show", "");
  }
}
//this is an array of all of the teachers
var teachers = ["jay", "tama", "terry", "matthew"];
//using the array I can go through all of the id's witht he teachers name and the teachers pic and title
for (
  let /* Jedi helped me with this if you use a var then the [i] can't get the scope of the anonymous functions if you use let then it can*/
    i = 0; i < teachers.length; i++) {
  //This on click make it so you can click the pictures and make the text appear and makeit so that the pictures reappear in 10 sec if you don't click it again
  document.getElementById(teachers[i] + "Pic").onclick = function () {
    document.getElementById(teachers[i] + "Pic").style.display = "none";
    document.getElementById(teachers[i]).style.display = "inline";
    setTimeout(reapear, 10000);
  }
  //This on click make it so you can click the text to make the pictures reapear 
  document.getElementById(teachers[i]).onclick = function () {
    document.getElementById(teachers[i]).style.display = "none";
    document.getElementById(teachers[i] + "Pic").style.display = "inline";
  }
  //this make it so you can click the title so the pictures reapear
  document.getElementById(teachers[i] + "Title").onclick = function () {
    document.getElementById(teachers[i]).style.display = "none";
    document.getElementById(teachers[i] + "Pic").style.display = "inline";
  }
}

//this makes it so if you leave the picture on for to long then it sets back to normal.The lasted time that this lates for is about 
//10 seconds. When the image is flipped ofr each of the images then it will display the other side like a door. 
//It will show the persons information that has to do with the program.
function reapear() {
  for (var i = 0; i < teachers.length; i++) {
    document.getElementById(teachers[i]).style.display = "none";
    document.getElementById(teachers[i] + "Pic").style.display = "inline";
  }
}
//this loads the validate form for the onclick of the submit button
window.onload = function () {
  document.getElementById("subButton").onclick = validateForm;
}
//this checks to make sure the form is valid
function validateForm() {
  // this part checks to make sure the name section is filled and if it is not it uses a custom alert
  var name = document.getElementById("name");
  if (name.validity.valueMissing) {
    name.setCustomValidity("Enter Your Name Please");
  } else {
    name.setCustomValidity("");
  }
  // this part checks to make sure the email section is filled and if it is not it uses a custom alert and if it is not a proper email then it give a different alert
  var email = document.getElementById("email");
  if (email.validity.valueMissing) {
    email.setCustomValidity("Enter Your Email Please");
  } else if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email.value) === false) {
    email.setCustomValidity("Enter a Valid Email Please");
  } else {
    email.setCustomValidity("");
  }
  // validation this part checks to make sure the message section is filled and if it is not it uses a custom alert
  var message = document.getElementById("message");
  if (message.validity.valueMissing) {
    message.setCustomValidity("Enter Your Message Please");
  } else {
    message.setCustomValidity("");
  }
}
// this is the array of the images used in the image cycler at the top
var images = ["capstone_pics/aeroplane-aircraft-airplane-edit.jpg", "capstone_pics/abstract-air-cloud-edit.jpg",
  "capstone_pics/aeroplane-air-aircraft-edit.jpg", "capstone_pics/architectural-design-architecture-building-edit3.jpg", "capstone_pics/aeroplanes-aircrafts-airplanes-edit.jpg", "capstone_pics/pexels-photo-edit.jpg"
];
// This gets a random image from the array above and sets it to the src of the top image
function slideImage() {
  document.getElementById("img").src = images[Math.floor(Math.random() * 6)];
}
//By calling in slideImage once it makes the first image random
slideImage();
// This makes it so the first switch of the image takes 5 seconds longer but the rest of the image cycles every 8 seconds
setTimeout(function () {
  setInterval(slideImage, 8000);
}, 5000)