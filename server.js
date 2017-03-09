var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var ArticleOne = {
                   title: 'Article One ! Hanika Vats' ,
                   heading: 'Article One' ,
                   date: 'Feb.21.2017' ,
                   content:`     <p>This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.
                       </p>
                       <p>This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.
                       </p>
                       <p>This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.
                       </p>`
                        
                   
                   
                   
};
function createTemplate (data) {
    
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;
var htmlTemplate = 
`<html>
<head>
    <title>
            ${title}
            
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
       
    </head>
    <body>
        <div class = "mycontainer">
            
        
        <div>
            <a href = "/">Home</a>
            <h1>  ${heading} </h1>
            </hr>
            </div>
            <div>
                ${date}
            </div>
                <div>
                       ${content}                

                </div>
                </div>
    </body>
    </html>
     `;
     return htmlTemplate;
}






app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter',function (req,res) {
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(ArticleOne));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/submit-name', function (req, res) {//URL : /submit-name?name=xxxx
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
  
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
