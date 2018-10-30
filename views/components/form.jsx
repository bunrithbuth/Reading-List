const React = require('react')

const Form = props =>
    <form className="ui form">
    <div className="field">
      <label htmlFor='bookTitle'>Book Title</label>
      {props.title ? <input type='text' className='form-control' id='bookTitle' aria-describedby='emailHelp' value={props.title} disabled/> : <input type='text' className='form-control' id='bookTitle' aria-describedby='emailHelp' placeholder='The Lord of The Rings' value=''/>}
    </div>
    <div className='field'>
      <label htmlFor='bookAuthor'>Book Author</label>
      <input type='text' className='form-control' id='bookAuthor' placeholder={props.author ? '' : 'J.R.R Tolkien'} value={props.author ? props.author : ''} />
    </div>
    <div className='field'>
      <label htmlFor='bookPages'>Book Page Count</label>
      <input type='number' className='form-control' id='bookPages' placeholder={props.pages ? '' : '521'} value={props.pages ? props.pages : ''} />
    </div>
    <div className='field'>
      <label htmlFor='currentPage'>Current Page Number</label>
      <input type='number' className='form-control' id='currentPage' placeholder={props.currentPage ? '' : '51'} value={props.currentPage ? props.currentPage : ''} />
    </div>
    <div className='field'>
    <div className="ui checkbox">
      <input type='checkbox' id='readBefore' checked={!!props.isRead} />
      <label>I Read This Book Before</label>
    </div>
    </div>
    {props.title ? <button type='submit' id='editBook' className='btn btn-warning'>Apply Changes</button> : <button type='submit' id='addBook' className='btn btn-primary'>Add Book</button>}
  </form>

module.exports = Form
