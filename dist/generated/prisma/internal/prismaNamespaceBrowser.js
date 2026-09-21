"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.DepositDeductionScalarFieldEnum = exports.DepositRefundScalarFieldEnum = exports.AttachmentScalarFieldEnum = exports.PaymentAllocationScalarFieldEnum = exports.PaymentScalarFieldEnum = exports.ChargeScalarFieldEnum = exports.TenancyScalarFieldEnum = exports.TenantScalarFieldEnum = exports.HouseScalarFieldEnum = exports.PropertyScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Property: 'Property',
    House: 'House',
    Tenant: 'Tenant',
    Tenancy: 'Tenancy',
    Charge: 'Charge',
    Payment: 'Payment',
    PaymentAllocation: 'PaymentAllocation',
    Attachment: 'Attachment',
    DepositRefund: 'DepositRefund',
    DepositDeduction: 'DepositDeduction'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    kindeId: 'kindeId',
    email: 'email',
    name: 'name',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PropertyScalarFieldEnum = {
    id: 'id',
    ownerId: 'ownerId',
    name: 'name',
    address: 'address',
    location: 'location',
    description: 'description',
    defaultWaterRate: 'defaultWaterRate',
    currency: 'currency',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.HouseScalarFieldEnum = {
    id: 'id',
    propertyId: 'propertyId',
    unitNumber: 'unitNumber',
    houseType: 'houseType',
    waterMeterNumber: 'waterMeterNumber',
    defaultMonthlyRent: 'defaultMonthlyRent',
    defaultDepositAmount: 'defaultDepositAmount',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.TenantScalarFieldEnum = {
    id: 'id',
    fullName: 'fullName',
    phone: 'phone',
    altPhone: 'altPhone',
    nationalId: 'nationalId',
    email: 'email',
    occupation: 'occupation',
    emergencyContactName: 'emergencyContactName',
    emergencyContactPhone: 'emergencyContactPhone',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.TenancyScalarFieldEnum = {
    id: 'id',
    houseId: 'houseId',
    tenantId: 'tenantId',
    monthlyRent: 'monthlyRent',
    depositRequired: 'depositRequired',
    startDate: 'startDate',
    expectedEndDate: 'expectedEndDate',
    openingWaterReading: 'openingWaterReading',
    notes: 'notes',
    noticeDate: 'noticeDate',
    moveOutReason: 'moveOutReason',
    actualEndDate: 'actualEndDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ChargeScalarFieldEnum = {
    id: 'id',
    tenancyId: 'tenancyId',
    type: 'type',
    periodMonth: 'periodMonth',
    amount: 'amount',
    description: 'description',
    dueDate: 'dueDate',
    voidedAt: 'voidedAt',
    voidReason: 'voidReason',
    createdById: 'createdById',
    createdAt: 'createdAt'
};
exports.PaymentScalarFieldEnum = {
    id: 'id',
    tenancyId: 'tenancyId',
    amount: 'amount',
    paidAt: 'paidAt',
    method: 'method',
    source: 'source',
    reference: 'reference',
    notes: 'notes',
    recordedById: 'recordedById',
    voidedAt: 'voidedAt',
    voidReason: 'voidReason',
    createdAt: 'createdAt'
};
exports.PaymentAllocationScalarFieldEnum = {
    id: 'id',
    paymentId: 'paymentId',
    chargeId: 'chargeId',
    amount: 'amount',
    createdAt: 'createdAt'
};
exports.AttachmentScalarFieldEnum = {
    id: 'id',
    paymentId: 'paymentId',
    url: 'url',
    mimeType: 'mimeType',
    sizeBytes: 'sizeBytes',
    uploadedById: 'uploadedById',
    createdAt: 'createdAt'
};
exports.DepositRefundScalarFieldEnum = {
    id: 'id',
    tenancyId: 'tenancyId',
    depositHeld: 'depositHeld',
    refundAmount: 'refundAmount',
    refundDate: 'refundDate',
    method: 'method',
    notes: 'notes',
    createdAt: 'createdAt'
};
exports.DepositDeductionScalarFieldEnum = {
    id: 'id',
    refundId: 'refundId',
    reason: 'reason',
    amount: 'amount'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map