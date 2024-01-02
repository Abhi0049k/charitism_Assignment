const zod = require('zod');

const todoValidation = zod.object({
    title: zod.string(),
    description: zod.string().optional()
})

module.exports = todoValidation;