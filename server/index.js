const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { pool } = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const getResponse = (request, response) => {
  pool.query('SELECT * FROM mitresponses', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addMitResponse = (request, response) => {
  const { users, didyesterday, didyoumiss, mostimportanttask, comingupagainst, fixit, goodthing, doingnext } = request.body

  pool.query('INSERT INTO mitresponses (users, didyesterday, didyoumiss, mostimportanttask, comingupagainst, fixit, goodthing, doingnext) VALUES ($1, $2, $3, $4, $5, $6, $7)', [users, didyesterday, didyoumiss, mostimportanttask, comingupagainst, fixit, goodthing, doingnext], error => {
    if (error) {
      throw error
    }
    response.status(201).json({ status: 'success', message: 'Mit Submitted.' })
  })
}

app.post('/', function (req, res) {
  console.log("This is the request: " + JSON.stringify(req.body));
  //let url = "http://localhost:8080/#/mitresponses";
  let message = {message: "HELLO WORLD"};
  //let dataPacket = JSON.stringify(message)
  console.log("I AM THE DATAPACKET " + message);
  res.send(message)
})

app.get('/', function (req, res) {
  res.send('hello world')
  console.log("BODY RESPONSE: " + JSON.stringify(req.body));
})

// app
//   .route('/mitresponses')
//   // GET endpoint
//   .get(getResponse)
//   // POST endpoint
//   .post(addMitResponse)

// Start server
app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`)
})
