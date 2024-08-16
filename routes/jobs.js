const express = require('express')
const router = express.Router()

const {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
} = require('../controllers/jobs')

//route 1 
router.route('/').post(createJob).get(getAllJobs)
//route 2
router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob)

module.exports = router