import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DepositRefundModel = runtime.Types.Result.DefaultSelection<Prisma.$DepositRefundPayload>;
export type AggregateDepositRefund = {
    _count: DepositRefundCountAggregateOutputType | null;
    _avg: DepositRefundAvgAggregateOutputType | null;
    _sum: DepositRefundSumAggregateOutputType | null;
    _min: DepositRefundMinAggregateOutputType | null;
    _max: DepositRefundMaxAggregateOutputType | null;
};
export type DepositRefundAvgAggregateOutputType = {
    depositHeld: runtime.Decimal | null;
    refundAmount: runtime.Decimal | null;
};
export type DepositRefundSumAggregateOutputType = {
    depositHeld: runtime.Decimal | null;
    refundAmount: runtime.Decimal | null;
};
export type DepositRefundMinAggregateOutputType = {
    id: string | null;
    tenancyId: string | null;
    depositHeld: runtime.Decimal | null;
    refundAmount: runtime.Decimal | null;
    refundDate: Date | null;
    method: $Enums.PaymentMethod | null;
    notes: string | null;
    createdAt: Date | null;
};
export type DepositRefundMaxAggregateOutputType = {
    id: string | null;
    tenancyId: string | null;
    depositHeld: runtime.Decimal | null;
    refundAmount: runtime.Decimal | null;
    refundDate: Date | null;
    method: $Enums.PaymentMethod | null;
    notes: string | null;
    createdAt: Date | null;
};
export type DepositRefundCountAggregateOutputType = {
    id: number;
    tenancyId: number;
    depositHeld: number;
    refundAmount: number;
    refundDate: number;
    method: number;
    notes: number;
    createdAt: number;
    _all: number;
};
export type DepositRefundAvgAggregateInputType = {
    depositHeld?: true;
    refundAmount?: true;
};
export type DepositRefundSumAggregateInputType = {
    depositHeld?: true;
    refundAmount?: true;
};
export type DepositRefundMinAggregateInputType = {
    id?: true;
    tenancyId?: true;
    depositHeld?: true;
    refundAmount?: true;
    refundDate?: true;
    method?: true;
    notes?: true;
    createdAt?: true;
};
export type DepositRefundMaxAggregateInputType = {
    id?: true;
    tenancyId?: true;
    depositHeld?: true;
    refundAmount?: true;
    refundDate?: true;
    method?: true;
    notes?: true;
    createdAt?: true;
};
export type DepositRefundCountAggregateInputType = {
    id?: true;
    tenancyId?: true;
    depositHeld?: true;
    refundAmount?: true;
    refundDate?: true;
    method?: true;
    notes?: true;
    createdAt?: true;
    _all?: true;
};
export type DepositRefundAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepositRefundWhereInput;
    orderBy?: Prisma.DepositRefundOrderByWithRelationInput | Prisma.DepositRefundOrderByWithRelationInput[];
    cursor?: Prisma.DepositRefundWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DepositRefundCountAggregateInputType;
    _avg?: DepositRefundAvgAggregateInputType;
    _sum?: DepositRefundSumAggregateInputType;
    _min?: DepositRefundMinAggregateInputType;
    _max?: DepositRefundMaxAggregateInputType;
};
export type GetDepositRefundAggregateType<T extends DepositRefundAggregateArgs> = {
    [P in keyof T & keyof AggregateDepositRefund]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDepositRefund[P]> : Prisma.GetScalarType<T[P], AggregateDepositRefund[P]>;
};
export type DepositRefundGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepositRefundWhereInput;
    orderBy?: Prisma.DepositRefundOrderByWithAggregationInput | Prisma.DepositRefundOrderByWithAggregationInput[];
    by: Prisma.DepositRefundScalarFieldEnum[] | Prisma.DepositRefundScalarFieldEnum;
    having?: Prisma.DepositRefundScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DepositRefundCountAggregateInputType | true;
    _avg?: DepositRefundAvgAggregateInputType;
    _sum?: DepositRefundSumAggregateInputType;
    _min?: DepositRefundMinAggregateInputType;
    _max?: DepositRefundMaxAggregateInputType;
};
export type DepositRefundGroupByOutputType = {
    id: string;
    tenancyId: string;
    depositHeld: runtime.Decimal;
    refundAmount: runtime.Decimal;
    refundDate: Date | null;
    method: $Enums.PaymentMethod | null;
    notes: string | null;
    createdAt: Date;
    _count: DepositRefundCountAggregateOutputType | null;
    _avg: DepositRefundAvgAggregateOutputType | null;
    _sum: DepositRefundSumAggregateOutputType | null;
    _min: DepositRefundMinAggregateOutputType | null;
    _max: DepositRefundMaxAggregateOutputType | null;
};
export type GetDepositRefundGroupByPayload<T extends DepositRefundGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DepositRefundGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DepositRefundGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DepositRefundGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DepositRefundGroupByOutputType[P]>;
}>>;
export type DepositRefundWhereInput = {
    AND?: Prisma.DepositRefundWhereInput | Prisma.DepositRefundWhereInput[];
    OR?: Prisma.DepositRefundWhereInput[];
    NOT?: Prisma.DepositRefundWhereInput | Prisma.DepositRefundWhereInput[];
    id?: Prisma.StringFilter<"DepositRefund"> | string;
    tenancyId?: Prisma.StringFilter<"DepositRefund"> | string;
    depositHeld?: Prisma.DecimalFilter<"DepositRefund"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundAmount?: Prisma.DecimalFilter<"DepositRefund"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundDate?: Prisma.DateTimeNullableFilter<"DepositRefund"> | Date | string | null;
    method?: Prisma.EnumPaymentMethodNullableFilter<"DepositRefund"> | $Enums.PaymentMethod | null;
    notes?: Prisma.StringNullableFilter<"DepositRefund"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DepositRefund"> | Date | string;
    tenancy?: Prisma.XOR<Prisma.TenancyScalarRelationFilter, Prisma.TenancyWhereInput>;
    deductions?: Prisma.DepositDeductionListRelationFilter;
};
export type DepositRefundOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tenancyId?: Prisma.SortOrder;
    depositHeld?: Prisma.SortOrder;
    refundAmount?: Prisma.SortOrder;
    refundDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    method?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    tenancy?: Prisma.TenancyOrderByWithRelationInput;
    deductions?: Prisma.DepositDeductionOrderByRelationAggregateInput;
};
export type DepositRefundWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tenancyId?: string;
    AND?: Prisma.DepositRefundWhereInput | Prisma.DepositRefundWhereInput[];
    OR?: Prisma.DepositRefundWhereInput[];
    NOT?: Prisma.DepositRefundWhereInput | Prisma.DepositRefundWhereInput[];
    depositHeld?: Prisma.DecimalFilter<"DepositRefund"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundAmount?: Prisma.DecimalFilter<"DepositRefund"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundDate?: Prisma.DateTimeNullableFilter<"DepositRefund"> | Date | string | null;
    method?: Prisma.EnumPaymentMethodNullableFilter<"DepositRefund"> | $Enums.PaymentMethod | null;
    notes?: Prisma.StringNullableFilter<"DepositRefund"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DepositRefund"> | Date | string;
    tenancy?: Prisma.XOR<Prisma.TenancyScalarRelationFilter, Prisma.TenancyWhereInput>;
    deductions?: Prisma.DepositDeductionListRelationFilter;
}, "id" | "tenancyId">;
export type DepositRefundOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tenancyId?: Prisma.SortOrder;
    depositHeld?: Prisma.SortOrder;
    refundAmount?: Prisma.SortOrder;
    refundDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    method?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DepositRefundCountOrderByAggregateInput;
    _avg?: Prisma.DepositRefundAvgOrderByAggregateInput;
    _max?: Prisma.DepositRefundMaxOrderByAggregateInput;
    _min?: Prisma.DepositRefundMinOrderByAggregateInput;
    _sum?: Prisma.DepositRefundSumOrderByAggregateInput;
};
export type DepositRefundScalarWhereWithAggregatesInput = {
    AND?: Prisma.DepositRefundScalarWhereWithAggregatesInput | Prisma.DepositRefundScalarWhereWithAggregatesInput[];
    OR?: Prisma.DepositRefundScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DepositRefundScalarWhereWithAggregatesInput | Prisma.DepositRefundScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DepositRefund"> | string;
    tenancyId?: Prisma.StringWithAggregatesFilter<"DepositRefund"> | string;
    depositHeld?: Prisma.DecimalWithAggregatesFilter<"DepositRefund"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundAmount?: Prisma.DecimalWithAggregatesFilter<"DepositRefund"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundDate?: Prisma.DateTimeNullableWithAggregatesFilter<"DepositRefund"> | Date | string | null;
    method?: Prisma.EnumPaymentMethodNullableWithAggregatesFilter<"DepositRefund"> | $Enums.PaymentMethod | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"DepositRefund"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DepositRefund"> | Date | string;
};
export type DepositRefundCreateInput = {
    id?: string;
    depositHeld: runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundDate?: Date | string | null;
    method?: $Enums.PaymentMethod | null;
    notes?: string | null;
    createdAt?: Date | string;
    tenancy: Prisma.TenancyCreateNestedOneWithoutDepositRefundInput;
    deductions?: Prisma.DepositDeductionCreateNestedManyWithoutRefundInput;
};
export type DepositRefundUncheckedCreateInput = {
    id?: string;
    tenancyId: string;
    depositHeld: runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundDate?: Date | string | null;
    method?: $Enums.PaymentMethod | null;
    notes?: string | null;
    createdAt?: Date | string;
    deductions?: Prisma.DepositDeductionUncheckedCreateNestedManyWithoutRefundInput;
};
export type DepositRefundUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    depositHeld?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    method?: Prisma.NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenancy?: Prisma.TenancyUpdateOneRequiredWithoutDepositRefundNestedInput;
    deductions?: Prisma.DepositDeductionUpdateManyWithoutRefundNestedInput;
};
export type DepositRefundUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenancyId?: Prisma.StringFieldUpdateOperationsInput | string;
    depositHeld?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    method?: Prisma.NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deductions?: Prisma.DepositDeductionUncheckedUpdateManyWithoutRefundNestedInput;
};
export type DepositRefundCreateManyInput = {
    id?: string;
    tenancyId: string;
    depositHeld: runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundDate?: Date | string | null;
    method?: $Enums.PaymentMethod | null;
    notes?: string | null;
    createdAt?: Date | string;
};
export type DepositRefundUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    depositHeld?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    method?: Prisma.NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DepositRefundUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenancyId?: Prisma.StringFieldUpdateOperationsInput | string;
    depositHeld?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    method?: Prisma.NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DepositRefundNullableScalarRelationFilter = {
    is?: Prisma.DepositRefundWhereInput | null;
    isNot?: Prisma.DepositRefundWhereInput | null;
};
export type DepositRefundCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenancyId?: Prisma.SortOrder;
    depositHeld?: Prisma.SortOrder;
    refundAmount?: Prisma.SortOrder;
    refundDate?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DepositRefundAvgOrderByAggregateInput = {
    depositHeld?: Prisma.SortOrder;
    refundAmount?: Prisma.SortOrder;
};
export type DepositRefundMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenancyId?: Prisma.SortOrder;
    depositHeld?: Prisma.SortOrder;
    refundAmount?: Prisma.SortOrder;
    refundDate?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DepositRefundMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenancyId?: Prisma.SortOrder;
    depositHeld?: Prisma.SortOrder;
    refundAmount?: Prisma.SortOrder;
    refundDate?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DepositRefundSumOrderByAggregateInput = {
    depositHeld?: Prisma.SortOrder;
    refundAmount?: Prisma.SortOrder;
};
export type DepositRefundScalarRelationFilter = {
    is?: Prisma.DepositRefundWhereInput;
    isNot?: Prisma.DepositRefundWhereInput;
};
export type DepositRefundCreateNestedOneWithoutTenancyInput = {
    create?: Prisma.XOR<Prisma.DepositRefundCreateWithoutTenancyInput, Prisma.DepositRefundUncheckedCreateWithoutTenancyInput>;
    connectOrCreate?: Prisma.DepositRefundCreateOrConnectWithoutTenancyInput;
    connect?: Prisma.DepositRefundWhereUniqueInput;
};
export type DepositRefundUncheckedCreateNestedOneWithoutTenancyInput = {
    create?: Prisma.XOR<Prisma.DepositRefundCreateWithoutTenancyInput, Prisma.DepositRefundUncheckedCreateWithoutTenancyInput>;
    connectOrCreate?: Prisma.DepositRefundCreateOrConnectWithoutTenancyInput;
    connect?: Prisma.DepositRefundWhereUniqueInput;
};
export type DepositRefundUpdateOneWithoutTenancyNestedInput = {
    create?: Prisma.XOR<Prisma.DepositRefundCreateWithoutTenancyInput, Prisma.DepositRefundUncheckedCreateWithoutTenancyInput>;
    connectOrCreate?: Prisma.DepositRefundCreateOrConnectWithoutTenancyInput;
    upsert?: Prisma.DepositRefundUpsertWithoutTenancyInput;
    disconnect?: Prisma.DepositRefundWhereInput | boolean;
    delete?: Prisma.DepositRefundWhereInput | boolean;
    connect?: Prisma.DepositRefundWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DepositRefundUpdateToOneWithWhereWithoutTenancyInput, Prisma.DepositRefundUpdateWithoutTenancyInput>, Prisma.DepositRefundUncheckedUpdateWithoutTenancyInput>;
};
export type DepositRefundUncheckedUpdateOneWithoutTenancyNestedInput = {
    create?: Prisma.XOR<Prisma.DepositRefundCreateWithoutTenancyInput, Prisma.DepositRefundUncheckedCreateWithoutTenancyInput>;
    connectOrCreate?: Prisma.DepositRefundCreateOrConnectWithoutTenancyInput;
    upsert?: Prisma.DepositRefundUpsertWithoutTenancyInput;
    disconnect?: Prisma.DepositRefundWhereInput | boolean;
    delete?: Prisma.DepositRefundWhereInput | boolean;
    connect?: Prisma.DepositRefundWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DepositRefundUpdateToOneWithWhereWithoutTenancyInput, Prisma.DepositRefundUpdateWithoutTenancyInput>, Prisma.DepositRefundUncheckedUpdateWithoutTenancyInput>;
};
export type NullableEnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod | null;
};
export type DepositRefundCreateNestedOneWithoutDeductionsInput = {
    create?: Prisma.XOR<Prisma.DepositRefundCreateWithoutDeductionsInput, Prisma.DepositRefundUncheckedCreateWithoutDeductionsInput>;
    connectOrCreate?: Prisma.DepositRefundCreateOrConnectWithoutDeductionsInput;
    connect?: Prisma.DepositRefundWhereUniqueInput;
};
export type DepositRefundUpdateOneRequiredWithoutDeductionsNestedInput = {
    create?: Prisma.XOR<Prisma.DepositRefundCreateWithoutDeductionsInput, Prisma.DepositRefundUncheckedCreateWithoutDeductionsInput>;
    connectOrCreate?: Prisma.DepositRefundCreateOrConnectWithoutDeductionsInput;
    upsert?: Prisma.DepositRefundUpsertWithoutDeductionsInput;
    connect?: Prisma.DepositRefundWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DepositRefundUpdateToOneWithWhereWithoutDeductionsInput, Prisma.DepositRefundUpdateWithoutDeductionsInput>, Prisma.DepositRefundUncheckedUpdateWithoutDeductionsInput>;
};
export type DepositRefundCreateWithoutTenancyInput = {
    id?: string;
    depositHeld: runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundDate?: Date | string | null;
    method?: $Enums.PaymentMethod | null;
    notes?: string | null;
    createdAt?: Date | string;
    deductions?: Prisma.DepositDeductionCreateNestedManyWithoutRefundInput;
};
export type DepositRefundUncheckedCreateWithoutTenancyInput = {
    id?: string;
    depositHeld: runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundDate?: Date | string | null;
    method?: $Enums.PaymentMethod | null;
    notes?: string | null;
    createdAt?: Date | string;
    deductions?: Prisma.DepositDeductionUncheckedCreateNestedManyWithoutRefundInput;
};
export type DepositRefundCreateOrConnectWithoutTenancyInput = {
    where: Prisma.DepositRefundWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepositRefundCreateWithoutTenancyInput, Prisma.DepositRefundUncheckedCreateWithoutTenancyInput>;
};
export type DepositRefundUpsertWithoutTenancyInput = {
    update: Prisma.XOR<Prisma.DepositRefundUpdateWithoutTenancyInput, Prisma.DepositRefundUncheckedUpdateWithoutTenancyInput>;
    create: Prisma.XOR<Prisma.DepositRefundCreateWithoutTenancyInput, Prisma.DepositRefundUncheckedCreateWithoutTenancyInput>;
    where?: Prisma.DepositRefundWhereInput;
};
export type DepositRefundUpdateToOneWithWhereWithoutTenancyInput = {
    where?: Prisma.DepositRefundWhereInput;
    data: Prisma.XOR<Prisma.DepositRefundUpdateWithoutTenancyInput, Prisma.DepositRefundUncheckedUpdateWithoutTenancyInput>;
};
export type DepositRefundUpdateWithoutTenancyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    depositHeld?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    method?: Prisma.NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deductions?: Prisma.DepositDeductionUpdateManyWithoutRefundNestedInput;
};
export type DepositRefundUncheckedUpdateWithoutTenancyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    depositHeld?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    method?: Prisma.NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deductions?: Prisma.DepositDeductionUncheckedUpdateManyWithoutRefundNestedInput;
};
export type DepositRefundCreateWithoutDeductionsInput = {
    id?: string;
    depositHeld: runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundDate?: Date | string | null;
    method?: $Enums.PaymentMethod | null;
    notes?: string | null;
    createdAt?: Date | string;
    tenancy: Prisma.TenancyCreateNestedOneWithoutDepositRefundInput;
};
export type DepositRefundUncheckedCreateWithoutDeductionsInput = {
    id?: string;
    tenancyId: string;
    depositHeld: runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundDate?: Date | string | null;
    method?: $Enums.PaymentMethod | null;
    notes?: string | null;
    createdAt?: Date | string;
};
export type DepositRefundCreateOrConnectWithoutDeductionsInput = {
    where: Prisma.DepositRefundWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepositRefundCreateWithoutDeductionsInput, Prisma.DepositRefundUncheckedCreateWithoutDeductionsInput>;
};
export type DepositRefundUpsertWithoutDeductionsInput = {
    update: Prisma.XOR<Prisma.DepositRefundUpdateWithoutDeductionsInput, Prisma.DepositRefundUncheckedUpdateWithoutDeductionsInput>;
    create: Prisma.XOR<Prisma.DepositRefundCreateWithoutDeductionsInput, Prisma.DepositRefundUncheckedCreateWithoutDeductionsInput>;
    where?: Prisma.DepositRefundWhereInput;
};
export type DepositRefundUpdateToOneWithWhereWithoutDeductionsInput = {
    where?: Prisma.DepositRefundWhereInput;
    data: Prisma.XOR<Prisma.DepositRefundUpdateWithoutDeductionsInput, Prisma.DepositRefundUncheckedUpdateWithoutDeductionsInput>;
};
export type DepositRefundUpdateWithoutDeductionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    depositHeld?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    method?: Prisma.NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenancy?: Prisma.TenancyUpdateOneRequiredWithoutDepositRefundNestedInput;
};
export type DepositRefundUncheckedUpdateWithoutDeductionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenancyId?: Prisma.StringFieldUpdateOperationsInput | string;
    depositHeld?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    refundDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    method?: Prisma.NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DepositRefundCountOutputType = {
    deductions: number;
};
export type DepositRefundCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    deductions?: boolean | DepositRefundCountOutputTypeCountDeductionsArgs;
};
export type DepositRefundCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepositRefundCountOutputTypeSelect<ExtArgs> | null;
};
export type DepositRefundCountOutputTypeCountDeductionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepositDeductionWhereInput;
};
export type DepositRefundSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenancyId?: boolean;
    depositHeld?: boolean;
    refundAmount?: boolean;
    refundDate?: boolean;
    method?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    tenancy?: boolean | Prisma.TenancyDefaultArgs<ExtArgs>;
    deductions?: boolean | Prisma.DepositRefund$deductionsArgs<ExtArgs>;
    _count?: boolean | Prisma.DepositRefundCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["depositRefund"]>;
