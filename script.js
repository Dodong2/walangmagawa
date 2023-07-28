"use strict";
const button1 = document.getElementById("menu");
if (button1) {
    button1.addEventListener("click", function () {
        const menu = document.getElementById("phone-menu");
        if (menu.style.display === "block") {
            menu.style.display = "none";
        }
        else {
            menu.style.display = "block";
        }
        ;
    });
}
const button2 = document.getElementById("btn");
if (button2) {
    button2.addEventListener("click", function () {
        const imgchange = document.getElementById("img1");
        if (imgchange) {
            imgchange.src = "faketaxi.jpg";
            button2.textContent = "wala na";
        }
    });
}
const button3 = document.getElementById("cancel");
if (button3) {
    button3.addEventListener("click", function () {
        const menucancel = document.getElementById("phone-menu");
        if (menucancel.style.display === "block")
            menucancel.style.display = "none";
    });
}
const button4 = document.getElementById("btn1");
if (button4) {
    button4.addEventListener("click", function () {
        const img2chng = document.getElementById("img2");
        if (img2chng.src = "wha.jpg") {
            img2chng.src = "oki memes.jpg";
            button4.textContent = "wala na";
        }
    });
}
const button5 = document.getElementById("btn2");
if (button5) {
    button5.addEventListener("click", function () {
        alert("Wag!! masisira nuhay mo kapatid");
    });
}
const button6 = document.getElementById("btn3");
if (button6) {
    button6.addEventListener("click", function () {
        const message = document.getElementById("mess");
        const button7yes = document.getElementById("btn4");
        const badfing = document.getElementById("bad");
        const notif = document.getElementById("notif");
        message.innerHTML = "Kasi gago ka";
        button7yes.style.display = "none";
        button6.style.display = "none";
        badfing.style.display = "block";
        notif.style.display = "none";
    });
}
const button7 = document.getElementById("btn4");
if (button7) {
    button7.addEventListener("click", function () {
        const messageNo = document.getElementById("mess");
        const button6no = document.getElementById("btn3");
        const wagka = document.getElementById("wagka");
        const notifNo = document.getElementById("notif");
        messageNo.innerHTML = "Ok, Tropa tayo";
        button6no.style.display = "none";
        button7.style.display = "none";
        notifNo.style.display = "none";
        wagka.style.display = "block";
    });
}
function bata() {
    const reaction = document.getElementById("p1");
    const wally = document.getElementById("p2");
    const about = document.getElementById("p3");
    const container = document.getElementById("container");
    const menugone1 = document.getElementById("phone-menu");
    if (reaction) {
        reaction.style.display = "none";
        wally.style.display = "none";
        about.style.display = "none";
        container.style.display = "block";
        menugone1.style.display = "none";
    }
}
function reaction() {
    const reaction = document.getElementById("p1");
    const wally = document.getElementById("p2");
    const about = document.getElementById("p3");
    const container = document.getElementById("container");
    const menugone2 = document.getElementById("phone-menu");
    if (reaction) {
        reaction.style.display = "block";
        wally.style.display = "none";
        about.style.display = "none";
        container.style.display = "none";
        menugone2.style.display = "none";
    }
}
function walybold() {
    const reaction = document.getElementById("p1");
    const wally = document.getElementById("p2");
    const about = document.getElementById("p3");
    const container = document.getElementById("container");
    const menugone3 = document.getElementById("phone-menu");
    if (reaction) {
        reaction.style.display = "none";
        wally.style.display = "block";
        about.style.display = "none";
        container.style.display = "none";
        menugone3.style.display = "none";
    }
}
function about() {
    const reaction = document.getElementById("p1");
    const wally = document.getElementById("p2");
    const about = document.getElementById("p3");
    const container = document.getElementById("container");
    const menugone4 = document.getElementById("phone-menu");
    if (reaction) {
        reaction.style.display = "none";
        wally.style.display = "none";
        about.style.display = "block";
        container.style.display = "none";
        menugone4.style.display = "none";
    }
}
