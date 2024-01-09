require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')


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

const start = async () => {
    try {
        await connectDB();
        app.listen(port, console.log(`server is runing on port ${port}...`))

    } catch (error) {
        console.log(error)
    }
}

start()
// console.log('Task Manager App')


/*----------------------------------A GARDER----------------------------*/
/* le Module dotenv est fait pour permettre la mise en place de l'environnement des variables
dans le fichier .env */
/*----------------------------------A GARDER----------------------------*/