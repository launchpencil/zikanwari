const mysql = require('mysql2');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  console.log(req.url)
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  const queryObject = url.parse(req.url, true).query;
  const username = queryObject.user;
  const password = queryObject.pass;

  const connection = mysql.createConnection({
    host: '192.168.0.3',
    user: username,
    password: password,
    database: 'zikan'
  });

  if (req.url.startsWith('/zikanwari/change')) {
    const subject = queryObject.subject;
    data = idtodata(queryObject.id);

    
    connection.connect((err) => {
      if (err) {
        console.error('error connecting: ' + err.message);
        res.end('エラー,' + err.message);
        return;
      }
  
      const sql = "UPDATE ?? SET ?? = ? WHERE `time` = ?";
      const params = [username, data[1], subject, data[0]];
  
      connection.query(sql, params, (err, results, fields) => {
          if (err) {
              console.error('error querying: ' + err.stack);
              res.write('エラー,' + err.message);
              return;
          }
  
          res.write(data[1] + 'の' + data[0] + '時間目の教科を' + subject + 'に変更しました。');
  
          connection.end();
          res.end();
      });
    });

  } else {
    connection.connect((err) => {
      if (err) {
        console.error('error connecting: ' + err.message);
        res.end('エラー,' + err.message);
        return;
      }
  
      const sql = "SELECT * FROM ??";
  
      connection.query(sql, [username], (err, results, fields) => {
          if (err) {
              console.error('error querying: ' + err.stack);
              res.write('エラー,' + err.message);
              return;
          }
  
          results.forEach((row) => {
              res.write(
                  `${row.月曜日},${row.火曜日},${row.水曜日},${row.木曜日},${row.金曜日},`
                );
          });
  
          connection.end();
          res.end();
      });
    });
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});


function idtodata(id) {
  var time = Math.floor(id / 5) + 1;
  var day = id % 5;

  // 曜日と時間からセルの位置を生成する
  var row = time;
  var col = day;

  var dayid = ['月','火','水','木','金']
  // 結果を返す
  return [row, daytime[col] + '曜日'];
}