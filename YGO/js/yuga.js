function agrandir() {
    var myImg = document.getElementById("yuga");
    var width = myImg.clientWidth;
    var height = myImg.clientHeight;
    myImg.style.width = (width + 50) + "px";
    myImg.style.height = (height + 30) + "px";
    }
function diminuer() {
    var myImg = document.getElementById("yuga");
    var width = myImg.clientWidth;
    var height = myImg.clientHeight;
    myImg.style.width = (width - 50) + "px";
    myImg.style.height = (height - 30) + "px";
    }
function agrandir1() {
    var myImg = document.getElementById("rook");
    var width = myImg.clientWidth;
    var height = myImg.clientHeight;
    myImg.style.width = (width + 50) + "px";
    myImg.style.height = (height + 30) + "px";
    }
function diminuer1() {
    var myImg = document.getElementById("rook");
    var width = myImg.clientWidth;
    var height = myImg.clientHeight;
    myImg.style.width = (width - 50) + "px";
    myImg.style.height = (height - 30) + "px";
    }
function agrandir2() {
    var myImg = document.getElementById("romin");
    var width = myImg.clientWidth;
    var height = myImg.clientHeight;
    myImg.style.width = (width + 50) + "px";
    myImg.style.height = (height + 30) + "px";
    }
function diminuer2() {
    var myImg = document.getElementById("romin");
    var width = myImg.clientWidth;
    var height = myImg.clientHeight;
    myImg.style.width = (width - 50) + "px";
    myImg.style.height = (height - 30) + "px";
    }
function agrandir3() {
    var myImg = document.getElementById("gakuto");
    var width = myImg.clientWidth;
    var height = myImg.clientHeight;
    myImg.style.width = (width + 50) + "px";
    myImg.style.height = (height + 30) + "px";
    }
function diminuer3() {
    var myImg = document.getElementById("gakuto");
    var width = myImg.clientWidth;
    var height = myImg.clientHeight;
    myImg.style.width = (width - 50) + "px";
    myImg.style.height = (height - 30) + "px";
    }
function changeImage(){
        document.getElementById("sev").src='sevens magic.png';
    }
function remetImage(){
        document.getElementById("sev").src='7throad.png';
    }

function affiche(){
        document.getElementById('magic').style.display = "block";
 }
function affiche1(){
        document.getElementById('combo').style.display = "block";
 }
 function affiche2(){
        document.getElementById('guitarna').style.display = "block";
 }
 function affiche3(){
        document.getElementById('ruler').style.display = "block";
 }
 function back() {
	document.getElementById('lire').style.backgroundColor = 'black';
}
function comeback() {
	document.getElementById('lire').style.backgroundColor = 'transparent';
}
function back1() {
	document.getElementById('a').style.backgroundColor = 'black';
}
function comeback1() {
	document.getElementById('a').style.backgroundColor = 'transparent';
}
function back2() {
	document.getElementById('b').style.backgroundColor = 'black';
}
function comeback2() {
	document.getElementById('b').style.backgroundColor = 'transparent';
}
function back3() {
	document.getElementById('c').style.backgroundColor = 'black';
}
function comeback3() {
	document.getElementById('c').style.backgroundColor = 'transparent';
}