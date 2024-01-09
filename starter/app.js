const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

const port = 3000

// middleware 
app.use(express.json());


// Routes
app.get('/hello', (req, res) => {
    res.send('Task Manager')
})

app.use('/api/v1/tasks', tasks);

// app.get('/api/v1/tasks')         - get all the tasks
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get single task
// app.patch('/api/v1/tasks/:id')   - update task
// app.delete('/api/v1/tasks/:id')  - dalete task 



// Démrrage du serveur
app.listen(port, console.log(`server is runing on port ${port}...`))

// console.log('Task Manager App')
