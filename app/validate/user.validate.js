// const { function } = require('@hapi/joi');
const Basejoi = require('@hapi/joi');
const Extension = require('@hapi/joi-date');

const Joi = Basejoi.extend(Extension);



const validSchema = Joi.object().keys({
    username: Joi.string().min(4).max(30).required(),
    password: Joi.string().min(6).max(20).required()
});

exports.createValidator = (req, res, next) => {
    const body = req.body;
    const result = validSchema.validate(body);
    
    if(result.error){
        res.json(result.error.details);
        return;
    }
    next();
}
