var express = require('express');
var mysql = require ('mysql')

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var mysqlHost = process.env.MYSQL_HOST || 'mysql';
    var mysqlPort = process.env.MYSQL_PORT || '3306';
    var mysqlUser = process.env.MYSQL_USER || 'root';
    var mysqlPass = process.env.MYSQL_PASS || 'root';
    var mysqlDB   = process.env.MYSQL_DB   || 'node_db';

    var connectionOptions = {
        host: mysqlHost,
        port: mysqlPort,
        user: mysqlUser,
        password: mysqlPass,
        database: mysqlDB
      };

    console.log('MySQL Connection config:');
    console.log(connectionOptions);
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })