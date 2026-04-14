//console.log(`hello`);
//console.log(`l like burger`);

//window.alert(`thus is an alet`);
// this is a comment
//document.getElementById("myH1").textContent =`Hello`;

//document.getElementById("myP").textContent = `I like pizza`;
//let x=123;

//console.log(x)
/*let name = " arjun ";
let age = 25;
let price = 10.99;
let gpa=6.67;
console.log( typeof name);
console.log(gpa)
console.log(`your gpa is: ${gpa}`)
console.log(`my nam ${name}e ius`)
*/
/*let online = true;
let forsale = true;

console.log(` arjun is online: ${online}`);
console.log(`is the car for sale: ${forsale}`)
*/
/*let fullName = "Arjun";
let age = 25;
let student = false;
document.getElementById("p1").textContent = fullName;
document.getElementById("p2").textContent =age;
document.getElementById("p3").textContent = student;
*/
//let students = 30;
//students++  ;
//console.log(students)

//let result = 1+2*3+4**2;
//console.log(result);
//let username;
//username = window.prompt("what is your user name");
//console.log(username);
/*
let username;

document.getElementById("Mysubmit").onclick = function(){
    username = document.getElementById("Mytext").value;
    console.log(username);
    document.getElementById("Myh1").textContent = `hello ${username}`;
*/
/*let age = window.prompt(" Hello who are you ?");
age +=1;
console.log(age,typeof age)
*/
/*
const PI = 3.14;
let radius;
let circumference;

radius = window.prompt('enter the radius of the cirece');
radius = Number(radius);
circumference = 2* PI * radius;
console.log(circumference);
*/
/* counter program 
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const counterLabel = document.getElementById("counterLabel");
let count = 0;
increaseBtn.onclick = function(){
    count ++;
    counterLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count --;
    counterLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    counterLabel.textContent = count;
}*
let x = -3;
let y = 2;
let z=1;
//z = Math.abs(x);
let max = Math.max(x,y,z);
console.log(max);
*
//Random number generator
const min = 50;
const max = 100;
let randomNum = Math.floor(Math.random()* (max-min) )+min;
console.log(randomNum); 


*

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min=1;
const max = 6;
let randomNum;
myButton.onclick = function(){
    randomNum = Math.floor(Math.random()*max)+min;
    myLabel.textContent = randomNum;
}
    *
let age = 3;
if(age >= 18){
    console.log("u r old enough to vote")
}
else{
    console.log("u r  not old enough to vote")
}
    *

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElemnt = document.getElementById("resultElement");
let age;
mySubmit.onclick = function(){
    age=myText.value;
    age=Number(age);

    if(age>= 18){
        
        resultElement.textContent =`u can drive bmw`;
    }
    else{
        resultElement.textContent =`u cannot drive bmw`;
        

    }

}
    *
   const myCheckbox = document.getElementById("myCheckbox");
   const visaBtn = document.getElementById("visaBtn");
   const masterCardBtn = document.getElementById("masterCardBtn");

   mySubmit.onclick = function(){

    if(myCheckbox.checked){
        subResult.textContent = ` u r subscribed`;

    }
    else{
        subResult.textContent = `u r not subscribed`;
    }


   }
*
let age = 21;
let message = age >= 18 ? "u r an adult" : "u r a minor";
console.log(message)
*
let purchaseAmount = 125 ;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`ur total is ${purchaseAmount}/ ${discount}`);*

switch cases :
let day = "pizza";
switch(day){
    case 1:
        console.log("It is monday");
        break;
    case 2:
        console.log("It is tunday");
        break;
    case 3:
        console.log("It is wenday");
        break;
    
    default:
        console.log(`${day} ia not a day`)
}
        *

let username = "Barath";

let result = username.endsWith(".  ");
if(result){
    console.log("your username cant starts with '' ");
}
else{
    console.log(username);
}*

const fullName = "brocode ";
let firstName = fullName.slice(0,3);
console.log(firstName);
*
const email = "baratharjunb@gmail.com"
let username = email.slice(0,email.indexOf("@"));
console.log(username);*
let username = window.prompt("enter ur username");
username = username.trim().username.charAt(0).toUpperCase();
console.log(username);
*
// === srict euality operator  exapmle: pi= 3.14 is not equal 
// to if (pi ="3.14")
let username = "";
while(username === ""){
    username = window.prompt(`ebter ur username`);
}
console.log(` hello ${username}`);*
for(let i = 0; i <=10 ; i+=2){
    console.log(i)
}*

//Number guessing game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum-minNum +1))+ minNum;
console.log(answer);
let attempts = 0;
let guess;
let running = true;
while(running){
    guess = window.prompt(`Guess a number between ${minNum}- ${maxNum}`);
    if(isNaN(guess)){
        window.alert("please enter a valide number");
    }
    else if(guess < minNum)
    else (
        attempts++
    )
    console.log(guess);

    running = false;
}*

function happyBirthday(){
    console.log("Happty birthdya to u ")
}
happyBirthday();*
function add(x,y){
    let result = x+y;
    return result;
}
add(2,3);*
const textBox = document.getElementById("textbox"); // FIXED
const toFarenheit = document.getElementById("toFarenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;

function convert() {

    temp = Number(textBox.value);

    if (toFarenheit.checked) {
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + " °F";
    }
    else if (toCelsius.checked) {
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp + " °C";
    }
    else {
        result.textContent = "Select a unit";
    }
}/*
let fruits= ["apple","orange"];
//fruits.push("orange");
//let numOfFruits = fruits.length;
//let index = fruits.indexOf("apple")
for(let i=0; i< fruits.length ; i++){
    console.log(fruits[i])

}*

let numbers =[1,2,3,4,5];
function isEven(element){
    return element %2=== 0;

}*

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.onclick = function() {

```
const taskText = taskInput.value;

if(taskText === "") return;

const li = document.createElement("li");
li.textContent = taskText;

// mark as completed
li.onclick = function(){
    li.classList.toggle("completed");
}

// delete button
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "X";

deleteBtn.onclick = function(){
    taskList.removeChild(li);
}

li.appendChild(deleteBtn);
taskList.appendChild(li);

taskInput.value = "";
```

}*
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.onclick = function() {


const taskText = taskInput.value;

if(taskText === "") return;

const li = document.createElement("li");
li.textContent = taskText;

// mark as completed
li.onclick = function(){
    li.classList.toggle("completed");
}

// delete button
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "X";

deleteBtn.onclick = function(){
    taskList.removeChild(li);
}

li.appendChild(deleteBtn);
taskList.appendChild(li);

taskInput.value = "";

}*
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Track the current date to detect day changes
let lastSavedDate = new Date().getDate();

/**
 * CORE FUNCTIONS
 *
const clearAllTasks = () => {
    // Add a slight fade-out effect if you want to be fancy
    if (confirm("Are you sure you want to clear all appointments for the day?")) {
        taskList.innerHTML = "";
        localStorage.removeItem("appointments"); // Clear from storage
    }
};

const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    
    // Create Span
    const span = document.createElement("span");
    span.textContent = taskText;
    span.addEventListener("click", () => span.classList.toggle("completed"));

    // Action Container
    const div = document.createElement("div");
    div.classList.add("task-buttons");

    // Edit
    const editBtn = document.createElement("button");
    editBtn.innerHTML = "✏️";
    editBtn.className = "edit";
    editBtn.onclick = () => {
        const val = prompt("Edit appointment:", span.textContent);
        if (val) span.textContent = val;
    };

    // Delete
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.className = "delete";
    deleteBtn.onclick = () => li.remove();

    div.append(editBtn, deleteBtn);
    li.append(span, div);
    taskList.appendChild(li);

    taskInput.value = "";
};

/**
 * AUTOMATION: The "End of Day" reset
 *
const checkDateReset = () => {
    const today = new Date().getDate();
    if (today !== lastSavedDate) {
        taskList.innerHTML = ""; // Clear the UI
        lastSavedDate = today;
        console.log("New day detected. Schedule cleared.");
    }
};

// Check for date change every minute
setInterval(checkDateReset, 60000);

/**
 * EVENT LISTENERS
 *
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});*/
// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {

  const startBtn = document.querySelector("button");
  const cards = document.querySelectorAll(".card");

  // 🎯 1. Accessible Start Button
  startBtn.setAttribute("aria-label", "Start football training");

  startBtn.addEventListener("click", startTraining);

  startBtn.addEventListener("keypress", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      startTraining();
    }
  });

  function startTraining() {
    alert("Training will start soon! 🚀");
  }

  // 🎯 2. Make Cards Keyboard Clickable
  cards.forEach((card, index) => {
    card.setAttribute("tabindex", "0"); // focusable
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Open training module ${index + 1}`);

    card.addEventListener("click", () => {
      alert(`Opening ${card.innerText}`);
    });

    card.addEventListener("keypress", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        card.click();
      }
    });
  });

  // 🎯 3. Focus Outline for Keyboard Users
  document.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      document.body.classList.add("show-focus");
    }
  });

  // 🎯 4. Smooth Scroll (Better UX)
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 🎯 5. Announce Dynamic Updates (Screen Readers)
  const liveRegion = document.createElement("div");
  liveRegion.setAttribute("aria-live", "polite");
  liveRegion.setAttribute("class", "sr-only");
  document.body.appendChild(liveRegion);

  function announce(message) {
    liveRegion.textContent = message;
  }

  // Example usage
  startBtn.addEventListener("click", () => {
    announce("Training started");
  });

});// Auto comment update 1: Tue Apr 14 18:08:39 IST 2026
// Auto comment update 2: Tue Apr 14 18:08:39 IST 2026
// Auto comment update 3: Tue Apr 14 18:08:40 IST 2026
// Auto comment update 4: Tue Apr 14 18:08:40 IST 2026
// Auto comment update 5: Tue Apr 14 18:08:40 IST 2026
// Auto comment update 6: Tue Apr 14 18:08:40 IST 2026
// Auto comment update 7: Tue Apr 14 18:08:40 IST 2026
// Auto comment update 8: Tue Apr 14 18:08:40 IST 2026
