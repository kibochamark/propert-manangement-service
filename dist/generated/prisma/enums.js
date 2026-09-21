"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentSource = exports.PaymentMethod = exports.ChargeType = exports.TenancyStatus = exports.TenantStatus = exports.HouseStatus = exports.Role = void 0;
exports.Role = {
    OWNER: 'OWNER',
    STAFF: 'STAFF',
    ADMIN: 'ADMIN'
};
exports.HouseStatus = {
    VACANT: 'VACANT',
    OCCUPIED: 'OCCUPIED',
    RESERVED: 'RESERVED',
    NOTICE_GIVEN: 'NOTICE_GIVEN',
    MAINTENANCE: 'MAINTENANCE',
    INACTIVE: 'INACTIVE'
};
exports.TenantStatus = {
    ACTIVE: 'ACTIVE',
    FORMER: 'FORMER'
};
exports.TenancyStatus = {
    ACTIVE: 'ACTIVE',
    NOTICE_GIVEN: 'NOTICE_GIVEN',
    VACATED: 'VACATED'
};
exports.ChargeType = {
    RENT: 'RENT',
    WATER: 'WATER',
    RENTDEPOSIT: 'RENTDEPOSIT',
    WATERDEPOSIT: 'WATERDEPOSIT',
    TRASH: 'TRASH',
    TRASHDEPOSIT: 'TRASHDEPOSIT',
    SECURITYDEPOSIT: 'SECURITYDEPOSIT',
    SECURITY: 'SECURITY',
    SERVICEFEE: 'SERVICEFEE',
    OTHER: 'OTHER'
};
exports.PaymentMethod = {
    MPESA: 'MPESA',
    BANK: 'BANK',
    CASH: 'CASH',
    OTHER: 'OTHER'
};
exports.PaymentSource = {
    MANUAL: 'MANUAL',
    MPESA_AUTO: 'MPESA_AUTO',
    BANK_AUTO: 'BANK_AUTO'
};
//# sourceMappingURL=enums.js.map