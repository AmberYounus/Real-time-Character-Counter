//Get the element with the specified id
const textarea = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const remainingCounter = document.getElementById("remaining-counter");

textarea.addEventListener("keyup" ,()=>{
    updateCounter();
})
updateCounter()

//Create a function to count the characters
function updateCounter() {
    totalCounter.innerText = textarea.value.length;
    remainingCounter.innerText  = textarea.getAttribute("maxLength") - textarea.value.length;
}