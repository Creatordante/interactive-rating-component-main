['use strict']

const userRating = document.querySelector('.rating-user');
const UIRatings = document.querySelectorAll('.rating-number');
const submitBtn = document.querySelector('.btn');
const ratingContainer = document.querySelector('.rating-container');
const thanksContainer = document.querySelector('.thanks-container');
const finalRate = document.querySelector('.user-rate');

// User rating selected
let userInput = "";

userRating.addEventListener("click", e =>{

    if(e.target.getAttribute("class") === "rating-number"){
        btnStyles(e.target);
       // console.log(e.target.firstElementChild.textContent);
       userInput = e.target.firstElementChild.textContent;
    }

});

submitBtn.addEventListener("click", e =>{

    e.preventDefault;

    if(e.target.getAttribute("class") === "btn" && userInput !== ""){
        submitScore();
    }

});

function btnStyles(btn){

    // Check for previous ratings and removed them
    UIRatings.forEach(number =>{
        if(number.classList.contains("btn-orange")){
            number.classList.remove("btn-orange");
        }
    })

    btn.classList.add("btn-orange");
    
}

function submitScore() {

    // Add user rating to the thanks card state
    finalRate.textContent = userInput;

    // Change the visibility of the cards
    ratingContainer.classList.add("hidden");
    thanksContainer.classList.remove("hidden");
}