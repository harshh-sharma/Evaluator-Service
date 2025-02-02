"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submission = void 0;
const submission = (req, res) => {
    try {
        const data = req.body;
        res.status(200).json({
            success: true,
            message: "successfully submitted submission",
            data: Object.assign({}, data),
            error: {},
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: "something went wrong",
            error: err,
            data: {},
        });
    }
};
exports.submission = submission;
