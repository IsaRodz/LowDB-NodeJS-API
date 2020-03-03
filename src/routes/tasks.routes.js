const { Router } = require('express')
const router = Router()

const { createTask, getTasks, getTask, updateTask } = require('../controllers/tasks.controller')

router.get('/tasks', getTasks)
router.get('/tasks/:id', getTask)
router.post('/tasks', createTask)
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id')

module.exports = router