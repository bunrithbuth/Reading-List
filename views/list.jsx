const React = require('react')
const Book = require('./components/book')

const List = props =>
  <html lang='en'>
    <head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <title>Reading List</title>
      <link href='https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.css' rel='stylesheet'/>
    </head>
    <body>
        <h1>READING LIST</h1>
        <div class="ui two item menu">
            <a class="item" href="/">Add Book</a>
            <a class="active item" href="/list">Reading List</a>
        </div>
        {props.list.map(book =>
          <Book title={book.title} author={book.author} pages={book.pages} currentPage={book.currentPage} isRead={book.isRead} />
        )}
      <script src='https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.js' type='application/javascript'/>
      <script src='/js/list.js' type='application/javascript' />
    </body>
  </html>

module.exports = List
