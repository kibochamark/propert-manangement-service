export declare const Role: {
    readonly OWNER: "OWNER";
    readonly STAFF: "STAFF";
    readonly ADMIN: "ADMIN";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const HouseStatus: {
    readonly VACANT: "VACANT";
    readonly OCCUPIED: "OCCUPIED";
    readonly RESERVED: "RESERVED";
    readonly NOTICE_GIVEN: "NOTICE_GIVEN";
    readonly MAINTENANCE: "MAINTENANCE";
    readonly INACTIVE: "INACTIVE";
};
export type HouseStatus = (typeof HouseStatus)[keyof typeof HouseStatus];
export declare const TenantStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly FORMER: "FORMER";
};
export type TenantStatus = (typeof TenantStatus)[keyof typeof TenantStatus];
export declare const TenancyStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly NOTICE_GIVEN: "NOTICE_GIVEN";
    readonly VACATED: "VACATED";
};
export type TenancyStatus = (typeof TenancyStatus)[keyof typeof TenancyStatus];
export declare const ChargeType: {
    readonly RENT: "RENT";
    readonly WATER: "WATER";
    readonly RENTDEPOSIT: "RENTDEPOSIT";
    readonly WATERDEPOSIT: "WATERDEPOSIT";
    readonly TRASH: "TRASH";
    readonly TRASHDEPOSIT: "TRASHDEPOSIT";
    readonly SECURITYDEPOSIT: "SECURITYDEPOSIT";
    readonly SECURITY: "SECURITY";
    readonly SERVICEFEE: "SERVICEFEE";
    readonly OTHER: "OTHER";
};
export type ChargeType = (typeof ChargeType)[keyof typeof ChargeType];
export declare const PaymentMethod: {
    readonly MPESA: "MPESA";
    readonly BANK: "BANK";
    readonly CASH: "CASH";
    readonly OTHER: "OTHER";
};
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
export declare const PaymentSource: {
    readonly MANUAL: "MANUAL";
    readonly MPESA_AUTO: "MPESA_AUTO";
    readonly BANK_AUTO: "BANK_AUTO";
};
export type PaymentSource = (typeof PaymentSource)[keyof typeof PaymentSource];
