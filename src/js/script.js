const menuBtn = document.querySelector(".menu-hamburguer");
const menu = document.querySelector(".navbar");
const img = document.querySelector('#carrosel-img img')
const buttons = document.querySelectorAll('#img-picker ul li')

buttons.forEach((btn)=>{
 btn.addEventListener('click', (e)=>{
    const button = e.target
    const id = button.getAttribute('id')
    img.setAttribute('src', `./src/img/company_${id}.png`)
 })
})
menuBtn.addEventListener("click", ()=>{
    menu.classList.toggle("active");
 
})