export type DepositRefundSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenancyId?: boolean;
    depositHeld?: boolean;
    refundAmount?: boolean;
    refundDate?: boolean;
    method?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    tenancy?: boolean | Prisma.TenancyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["depositRefund"]>;
export type DepositRefundSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenancyId?: boolean;
    depositHeld?: boolean;
    refundAmount?: boolean;
    refundDate?: boolean;
    method?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    tenancy?: boolean | Prisma.TenancyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["depositRefund"]>;
export type DepositRefundSelectScalar = {
    id?: boolean;
    tenancyId?: boolean;
    depositHeld?: boolean;
    refundAmount?: boolean;
    refundDate?: boolean;
    method?: boolean;
    notes?: boolean;
    createdAt?: boolean;
};
export type DepositRefundOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenancyId" | "depositHeld" | "refundAmount" | "refundDate" | "method" | "notes" | "createdAt", ExtArgs["result"]["depositRefund"]>;
export type DepositRefundInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenancy?: boolean | Prisma.TenancyDefaultArgs<ExtArgs>;
    deductions?: boolean | Prisma.DepositRefund$deductionsArgs<ExtArgs>;
    _count?: boolean | Prisma.DepositRefundCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DepositRefundIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenancy?: boolean | Prisma.TenancyDefaultArgs<ExtArgs>;
};
export type DepositRefundIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenancy?: boolean | Prisma.TenancyDefaultArgs<ExtArgs>;
};
export type $DepositRefundPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DepositRefund";
    objects: {
        tenancy: Prisma.$TenancyPayload<ExtArgs>;
        deductions: Prisma.$DepositDeductionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tenancyId: string;
        depositHeld: runtime.Decimal;
        refundAmount: runtime.Decimal;
        refundDate: Date | null;
        method: $Enums.PaymentMethod | null;
        notes: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["depositRefund"]>;
    composites: {};
};
export type DepositRefundGetPayload<S extends boolean | null | undefined | DepositRefundDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DepositRefundPayload, S>;
export type DepositRefundCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DepositRefundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DepositRefundCountAggregateInputType | true;
};
export interface DepositRefundDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DepositRefund'];
        meta: {
            name: 'DepositRefund';
        };
    };
    findUnique<T extends DepositRefundFindUniqueArgs>(args: Prisma.SelectSubset<T, DepositRefundFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DepositRefundClient<runtime.Types.Result.GetResult<Prisma.$DepositRefundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DepositRefundFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DepositRefundFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DepositRefundClient<runtime.Types.Result.GetResult<Prisma.$DepositRefundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DepositRefundFindFirstArgs>(args?: Prisma.SelectSubset<T, DepositRefundFindFirstArgs<ExtArgs>>): Prisma.Prisma__DepositRefundClient<runtime.Types.Result.GetResult<Prisma.$DepositRefundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DepositRefundFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DepositRefundFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DepositRefundClient<runtime.Types.Result.GetResult<Prisma.$DepositRefundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DepositRefundFindManyArgs>(args?: Prisma.SelectSubset<T, DepositRefundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepositRefundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DepositRefundCreateArgs>(args: Prisma.SelectSubset<T, DepositRefundCreateArgs<ExtArgs>>): Prisma.Prisma__DepositRefundClient<runtime.Types.Result.GetResult<Prisma.$DepositRefundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DepositRefundCreateManyArgs>(args?: Prisma.SelectSubset<T, DepositRefundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DepositRefundCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DepositRefundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepositRefundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DepositRefundDeleteArgs>(args: Prisma.SelectSubset<T, DepositRefundDeleteArgs<ExtArgs>>): Prisma.Prisma__DepositRefundClient<runtime.Types.Result.GetResult<Prisma.$DepositRefundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DepositRefundUpdateArgs>(args: Prisma.SelectSubset<T, DepositRefundUpdateArgs<ExtArgs>>): Prisma.Prisma__DepositRefundClient<runtime.Types.Result.GetResult<Prisma.$DepositRefundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DepositRefundDeleteManyArgs>(args?: Prisma.SelectSubset<T, DepositRefundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DepositRefundUpdateManyArgs>(args: Prisma.SelectSubset<T, DepositRefundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DepositRefundUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DepositRefundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepositRefundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DepositRefundUpsertArgs>(args: Prisma.SelectSubset<T, DepositRefundUpsertArgs<ExtArgs>>): Prisma.Prisma__DepositRefundClient<runtime.Types.Result.GetResult<Prisma.$DepositRefundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DepositRefundCountArgs>(args?: Prisma.Subset<T, DepositRefundCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DepositRefundCountAggregateOutputType> : number>;
    aggregate<T extends DepositRefundAggregateArgs>(args: Prisma.Subset<T, DepositRefundAggregateArgs>): Prisma.PrismaPromise<GetDepositRefundAggregateType<T>>;
    groupBy<T extends DepositRefundGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DepositRefundGroupByArgs['orderBy'];
    } : {
        orderBy?: DepositRefundGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DepositRefundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepositRefundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DepositRefundFieldRefs;
}
export interface Prisma__DepositRefundClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tenancy<T extends Prisma.TenancyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenancyDefaultArgs<ExtArgs>>): Prisma.Prisma__TenancyClient<runtime.Types.Result.GetResult<Prisma.$TenancyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    deductions<T extends Prisma.DepositRefund$deductionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DepositRefund$deductionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepositDeductionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DepositRefundFieldRefs {
    readonly id: Prisma.FieldRef<"DepositRefund", 'String'>;
    readonly tenancyId: Prisma.FieldRef<"DepositRefund", 'String'>;
    readonly depositHeld: Prisma.FieldRef<"DepositRefund", 'Decimal'>;
    readonly refundAmount: Prisma.FieldRef<"DepositRefund", 'Decimal'>;
    readonly refundDate: Prisma.FieldRef<"DepositRefund", 'DateTime'>;
    readonly method: Prisma.FieldRef<"DepositRefund", 'PaymentMethod'>;
    readonly notes: Prisma.FieldRef<"DepositRefund", 'String'>;
    readonly createdAt: Prisma.FieldRef<"DepositRefund", 'DateTime'>;
}
export type DepositRefundFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepositRefundSelect<ExtArgs> | null;
    omit?: Prisma.DepositRefundOmit<ExtArgs> | null;
    include?: Prisma.DepositRefundInclude<ExtArgs> | null;
    where: Prisma.DepositRefundWhereUniqueInput;
};
export type DepositRefundFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepositRefundSelect<ExtArgs> | null;
    omit?: Prisma.DepositRefundOmit<ExtArgs> | null;
    include?: Prisma.DepositRefundInclude<ExtArgs> | null;
    where: Prisma.DepositRefundWhereUniqueInput;
};
export type DepositRefundFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepositRefundSelect<ExtArgs> | null;
    omit?: Prisma.DepositRefundOmit<ExtArgs> | null;
    include?: Prisma.DepositRefundInclude<ExtArgs> | null;
    where?: Prisma.DepositRefundWhereInput;
    orderBy?: Prisma.DepositRefundOrderByWithRelationInput | Prisma.DepositRefundOrderByWithRelationInput[];
    cursor?: Prisma.DepositRefundWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepositRefundScalarFieldEnum | Prisma.DepositRefundScalarFieldEnum[];
};
export type DepositRefundFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepositRefundSelect<ExtArgs> | null;
    omit?: Prisma.DepositRefundOmit<ExtArgs> | null;
    include?: Prisma.DepositRefundInclude<ExtArgs> | null;
    where?: Prisma.DepositRefundWhereInput;
    orderBy?: Prisma.DepositRefundOrderByWithRelationInput | Prisma.DepositRefundOrderByWithRelationInput[];
    cursor?: Prisma.DepositRefundWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepositRefundScalarFieldEnum | Prisma.DepositRefundScalarFieldEnum[];
};
export type DepositRefundFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepositRefundSelect<ExtArgs> | null;
    omit?: Prisma.DepositRefundOmit<ExtArgs> | null;
    include?: Prisma.DepositRefundInclude<ExtArgs> | null;
    where?: Prisma.DepositRefundWhereInput;
    orderBy?: Prisma.DepositRefundOrderByWithRelationInput | Prisma.DepositRefundOrderByWithRelationInput[];
    cursor?: Prisma.DepositRefundWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepositRefundScalarFieldEnum | Prisma.DepositRefundScalarFieldEnum[];
};
export type DepositRefundCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepositRefundSelect<ExtArgs> | null;
    omit?: Prisma.DepositRefundOmit<ExtArgs> | null;
    include?: Prisma.DepositRefundInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepositRefundCreateInput, Prisma.DepositRefundUncheckedCreateInput>;
};
export type DepositRefundCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DepositRefundCreateManyInput | Prisma.DepositRefundCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DepositRefundCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepositRefundSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DepositRefundOmit<ExtArgs> | null;
    data: Prisma.DepositRefundCreateManyInput | Prisma.DepositRefundCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DepositRefundIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DepositRefundUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepositRefundSelect<ExtArgs> | null;
    omit?: Prisma.DepositRefundOmit<ExtArgs> | null;
    include?: Prisma.DepositRefundInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepositRefundUpdateInput, Prisma.DepositRefundUncheckedUpdateInput>;
    where: Prisma.DepositRefundWhereUniqueInput;
};
export type DepositRefundUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DepositRefundUpdateManyMutationInput, Prisma.DepositRefundUncheckedUpdateManyInput>;
    where?: Prisma.DepositRefundWhereInput;
    limit?: number;
};
export type DepositRefundUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepositRefundSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DepositRefundOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepositRefundUpdateManyMutationInput, Prisma.DepositRefundUncheckedUpdateManyInput>;
    where?: Prisma.DepositRefundWhereInput;
    limit?: number;
    include?: Prisma.DepositRefundIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DepositRefundUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepositRefundSelect<ExtArgs> | null;
    omit?: Prisma.DepositRefundOmit<ExtArgs> | null;
    include?: Prisma.DepositRefundInclude<ExtArgs> | null;
    where: Prisma.DepositRefundWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepositRefundCreateInput, Prisma.DepositRefundUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DepositRefundUpdateInput, Prisma.DepositRefundUncheckedUpdateInput>;
};
export type DepositRefundDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepositRefundSelect<ExtArgs> | null;
    omit?: Prisma.DepositRefundOmit<ExtArgs> | null;
    include?: Prisma.DepositRefundInclude<ExtArgs> | null;
    where: Prisma.DepositRefundWhereUniqueInput;
};
export type DepositRefundDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepositRefundWhereInput;
    limit?: number;
};
export type DepositRefund$deductionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepositDeductionSelect<ExtArgs> | null;
    omit?: Prisma.DepositDeductionOmit<ExtArgs> | null;
    include?: Prisma.DepositDeductionInclude<ExtArgs> | null;
    where?: Prisma.DepositDeductionWhereInput;
    orderBy?: Prisma.DepositDeductionOrderByWithRelationInput | Prisma.DepositDeductionOrderByWithRelationInput[];
    cursor?: Prisma.DepositDeductionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepositDeductionScalarFieldEnum | Prisma.DepositDeductionScalarFieldEnum[];
};
export type DepositRefundDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepositRefundSelect<ExtArgs> | null;
    omit?: Prisma.DepositRefundOmit<ExtArgs> | null;
    include?: Prisma.DepositRefundInclude<ExtArgs> | null;
};
