const fetch = window.fetch

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'editBTN') {
    //get books/id
    fetch(`/books/${event.target.getAttribute('data-id')}`)
      .then(r => {
        console.log(r)
        window.location = './edit'
      })
      .catch(e => console.error(e))
      
  } else if (event.target && event.target.id === 'deleteBTN') {
    //get delete books/id
    fetch(`/books/${event.target.getAttribute('data-id')}`, { method: 'DELETE' })
      .then(r => {
        console.log(r)
        window.location = './list'
      })
  }
})
