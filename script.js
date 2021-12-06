// functions for add button
function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "enter here");

  let aqOb = document.getElementById("aq");
  let aqAddbuttonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddbuttonOb);
};

function addNewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "enter here");

  let weOb = document.getElementById("we");
  let weAddbuttonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddbuttonOb);
};

function addNewECField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("ecField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "enter here");

  let ecOb = document.getElementById("ec");
  let ecAddbuttonOb = document.getElementById("ecAddButton");

  ecOb.insertBefore(newNode, ecAddbuttonOb);
};
function addNewPRField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("prField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "enter here");

  let prOb = document.getElementById("pr");
  let prAddbuttonOb = document.getElementById("prAddButton");

  prOb.insertBefore(newNode, prAddbuttonOb);
};

// generating resume
function generateResume() {
  // name field
  document.getElementById("nameT").innerHTML =
    document.getElementById("nameField").value;
  // phone field
  document.getElementById("phoneT").innerHTML =
    document.getElementById("phoneField").value;
  // email field
  document.getElementById("mailT").innerHTML =
    document.getElementById("mailField").value;
  // addressfield
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;
  // instagram field
  document.getElementById("instaT").innerHTML =
    document.getElementById("instaField").value;
  //  linkedin field
  document.getElementById("linkedinT").innerHTML =
    document.getElementById("linkedinField").value;
  // portfolio field
  document.getElementById("portfolioT").innerHTML =
    document.getElementById("portfolioField").value;
  // sills field
  document.getElementById("skillsT").innerHTML =
    document.getElementById("skillsField").value;
  // ACAD QUAL. field
  let aqs = document.getElementsByClassName("aqField");
  let str = " ";
  for (let e of aqs) {
    str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById("aqT").innerHTML = str;
  //    work exp
  let wes = document.getElementsByClassName("weField");
  let str1 = " ";
  for (let e of wes) {
    str1 = str1 + `<li> ${e.value} </li>`;
  }
  document.getElementById("weT").innerHTML = str1;
  //   extra curricular field
  let ecs = document.getElementsByClassName("ecField");
  let str2 = " ";
  for (let e of ecs) {
    str2 = str2 + `<li> ${e.value} </li>`;
  }
  document.getElementById("ecT").innerHTML = str2;

  // por field
  let pors = document.getElementsByClassName("prField");
  let str3 = " ";
  for (let e of pors) {
    str3 = str3 + `<li> ${e.value} </li>`;
  }
  document.getElementById("porT").innerHTML = str3;

// code for setting profile image 
var file=document.getElementById('imgField').files[0]
var  reader=new FileReader()
reader.readAsDataURL(file);

// set the image to template 
reader.onloadend=function() {
document.getElementById('imgT').src=reader.result
};




  document.getElementById("resgen-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
};
// printing resume
function printResume() {
  window.print();
};
