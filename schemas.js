const Joi = require('joi').extend(require('@joi/date'));

const postSchema = Joi.object({
    id: Joi.string().guid({version: 'uuidv4'}).required(),
    title: Joi.string().required(),
    author: Joi.string().required(),
    content: Joi.string().required(),
    publishedDate: Joi.date().format('YYYY-MM-DD').utc().required()
});

const postFilterSchema = Joi.object({
    keyword: Joi.string().optional(),
    year: Joi.number().optional(),
    page: Joi.number().optional(),
});

const postIdSchema = Joi.object({
    id: Joi.string().guid({version: 'uuidv4'}).required(),
});

module.exports = { postSchema, postFilterSchema, postIdSchema };