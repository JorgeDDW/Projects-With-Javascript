const search = document.querySeletor('.search')
const btn = document.querySeletor('.btn')
const input = document.querySeletor('.input')

btn.addEventListener('click', ()=>{
  search.classList.toggle('active')
  input.focus()
})