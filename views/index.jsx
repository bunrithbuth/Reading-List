const React = require('react')
const Form = require('./components/form')

const Page = () =>
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
            <a class="active item" href="/">Add Book</a>
            <a class="item" href="/list">Reading List</a>
        </div>

        <div class="ui left aligned container">
            <h3>ADD A BOOK TO YOUR READING LIST:</h3>
            <div class="ui segment">
                <Form />
            </div>
        </div>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.js' type='application/javascript'/>
      <script src='/js/index.js' type='application/javascript' />
    </body>
  </html>

module.exports = Page
