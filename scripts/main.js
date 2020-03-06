let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fjm.jpg'){
        myImage.setAttribute('src','images/first.jpg');
    } else {
        myImage.setAttribute('src', 'images/fjm.jpg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName || myName === null) {
        setUserName
    }   else {
        localStorage.setItem('name', 'myName');
        myHeading.textContent = 'FJM is cool, ' + myName;
    }
    
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'FJM is cooool, ' + storedName;
}

myButton.onclick = function() {
    setUserName()
}