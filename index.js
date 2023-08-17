const textareaEL = document.getElementById("textarea");

const totalCounterEL = document.getElementById("total-counter");

const remaingcounterEL = document.getElementById("Remaining-counter");

textareaEL.addEventListener("keyup", ()=>{
    updateCounter();
});

    updateCounter();

function updateCounter(){
   totalCounterEL.innerText =  textareaEL.value.length;

   remaingcounterEL.innerText = textareaEL.getAttribute("maxlength")-textareaEL.value.length;
}