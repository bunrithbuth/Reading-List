let books = []
let selectedBook = {}
/*
books = [{
    title: 
    author:
    pages:
    current page:
    isRead: t/f
}]
*/

module.exports = {
  getBooks () {
    return books
  },

  setBook (id) {
    const index = books.findIndex(bookThing => bookThing.title === id)
    selectedBook = books[index]
  },

  getBook () {
    return selectedBook
  },

  addBook (book) {
    books.push(book)
  },

  updateBook (id, book) {
    const index = books.findIndex(bookThing => bookThing.title === id)
    books[index] = book
  },

  deleteBook (id) {
    const index = books.findIndex(bookThing => bookThing.title === id)
    books.splice(index, 1)
  }

}
