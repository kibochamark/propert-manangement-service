import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ChargeModel = runtime.Types.Result.DefaultSelection<Prisma.$ChargePayload>;
export type AggregateCharge = {
    _count: ChargeCountAggregateOutputType | null;
    _avg: ChargeAvgAggregateOutputType | null;
    _sum: ChargeSumAggregateOutputType | null;
    _min: ChargeMinAggregateOutputType | null;
    _max: ChargeMaxAggregateOutputType | null;
};
export type ChargeAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type ChargeSumAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type ChargeMinAggregateOutputType = {
    id: string | null;
    tenancyId: string | null;
    type: $Enums.ChargeType | null;
    periodMonth: Date | null;
    amount: runtime.Decimal | null;
    description: string | null;
    dueDate: Date | null;
    voidedAt: Date | null;
    voidReason: string | null;
    voidedById: string | null;
    createdById: string | null;
    createdAt: Date | null;
};
export type ChargeMaxAggregateOutputType = {
    id: string | null;
    tenancyId: string | null;
    type: $Enums.ChargeType | null;
    periodMonth: Date | null;
    amount: runtime.Decimal | null;
    description: string | null;
    dueDate: Date | null;
    voidedAt: Date | null;
    voidReason: string | null;
    voidedById: string | null;
    createdById: string | null;
    createdAt: Date | null;
};
export type ChargeCountAggregateOutputType = {
    id: number;
    tenancyId: number;
    type: number;
    periodMonth: number;
    amount: number;
    description: number;
    dueDate: number;
    voidedAt: number;
    voidReason: number;
    voidedById: number;
    createdById: number;
    createdAt: number;
    _all: number;
};
export type ChargeAvgAggregateInputType = {
    amount?: true;
};
export type ChargeSumAggregateInputType = {
    amount?: true;
};
export type ChargeMinAggregateInputType = {
    id?: true;
    tenancyId?: true;
    type?: true;
    periodMonth?: true;
    amount?: true;
    description?: true;
    dueDate?: true;
    voidedAt?: true;
    voidReason?: true;
    voidedById?: true;
    createdById?: true;
    createdAt?: true;
};
export type ChargeMaxAggregateInputType = {
    id?: true;
    tenancyId?: true;
    type?: true;
    periodMonth?: true;
    amount?: true;
    description?: true;
    dueDate?: true;
    voidedAt?: true;
    voidReason?: true;
    voidedById?: true;
    createdById?: true;
    createdAt?: true;
};
export type ChargeCountAggregateInputType = {
    id?: true;
    tenancyId?: true;
    type?: true;
    periodMonth?: true;
    amount?: true;
    description?: true;
    dueDate?: true;
    voidedAt?: true;
    voidReason?: true;
    voidedById?: true;
    createdById?: true;
    createdAt?: true;
    _all?: true;
};
export type ChargeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChargeWhereInput;
    orderBy?: Prisma.ChargeOrderByWithRelationInput | Prisma.ChargeOrderByWithRelationInput[];
    cursor?: Prisma.ChargeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ChargeCountAggregateInputType;
    _avg?: ChargeAvgAggregateInputType;
    _sum?: ChargeSumAggregateInputType;
    _min?: ChargeMinAggregateInputType;
    _max?: ChargeMaxAggregateInputType;
};
export type GetChargeAggregateType<T extends ChargeAggregateArgs> = {
    [P in keyof T & keyof AggregateCharge]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCharge[P]> : Prisma.GetScalarType<T[P], AggregateCharge[P]>;
};
export type ChargeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChargeWhereInput;
    orderBy?: Prisma.ChargeOrderByWithAggregationInput | Prisma.ChargeOrderByWithAggregationInput[];
    by: Prisma.ChargeScalarFieldEnum[] | Prisma.ChargeScalarFieldEnum;
    having?: Prisma.ChargeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChargeCountAggregateInputType | true;
    _avg?: ChargeAvgAggregateInputType;
    _sum?: ChargeSumAggregateInputType;
    _min?: ChargeMinAggregateInputType;
    _max?: ChargeMaxAggregateInputType;
};
export type ChargeGroupByOutputType = {
    id: string;
    tenancyId: string;
    type: $Enums.ChargeType;
    periodMonth: Date | null;
    amount: runtime.Decimal;
    description: string | null;
    dueDate: Date | null;
    voidedAt: Date | null;
    voidReason: string | null;
    voidedById: string | null;
    createdById: string;
    createdAt: Date;
    _count: ChargeCountAggregateOutputType | null;
    _avg: ChargeAvgAggregateOutputType | null;
    _sum: ChargeSumAggregateOutputType | null;
    _min: ChargeMinAggregateOutputType | null;
    _max: ChargeMaxAggregateOutputType | null;
};
export type GetChargeGroupByPayload<T extends ChargeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ChargeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ChargeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ChargeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ChargeGroupByOutputType[P]>;
}>>;
export type ChargeWhereInput = {
    AND?: Prisma.ChargeWhereInput | Prisma.ChargeWhereInput[];
    OR?: Prisma.ChargeWhereInput[];
    NOT?: Prisma.ChargeWhereInput | Prisma.ChargeWhereInput[];
    id?: Prisma.StringFilter<"Charge"> | string;
    tenancyId?: Prisma.StringFilter<"Charge"> | string;
    type?: Prisma.EnumChargeTypeFilter<"Charge"> | $Enums.ChargeType;
    periodMonth?: Prisma.DateTimeNullableFilter<"Charge"> | Date | string | null;
    amount?: Prisma.DecimalFilter<"Charge"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.StringNullableFilter<"Charge"> | string | null;
    dueDate?: Prisma.DateTimeNullableFilter<"Charge"> | Date | string | null;
    voidedAt?: Prisma.DateTimeNullableFilter<"Charge"> | Date | string | null;
    voidReason?: Prisma.StringNullableFilter<"Charge"> | string | null;
    voidedById?: Prisma.StringNullableFilter<"Charge"> | string | null;
    createdById?: Prisma.StringFilter<"Charge"> | string;
    createdAt?: Prisma.DateTimeFilter<"Charge"> | Date | string;
    tenancy?: Prisma.XOR<Prisma.TenancyScalarRelationFilter, Prisma.TenancyWhereInput>;
    voidedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    allocations?: Prisma.PaymentAllocationListRelationFilter;
};
export type ChargeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tenancyId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    periodMonth?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    voidedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    voidReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    voidedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    tenancy?: Prisma.TenancyOrderByWithRelationInput;
    voidedBy?: Prisma.UserOrderByWithRelationInput;
    createdBy?: Prisma.UserOrderByWithRelationInput;
    allocations?: Prisma.PaymentAllocationOrderByRelationAggregateInput;
};
export type ChargeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tenancyId_type_periodMonth?: Prisma.ChargeTenancyIdTypePeriodMonthCompoundUniqueInput;
    AND?: Prisma.ChargeWhereInput | Prisma.ChargeWhereInput[];
    OR?: Prisma.ChargeWhereInput[];
    NOT?: Prisma.ChargeWhereInput | Prisma.ChargeWhereInput[];
    tenancyId?: Prisma.StringFilter<"Charge"> | string;
    type?: Prisma.EnumChargeTypeFilter<"Charge"> | $Enums.ChargeType;
    periodMonth?: Prisma.DateTimeNullableFilter<"Charge"> | Date | string | null;
    amount?: Prisma.DecimalFilter<"Charge"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.StringNullableFilter<"Charge"> | string | null;
    dueDate?: Prisma.DateTimeNullableFilter<"Charge"> | Date | string | null;
    voidedAt?: Prisma.DateTimeNullableFilter<"Charge"> | Date | string | null;
    voidReason?: Prisma.StringNullableFilter<"Charge"> | string | null;
    voidedById?: Prisma.StringNullableFilter<"Charge"> | string | null;
    createdById?: Prisma.StringFilter<"Charge"> | string;
    createdAt?: Prisma.DateTimeFilter<"Charge"> | Date | string;
    tenancy?: Prisma.XOR<Prisma.TenancyScalarRelationFilter, Prisma.TenancyWhereInput>;
    voidedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    allocations?: Prisma.PaymentAllocationListRelationFilter;
}, "id" | "tenancyId_type_periodMonth">;
export type ChargeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tenancyId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    periodMonth?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    voidedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    voidReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    voidedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ChargeCountOrderByAggregateInput;
    _avg?: Prisma.ChargeAvgOrderByAggregateInput;
    _max?: Prisma.ChargeMaxOrderByAggregateInput;
    _min?: Prisma.ChargeMinOrderByAggregateInput;
    _sum?: Prisma.ChargeSumOrderByAggregateInput;
};
export type ChargeScalarWhereWithAggregatesInput = {
    AND?: Prisma.ChargeScalarWhereWithAggregatesInput | Prisma.ChargeScalarWhereWithAggregatesInput[];
    OR?: Prisma.ChargeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ChargeScalarWhereWithAggregatesInput | Prisma.ChargeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Charge"> | string;
    tenancyId?: Prisma.StringWithAggregatesFilter<"Charge"> | string;
    type?: Prisma.EnumChargeTypeWithAggregatesFilter<"Charge"> | $Enums.ChargeType;
    periodMonth?: Prisma.DateTimeNullableWithAggregatesFilter<"Charge"> | Date | string | null;
    amount?: Prisma.DecimalWithAggregatesFilter<"Charge"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Charge"> | string | null;
    dueDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Charge"> | Date | string | null;
    voidedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Charge"> | Date | string | null;
    voidReason?: Prisma.StringNullableWithAggregatesFilter<"Charge"> | string | null;
    voidedById?: Prisma.StringNullableWithAggregatesFilter<"Charge"> | string | null;
    createdById?: Prisma.StringWithAggregatesFilter<"Charge"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Charge"> | Date | string;
};
export type ChargeCreateInput = {
    id?: string;
    type: $Enums.ChargeType;
    periodMonth?: Date | string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    dueDate?: Date | string | null;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    createdAt?: Date | string;
    tenancy: Prisma.TenancyCreateNestedOneWithoutChargesInput;
    voidedBy?: Prisma.UserCreateNestedOneWithoutChargesVoidedInput;
    createdBy: Prisma.UserCreateNestedOneWithoutChargesCreatedInput;
    allocations?: Prisma.PaymentAllocationCreateNestedManyWithoutChargeInput;
};
export type ChargeUncheckedCreateInput = {
    id?: string;
    tenancyId: string;
    type: $Enums.ChargeType;
    periodMonth?: Date | string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    dueDate?: Date | string | null;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    voidedById?: string | null;
    createdById: string;
    createdAt?: Date | string;
    allocations?: Prisma.PaymentAllocationUncheckedCreateNestedManyWithoutChargeInput;
};
export type ChargeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType;
    periodMonth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenancy?: Prisma.TenancyUpdateOneRequiredWithoutChargesNestedInput;
    voidedBy?: Prisma.UserUpdateOneWithoutChargesVoidedNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutChargesCreatedNestedInput;
    allocations?: Prisma.PaymentAllocationUpdateManyWithoutChargeNestedInput;
};
export type ChargeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenancyId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType;
    periodMonth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voidedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    allocations?: Prisma.PaymentAllocationUncheckedUpdateManyWithoutChargeNestedInput;
};
export type ChargeCreateManyInput = {
    id?: string;
    tenancyId: string;
    type: $Enums.ChargeType;
    periodMonth?: Date | string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    dueDate?: Date | string | null;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    voidedById?: string | null;
    createdById: string;
    createdAt?: Date | string;
};
export type ChargeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType;
    periodMonth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChargeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenancyId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType;
    periodMonth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voidedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChargeListRelationFilter = {
    every?: Prisma.ChargeWhereInput;
    some?: Prisma.ChargeWhereInput;
    none?: Prisma.ChargeWhereInput;
};
export type ChargeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ChargeTenancyIdTypePeriodMonthCompoundUniqueInput = {
    tenancyId: string;
    type: $Enums.ChargeType;
    periodMonth: Date | string;
};
export type ChargeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenancyId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    periodMonth?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    voidedAt?: Prisma.SortOrder;
    voidReason?: Prisma.SortOrder;
    voidedById?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ChargeAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type ChargeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenancyId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    periodMonth?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    voidedAt?: Prisma.SortOrder;
    voidReason?: Prisma.SortOrder;
    voidedById?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ChargeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenancyId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    periodMonth?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    voidedAt?: Prisma.SortOrder;
    voidReason?: Prisma.SortOrder;
    voidedById?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ChargeSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type ChargeScalarRelationFilter = {
    is?: Prisma.ChargeWhereInput;
    isNot?: Prisma.ChargeWhereInput;
};
export type ChargeCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.ChargeCreateWithoutCreatedByInput, Prisma.ChargeUncheckedCreateWithoutCreatedByInput> | Prisma.ChargeCreateWithoutCreatedByInput[] | Prisma.ChargeUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ChargeCreateOrConnectWithoutCreatedByInput | Prisma.ChargeCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.ChargeCreateManyCreatedByInputEnvelope;
    connect?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
};
export type ChargeCreateNestedManyWithoutVoidedByInput = {
    create?: Prisma.XOR<Prisma.ChargeCreateWithoutVoidedByInput, Prisma.ChargeUncheckedCreateWithoutVoidedByInput> | Prisma.ChargeCreateWithoutVoidedByInput[] | Prisma.ChargeUncheckedCreateWithoutVoidedByInput[];
    connectOrCreate?: Prisma.ChargeCreateOrConnectWithoutVoidedByInput | Prisma.ChargeCreateOrConnectWithoutVoidedByInput[];
    createMany?: Prisma.ChargeCreateManyVoidedByInputEnvelope;
    connect?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
};
export type ChargeUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.ChargeCreateWithoutCreatedByInput, Prisma.ChargeUncheckedCreateWithoutCreatedByInput> | Prisma.ChargeCreateWithoutCreatedByInput[] | Prisma.ChargeUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ChargeCreateOrConnectWithoutCreatedByInput | Prisma.ChargeCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.ChargeCreateManyCreatedByInputEnvelope;
    connect?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
};
export type ChargeUncheckedCreateNestedManyWithoutVoidedByInput = {
    create?: Prisma.XOR<Prisma.ChargeCreateWithoutVoidedByInput, Prisma.ChargeUncheckedCreateWithoutVoidedByInput> | Prisma.ChargeCreateWithoutVoidedByInput[] | Prisma.ChargeUncheckedCreateWithoutVoidedByInput[];
    connectOrCreate?: Prisma.ChargeCreateOrConnectWithoutVoidedByInput | Prisma.ChargeCreateOrConnectWithoutVoidedByInput[];
    createMany?: Prisma.ChargeCreateManyVoidedByInputEnvelope;
    connect?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
};
export type ChargeUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.ChargeCreateWithoutCreatedByInput, Prisma.ChargeUncheckedCreateWithoutCreatedByInput> | Prisma.ChargeCreateWithoutCreatedByInput[] | Prisma.ChargeUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ChargeCreateOrConnectWithoutCreatedByInput | Prisma.ChargeCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.ChargeUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.ChargeUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.ChargeCreateManyCreatedByInputEnvelope;
    set?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
    disconnect?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
    delete?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
    connect?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
    update?: Prisma.ChargeUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.ChargeUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.ChargeUpdateManyWithWhereWithoutCreatedByInput | Prisma.ChargeUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.ChargeScalarWhereInput | Prisma.ChargeScalarWhereInput[];
};
export type ChargeUpdateManyWithoutVoidedByNestedInput = {
    create?: Prisma.XOR<Prisma.ChargeCreateWithoutVoidedByInput, Prisma.ChargeUncheckedCreateWithoutVoidedByInput> | Prisma.ChargeCreateWithoutVoidedByInput[] | Prisma.ChargeUncheckedCreateWithoutVoidedByInput[];
    connectOrCreate?: Prisma.ChargeCreateOrConnectWithoutVoidedByInput | Prisma.ChargeCreateOrConnectWithoutVoidedByInput[];
    upsert?: Prisma.ChargeUpsertWithWhereUniqueWithoutVoidedByInput | Prisma.ChargeUpsertWithWhereUniqueWithoutVoidedByInput[];
    createMany?: Prisma.ChargeCreateManyVoidedByInputEnvelope;
    set?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
    disconnect?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
    delete?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
    connect?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
    update?: Prisma.ChargeUpdateWithWhereUniqueWithoutVoidedByInput | Prisma.ChargeUpdateWithWhereUniqueWithoutVoidedByInput[];
    updateMany?: Prisma.ChargeUpdateManyWithWhereWithoutVoidedByInput | Prisma.ChargeUpdateManyWithWhereWithoutVoidedByInput[];
    deleteMany?: Prisma.ChargeScalarWhereInput | Prisma.ChargeScalarWhereInput[];
};
export type ChargeUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.ChargeCreateWithoutCreatedByInput, Prisma.ChargeUncheckedCreateWithoutCreatedByInput> | Prisma.ChargeCreateWithoutCreatedByInput[] | Prisma.ChargeUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ChargeCreateOrConnectWithoutCreatedByInput | Prisma.ChargeCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.ChargeUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.ChargeUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.ChargeCreateManyCreatedByInputEnvelope;
    set?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
    disconnect?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
    delete?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
    connect?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
    update?: Prisma.ChargeUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.ChargeUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.ChargeUpdateManyWithWhereWithoutCreatedByInput | Prisma.ChargeUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.ChargeScalarWhereInput | Prisma.ChargeScalarWhereInput[];
};
export type ChargeUncheckedUpdateManyWithoutVoidedByNestedInput = {
    create?: Prisma.XOR<Prisma.ChargeCreateWithoutVoidedByInput, Prisma.ChargeUncheckedCreateWithoutVoidedByInput> | Prisma.ChargeCreateWithoutVoidedByInput[] | Prisma.ChargeUncheckedCreateWithoutVoidedByInput[];
    connectOrCreate?: Prisma.ChargeCreateOrConnectWithoutVoidedByInput | Prisma.ChargeCreateOrConnectWithoutVoidedByInput[];
    upsert?: Prisma.ChargeUpsertWithWhereUniqueWithoutVoidedByInput | Prisma.ChargeUpsertWithWhereUniqueWithoutVoidedByInput[];
    createMany?: Prisma.ChargeCreateManyVoidedByInputEnvelope;
    set?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
    disconnect?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
    delete?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
    connect?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
    update?: Prisma.ChargeUpdateWithWhereUniqueWithoutVoidedByInput | Prisma.ChargeUpdateWithWhereUniqueWithoutVoidedByInput[];
    updateMany?: Prisma.ChargeUpdateManyWithWhereWithoutVoidedByInput | Prisma.ChargeUpdateManyWithWhereWithoutVoidedByInput[];
    deleteMany?: Prisma.ChargeScalarWhereInput | Prisma.ChargeScalarWhereInput[];
};
export type ChargeCreateNestedManyWithoutTenancyInput = {
    create?: Prisma.XOR<Prisma.ChargeCreateWithoutTenancyInput, Prisma.ChargeUncheckedCreateWithoutTenancyInput> | Prisma.ChargeCreateWithoutTenancyInput[] | Prisma.ChargeUncheckedCreateWithoutTenancyInput[];
    connectOrCreate?: Prisma.ChargeCreateOrConnectWithoutTenancyInput | Prisma.ChargeCreateOrConnectWithoutTenancyInput[];
    createMany?: Prisma.ChargeCreateManyTenancyInputEnvelope;
    connect?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
};
export type ChargeUncheckedCreateNestedManyWithoutTenancyInput = {
    create?: Prisma.XOR<Prisma.ChargeCreateWithoutTenancyInput, Prisma.ChargeUncheckedCreateWithoutTenancyInput> | Prisma.ChargeCreateWithoutTenancyInput[] | Prisma.ChargeUncheckedCreateWithoutTenancyInput[];
    connectOrCreate?: Prisma.ChargeCreateOrConnectWithoutTenancyInput | Prisma.ChargeCreateOrConnectWithoutTenancyInput[];
    createMany?: Prisma.ChargeCreateManyTenancyInputEnvelope;
    connect?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
};
export type ChargeUpdateManyWithoutTenancyNestedInput = {
    create?: Prisma.XOR<Prisma.ChargeCreateWithoutTenancyInput, Prisma.ChargeUncheckedCreateWithoutTenancyInput> | Prisma.ChargeCreateWithoutTenancyInput[] | Prisma.ChargeUncheckedCreateWithoutTenancyInput[];
    connectOrCreate?: Prisma.ChargeCreateOrConnectWithoutTenancyInput | Prisma.ChargeCreateOrConnectWithoutTenancyInput[];
    upsert?: Prisma.ChargeUpsertWithWhereUniqueWithoutTenancyInput | Prisma.ChargeUpsertWithWhereUniqueWithoutTenancyInput[];
    createMany?: Prisma.ChargeCreateManyTenancyInputEnvelope;
    set?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
    disconnect?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
    delete?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
    connect?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
    update?: Prisma.ChargeUpdateWithWhereUniqueWithoutTenancyInput | Prisma.ChargeUpdateWithWhereUniqueWithoutTenancyInput[];
    updateMany?: Prisma.ChargeUpdateManyWithWhereWithoutTenancyInput | Prisma.ChargeUpdateManyWithWhereWithoutTenancyInput[];
    deleteMany?: Prisma.ChargeScalarWhereInput | Prisma.ChargeScalarWhereInput[];
};
export type ChargeUncheckedUpdateManyWithoutTenancyNestedInput = {
    create?: Prisma.XOR<Prisma.ChargeCreateWithoutTenancyInput, Prisma.ChargeUncheckedCreateWithoutTenancyInput> | Prisma.ChargeCreateWithoutTenancyInput[] | Prisma.ChargeUncheckedCreateWithoutTenancyInput[];
    connectOrCreate?: Prisma.ChargeCreateOrConnectWithoutTenancyInput | Prisma.ChargeCreateOrConnectWithoutTenancyInput[];
    upsert?: Prisma.ChargeUpsertWithWhereUniqueWithoutTenancyInput | Prisma.ChargeUpsertWithWhereUniqueWithoutTenancyInput[];
    createMany?: Prisma.ChargeCreateManyTenancyInputEnvelope;
    set?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
    disconnect?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
    delete?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
    connect?: Prisma.ChargeWhereUniqueInput | Prisma.ChargeWhereUniqueInput[];
    update?: Prisma.ChargeUpdateWithWhereUniqueWithoutTenancyInput | Prisma.ChargeUpdateWithWhereUniqueWithoutTenancyInput[];
    updateMany?: Prisma.ChargeUpdateManyWithWhereWithoutTenancyInput | Prisma.ChargeUpdateManyWithWhereWithoutTenancyInput[];
    deleteMany?: Prisma.ChargeScalarWhereInput | Prisma.ChargeScalarWhereInput[];
};
export type EnumChargeTypeFieldUpdateOperationsInput = {
    set?: $Enums.ChargeType;
};
export type ChargeCreateNestedOneWithoutAllocationsInput = {
    create?: Prisma.XOR<Prisma.ChargeCreateWithoutAllocationsInput, Prisma.ChargeUncheckedCreateWithoutAllocationsInput>;
    connectOrCreate?: Prisma.ChargeCreateOrConnectWithoutAllocationsInput;
    connect?: Prisma.ChargeWhereUniqueInput;
};
export type ChargeUpdateOneRequiredWithoutAllocationsNestedInput = {
    create?: Prisma.XOR<Prisma.ChargeCreateWithoutAllocationsInput, Prisma.ChargeUncheckedCreateWithoutAllocationsInput>;
    connectOrCreate?: Prisma.ChargeCreateOrConnectWithoutAllocationsInput;
    upsert?: Prisma.ChargeUpsertWithoutAllocationsInput;
    connect?: Prisma.ChargeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ChargeUpdateToOneWithWhereWithoutAllocationsInput, Prisma.ChargeUpdateWithoutAllocationsInput>, Prisma.ChargeUncheckedUpdateWithoutAllocationsInput>;
};
export type ChargeCreateWithoutCreatedByInput = {
    id?: string;
    type: $Enums.ChargeType;
    periodMonth?: Date | string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    dueDate?: Date | string | null;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    createdAt?: Date | string;
    tenancy: Prisma.TenancyCreateNestedOneWithoutChargesInput;
    voidedBy?: Prisma.UserCreateNestedOneWithoutChargesVoidedInput;
    allocations?: Prisma.PaymentAllocationCreateNestedManyWithoutChargeInput;
};
export type ChargeUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    tenancyId: string;
    type: $Enums.ChargeType;
    periodMonth?: Date | string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    dueDate?: Date | string | null;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    voidedById?: string | null;
    createdAt?: Date | string;
    allocations?: Prisma.PaymentAllocationUncheckedCreateNestedManyWithoutChargeInput;
};
export type ChargeCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.ChargeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChargeCreateWithoutCreatedByInput, Prisma.ChargeUncheckedCreateWithoutCreatedByInput>;
};
export type ChargeCreateManyCreatedByInputEnvelope = {
    data: Prisma.ChargeCreateManyCreatedByInput | Prisma.ChargeCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type ChargeCreateWithoutVoidedByInput = {
    id?: string;
    type: $Enums.ChargeType;
    periodMonth?: Date | string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    dueDate?: Date | string | null;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    createdAt?: Date | string;
    tenancy: Prisma.TenancyCreateNestedOneWithoutChargesInput;
    createdBy: Prisma.UserCreateNestedOneWithoutChargesCreatedInput;
    allocations?: Prisma.PaymentAllocationCreateNestedManyWithoutChargeInput;
};
export type ChargeUncheckedCreateWithoutVoidedByInput = {
    id?: string;
    tenancyId: string;
    type: $Enums.ChargeType;
    periodMonth?: Date | string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    dueDate?: Date | string | null;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    createdById: string;
    createdAt?: Date | string;
    allocations?: Prisma.PaymentAllocationUncheckedCreateNestedManyWithoutChargeInput;
};
export type ChargeCreateOrConnectWithoutVoidedByInput = {
    where: Prisma.ChargeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChargeCreateWithoutVoidedByInput, Prisma.ChargeUncheckedCreateWithoutVoidedByInput>;
};
export type ChargeCreateManyVoidedByInputEnvelope = {
    data: Prisma.ChargeCreateManyVoidedByInput | Prisma.ChargeCreateManyVoidedByInput[];
    skipDuplicates?: boolean;
};
export type ChargeUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.ChargeWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChargeUpdateWithoutCreatedByInput, Prisma.ChargeUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.ChargeCreateWithoutCreatedByInput, Prisma.ChargeUncheckedCreateWithoutCreatedByInput>;
};
export type ChargeUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.ChargeWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChargeUpdateWithoutCreatedByInput, Prisma.ChargeUncheckedUpdateWithoutCreatedByInput>;
};
export type ChargeUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.ChargeScalarWhereInput;
    data: Prisma.XOR<Prisma.ChargeUpdateManyMutationInput, Prisma.ChargeUncheckedUpdateManyWithoutCreatedByInput>;
};
export type ChargeScalarWhereInput = {
    AND?: Prisma.ChargeScalarWhereInput | Prisma.ChargeScalarWhereInput[];
    OR?: Prisma.ChargeScalarWhereInput[];
    NOT?: Prisma.ChargeScalarWhereInput | Prisma.ChargeScalarWhereInput[];
    id?: Prisma.StringFilter<"Charge"> | string;
    tenancyId?: Prisma.StringFilter<"Charge"> | string;
    type?: Prisma.EnumChargeTypeFilter<"Charge"> | $Enums.ChargeType;
    periodMonth?: Prisma.DateTimeNullableFilter<"Charge"> | Date | string | null;
    amount?: Prisma.DecimalFilter<"Charge"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.StringNullableFilter<"Charge"> | string | null;
    dueDate?: Prisma.DateTimeNullableFilter<"Charge"> | Date | string | null;
    voidedAt?: Prisma.DateTimeNullableFilter<"Charge"> | Date | string | null;
    voidReason?: Prisma.StringNullableFilter<"Charge"> | string | null;
    voidedById?: Prisma.StringNullableFilter<"Charge"> | string | null;
    createdById?: Prisma.StringFilter<"Charge"> | string;
    createdAt?: Prisma.DateTimeFilter<"Charge"> | Date | string;
};
export type ChargeUpsertWithWhereUniqueWithoutVoidedByInput = {
    where: Prisma.ChargeWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChargeUpdateWithoutVoidedByInput, Prisma.ChargeUncheckedUpdateWithoutVoidedByInput>;
    create: Prisma.XOR<Prisma.ChargeCreateWithoutVoidedByInput, Prisma.ChargeUncheckedCreateWithoutVoidedByInput>;
};
export type ChargeUpdateWithWhereUniqueWithoutVoidedByInput = {
    where: Prisma.ChargeWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChargeUpdateWithoutVoidedByInput, Prisma.ChargeUncheckedUpdateWithoutVoidedByInput>;
};
export type ChargeUpdateManyWithWhereWithoutVoidedByInput = {
    where: Prisma.ChargeScalarWhereInput;
    data: Prisma.XOR<Prisma.ChargeUpdateManyMutationInput, Prisma.ChargeUncheckedUpdateManyWithoutVoidedByInput>;
};
export type ChargeCreateWithoutTenancyInput = {
    id?: string;
    type: $Enums.ChargeType;
    periodMonth?: Date | string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    dueDate?: Date | string | null;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    createdAt?: Date | string;
    voidedBy?: Prisma.UserCreateNestedOneWithoutChargesVoidedInput;
    createdBy: Prisma.UserCreateNestedOneWithoutChargesCreatedInput;
    allocations?: Prisma.PaymentAllocationCreateNestedManyWithoutChargeInput;
};
export type ChargeUncheckedCreateWithoutTenancyInput = {
    id?: string;
    type: $Enums.ChargeType;
    periodMonth?: Date | string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    dueDate?: Date | string | null;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    voidedById?: string | null;
    createdById: string;
    createdAt?: Date | string;
    allocations?: Prisma.PaymentAllocationUncheckedCreateNestedManyWithoutChargeInput;
};
export type ChargeCreateOrConnectWithoutTenancyInput = {
    where: Prisma.ChargeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChargeCreateWithoutTenancyInput, Prisma.ChargeUncheckedCreateWithoutTenancyInput>;
};
export type ChargeCreateManyTenancyInputEnvelope = {
    data: Prisma.ChargeCreateManyTenancyInput | Prisma.ChargeCreateManyTenancyInput[];
    skipDuplicates?: boolean;
};
export type ChargeUpsertWithWhereUniqueWithoutTenancyInput = {
    where: Prisma.ChargeWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChargeUpdateWithoutTenancyInput, Prisma.ChargeUncheckedUpdateWithoutTenancyInput>;
    create: Prisma.XOR<Prisma.ChargeCreateWithoutTenancyInput, Prisma.ChargeUncheckedCreateWithoutTenancyInput>;
};
export type ChargeUpdateWithWhereUniqueWithoutTenancyInput = {
    where: Prisma.ChargeWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChargeUpdateWithoutTenancyInput, Prisma.ChargeUncheckedUpdateWithoutTenancyInput>;
};
export type ChargeUpdateManyWithWhereWithoutTenancyInput = {
    where: Prisma.ChargeScalarWhereInput;
    data: Prisma.XOR<Prisma.ChargeUpdateManyMutationInput, Prisma.ChargeUncheckedUpdateManyWithoutTenancyInput>;
};
export type ChargeCreateWithoutAllocationsInput = {
    id?: string;
    type: $Enums.ChargeType;
    periodMonth?: Date | string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    dueDate?: Date | string | null;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    createdAt?: Date | string;
    tenancy: Prisma.TenancyCreateNestedOneWithoutChargesInput;
    voidedBy?: Prisma.UserCreateNestedOneWithoutChargesVoidedInput;
    createdBy: Prisma.UserCreateNestedOneWithoutChargesCreatedInput;
};
export type ChargeUncheckedCreateWithoutAllocationsInput = {
    id?: string;
    tenancyId: string;
    type: $Enums.ChargeType;
    periodMonth?: Date | string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    dueDate?: Date | string | null;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    voidedById?: string | null;
    createdById: string;
    createdAt?: Date | string;
};
export type ChargeCreateOrConnectWithoutAllocationsInput = {
    where: Prisma.ChargeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChargeCreateWithoutAllocationsInput, Prisma.ChargeUncheckedCreateWithoutAllocationsInput>;
};
export type ChargeUpsertWithoutAllocationsInput = {
    update: Prisma.XOR<Prisma.ChargeUpdateWithoutAllocationsInput, Prisma.ChargeUncheckedUpdateWithoutAllocationsInput>;
    create: Prisma.XOR<Prisma.ChargeCreateWithoutAllocationsInput, Prisma.ChargeUncheckedCreateWithoutAllocationsInput>;
    where?: Prisma.ChargeWhereInput;
};
export type ChargeUpdateToOneWithWhereWithoutAllocationsInput = {
    where?: Prisma.ChargeWhereInput;
    data: Prisma.XOR<Prisma.ChargeUpdateWithoutAllocationsInput, Prisma.ChargeUncheckedUpdateWithoutAllocationsInput>;
};
export type ChargeUpdateWithoutAllocationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType;
    periodMonth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenancy?: Prisma.TenancyUpdateOneRequiredWithoutChargesNestedInput;
    voidedBy?: Prisma.UserUpdateOneWithoutChargesVoidedNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutChargesCreatedNestedInput;
};
export type ChargeUncheckedUpdateWithoutAllocationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenancyId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType;
    periodMonth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voidedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChargeCreateManyCreatedByInput = {
    id?: string;
    tenancyId: string;
    type: $Enums.ChargeType;
    periodMonth?: Date | string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    dueDate?: Date | string | null;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    voidedById?: string | null;
    createdAt?: Date | string;
};
export type ChargeCreateManyVoidedByInput = {
    id?: string;
    tenancyId: string;
    type: $Enums.ChargeType;
    periodMonth?: Date | string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    dueDate?: Date | string | null;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    createdById: string;
    createdAt?: Date | string;
};
export type ChargeUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType;
    periodMonth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenancy?: Prisma.TenancyUpdateOneRequiredWithoutChargesNestedInput;
    voidedBy?: Prisma.UserUpdateOneWithoutChargesVoidedNestedInput;
    allocations?: Prisma.PaymentAllocationUpdateManyWithoutChargeNestedInput;
};
export type ChargeUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenancyId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType;
    periodMonth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voidedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    allocations?: Prisma.PaymentAllocationUncheckedUpdateManyWithoutChargeNestedInput;
};
export type ChargeUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenancyId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType;
    periodMonth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voidedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChargeUpdateWithoutVoidedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType;
    periodMonth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenancy?: Prisma.TenancyUpdateOneRequiredWithoutChargesNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutChargesCreatedNestedInput;
    allocations?: Prisma.PaymentAllocationUpdateManyWithoutChargeNestedInput;
};
export type ChargeUncheckedUpdateWithoutVoidedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenancyId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType;
    periodMonth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    allocations?: Prisma.PaymentAllocationUncheckedUpdateManyWithoutChargeNestedInput;
};
export type ChargeUncheckedUpdateManyWithoutVoidedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenancyId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType;
    periodMonth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChargeCreateManyTenancyInput = {
    id?: string;
    type: $Enums.ChargeType;
    periodMonth?: Date | string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    dueDate?: Date | string | null;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    voidedById?: string | null;
    createdById: string;
    createdAt?: Date | string;
};
export type ChargeUpdateWithoutTenancyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType;
    periodMonth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    voidedBy?: Prisma.UserUpdateOneWithoutChargesVoidedNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutChargesCreatedNestedInput;
    allocations?: Prisma.PaymentAllocationUpdateManyWithoutChargeNestedInput;
};
export type ChargeUncheckedUpdateWithoutTenancyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType;
    periodMonth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voidedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    allocations?: Prisma.PaymentAllocationUncheckedUpdateManyWithoutChargeNestedInput;
};
export type ChargeUncheckedUpdateManyWithoutTenancyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType;
    periodMonth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voidedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChargeCountOutputType = {
    allocations: number;
};
export type ChargeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    allocations?: boolean | ChargeCountOutputTypeCountAllocationsArgs;
};
export type ChargeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChargeCountOutputTypeSelect<ExtArgs> | null;
};
export type ChargeCountOutputTypeCountAllocationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentAllocationWhereInput;
};
export type ChargeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenancyId?: boolean;
    type?: boolean;
    periodMonth?: boolean;
    amount?: boolean;
    description?: boolean;
    dueDate?: boolean;
    voidedAt?: boolean;
    voidReason?: boolean;
    voidedById?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    tenancy?: boolean | Prisma.TenancyDefaultArgs<ExtArgs>;
    voidedBy?: boolean | Prisma.Charge$voidedByArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    allocations?: boolean | Prisma.Charge$allocationsArgs<ExtArgs>;
    _count?: boolean | Prisma.ChargeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["charge"]>;
