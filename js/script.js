//Sticky NavBar
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


//Show Password
function visibilePassword() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

//ClearAll 
function clearInput() {
    document.getElementById('myId').value = '';
    document.getElementById('myInput').value = '';
}

function clickLink1() {
    document.getElementById('igSella');
    location.href = "https://www.instagram.com/marsellacia/";
}

function clickLink2() {
    document.getElementById('igAtin');
    location.href = "https://www.instagram.com/atine7/";
}

function clickLink3() {
    document.getElementById('igJeanet');
    location.href = "https://www.instagram.com/jeanetkastilong/";
}

//Check Password

var check = function() {
    let button = document.querySelector("#subButton");
    button.disable = true;
    if (document.getElementById('password1').value == "" && document.getElementById('password2').value == "") {
        document.getElementById('message').style.color = 'yellow';
        document.getElementById('message').innerHTML = 'Password Empty';
    } else if (document.getElementById('password1').value == document.getElementById('password2').value) {
        document.getElementById('message').style.color = '#39fc03';
        document.getElementById('message').innerHTML = 'Password Match';
        button.disable = false;
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Password Dont Match';
        button.disable = true;
    }
}