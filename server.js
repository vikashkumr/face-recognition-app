const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
app.use(cors())
app.use(bodyParser.json());
const database = {
  users: [
    {
    id: '123',
    name: 'vikash',
    email: 'vky0018@gmail.com',
    entries: 0,
    joined: new Date(),
    password: 'vikash'
  },
  {
    id: '124',
    name: 'kash',
    email: 'y0018@gmail.com',
    entries: 0,
    joined: new Date(),
    password: '8716'
  }
]
}

app.get('/', (req, res) => {
  res.send(database.users);
})

app.post('/signin', (req, res) => {
  if (req.body.email === database.users[0].email && 
     req.body.password === database.users[0].password) {
    res.send(database.users[0]);
  } else {
    res.status(404).json('error loging in');
  }
})

app.post('/register', (req, res) => {
    const { email,name } = req.body;
  database.users.push({
    id: '125',
    name: name,
    email: email,
    entries: 0,
    joined: new Date()
  })
  res.json(database.users[database.users.length - 1])
})

app.get('/profile/:id', (req, res) => {
    const {id} = req.params;
    let found = false;
  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      return res.json(user);
    }
   })
    if(!found){
      res.status(400).json('not found');
    }
})

app.put('/image', (req,res) => {
  const {id} = req.body;
    let found = false;
  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      user.entries++
      return res.json(user.entries);
    }
   })
    if(!found){
      res.status(400).json('not found');
    }
})

 app.listen(4000, () => console.log('app is running on port 4000!'))