require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Person = require('./models/person')

let persons = [
]

app.use(express.static('dist'))
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.get('/info', (request, response) => {
    response.send(
        `<div>Phonebook has info for ${persons.length} people<div/>
        <div>${Date()}<div/>`) 
})

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)})
})

app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {
        response.json(person)
    })
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'Name or number is missing'
        })
    }

    Person.findOne({ name: body.name })
        .then(existingPerson => {
        if (existingPerson) {
            return response.status(400).json({
                error: 'Name must be unique'
            })
        }

        const newPerson = new Person ({
            name: body.name,
            number: body.number
        })

        newPerson.save()
            .then(savedPerson => {
                response.json(savedPerson)
        })
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})