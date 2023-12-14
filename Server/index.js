const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/todos')

app.post('/add', (req, res) => {
    const title = req.body.title
    const description = req.body.description
    TodoModel.create({
        title: title,
        description: description
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.get('/get', (req, res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {
    const id = req.body.id
    const complete = req.body.complete
    TodoModel.findByIdAndUpdate({_id: id}, {isComplete: complete})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res) => {
    const {id} = req.params
    TodoModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running!");
})