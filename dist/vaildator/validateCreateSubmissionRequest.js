"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(Object.assign({}, req.body));
        next();
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: 'Bad request',
            error: error,
            data: {}
        });
    }
};
exports.validate = validate;
