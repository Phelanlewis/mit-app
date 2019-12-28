const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Pool = require('pg').Pool
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
    console.log("HERE COME THE ROWS", results.rows);
    response.status(200).json(results.rows)
  })
}

function addMitResponse(request, response) {
  console.log("Activate database...");
  const { users, date_col, didyesterday, didyoumiss, mostimportanttask, comingupagainst, fixit, goodthing, doingnext } = request.body

  pool.query('INSERT INTO mitresponses (users, date_col, didyesterday, didyoumiss, mostimportanttask, comingupagainst, fixit, goodthing, doingnext) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [users, date_col, didyesterday, didyoumiss, mostimportanttask, comingupagainst, fixit, goodthing, doingnext], error => {
    if (error) {
      throw error
    }
    response.status(201).json({ status: 'success', message: 'Mit Submitted.' })
  })
}

app.post('/', function (req, res) {
  console.log("This is the request: " + JSON.stringify(req.body));
  //let url = "http://localhost:8080/#/mitresponses";
  let sendMITResponse = JSON.stringify(req.body)
  addMitResponse(req, res)
  let message = {message: "HELLO WORLD"};
  let dataPacket = JSON.stringify(message)
  console.log("I AM THE DATAPACKET " + dataPacket);
  //res.send(dataPacket)
})

app.get('/', function (req, res) {
  //res.send('This is a message')
  getResponse(req, res)
  console.log("BODY RESPONSE: " + JSON.stringify(req.body));
})

app.get('/test', function(req, res) {
  console.log("WE ARE REQUEST", req);
  console.log("WE ARE RESPONSE", res);
  getResponse(req, res)
  console.log("DID IT WORK????.....");
})

//app
//   .route('/mitresponses')
//   // GET endpoint
//   .get(getResponse)
//   // POST endpoint
//   .post(addMitResponse)

// Start server
app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`)
})
