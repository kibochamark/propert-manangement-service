import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PaymentModel = runtime.Types.Result.DefaultSelection<Prisma.$PaymentPayload>;
export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
};
export type PaymentAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type PaymentSumAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type PaymentMinAggregateOutputType = {
    id: string | null;
    tenancyId: string | null;
    amount: runtime.Decimal | null;
    paidAt: Date | null;
    method: $Enums.PaymentMethod | null;
    source: $Enums.PaymentSource | null;
    reference: string | null;
    notes: string | null;
    recordedById: string | null;
    voidedAt: Date | null;
    voidReason: string | null;
    createdAt: Date | null;
};
export type PaymentMaxAggregateOutputType = {
    id: string | null;
    tenancyId: string | null;
    amount: runtime.Decimal | null;
    paidAt: Date | null;
    method: $Enums.PaymentMethod | null;
    source: $Enums.PaymentSource | null;
    reference: string | null;
    notes: string | null;
    recordedById: string | null;
    voidedAt: Date | null;
    voidReason: string | null;
    createdAt: Date | null;
};
export type PaymentCountAggregateOutputType = {
    id: number;
    tenancyId: number;
    amount: number;
    paidAt: number;
    method: number;
    source: number;
    reference: number;
    notes: number;
    recordedById: number;
    voidedAt: number;
    voidReason: number;
    createdAt: number;
    _all: number;
};
export type PaymentAvgAggregateInputType = {
    amount?: true;
};
export type PaymentSumAggregateInputType = {
    amount?: true;
};
export type PaymentMinAggregateInputType = {
    id?: true;
    tenancyId?: true;
    amount?: true;
    paidAt?: true;
    method?: true;
    source?: true;
    reference?: true;
    notes?: true;
    recordedById?: true;
    voidedAt?: true;
    voidReason?: true;
    createdAt?: true;
};
export type PaymentMaxAggregateInputType = {
    id?: true;
    tenancyId?: true;
    amount?: true;
    paidAt?: true;
    method?: true;
    source?: true;
    reference?: true;
    notes?: true;
    recordedById?: true;
    voidedAt?: true;
    voidReason?: true;
    createdAt?: true;
};
export type PaymentCountAggregateInputType = {
    id?: true;
    tenancyId?: true;
    amount?: true;
    paidAt?: true;
    method?: true;
    source?: true;
    reference?: true;
    notes?: true;
    recordedById?: true;
    voidedAt?: true;
    voidReason?: true;
    createdAt?: true;
    _all?: true;
};
export type PaymentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentCountAggregateInputType;
    _avg?: PaymentAvgAggregateInputType;
    _sum?: PaymentSumAggregateInputType;
    _min?: PaymentMinAggregateInputType;
    _max?: PaymentMaxAggregateInputType;
};
export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
    [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayment[P]> : Prisma.GetScalarType<T[P], AggregatePayment[P]>;
};
export type PaymentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithAggregationInput | Prisma.PaymentOrderByWithAggregationInput[];
    by: Prisma.PaymentScalarFieldEnum[] | Prisma.PaymentScalarFieldEnum;
    having?: Prisma.PaymentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentCountAggregateInputType | true;
    _avg?: PaymentAvgAggregateInputType;
    _sum?: PaymentSumAggregateInputType;
    _min?: PaymentMinAggregateInputType;
    _max?: PaymentMaxAggregateInputType;
};
export type PaymentGroupByOutputType = {
    id: string;
    tenancyId: string;
    amount: runtime.Decimal;
    paidAt: Date;
    method: $Enums.PaymentMethod;
    source: $Enums.PaymentSource;
    reference: string | null;
    notes: string | null;
    recordedById: string;
    voidedAt: Date | null;
    voidReason: string | null;
    createdAt: Date;
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
};
export type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentGroupByOutputType[P]>;
}>>;
export type PaymentWhereInput = {
    AND?: Prisma.PaymentWhereInput | Prisma.PaymentWhereInput[];
    OR?: Prisma.PaymentWhereInput[];
    NOT?: Prisma.PaymentWhereInput | Prisma.PaymentWhereInput[];
    id?: Prisma.StringFilter<"Payment"> | string;
    tenancyId?: Prisma.StringFilter<"Payment"> | string;
    amount?: Prisma.DecimalFilter<"Payment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    method?: Prisma.EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod;
    source?: Prisma.EnumPaymentSourceFilter<"Payment"> | $Enums.PaymentSource;
    reference?: Prisma.StringNullableFilter<"Payment"> | string | null;
    notes?: Prisma.StringNullableFilter<"Payment"> | string | null;
    recordedById?: Prisma.StringFilter<"Payment"> | string;
    voidedAt?: Prisma.DateTimeNullableFilter<"Payment"> | Date | string | null;
    voidReason?: Prisma.StringNullableFilter<"Payment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    tenancy?: Prisma.XOR<Prisma.TenancyScalarRelationFilter, Prisma.TenancyWhereInput>;
    recordedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    allocations?: Prisma.PaymentAllocationListRelationFilter;
    attachments?: Prisma.AttachmentListRelationFilter;
};
export type PaymentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tenancyId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    reference?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    voidedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    voidReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    tenancy?: Prisma.TenancyOrderByWithRelationInput;
    recordedBy?: Prisma.UserOrderByWithRelationInput;
    allocations?: Prisma.PaymentAllocationOrderByRelationAggregateInput;
    attachments?: Prisma.AttachmentOrderByRelationAggregateInput;
};
export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PaymentWhereInput | Prisma.PaymentWhereInput[];
    OR?: Prisma.PaymentWhereInput[];
    NOT?: Prisma.PaymentWhereInput | Prisma.PaymentWhereInput[];
    tenancyId?: Prisma.StringFilter<"Payment"> | string;
    amount?: Prisma.DecimalFilter<"Payment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    method?: Prisma.EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod;
    source?: Prisma.EnumPaymentSourceFilter<"Payment"> | $Enums.PaymentSource;
    reference?: Prisma.StringNullableFilter<"Payment"> | string | null;
    notes?: Prisma.StringNullableFilter<"Payment"> | string | null;
    recordedById?: Prisma.StringFilter<"Payment"> | string;
    voidedAt?: Prisma.DateTimeNullableFilter<"Payment"> | Date | string | null;
    voidReason?: Prisma.StringNullableFilter<"Payment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    tenancy?: Prisma.XOR<Prisma.TenancyScalarRelationFilter, Prisma.TenancyWhereInput>;
    recordedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    allocations?: Prisma.PaymentAllocationListRelationFilter;
    attachments?: Prisma.AttachmentListRelationFilter;
}, "id">;
export type PaymentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tenancyId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    reference?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    voidedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    voidReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PaymentCountOrderByAggregateInput;
    _avg?: Prisma.PaymentAvgOrderByAggregateInput;
    _max?: Prisma.PaymentMaxOrderByAggregateInput;
    _min?: Prisma.PaymentMinOrderByAggregateInput;
    _sum?: Prisma.PaymentSumOrderByAggregateInput;
};
export type PaymentScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaymentScalarWhereWithAggregatesInput | Prisma.PaymentScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaymentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaymentScalarWhereWithAggregatesInput | Prisma.PaymentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Payment"> | string;
    tenancyId?: Prisma.StringWithAggregatesFilter<"Payment"> | string;
    amount?: Prisma.DecimalWithAggregatesFilter<"Payment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.DateTimeWithAggregatesFilter<"Payment"> | Date | string;
    method?: Prisma.EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod;
    source?: Prisma.EnumPaymentSourceWithAggregatesFilter<"Payment"> | $Enums.PaymentSource;
    reference?: Prisma.StringNullableWithAggregatesFilter<"Payment"> | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Payment"> | string | null;
    recordedById?: Prisma.StringWithAggregatesFilter<"Payment"> | string;
    voidedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null;
    voidReason?: Prisma.StringNullableWithAggregatesFilter<"Payment"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Payment"> | Date | string;
};
export type PaymentCreateInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt: Date | string;
    method: $Enums.PaymentMethod;
    source?: $Enums.PaymentSource;
    reference?: string | null;
    notes?: string | null;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    createdAt?: Date | string;
    tenancy: Prisma.TenancyCreateNestedOneWithoutPaymentsInput;
    recordedBy: Prisma.UserCreateNestedOneWithoutPaymentsRecordedInput;
    allocations?: Prisma.PaymentAllocationCreateNestedManyWithoutPaymentInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutPaymentInput;
};
export type PaymentUncheckedCreateInput = {
    id?: string;
    tenancyId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt: Date | string;
    method: $Enums.PaymentMethod;
    source?: $Enums.PaymentSource;
    reference?: string | null;
    notes?: string | null;
    recordedById: string;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    createdAt?: Date | string;
    allocations?: Prisma.PaymentAllocationUncheckedCreateNestedManyWithoutPaymentInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutPaymentInput;
};
export type PaymentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    source?: Prisma.EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenancy?: Prisma.TenancyUpdateOneRequiredWithoutPaymentsNestedInput;
    recordedBy?: Prisma.UserUpdateOneRequiredWithoutPaymentsRecordedNestedInput;
    allocations?: Prisma.PaymentAllocationUpdateManyWithoutPaymentNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutPaymentNestedInput;
};
export type PaymentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenancyId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    source?: Prisma.EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    allocations?: Prisma.PaymentAllocationUncheckedUpdateManyWithoutPaymentNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutPaymentNestedInput;
};
export type PaymentCreateManyInput = {
    id?: string;
    tenancyId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt: Date | string;
    method: $Enums.PaymentMethod;
    source?: $Enums.PaymentSource;
    reference?: string | null;
    notes?: string | null;
    recordedById: string;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    createdAt?: Date | string;
};
export type PaymentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    source?: Prisma.EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenancyId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    source?: Prisma.EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentListRelationFilter = {
    every?: Prisma.PaymentWhereInput;
    some?: Prisma.PaymentWhereInput;
    none?: Prisma.PaymentWhereInput;
};
export type PaymentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PaymentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenancyId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    voidedAt?: Prisma.SortOrder;
    voidReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PaymentAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type PaymentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenancyId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    voidedAt?: Prisma.SortOrder;
    voidReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PaymentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenancyId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    voidedAt?: Prisma.SortOrder;
    voidReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PaymentSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type PaymentScalarRelationFilter = {
    is?: Prisma.PaymentWhereInput;
    isNot?: Prisma.PaymentWhereInput;
};
export type PaymentCreateNestedManyWithoutRecordedByInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutRecordedByInput, Prisma.PaymentUncheckedCreateWithoutRecordedByInput> | Prisma.PaymentCreateWithoutRecordedByInput[] | Prisma.PaymentUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutRecordedByInput | Prisma.PaymentCreateOrConnectWithoutRecordedByInput[];
    createMany?: Prisma.PaymentCreateManyRecordedByInputEnvelope;
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
};
export type PaymentUncheckedCreateNestedManyWithoutRecordedByInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutRecordedByInput, Prisma.PaymentUncheckedCreateWithoutRecordedByInput> | Prisma.PaymentCreateWithoutRecordedByInput[] | Prisma.PaymentUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutRecordedByInput | Prisma.PaymentCreateOrConnectWithoutRecordedByInput[];
    createMany?: Prisma.PaymentCreateManyRecordedByInputEnvelope;
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
};
export type PaymentUpdateManyWithoutRecordedByNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutRecordedByInput, Prisma.PaymentUncheckedCreateWithoutRecordedByInput> | Prisma.PaymentCreateWithoutRecordedByInput[] | Prisma.PaymentUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutRecordedByInput | Prisma.PaymentCreateOrConnectWithoutRecordedByInput[];
    upsert?: Prisma.PaymentUpsertWithWhereUniqueWithoutRecordedByInput | Prisma.PaymentUpsertWithWhereUniqueWithoutRecordedByInput[];
    createMany?: Prisma.PaymentCreateManyRecordedByInputEnvelope;
    set?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    disconnect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    delete?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    update?: Prisma.PaymentUpdateWithWhereUniqueWithoutRecordedByInput | Prisma.PaymentUpdateWithWhereUniqueWithoutRecordedByInput[];
    updateMany?: Prisma.PaymentUpdateManyWithWhereWithoutRecordedByInput | Prisma.PaymentUpdateManyWithWhereWithoutRecordedByInput[];
    deleteMany?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
};
export type PaymentUncheckedUpdateManyWithoutRecordedByNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutRecordedByInput, Prisma.PaymentUncheckedCreateWithoutRecordedByInput> | Prisma.PaymentCreateWithoutRecordedByInput[] | Prisma.PaymentUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutRecordedByInput | Prisma.PaymentCreateOrConnectWithoutRecordedByInput[];
    upsert?: Prisma.PaymentUpsertWithWhereUniqueWithoutRecordedByInput | Prisma.PaymentUpsertWithWhereUniqueWithoutRecordedByInput[];
    createMany?: Prisma.PaymentCreateManyRecordedByInputEnvelope;
    set?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    disconnect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    delete?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    update?: Prisma.PaymentUpdateWithWhereUniqueWithoutRecordedByInput | Prisma.PaymentUpdateWithWhereUniqueWithoutRecordedByInput[];
    updateMany?: Prisma.PaymentUpdateManyWithWhereWithoutRecordedByInput | Prisma.PaymentUpdateManyWithWhereWithoutRecordedByInput[];
    deleteMany?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
};
export type PaymentCreateNestedManyWithoutTenancyInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutTenancyInput, Prisma.PaymentUncheckedCreateWithoutTenancyInput> | Prisma.PaymentCreateWithoutTenancyInput[] | Prisma.PaymentUncheckedCreateWithoutTenancyInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutTenancyInput | Prisma.PaymentCreateOrConnectWithoutTenancyInput[];
    createMany?: Prisma.PaymentCreateManyTenancyInputEnvelope;
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
};
export type PaymentUncheckedCreateNestedManyWithoutTenancyInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutTenancyInput, Prisma.PaymentUncheckedCreateWithoutTenancyInput> | Prisma.PaymentCreateWithoutTenancyInput[] | Prisma.PaymentUncheckedCreateWithoutTenancyInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutTenancyInput | Prisma.PaymentCreateOrConnectWithoutTenancyInput[];
    createMany?: Prisma.PaymentCreateManyTenancyInputEnvelope;
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
};
export type PaymentUpdateManyWithoutTenancyNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutTenancyInput, Prisma.PaymentUncheckedCreateWithoutTenancyInput> | Prisma.PaymentCreateWithoutTenancyInput[] | Prisma.PaymentUncheckedCreateWithoutTenancyInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutTenancyInput | Prisma.PaymentCreateOrConnectWithoutTenancyInput[];
    upsert?: Prisma.PaymentUpsertWithWhereUniqueWithoutTenancyInput | Prisma.PaymentUpsertWithWhereUniqueWithoutTenancyInput[];
    createMany?: Prisma.PaymentCreateManyTenancyInputEnvelope;
    set?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    disconnect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    delete?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    update?: Prisma.PaymentUpdateWithWhereUniqueWithoutTenancyInput | Prisma.PaymentUpdateWithWhereUniqueWithoutTenancyInput[];
    updateMany?: Prisma.PaymentUpdateManyWithWhereWithoutTenancyInput | Prisma.PaymentUpdateManyWithWhereWithoutTenancyInput[];
    deleteMany?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
};
export type PaymentUncheckedUpdateManyWithoutTenancyNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutTenancyInput, Prisma.PaymentUncheckedCreateWithoutTenancyInput> | Prisma.PaymentCreateWithoutTenancyInput[] | Prisma.PaymentUncheckedCreateWithoutTenancyInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutTenancyInput | Prisma.PaymentCreateOrConnectWithoutTenancyInput[];
    upsert?: Prisma.PaymentUpsertWithWhereUniqueWithoutTenancyInput | Prisma.PaymentUpsertWithWhereUniqueWithoutTenancyInput[];
    createMany?: Prisma.PaymentCreateManyTenancyInputEnvelope;
    set?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    disconnect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    delete?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    update?: Prisma.PaymentUpdateWithWhereUniqueWithoutTenancyInput | Prisma.PaymentUpdateWithWhereUniqueWithoutTenancyInput[];
    updateMany?: Prisma.PaymentUpdateManyWithWhereWithoutTenancyInput | Prisma.PaymentUpdateManyWithWhereWithoutTenancyInput[];
    deleteMany?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
};
export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod;
};
export type EnumPaymentSourceFieldUpdateOperationsInput = {
    set?: $Enums.PaymentSource;
};
export type PaymentCreateNestedOneWithoutAllocationsInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutAllocationsInput, Prisma.PaymentUncheckedCreateWithoutAllocationsInput>;
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutAllocationsInput;
    connect?: Prisma.PaymentWhereUniqueInput;
};
export type PaymentUpdateOneRequiredWithoutAllocationsNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutAllocationsInput, Prisma.PaymentUncheckedCreateWithoutAllocationsInput>;
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutAllocationsInput;
    upsert?: Prisma.PaymentUpsertWithoutAllocationsInput;
    connect?: Prisma.PaymentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PaymentUpdateToOneWithWhereWithoutAllocationsInput, Prisma.PaymentUpdateWithoutAllocationsInput>, Prisma.PaymentUncheckedUpdateWithoutAllocationsInput>;
};
export type PaymentCreateNestedOneWithoutAttachmentsInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutAttachmentsInput, Prisma.PaymentUncheckedCreateWithoutAttachmentsInput>;
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutAttachmentsInput;
    connect?: Prisma.PaymentWhereUniqueInput;
};
export type PaymentUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutAttachmentsInput, Prisma.PaymentUncheckedCreateWithoutAttachmentsInput>;
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutAttachmentsInput;
    upsert?: Prisma.PaymentUpsertWithoutAttachmentsInput;
    connect?: Prisma.PaymentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PaymentUpdateToOneWithWhereWithoutAttachmentsInput, Prisma.PaymentUpdateWithoutAttachmentsInput>, Prisma.PaymentUncheckedUpdateWithoutAttachmentsInput>;
};
export type PaymentCreateWithoutRecordedByInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt: Date | string;
    method: $Enums.PaymentMethod;
    source?: $Enums.PaymentSource;
    reference?: string | null;
    notes?: string | null;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    createdAt?: Date | string;
    tenancy: Prisma.TenancyCreateNestedOneWithoutPaymentsInput;
    allocations?: Prisma.PaymentAllocationCreateNestedManyWithoutPaymentInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutPaymentInput;
};
export type PaymentUncheckedCreateWithoutRecordedByInput = {
    id?: string;
    tenancyId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt: Date | string;
    method: $Enums.PaymentMethod;
    source?: $Enums.PaymentSource;
    reference?: string | null;
    notes?: string | null;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    createdAt?: Date | string;
    allocations?: Prisma.PaymentAllocationUncheckedCreateNestedManyWithoutPaymentInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutPaymentInput;
};
export type PaymentCreateOrConnectWithoutRecordedByInput = {
    where: Prisma.PaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutRecordedByInput, Prisma.PaymentUncheckedCreateWithoutRecordedByInput>;
};
export type PaymentCreateManyRecordedByInputEnvelope = {
    data: Prisma.PaymentCreateManyRecordedByInput | Prisma.PaymentCreateManyRecordedByInput[];
    skipDuplicates?: boolean;
};
export type PaymentUpsertWithWhereUniqueWithoutRecordedByInput = {
    where: Prisma.PaymentWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentUpdateWithoutRecordedByInput, Prisma.PaymentUncheckedUpdateWithoutRecordedByInput>;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutRecordedByInput, Prisma.PaymentUncheckedCreateWithoutRecordedByInput>;
};
export type PaymentUpdateWithWhereUniqueWithoutRecordedByInput = {
    where: Prisma.PaymentWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentUpdateWithoutRecordedByInput, Prisma.PaymentUncheckedUpdateWithoutRecordedByInput>;
};
export type PaymentUpdateManyWithWhereWithoutRecordedByInput = {
    where: Prisma.PaymentScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentUpdateManyMutationInput, Prisma.PaymentUncheckedUpdateManyWithoutRecordedByInput>;
};
export type PaymentScalarWhereInput = {
    AND?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
    OR?: Prisma.PaymentScalarWhereInput[];
    NOT?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
    id?: Prisma.StringFilter<"Payment"> | string;
    tenancyId?: Prisma.StringFilter<"Payment"> | string;
    amount?: Prisma.DecimalFilter<"Payment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    method?: Prisma.EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod;
    source?: Prisma.EnumPaymentSourceFilter<"Payment"> | $Enums.PaymentSource;
    reference?: Prisma.StringNullableFilter<"Payment"> | string | null;
    notes?: Prisma.StringNullableFilter<"Payment"> | string | null;
    recordedById?: Prisma.StringFilter<"Payment"> | string;
    voidedAt?: Prisma.DateTimeNullableFilter<"Payment"> | Date | string | null;
    voidReason?: Prisma.StringNullableFilter<"Payment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Payment"> | Date | string;
};
export type PaymentCreateWithoutTenancyInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt: Date | string;
    method: $Enums.PaymentMethod;
    source?: $Enums.PaymentSource;
    reference?: string | null;
    notes?: string | null;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    createdAt?: Date | string;
    recordedBy: Prisma.UserCreateNestedOneWithoutPaymentsRecordedInput;
    allocations?: Prisma.PaymentAllocationCreateNestedManyWithoutPaymentInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutPaymentInput;
};
export type PaymentUncheckedCreateWithoutTenancyInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt: Date | string;
    method: $Enums.PaymentMethod;
    source?: $Enums.PaymentSource;
    reference?: string | null;
    notes?: string | null;
    recordedById: string;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    createdAt?: Date | string;
    allocations?: Prisma.PaymentAllocationUncheckedCreateNestedManyWithoutPaymentInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutPaymentInput;
};
export type PaymentCreateOrConnectWithoutTenancyInput = {
    where: Prisma.PaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutTenancyInput, Prisma.PaymentUncheckedCreateWithoutTenancyInput>;
};
export type PaymentCreateManyTenancyInputEnvelope = {
    data: Prisma.PaymentCreateManyTenancyInput | Prisma.PaymentCreateManyTenancyInput[];
    skipDuplicates?: boolean;
};
export type PaymentUpsertWithWhereUniqueWithoutTenancyInput = {
    where: Prisma.PaymentWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentUpdateWithoutTenancyInput, Prisma.PaymentUncheckedUpdateWithoutTenancyInput>;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutTenancyInput, Prisma.PaymentUncheckedCreateWithoutTenancyInput>;
};
export type PaymentUpdateWithWhereUniqueWithoutTenancyInput = {
    where: Prisma.PaymentWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentUpdateWithoutTenancyInput, Prisma.PaymentUncheckedUpdateWithoutTenancyInput>;
};
export type PaymentUpdateManyWithWhereWithoutTenancyInput = {
    where: Prisma.PaymentScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentUpdateManyMutationInput, Prisma.PaymentUncheckedUpdateManyWithoutTenancyInput>;
};
export type PaymentCreateWithoutAllocationsInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt: Date | string;
    method: $Enums.PaymentMethod;
    source?: $Enums.PaymentSource;
    reference?: string | null;
    notes?: string | null;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    createdAt?: Date | string;
    tenancy: Prisma.TenancyCreateNestedOneWithoutPaymentsInput;
    recordedBy: Prisma.UserCreateNestedOneWithoutPaymentsRecordedInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutPaymentInput;
};
export type PaymentUncheckedCreateWithoutAllocationsInput = {
    id?: string;
    tenancyId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt: Date | string;
    method: $Enums.PaymentMethod;
    source?: $Enums.PaymentSource;
    reference?: string | null;
    notes?: string | null;
    recordedById: string;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    createdAt?: Date | string;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutPaymentInput;
};
export type PaymentCreateOrConnectWithoutAllocationsInput = {
    where: Prisma.PaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutAllocationsInput, Prisma.PaymentUncheckedCreateWithoutAllocationsInput>;
};
export type PaymentUpsertWithoutAllocationsInput = {
    update: Prisma.XOR<Prisma.PaymentUpdateWithoutAllocationsInput, Prisma.PaymentUncheckedUpdateWithoutAllocationsInput>;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutAllocationsInput, Prisma.PaymentUncheckedCreateWithoutAllocationsInput>;
    where?: Prisma.PaymentWhereInput;
};
export type PaymentUpdateToOneWithWhereWithoutAllocationsInput = {
    where?: Prisma.PaymentWhereInput;
    data: Prisma.XOR<Prisma.PaymentUpdateWithoutAllocationsInput, Prisma.PaymentUncheckedUpdateWithoutAllocationsInput>;
};
export type PaymentUpdateWithoutAllocationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    source?: Prisma.EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenancy?: Prisma.TenancyUpdateOneRequiredWithoutPaymentsNestedInput;
    recordedBy?: Prisma.UserUpdateOneRequiredWithoutPaymentsRecordedNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutPaymentNestedInput;
};
export type PaymentUncheckedUpdateWithoutAllocationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenancyId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    source?: Prisma.EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutPaymentNestedInput;
};
export type PaymentCreateWithoutAttachmentsInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt: Date | string;
    method: $Enums.PaymentMethod;
    source?: $Enums.PaymentSource;
    reference?: string | null;
    notes?: string | null;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    createdAt?: Date | string;
    tenancy: Prisma.TenancyCreateNestedOneWithoutPaymentsInput;
    recordedBy: Prisma.UserCreateNestedOneWithoutPaymentsRecordedInput;
    allocations?: Prisma.PaymentAllocationCreateNestedManyWithoutPaymentInput;
};
export type PaymentUncheckedCreateWithoutAttachmentsInput = {
    id?: string;
    tenancyId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt: Date | string;
    method: $Enums.PaymentMethod;
    source?: $Enums.PaymentSource;
    reference?: string | null;
    notes?: string | null;
    recordedById: string;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    createdAt?: Date | string;
    allocations?: Prisma.PaymentAllocationUncheckedCreateNestedManyWithoutPaymentInput;
};
export type PaymentCreateOrConnectWithoutAttachmentsInput = {
    where: Prisma.PaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutAttachmentsInput, Prisma.PaymentUncheckedCreateWithoutAttachmentsInput>;
};
export type PaymentUpsertWithoutAttachmentsInput = {
    update: Prisma.XOR<Prisma.PaymentUpdateWithoutAttachmentsInput, Prisma.PaymentUncheckedUpdateWithoutAttachmentsInput>;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutAttachmentsInput, Prisma.PaymentUncheckedCreateWithoutAttachmentsInput>;
    where?: Prisma.PaymentWhereInput;
};
export type PaymentUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: Prisma.PaymentWhereInput;
    data: Prisma.XOR<Prisma.PaymentUpdateWithoutAttachmentsInput, Prisma.PaymentUncheckedUpdateWithoutAttachmentsInput>;
};
export type PaymentUpdateWithoutAttachmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    source?: Prisma.EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenancy?: Prisma.TenancyUpdateOneRequiredWithoutPaymentsNestedInput;
    recordedBy?: Prisma.UserUpdateOneRequiredWithoutPaymentsRecordedNestedInput;
    allocations?: Prisma.PaymentAllocationUpdateManyWithoutPaymentNestedInput;
};
export type PaymentUncheckedUpdateWithoutAttachmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenancyId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    source?: Prisma.EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    allocations?: Prisma.PaymentAllocationUncheckedUpdateManyWithoutPaymentNestedInput;
};
export type PaymentCreateManyRecordedByInput = {
    id?: string;
    tenancyId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt: Date | string;
    method: $Enums.PaymentMethod;
    source?: $Enums.PaymentSource;
    reference?: string | null;
    notes?: string | null;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    createdAt?: Date | string;
};
export type PaymentUpdateWithoutRecordedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    source?: Prisma.EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenancy?: Prisma.TenancyUpdateOneRequiredWithoutPaymentsNestedInput;
    allocations?: Prisma.PaymentAllocationUpdateManyWithoutPaymentNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutPaymentNestedInput;
};
export type PaymentUncheckedUpdateWithoutRecordedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenancyId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    source?: Prisma.EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    allocations?: Prisma.PaymentAllocationUncheckedUpdateManyWithoutPaymentNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutPaymentNestedInput;
};
export type PaymentUncheckedUpdateManyWithoutRecordedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenancyId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    source?: Prisma.EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentCreateManyTenancyInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt: Date | string;
    method: $Enums.PaymentMethod;
    source?: $Enums.PaymentSource;
    reference?: string | null;
    notes?: string | null;
    recordedById: string;
    voidedAt?: Date | string | null;
    voidReason?: string | null;
    createdAt?: Date | string;
};
export type PaymentUpdateWithoutTenancyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    source?: Prisma.EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recordedBy?: Prisma.UserUpdateOneRequiredWithoutPaymentsRecordedNestedInput;
    allocations?: Prisma.PaymentAllocationUpdateManyWithoutPaymentNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutPaymentNestedInput;
};
export type PaymentUncheckedUpdateWithoutTenancyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    source?: Prisma.EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    allocations?: Prisma.PaymentAllocationUncheckedUpdateManyWithoutPaymentNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutPaymentNestedInput;
};
export type PaymentUncheckedUpdateManyWithoutTenancyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    source?: Prisma.EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    voidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    voidReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentCountOutputType = {
    allocations: number;
    attachments: number;
};
export type PaymentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    allocations?: boolean | PaymentCountOutputTypeCountAllocationsArgs;
    attachments?: boolean | PaymentCountOutputTypeCountAttachmentsArgs;
};
export type PaymentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentCountOutputTypeSelect<ExtArgs> | null;
};
export type PaymentCountOutputTypeCountAllocationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentAllocationWhereInput;
};
export type PaymentCountOutputTypeCountAttachmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttachmentWhereInput;
};
export type PaymentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenancyId?: boolean;
    amount?: boolean;
    paidAt?: boolean;
    method?: boolean;
    source?: boolean;
    reference?: boolean;
    notes?: boolean;
    recordedById?: boolean;
    voidedAt?: boolean;
    voidReason?: boolean;
    createdAt?: boolean;
    tenancy?: boolean | Prisma.TenancyDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    allocations?: boolean | Prisma.Payment$allocationsArgs<ExtArgs>;
    attachments?: boolean | Prisma.Payment$attachmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.PaymentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payment"]>;
