const express = require('express');
const app = express();


//포탈설정
const server = app.listen(3000, () => {
    console.log('Start Server : localhost:3000');
});

//설정하기
app.set('views', __dirname + '/views');//
app.set('view engine', 'ejs');//템플릿엔진
app.engine('html', require('ejs').renderFile);


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/aa', (req, res) => {
    res.render('index.html')
})
// views폴더안에 html 파일 하나 더 만들고 위에 렌더함수안에 넣어주면 멀티페이지 가능합니다.



//아래는 db관련
var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'example.org',
  user            : 'bob',
  password        : 'secret',
  database        : 'my_db'
});

app.get('/db', (req, res) => {
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('SELECT * FROM Test', function (error, results, fields) {
            res.send(Json.stringify(results));
            console.log('results', results);
          // When done with the connection, release it.
          connection.release();
      
          // Handle error after the release.
          if (error) throw error;
      
          // Don't use the connection here, it has been returned to the pool.
        });
      });
})

