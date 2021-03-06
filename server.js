var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user: 'ajajay271',
    database: 'ajajay271',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));
/*var articles={
    'aj-one':{
        title:"AJ's app",
        content:`
            <h1>hello this is new window</h1>
            <p>this para is just for understanding of the context of the program</p>
            '`,
    },
    'aj-two':{
        title:"AJ's second page",
        content:`
            <h1>hello this is second window</h1>
            <p>this para is just for understanding of the context of the program</p>
            '`
    }
};*/
function createtemplate(data){
    var title = data.title;
    var content = data.content;
    var htmltemplate=`
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <link href="/ui/style.css" rel="stylesheet"/>
                <meta name='viewport' content="width=device-width,initial-scale=1"/>
            </head>
            <body>
                <div class="container">
                    <a href='/'>HOME</a>
                    <hr>
                    ${content}
                </div>
            </body>
        </html>
        `;
    return htmltemplate;
}  
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('/test.db',function(req,res){
    //make a select template
    //return a response with result
   pool.query('SELECT * FROM test',function (err, result){
       if(err){
           res.status(500).send(err.toString());
       }
       else{
           res.send(JSON.stringify(result.rows));
       }
   }); 
});
var counter = 0;
app.get('/counter',function(req,res){
   counter = counter+1;
   res.send(counter.toString());
});
app.get('/submit-name',function(req,res){//?name=xyz
    //get the name from the request
    var name= req.query.name;
    names.push(name);
    //JSON: Javascript Object Notation
    res.send(JSON.stringify(names));
});
app.get('/articles/:articleName',function(req,res){
    pool.query("SELECT * FROM article WHERE title = '" +req.params.articleName + "'", function(err,result){
        if(err){
            res.status(500).send(err.toString());
        } else{
            if(result.rows.length === 0){
                res.status(404).send('Article not found');
            } else{
                var articleData = result.rows[0];
                res.send(createTemplate(articleData));
            }
            
        }
    });
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js',function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var names = [];


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