export type PaymentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenancyId?: boolean;
    amount?: boolean;
    paidAt?: boolean;
    method?: boolean;
    source?: boolean;
    reference?: boolean;
    notes?: boolean;
    recordedById?: boolean;
    voidedAt?: boolean;
    voidReason?: boolean;
    createdAt?: boolean;
    tenancy?: boolean | Prisma.TenancyDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payment"]>;
export type PaymentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenancyId?: boolean;
    amount?: boolean;
    paidAt?: boolean;
    method?: boolean;
    source?: boolean;
    reference?: boolean;
    notes?: boolean;
    recordedById?: boolean;
    voidedAt?: boolean;
    voidReason?: boolean;
    createdAt?: boolean;
    tenancy?: boolean | Prisma.TenancyDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payment"]>;
export type PaymentSelectScalar = {
    id?: boolean;
    tenancyId?: boolean;
    amount?: boolean;
    paidAt?: boolean;
    method?: boolean;
    source?: boolean;
    reference?: boolean;
    notes?: boolean;
    recordedById?: boolean;
    voidedAt?: boolean;
    voidReason?: boolean;
    createdAt?: boolean;
};
export type PaymentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenancyId" | "amount" | "paidAt" | "method" | "source" | "reference" | "notes" | "recordedById" | "voidedAt" | "voidReason" | "createdAt", ExtArgs["result"]["payment"]>;
export type PaymentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenancy?: boolean | Prisma.TenancyDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    allocations?: boolean | Prisma.Payment$allocationsArgs<ExtArgs>;
    attachments?: boolean | Prisma.Payment$attachmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.PaymentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PaymentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenancy?: boolean | Prisma.TenancyDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenancy?: boolean | Prisma.TenancyDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $PaymentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Payment";
    objects: {
        tenancy: Prisma.$TenancyPayload<ExtArgs>;
        recordedBy: Prisma.$UserPayload<ExtArgs>;
        allocations: Prisma.$PaymentAllocationPayload<ExtArgs>[];
        attachments: Prisma.$AttachmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tenancyId: string;
        amount: runtime.Decimal;
        paidAt: Date;
        method: $Enums.PaymentMethod;
        source: $Enums.PaymentSource;
        reference: string | null;
        notes: string | null;
        recordedById: string;
        voidedAt: Date | null;
        voidReason: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["payment"]>;
    composites: {};
};
export type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaymentPayload, S>;
export type PaymentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentCountAggregateInputType | true;
};
export interface PaymentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Payment'];
        meta: {
            name: 'Payment';
        };
    };
    findUnique<T extends PaymentFindUniqueArgs>(args: Prisma.SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PaymentFindFirstArgs>(args?: Prisma.SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PaymentFindManyArgs>(args?: Prisma.SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PaymentCreateArgs>(args: Prisma.SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PaymentCreateManyArgs>(args?: Prisma.SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PaymentDeleteArgs>(args: Prisma.SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PaymentUpdateArgs>(args: Prisma.SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PaymentDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PaymentUpdateManyArgs>(args: Prisma.SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PaymentUpsertArgs>(args: Prisma.SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PaymentCountArgs>(args?: Prisma.Subset<T, PaymentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentCountAggregateOutputType> : number>;
    aggregate<T extends PaymentAggregateArgs>(args: Prisma.Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>;
    groupBy<T extends PaymentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaymentGroupByArgs['orderBy'];
    } : {
        orderBy?: PaymentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PaymentFieldRefs;
}
export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tenancy<T extends Prisma.TenancyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenancyDefaultArgs<ExtArgs>>): Prisma.Prisma__TenancyClient<runtime.Types.Result.GetResult<Prisma.$TenancyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    recordedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    allocations<T extends Prisma.Payment$allocationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Payment$allocationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentAllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    attachments<T extends Prisma.Payment$attachmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Payment$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PaymentFieldRefs {
    readonly id: Prisma.FieldRef<"Payment", 'String'>;
    readonly tenancyId: Prisma.FieldRef<"Payment", 'String'>;
    readonly amount: Prisma.FieldRef<"Payment", 'Decimal'>;
    readonly paidAt: Prisma.FieldRef<"Payment", 'DateTime'>;
    readonly method: Prisma.FieldRef<"Payment", 'PaymentMethod'>;
    readonly source: Prisma.FieldRef<"Payment", 'PaymentSource'>;
    readonly reference: Prisma.FieldRef<"Payment", 'String'>;
    readonly notes: Prisma.FieldRef<"Payment", 'String'>;
    readonly recordedById: Prisma.FieldRef<"Payment", 'String'>;
    readonly voidedAt: Prisma.FieldRef<"Payment", 'DateTime'>;
    readonly voidReason: Prisma.FieldRef<"Payment", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Payment", 'DateTime'>;
}
export type PaymentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where: Prisma.PaymentWhereUniqueInput;
};
export type PaymentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where: Prisma.PaymentWhereUniqueInput;
};
export type PaymentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
export type PaymentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
export type PaymentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
export type PaymentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentCreateInput, Prisma.PaymentUncheckedCreateInput>;
};
export type PaymentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PaymentCreateManyInput | Prisma.PaymentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PaymentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    data: Prisma.PaymentCreateManyInput | Prisma.PaymentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PaymentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PaymentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentUpdateInput, Prisma.PaymentUncheckedUpdateInput>;
    where: Prisma.PaymentWhereUniqueInput;
};
export type PaymentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PaymentUpdateManyMutationInput, Prisma.PaymentUncheckedUpdateManyInput>;
    where?: Prisma.PaymentWhereInput;
    limit?: number;
};
export type PaymentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentUpdateManyMutationInput, Prisma.PaymentUncheckedUpdateManyInput>;
    where?: Prisma.PaymentWhereInput;
    limit?: number;
    include?: Prisma.PaymentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PaymentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where: Prisma.PaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentCreateInput, Prisma.PaymentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PaymentUpdateInput, Prisma.PaymentUncheckedUpdateInput>;
};
export type PaymentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where: Prisma.PaymentWhereUniqueInput;
};
export type PaymentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
    limit?: number;
};
export type Payment$allocationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Payment$attachmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    where?: Prisma.AttachmentWhereInput;
    orderBy?: Prisma.AttachmentOrderByWithRelationInput | Prisma.AttachmentOrderByWithRelationInput[];
    cursor?: Prisma.AttachmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttachmentScalarFieldEnum | Prisma.AttachmentScalarFieldEnum[];
};
export type PaymentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
};
