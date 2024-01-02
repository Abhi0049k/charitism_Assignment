const zod = require('zod');

const userValidation = zod.object({
    email: zod.string().email(),
    password: zod.string().min(1)
})

module.exports = userValidation;