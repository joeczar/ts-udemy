"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDate = void 0;
exports.parseDate = function (dateString) {
    var reversed = dateString.split('/').reverse().join('/');
    return new Date(reversed);
};
