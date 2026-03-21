const {body, validationResult} = require('express-validator');

const contactsRules = () =>{
    return [
        body('firstName')
            .noEmpty()
            .withMessage('first name can not be empty')
            .isString(),
        body('lastName')
            .noEmpty()
            .withMessage('Last name can not be empty')
            .isString(),
        body('email')
            .noEmpty()
            .isEmail()
            .withMessage('A valida email is required.'),
            body('favoriteColor'),
            body('birthday')
                .isDate()
                .withMessage('Date is required as mm/dd/yyyy')
    ]
}
const checkValidation = (req, res, next)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty){
        return res.status(400).json({ errors: errors.array()})
    }
    next();
}

module.exports(
    contactsRules, checkValidation
)