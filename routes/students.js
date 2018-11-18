const router = require('express').Router();
const Student = require('../db/models/student');

router.get('/', async (req,res,next) => {
    try {
    const result = await Student.findAll();
    res.json(result);
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const result = await Student.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            lastName: req.body.lastName,
            email: req.body.email,
        });
        res.status(201).send(result)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req,res,next) => {
    try {
        const result = await Student.findById(req.params.id)
        if (result === null) res.status(404).send()
        res.json(result);
    } catch (err) {
        next(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const student = await Student.findById(req.params.id)
        const result = await student.update(req.body)
        res.json(result);
    } catch (err) {
        next(err);
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const student = await Student.findById(req.params.id)
        await student.destroy()
        res.status(204).send()
    } catch (err) {
        next(err);
    }
})

module.exports = router;
