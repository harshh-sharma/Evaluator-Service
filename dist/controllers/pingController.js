"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pingCheck = void 0;
const pingCheck = (_, res) => {
    res.send('Server is live');
};
exports.pingCheck = pingCheck;
