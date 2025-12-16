let buttons = document.querySelectorAll('button[data-val]')

let natija = document.getElementById('natija')
let clear = document.getElementById('clear')
let backscape = document.getElementById('backscape')
let barobar = document.getElementById('barobar')

buttons.forEach(btn=>{
    btn.addEventListener('click',()=>{
        let val = btn.dataset.val;

        natija.value += val;
    })
})

barobar.addEventListener('click',()=>{
    try {
        natija.value = eval(natija.value)
    } catch {
        natija.value = 'Error';
    }
})

clear.addEventListener('click',()=>{
    natija.value= '';
})

backscape.addEventListener('click',()=>{
    let currentExpression = natija.value;
    if(currentExpression.length > 0 ){
        natija.value = currentExpression.slice(0,-1);
    }
})






let showBtn = document.getElementById("show-btn");
let closeBtn = document.getElementById("close-btn");
let modal = document.getElementById("modal");
let overlay = document.getElementById("overlay");


// ======================================================
let removeHidden = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

showBtn.addEventListener("click", () => {
  removeHidden()
});

// ==================================================
let addHidden = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeBtn.addEventListener("click", () => {
  addHidden();
});

overlay.addEventListener("click", () => {
  addHidden();
});

//qisqaroq yozish uslubi
// showBtn.addEventListener("click",removeHidden);

//closeBtn.addEventListener("click",addHidden);

// overlay.addEventListener("click",addHidden);

// ============================================================
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    console.log("You are clicked escape");
    addHidden();
  }
});


