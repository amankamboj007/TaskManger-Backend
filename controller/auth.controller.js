const { userModel } = require('../models/index')
const { generateAccessToken } = require('../middlewares/jwtHandler')
const { generatePassword, comparePassword } = require('../middlewares/passwordHandler')

const signUp = async (req, res) => {
    try {
        let params = {
            email: req.body.email,
            password: await generatePassword(req.body.password)
        }
        await userModel.create(params)
        res.send('userCreated').status(200)
    } catch (error) {
        res.send(error || 'ERROR').status(400)
    }
}

const login = async (req, res) => {
    try {
        let userDetail = await userModel.findOne({ email: req.body.email }).lean()
        if (userDetail) {
            let verify = await comparePassword(req.body.password, userDetail.password)
            if (verify) {
                userDetail.token = await generateAccessToken(userDetail._id)
                res.send(userDetail).status(200)
            } else {
                res.send('Password Incorrect').status(400)
            }
        }
        else {
            res.send('user Not Found').status(400)
        }
    } catch (error) {
        res.send(error || 'ERROR').status(400)
    }
}

module.exports = {
    signUp,
    login
}