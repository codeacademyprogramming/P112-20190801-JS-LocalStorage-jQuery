"use strict";

let inputPhoto = document.querySelector("#photo-id");

const URL = "https://jsonplaceholder.typicode.com/photos/";

function validateForm() {
    if (isNaN(inputPhoto.value) || inputPhoto.value < 1) {
        alert("Yalniz 1-den boyuk eded daxil edin");
    } else {
        processRequest();
    }

}


function processRequest() {
    let req = new XMLHttpRequest();

    req.open("GET", URL + inputPhoto.value, true);
    req.send();

    req.onreadystatechange = function () {

        if (req.readyState == 4) {
            if (req.status == 200) {
                let res = JSON.parse(req.responseText);
                console.log(res);
            }
        }

    };



}