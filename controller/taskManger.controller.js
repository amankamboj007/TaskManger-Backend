const { list, task } = require('../models/index')

const addList = async (req, res) => {
    try {
        let params = {
            title: req.body.title
        }
        let resp = await list.create(params)
        res.send(resp).status(200)
    } catch (error) {
        res.send(error || 'ERROR').status(400)
    }
}

const getList = async (req, res) => {
    try {
        let resp = await list.find({})
        res.send(resp).status(200)

    } catch (error) {
        res.send(error || 'ERROR').status(400)
    }

}

const updateList = async (req, res) => {
    try {
        let resp = await list.findOneAndUpdate({ _id: req.body.id }, { title: req.body.title }, { new: true })
        res.send(resp).status(200)
    } catch (error) {
        res.send(error || 'ERROR').status(400)
    }
}

const deleteList = async (req, res) => {
    try {
        await list.findOneAndDelete({ _id: req.params.id })
        res.send('list Removed').status(200)
    } catch (error) {
        res.send(error || 'ERROR').status(400)
    }
}

module.exports = {
    addList,
    getList,
    updateList,
    deleteList
}