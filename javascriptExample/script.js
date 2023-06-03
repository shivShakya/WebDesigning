/*
var database = [
    {
        username : "totki",
        password : "loluka"
    }
];

var newsfeed = [
    {
        username:"Bobby",
        timeline: "So tired for all the learning"
    
    },

    {
        username: "Sally",
		timeline: "Javascript is sooooo cool!"
    },

    {
        username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
    }
];

var usernam = prompt("Username");
var passwor = prompt("password");
function signIn( user , pass){
    if ( user === database[0].username && pass === database[0].password ){
        console.log(newsfeed);
    }
    else{
        alert("wrong username or password");
    }
}

signIn(usernam,passwor);
*/

/*
var butt = document.getElementsByTagName("button")[0];
butt.addEventListener("click",function(){
    console.log("helooooo");
})
*/
var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
button.addEventListener("click",function(){
   // console.log("click is working");
   if (input.value.length > 0 ){
   var li = document.createElement("li");
   li.appendChild(document.createTextNode(input.value));
   ul.appendChild(li);
   input.value = ""
   }
})


input.addEventListener("keypress",function(event){
    // console.log("click is working");
    if (input.value.length > 0 && event.keyCode === 13){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""
    }
 })