export type ChargeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenancyId?: boolean;
    type?: boolean;
    periodMonth?: boolean;
    amount?: boolean;
    description?: boolean;
    dueDate?: boolean;
    voidedAt?: boolean;
    voidReason?: boolean;
    voidedById?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    tenancy?: boolean | Prisma.TenancyDefaultArgs<ExtArgs>;
    voidedBy?: boolean | Prisma.Charge$voidedByArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["charge"]>;
export type ChargeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenancyId?: boolean;
    type?: boolean;
    periodMonth?: boolean;
    amount?: boolean;
    description?: boolean;
    dueDate?: boolean;
    voidedAt?: boolean;
    voidReason?: boolean;
    voidedById?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    tenancy?: boolean | Prisma.TenancyDefaultArgs<ExtArgs>;
    voidedBy?: boolean | Prisma.Charge$voidedByArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["charge"]>;
export type ChargeSelectScalar = {
    id?: boolean;
    tenancyId?: boolean;
    type?: boolean;
    periodMonth?: boolean;
    amount?: boolean;
    description?: boolean;
    dueDate?: boolean;
    voidedAt?: boolean;
    voidReason?: boolean;
    voidedById?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
};
export type ChargeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenancyId" | "type" | "periodMonth" | "amount" | "description" | "dueDate" | "voidedAt" | "voidReason" | "voidedById" | "createdById" | "createdAt", ExtArgs["result"]["charge"]>;
export type ChargeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenancy?: boolean | Prisma.TenancyDefaultArgs<ExtArgs>;
    voidedBy?: boolean | Prisma.Charge$voidedByArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    allocations?: boolean | Prisma.Charge$allocationsArgs<ExtArgs>;
    _count?: boolean | Prisma.ChargeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ChargeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenancy?: boolean | Prisma.TenancyDefaultArgs<ExtArgs>;
    voidedBy?: boolean | Prisma.Charge$voidedByArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ChargeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenancy?: boolean | Prisma.TenancyDefaultArgs<ExtArgs>;
    voidedBy?: boolean | Prisma.Charge$voidedByArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ChargePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Charge";
    objects: {
        tenancy: Prisma.$TenancyPayload<ExtArgs>;
        voidedBy: Prisma.$UserPayload<ExtArgs> | null;
        createdBy: Prisma.$UserPayload<ExtArgs>;
        allocations: Prisma.$PaymentAllocationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tenancyId: string;
        type: $Enums.ChargeType;
        periodMonth: Date | null;
        amount: runtime.Decimal;
        description: string | null;
        dueDate: Date | null;
        voidedAt: Date | null;
        voidReason: string | null;
        voidedById: string | null;
        createdById: string;
        createdAt: Date;
    }, ExtArgs["result"]["charge"]>;
    composites: {};
};
export type ChargeGetPayload<S extends boolean | null | undefined | ChargeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ChargePayload, S>;
export type ChargeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ChargeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ChargeCountAggregateInputType | true;
};
export interface ChargeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Charge'];
        meta: {
            name: 'Charge';
        };
    };
    findUnique<T extends ChargeFindUniqueArgs>(args: Prisma.SelectSubset<T, ChargeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ChargeClient<runtime.Types.Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ChargeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ChargeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChargeClient<runtime.Types.Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ChargeFindFirstArgs>(args?: Prisma.SelectSubset<T, ChargeFindFirstArgs<ExtArgs>>): Prisma.Prisma__ChargeClient<runtime.Types.Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ChargeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ChargeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChargeClient<runtime.Types.Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ChargeFindManyArgs>(args?: Prisma.SelectSubset<T, ChargeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ChargeCreateArgs>(args: Prisma.SelectSubset<T, ChargeCreateArgs<ExtArgs>>): Prisma.Prisma__ChargeClient<runtime.Types.Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ChargeCreateManyArgs>(args?: Prisma.SelectSubset<T, ChargeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ChargeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ChargeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ChargeDeleteArgs>(args: Prisma.SelectSubset<T, ChargeDeleteArgs<ExtArgs>>): Prisma.Prisma__ChargeClient<runtime.Types.Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ChargeUpdateArgs>(args: Prisma.SelectSubset<T, ChargeUpdateArgs<ExtArgs>>): Prisma.Prisma__ChargeClient<runtime.Types.Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ChargeDeleteManyArgs>(args?: Prisma.SelectSubset<T, ChargeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ChargeUpdateManyArgs>(args: Prisma.SelectSubset<T, ChargeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ChargeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ChargeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ChargeUpsertArgs>(args: Prisma.SelectSubset<T, ChargeUpsertArgs<ExtArgs>>): Prisma.Prisma__ChargeClient<runtime.Types.Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ChargeCountArgs>(args?: Prisma.Subset<T, ChargeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ChargeCountAggregateOutputType> : number>;
    aggregate<T extends ChargeAggregateArgs>(args: Prisma.Subset<T, ChargeAggregateArgs>): Prisma.PrismaPromise<GetChargeAggregateType<T>>;
    groupBy<T extends ChargeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ChargeGroupByArgs['orderBy'];
    } : {
        orderBy?: ChargeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ChargeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChargeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ChargeFieldRefs;
}
export interface Prisma__ChargeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tenancy<T extends Prisma.TenancyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenancyDefaultArgs<ExtArgs>>): Prisma.Prisma__TenancyClient<runtime.Types.Result.GetResult<Prisma.$TenancyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    voidedBy<T extends Prisma.Charge$voidedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Charge$voidedByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    allocations<T extends Prisma.Charge$allocationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Charge$allocationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentAllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ChargeFieldRefs {
    readonly id: Prisma.FieldRef<"Charge", 'String'>;
    readonly tenancyId: Prisma.FieldRef<"Charge", 'String'>;
    readonly type: Prisma.FieldRef<"Charge", 'ChargeType'>;
    readonly periodMonth: Prisma.FieldRef<"Charge", 'DateTime'>;
    readonly amount: Prisma.FieldRef<"Charge", 'Decimal'>;
    readonly description: Prisma.FieldRef<"Charge", 'String'>;
    readonly dueDate: Prisma.FieldRef<"Charge", 'DateTime'>;
    readonly voidedAt: Prisma.FieldRef<"Charge", 'DateTime'>;
    readonly voidReason: Prisma.FieldRef<"Charge", 'String'>;
    readonly voidedById: Prisma.FieldRef<"Charge", 'String'>;
    readonly createdById: Prisma.FieldRef<"Charge", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Charge", 'DateTime'>;
}
export type ChargeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChargeSelect<ExtArgs> | null;
    omit?: Prisma.ChargeOmit<ExtArgs> | null;
    include?: Prisma.ChargeInclude<ExtArgs> | null;
    where: Prisma.ChargeWhereUniqueInput;
};
export type ChargeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChargeSelect<ExtArgs> | null;
    omit?: Prisma.ChargeOmit<ExtArgs> | null;
    include?: Prisma.ChargeInclude<ExtArgs> | null;
    where: Prisma.ChargeWhereUniqueInput;
};
export type ChargeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChargeSelect<ExtArgs> | null;
    omit?: Prisma.ChargeOmit<ExtArgs> | null;
    include?: Prisma.ChargeInclude<ExtArgs> | null;
    where?: Prisma.ChargeWhereInput;
    orderBy?: Prisma.ChargeOrderByWithRelationInput | Prisma.ChargeOrderByWithRelationInput[];
    cursor?: Prisma.ChargeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChargeScalarFieldEnum | Prisma.ChargeScalarFieldEnum[];
};
export type ChargeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChargeSelect<ExtArgs> | null;
    omit?: Prisma.ChargeOmit<ExtArgs> | null;
    include?: Prisma.ChargeInclude<ExtArgs> | null;
    where?: Prisma.ChargeWhereInput;
    orderBy?: Prisma.ChargeOrderByWithRelationInput | Prisma.ChargeOrderByWithRelationInput[];
    cursor?: Prisma.ChargeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChargeScalarFieldEnum | Prisma.ChargeScalarFieldEnum[];
};
export type ChargeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChargeSelect<ExtArgs> | null;
    omit?: Prisma.ChargeOmit<ExtArgs> | null;
    include?: Prisma.ChargeInclude<ExtArgs> | null;
    where?: Prisma.ChargeWhereInput;
    orderBy?: Prisma.ChargeOrderByWithRelationInput | Prisma.ChargeOrderByWithRelationInput[];
    cursor?: Prisma.ChargeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChargeScalarFieldEnum | Prisma.ChargeScalarFieldEnum[];
};
export type ChargeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChargeSelect<ExtArgs> | null;
    omit?: Prisma.ChargeOmit<ExtArgs> | null;
    include?: Prisma.ChargeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChargeCreateInput, Prisma.ChargeUncheckedCreateInput>;
};
export type ChargeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ChargeCreateManyInput | Prisma.ChargeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ChargeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChargeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ChargeOmit<ExtArgs> | null;
    data: Prisma.ChargeCreateManyInput | Prisma.ChargeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ChargeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ChargeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChargeSelect<ExtArgs> | null;
    omit?: Prisma.ChargeOmit<ExtArgs> | null;
    include?: Prisma.ChargeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChargeUpdateInput, Prisma.ChargeUncheckedUpdateInput>;
    where: Prisma.ChargeWhereUniqueInput;
};
export type ChargeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ChargeUpdateManyMutationInput, Prisma.ChargeUncheckedUpdateManyInput>;
    where?: Prisma.ChargeWhereInput;
    limit?: number;
};
export type ChargeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChargeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ChargeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChargeUpdateManyMutationInput, Prisma.ChargeUncheckedUpdateManyInput>;
    where?: Prisma.ChargeWhereInput;
    limit?: number;
    include?: Prisma.ChargeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ChargeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChargeSelect<ExtArgs> | null;
    omit?: Prisma.ChargeOmit<ExtArgs> | null;
    include?: Prisma.ChargeInclude<ExtArgs> | null;
    where: Prisma.ChargeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChargeCreateInput, Prisma.ChargeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ChargeUpdateInput, Prisma.ChargeUncheckedUpdateInput>;
};
export type ChargeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChargeSelect<ExtArgs> | null;
    omit?: Prisma.ChargeOmit<ExtArgs> | null;
    include?: Prisma.ChargeInclude<ExtArgs> | null;
    where: Prisma.ChargeWhereUniqueInput;
};
export type ChargeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChargeWhereInput;
    limit?: number;
};
export type Charge$voidedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type Charge$allocationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAllocationSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAllocationOmit<ExtArgs> | null;
    include?: Prisma.PaymentAllocationInclude<ExtArgs> | null;
    where?: Prisma.PaymentAllocationWhereInput;
    orderBy?: Prisma.PaymentAllocationOrderByWithRelationInput | Prisma.PaymentAllocationOrderByWithRelationInput[];
    cursor?: Prisma.PaymentAllocationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentAllocationScalarFieldEnum | Prisma.PaymentAllocationScalarFieldEnum[];
};
export type ChargeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChargeSelect<ExtArgs> | null;
    omit?: Prisma.ChargeOmit<ExtArgs> | null;
    include?: Prisma.ChargeInclude<ExtArgs> | null;
};
