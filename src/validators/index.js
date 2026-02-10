import { body } from "express-validator";

const userRegisterValidator = () => {
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is Required")
            .isEmail()
            .withMessage("Email is Invalid"),
        body("username")
            .trim()
            .notEmpty()
            .withMessage("Username is Required")
            .isLowercase()
            .withMessage("Username must be in lower case")
            .isLength({min: 3})
            .withMessage("Username must be at least 3 characters long "),
        body("password")
            .trim()
            .notEmpty()
            .withMessage("password required"),
            body("fullName").optional().trim(),

    ]
}

const userLoginValidator = () => {
    return [
        body("email")
            .optional()
            .isEmail()
            .withMessage("Email is Invalid"),
        body("password")
            .notEmpty()
            .withMessage("Password is Required"),

    ];
};

export { userRegisterValidator, userLoginValidator }

// validation done