let numberBtn=document.querySelectorAll(`button[data-value="no"]`);
let display=document.querySelector(".screen");
let Equal=document.querySelector(`button[data-value="Equal"]`);
let ADDBtn=document.querySelector(".add");


const screen=(x)=>{
    display.innerText+=x.innerText
}

numberBtn.forEach((no)=>{
    no.addEventListener("click",()=>screen(no))
})

ADDBtn.addEventListener("click",()=>screen(ADDBtn))


Equal.addEventListener("click", () => {
    let currentContent = display.innerText; // e.g., "10+20"
    
    // Split the string into an array: ["10", "20"]
    let parts = currentContent.split("+"); 
    
    // Convert the strings to actual numbers and add them
    let sum = Number(parts[0]) + Number(parts[1]);
    
    display.innerText = sum;
});