"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNumber = toNumber;
function toNumber(value) {
    if (value === null || value === undefined)
        return 0;
    return typeof value === 'number' ? value : value.toNumber();
}
//# sourceMappingURL=decimal.util.js.map