function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(response => {
    return response.json()
  })
  .then(object => {
    // debugger
    renderBooks(object)
    // renderFifthBook(object)
    // renderCharacterNum(object, 1031)
    // totalNumOfPages(object)
  })
}




function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}




function renderFifthBook(books){
  const main = document.querySelector('main')
  const h2 = document.createElement('h2')
  h2.innerHTML = books[4].name
  main.appendChild(h2)
}




function renderCharacterNum(books, num){
  const main = document.querySelector('main')
  const div = document.createElement('div')
  let thisCharacter;
  let newNum = num.toString()
  books.forEach(book => {
    // debugger
    book.characters.forEach(character => {
      // debugger
      if (character.endsWith(`/${newNum}`)){
        // debugger
        thisCharacter = character
      }
    })
  })

  fetch(thisCharacter)
  .then(response => {
    return response.json()
  })
  .then(character =>{
    div.innerHTML = `<h2>${character.name}</h2>`
    // debugger
    main.appendChild(div)
  })

}





function totalNumOfPages(books){
  const main = document.querySelector('main')
  const h1 = document.createElement('h1')
  let pageNumArray = []
  books.forEach(book => {
    pageNumArray.push(book.numberOfPages)
  })
  const total = pageNumArray.reduce((a, b) => a + b)
  // debugger
  h1.textContent = total
  main.appendChild(h1)
  // return total
}






document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
