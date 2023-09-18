const inp = document.querySelector('#inp')
document.querySelector('#addBtn').addEventListener('click', (e) => {
  // e.stopPropagation()
  // e.preventDefault()
  console.log(inp.value);
  inp.value = ''
})