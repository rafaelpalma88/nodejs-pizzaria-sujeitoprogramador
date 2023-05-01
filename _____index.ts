const express = require('express')
const { v4: uuidv4 } = require('uuid');

const server = express()
server.use(express.json())

let cursos = [
  { id: '1', name: 'PHP' },
  { id: '2', name: 'Laravel' }
]

function checkIfNameExists(req, res, next) {
  if(!req.body.name) {
    res.status(500).json({ error: 'o nome nao foi informado'})
  }
  return next()
}

// server.use((req, res, next) => {
//   console.log('REQUISIÇÃO CHAMADA')

//   return next();
// })

server.get('/cursos/:id', (req, res) => {
  const id = req.params.id
  const course = cursos.find(course => course.id === id)

  if (course) {
    return res.json(course)
  } else {
    res.send(404)
  }
  
})

server.get('/cursos', (req, res) => {
  return res.json(cursos)
})

server.delete('/cursos/:id', (req, res) => {

  const id = req.params.id;
  console.log('id', id)
  const newCursos = cursos.filter(curso => curso.id !== id)
  console.log('newCursos', newCursos)
  cursos = newCursos
  return res.json({})
})


server.post('/cursos', checkIfNameExists, (req, res) => {

  const id = uuidv4();
  console.log('id', id)
  const { name } = req.body
  console.log('name', name)

  cursos.push({ id, name})
  return res.json({})
})

server.put('/cursos/:id', (req, res) => {

  const id = req.params.id;
  const name = req.body.name

  const anotherCourses = cursos.filter(curso => curso.id !== id)
  cursos = [...anotherCourses, { id, name }]
  return res.json({})
})

server.listen(3333)