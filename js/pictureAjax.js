"use strict";

let inputPhoto = document.querySelector("#photo-id");
let pElem = document.querySelector("#http-response");

window.onload = showPhotos;



const URL = "https://jsonplaceholder.typicode.com/photos/";

function validateForm() {
    if (isNaN(inputPhoto.value) || inputPhoto.value < 1) {
        alert("Yalniz 1-den boyuk eded daxil edin");
    } else {
        // processRequest();
        processJqueryGet();
    }

}

//
function processRequest() {
  
    let req = new XMLHttpRequest();

    req.open("GET", URL + inputPhoto.value, true);
    req.send();

    req.onreadystatechange = function () {

        if (req.readyState == 4) {
            if (req.status == 200) {
                let res = req.responseText;
                pElem.innerHTML = res;
                res = JSON.parse(res);
                addToArray(res);
            }
        }

    };
}

function processJqueryGet(){
    $.get(URL + inputPhoto.value, function(d, s){
        addToArray(d);
    });
}

function generateCard(resObj){
    let photoCard = document.querySelector("#photo-card");

    let card =  document.createElement("div");
    card.classList.add("card");

    let image = document.createElement("img");
    image.classList.add("card-img-top");
    image.setAttribute("src", resObj.url);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let p = document.createElement("p");
    p.classList.add("card-text");
    p.innerText = resObj.title;

    cardBody.appendChild(p);

    card.appendChild(image);
    card.appendChild(cardBody);

    let photoCol = document.createElement("div");
    photoCol.classList.add("col-4");

    photoCol.appendChild(card);
    photoCard.appendChild(photoCol);

}

function addToArray(resObj){
    let photos = localStorage.getItem("photos");
    if(photos == null){
        localStorage.setItem("photos", "[]");
    }
    photos = JSON.parse(localStorage.getItem("photos"));
    photos.push(resObj);

    localStorage.photos = JSON.stringify(photos);
    showPhotos();
}


function showPhotos(){    
    let shekiller = JSON.parse(localStorage.getItem("photos"));
    document.querySelector("#photo-card").innerHTML = "";
    for(let i = 0; i < shekiller.length; i++){
        generateCard(shekiller[i]);
    }
}