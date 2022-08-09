let toggel = document.getElementById("toggel")
let ul = document.getElementById("ul-list")
toggel.addEventListener("click" , () =>{
   ul.classList.toggle("add")
})

let conta = document.getElementById("btn-co")
let rem  = document.getElementById("xin")
let form = document.querySelector(".contact")

conta.addEventListener("click" , () =>{
   form.classList.add("opp")
})
rem.addEventListener("click" , () =>{
   form.classList.remove("opp")
})