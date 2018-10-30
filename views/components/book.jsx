const React = require('react')
const Fragment = React.Fragment

const Book = props =>
  <Fragment>
    <div class="ui raised padded text container segment">
        <h2 className="ui header" id='bookTitle' data-booktitle={props.title} className='list-group-item list-group-item-danger'>{props.title}</h2>
        <p id='bookAuthor' data-bookauthor={props.author} className='list-group-item list-group-item-warning'>Author : {props.author}</p>
        <p id='bookPages' data-bookpages={props.pages} className='list-group-item list-group-item-info'>Page Count : {props.pages}</p>
        <p id='bookCurrentPage' data-bookcurrentpage={props.currentPage} className='list-group-item list-group-item-light'>Currently on page {props.currentPage}</p>
        <p id='bookIsRead' data-bookisread={props.isRead} className='list-group-item list-group-item-dark'>{props.isRead ? 'I read this book already.' : 'I have not read this book yet.'}</p>
        <button className='ui secondary basic button' id='editBTN' data-id={props.title}>EDIT</button>
        <button className='ui negative basic button' id='deleteBTN' data-id={props.title}>DELETE</button>
    </div>
  </Fragment>

module.exports = Book
