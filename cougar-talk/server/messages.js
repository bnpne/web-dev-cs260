const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const messageSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
        max: 500,
    },
});

const Message = mongoose.model('Message', messageSchema);

router.get('/', async (req, res) => {
    try {
        let messages = await Message.find();
        return res.send(messages);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

router.post('/', async (req, res) => {
    const message = new Message({
        username: req.body.name,
        subject: req.body.subject,
        message: req.body.message,
    });
    try {
        await message.save();
        return res.send(message);
    } catch(error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Message.deleteOne({
            _id: req.params.id
        });
        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

module.exports = router;