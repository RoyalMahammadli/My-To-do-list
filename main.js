
const box = document.querySelector('.box')
const inp = document.querySelector('#inp')

document.querySelector('#addBtn').addEventListener('click', (e) => {
  e.stopPropagation()
  e.preventDefault()
  console.log(inp.value);
  if (inp.value) {
    const listItem = document.createElement('li')
    const listIcon = document.createElement('i')
    listItem.classList.add('flex')
    listIcon.addEventListener('click', () => {
      // listItem.classList.add('none')
      listItem.remove()
    })
    listIcon.classList.add('fa-solid', 'fa-trash')
    listItem.innerText = inp.value.trim()
    box.append(listItem, listIcon)
    listItem.append(listIcon)
    inp.value = ''

  } else {


    confirm('Type anything')

  }


})