import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PaymentAllocationModel = runtime.Types.Result.DefaultSelection<Prisma.$PaymentAllocationPayload>;
export type AggregatePaymentAllocation = {
    _count: PaymentAllocationCountAggregateOutputType | null;
    _avg: PaymentAllocationAvgAggregateOutputType | null;
    _sum: PaymentAllocationSumAggregateOutputType | null;
    _min: PaymentAllocationMinAggregateOutputType | null;
    _max: PaymentAllocationMaxAggregateOutputType | null;
};
export type PaymentAllocationAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type PaymentAllocationSumAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type PaymentAllocationMinAggregateOutputType = {
    id: string | null;
    paymentId: string | null;
    chargeId: string | null;
    amount: runtime.Decimal | null;
    createdAt: Date | null;
};
export type PaymentAllocationMaxAggregateOutputType = {
    id: string | null;
    paymentId: string | null;
    chargeId: string | null;
    amount: runtime.Decimal | null;
    createdAt: Date | null;
};
export type PaymentAllocationCountAggregateOutputType = {
    id: number;
    paymentId: number;
    chargeId: number;
    amount: number;
    createdAt: number;
    _all: number;
};
export type PaymentAllocationAvgAggregateInputType = {
    amount?: true;
};
export type PaymentAllocationSumAggregateInputType = {
    amount?: true;
};
export type PaymentAllocationMinAggregateInputType = {
    id?: true;
    paymentId?: true;
    chargeId?: true;
    amount?: true;
    createdAt?: true;
};
export type PaymentAllocationMaxAggregateInputType = {
    id?: true;
    paymentId?: true;
    chargeId?: true;
    amount?: true;
    createdAt?: true;
};
export type PaymentAllocationCountAggregateInputType = {
    id?: true;
    paymentId?: true;
    chargeId?: true;
    amount?: true;
    createdAt?: true;
    _all?: true;
};
export type PaymentAllocationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentAllocationWhereInput;
    orderBy?: Prisma.PaymentAllocationOrderByWithRelationInput | Prisma.PaymentAllocationOrderByWithRelationInput[];
    cursor?: Prisma.PaymentAllocationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentAllocationCountAggregateInputType;
    _avg?: PaymentAllocationAvgAggregateInputType;
    _sum?: PaymentAllocationSumAggregateInputType;
    _min?: PaymentAllocationMinAggregateInputType;
    _max?: PaymentAllocationMaxAggregateInputType;
};
export type GetPaymentAllocationAggregateType<T extends PaymentAllocationAggregateArgs> = {
    [P in keyof T & keyof AggregatePaymentAllocation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePaymentAllocation[P]> : Prisma.GetScalarType<T[P], AggregatePaymentAllocation[P]>;
};
export type PaymentAllocationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentAllocationWhereInput;
    orderBy?: Prisma.PaymentAllocationOrderByWithAggregationInput | Prisma.PaymentAllocationOrderByWithAggregationInput[];
    by: Prisma.PaymentAllocationScalarFieldEnum[] | Prisma.PaymentAllocationScalarFieldEnum;
    having?: Prisma.PaymentAllocationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentAllocationCountAggregateInputType | true;
    _avg?: PaymentAllocationAvgAggregateInputType;
    _sum?: PaymentAllocationSumAggregateInputType;
    _min?: PaymentAllocationMinAggregateInputType;
    _max?: PaymentAllocationMaxAggregateInputType;
};
export type PaymentAllocationGroupByOutputType = {
    id: string;
    paymentId: string;
    chargeId: string;
    amount: runtime.Decimal;
    createdAt: Date;
    _count: PaymentAllocationCountAggregateOutputType | null;
    _avg: PaymentAllocationAvgAggregateOutputType | null;
    _sum: PaymentAllocationSumAggregateOutputType | null;
    _min: PaymentAllocationMinAggregateOutputType | null;
    _max: PaymentAllocationMaxAggregateOutputType | null;
};
export type GetPaymentAllocationGroupByPayload<T extends PaymentAllocationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentAllocationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentAllocationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentAllocationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentAllocationGroupByOutputType[P]>;
}>>;
export type PaymentAllocationWhereInput = {
    AND?: Prisma.PaymentAllocationWhereInput | Prisma.PaymentAllocationWhereInput[];
    OR?: Prisma.PaymentAllocationWhereInput[];
    NOT?: Prisma.PaymentAllocationWhereInput | Prisma.PaymentAllocationWhereInput[];
    id?: Prisma.StringFilter<"PaymentAllocation"> | string;
    paymentId?: Prisma.StringFilter<"PaymentAllocation"> | string;
    chargeId?: Prisma.StringFilter<"PaymentAllocation"> | string;
    amount?: Prisma.DecimalFilter<"PaymentAllocation"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"PaymentAllocation"> | Date | string;
    payment?: Prisma.XOR<Prisma.PaymentScalarRelationFilter, Prisma.PaymentWhereInput>;
    charge?: Prisma.XOR<Prisma.ChargeScalarRelationFilter, Prisma.ChargeWhereInput>;
};
export type PaymentAllocationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    chargeId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    payment?: Prisma.PaymentOrderByWithRelationInput;
    charge?: Prisma.ChargeOrderByWithRelationInput;
};
export type PaymentAllocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    paymentId_chargeId?: Prisma.PaymentAllocationPaymentIdChargeIdCompoundUniqueInput;
    AND?: Prisma.PaymentAllocationWhereInput | Prisma.PaymentAllocationWhereInput[];
    OR?: Prisma.PaymentAllocationWhereInput[];
    NOT?: Prisma.PaymentAllocationWhereInput | Prisma.PaymentAllocationWhereInput[];
    paymentId?: Prisma.StringFilter<"PaymentAllocation"> | string;
    chargeId?: Prisma.StringFilter<"PaymentAllocation"> | string;
    amount?: Prisma.DecimalFilter<"PaymentAllocation"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"PaymentAllocation"> | Date | string;
    payment?: Prisma.XOR<Prisma.PaymentScalarRelationFilter, Prisma.PaymentWhereInput>;
    charge?: Prisma.XOR<Prisma.ChargeScalarRelationFilter, Prisma.ChargeWhereInput>;
}, "id" | "paymentId_chargeId">;
export type PaymentAllocationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    chargeId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PaymentAllocationCountOrderByAggregateInput;
    _avg?: Prisma.PaymentAllocationAvgOrderByAggregateInput;
    _max?: Prisma.PaymentAllocationMaxOrderByAggregateInput;
    _min?: Prisma.PaymentAllocationMinOrderByAggregateInput;
    _sum?: Prisma.PaymentAllocationSumOrderByAggregateInput;
};
export type PaymentAllocationScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaymentAllocationScalarWhereWithAggregatesInput | Prisma.PaymentAllocationScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaymentAllocationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaymentAllocationScalarWhereWithAggregatesInput | Prisma.PaymentAllocationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PaymentAllocation"> | string;
    paymentId?: Prisma.StringWithAggregatesFilter<"PaymentAllocation"> | string;
    chargeId?: Prisma.StringWithAggregatesFilter<"PaymentAllocation"> | string;
    amount?: Prisma.DecimalWithAggregatesFilter<"PaymentAllocation"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PaymentAllocation"> | Date | string;
};
export type PaymentAllocationCreateInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    payment: Prisma.PaymentCreateNestedOneWithoutAllocationsInput;
    charge: Prisma.ChargeCreateNestedOneWithoutAllocationsInput;
};
export type PaymentAllocationUncheckedCreateInput = {
    id?: string;
    paymentId: string;
    chargeId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type PaymentAllocationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: Prisma.PaymentUpdateOneRequiredWithoutAllocationsNestedInput;
    charge?: Prisma.ChargeUpdateOneRequiredWithoutAllocationsNestedInput;
};
export type PaymentAllocationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.StringFieldUpdateOperationsInput | string;
    chargeId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentAllocationCreateManyInput = {
    id?: string;
    paymentId: string;
    chargeId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type PaymentAllocationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentAllocationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.StringFieldUpdateOperationsInput | string;
    chargeId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentAllocationListRelationFilter = {
    every?: Prisma.PaymentAllocationWhereInput;
    some?: Prisma.PaymentAllocationWhereInput;
    none?: Prisma.PaymentAllocationWhereInput;
};
export type PaymentAllocationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PaymentAllocationPaymentIdChargeIdCompoundUniqueInput = {
    paymentId: string;
    chargeId: string;
};
export type PaymentAllocationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    chargeId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PaymentAllocationAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type PaymentAllocationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    chargeId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PaymentAllocationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    chargeId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PaymentAllocationSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type PaymentAllocationCreateNestedManyWithoutChargeInput = {
    create?: Prisma.XOR<Prisma.PaymentAllocationCreateWithoutChargeInput, Prisma.PaymentAllocationUncheckedCreateWithoutChargeInput> | Prisma.PaymentAllocationCreateWithoutChargeInput[] | Prisma.PaymentAllocationUncheckedCreateWithoutChargeInput[];
    connectOrCreate?: Prisma.PaymentAllocationCreateOrConnectWithoutChargeInput | Prisma.PaymentAllocationCreateOrConnectWithoutChargeInput[];
    createMany?: Prisma.PaymentAllocationCreateManyChargeInputEnvelope;
    connect?: Prisma.PaymentAllocationWhereUniqueInput | Prisma.PaymentAllocationWhereUniqueInput[];
};
export type PaymentAllocationUncheckedCreateNestedManyWithoutChargeInput = {
    create?: Prisma.XOR<Prisma.PaymentAllocationCreateWithoutChargeInput, Prisma.PaymentAllocationUncheckedCreateWithoutChargeInput> | Prisma.PaymentAllocationCreateWithoutChargeInput[] | Prisma.PaymentAllocationUncheckedCreateWithoutChargeInput[];
    connectOrCreate?: Prisma.PaymentAllocationCreateOrConnectWithoutChargeInput | Prisma.PaymentAllocationCreateOrConnectWithoutChargeInput[];
    createMany?: Prisma.PaymentAllocationCreateManyChargeInputEnvelope;
    connect?: Prisma.PaymentAllocationWhereUniqueInput | Prisma.PaymentAllocationWhereUniqueInput[];
};
export type PaymentAllocationUpdateManyWithoutChargeNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentAllocationCreateWithoutChargeInput, Prisma.PaymentAllocationUncheckedCreateWithoutChargeInput> | Prisma.PaymentAllocationCreateWithoutChargeInput[] | Prisma.PaymentAllocationUncheckedCreateWithoutChargeInput[];
    connectOrCreate?: Prisma.PaymentAllocationCreateOrConnectWithoutChargeInput | Prisma.PaymentAllocationCreateOrConnectWithoutChargeInput[];
    upsert?: Prisma.PaymentAllocationUpsertWithWhereUniqueWithoutChargeInput | Prisma.PaymentAllocationUpsertWithWhereUniqueWithoutChargeInput[];
    createMany?: Prisma.PaymentAllocationCreateManyChargeInputEnvelope;
    set?: Prisma.PaymentAllocationWhereUniqueInput | Prisma.PaymentAllocationWhereUniqueInput[];
    disconnect?: Prisma.PaymentAllocationWhereUniqueInput | Prisma.PaymentAllocationWhereUniqueInput[];
    delete?: Prisma.PaymentAllocationWhereUniqueInput | Prisma.PaymentAllocationWhereUniqueInput[];
    connect?: Prisma.PaymentAllocationWhereUniqueInput | Prisma.PaymentAllocationWhereUniqueInput[];
    update?: Prisma.PaymentAllocationUpdateWithWhereUniqueWithoutChargeInput | Prisma.PaymentAllocationUpdateWithWhereUniqueWithoutChargeInput[];
    updateMany?: Prisma.PaymentAllocationUpdateManyWithWhereWithoutChargeInput | Prisma.PaymentAllocationUpdateManyWithWhereWithoutChargeInput[];
    deleteMany?: Prisma.PaymentAllocationScalarWhereInput | Prisma.PaymentAllocationScalarWhereInput[];
};
export type PaymentAllocationUncheckedUpdateManyWithoutChargeNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentAllocationCreateWithoutChargeInput, Prisma.PaymentAllocationUncheckedCreateWithoutChargeInput> | Prisma.PaymentAllocationCreateWithoutChargeInput[] | Prisma.PaymentAllocationUncheckedCreateWithoutChargeInput[];
    connectOrCreate?: Prisma.PaymentAllocationCreateOrConnectWithoutChargeInput | Prisma.PaymentAllocationCreateOrConnectWithoutChargeInput[];
    upsert?: Prisma.PaymentAllocationUpsertWithWhereUniqueWithoutChargeInput | Prisma.PaymentAllocationUpsertWithWhereUniqueWithoutChargeInput[];
    createMany?: Prisma.PaymentAllocationCreateManyChargeInputEnvelope;
    set?: Prisma.PaymentAllocationWhereUniqueInput | Prisma.PaymentAllocationWhereUniqueInput[];
    disconnect?: Prisma.PaymentAllocationWhereUniqueInput | Prisma.PaymentAllocationWhereUniqueInput[];
    delete?: Prisma.PaymentAllocationWhereUniqueInput | Prisma.PaymentAllocationWhereUniqueInput[];
    connect?: Prisma.PaymentAllocationWhereUniqueInput | Prisma.PaymentAllocationWhereUniqueInput[];
    update?: Prisma.PaymentAllocationUpdateWithWhereUniqueWithoutChargeInput | Prisma.PaymentAllocationUpdateWithWhereUniqueWithoutChargeInput[];
    updateMany?: Prisma.PaymentAllocationUpdateManyWithWhereWithoutChargeInput | Prisma.PaymentAllocationUpdateManyWithWhereWithoutChargeInput[];
    deleteMany?: Prisma.PaymentAllocationScalarWhereInput | Prisma.PaymentAllocationScalarWhereInput[];
};
export type PaymentAllocationCreateNestedManyWithoutPaymentInput = {
    create?: Prisma.XOR<Prisma.PaymentAllocationCreateWithoutPaymentInput, Prisma.PaymentAllocationUncheckedCreateWithoutPaymentInput> | Prisma.PaymentAllocationCreateWithoutPaymentInput[] | Prisma.PaymentAllocationUncheckedCreateWithoutPaymentInput[];
    connectOrCreate?: Prisma.PaymentAllocationCreateOrConnectWithoutPaymentInput | Prisma.PaymentAllocationCreateOrConnectWithoutPaymentInput[];
    createMany?: Prisma.PaymentAllocationCreateManyPaymentInputEnvelope;
    connect?: Prisma.PaymentAllocationWhereUniqueInput | Prisma.PaymentAllocationWhereUniqueInput[];
};
export type PaymentAllocationUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: Prisma.XOR<Prisma.PaymentAllocationCreateWithoutPaymentInput, Prisma.PaymentAllocationUncheckedCreateWithoutPaymentInput> | Prisma.PaymentAllocationCreateWithoutPaymentInput[] | Prisma.PaymentAllocationUncheckedCreateWithoutPaymentInput[];
    connectOrCreate?: Prisma.PaymentAllocationCreateOrConnectWithoutPaymentInput | Prisma.PaymentAllocationCreateOrConnectWithoutPaymentInput[];
    createMany?: Prisma.PaymentAllocationCreateManyPaymentInputEnvelope;
    connect?: Prisma.PaymentAllocationWhereUniqueInput | Prisma.PaymentAllocationWhereUniqueInput[];
};
export type PaymentAllocationUpdateManyWithoutPaymentNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentAllocationCreateWithoutPaymentInput, Prisma.PaymentAllocationUncheckedCreateWithoutPaymentInput> | Prisma.PaymentAllocationCreateWithoutPaymentInput[] | Prisma.PaymentAllocationUncheckedCreateWithoutPaymentInput[];
    connectOrCreate?: Prisma.PaymentAllocationCreateOrConnectWithoutPaymentInput | Prisma.PaymentAllocationCreateOrConnectWithoutPaymentInput[];
    upsert?: Prisma.PaymentAllocationUpsertWithWhereUniqueWithoutPaymentInput | Prisma.PaymentAllocationUpsertWithWhereUniqueWithoutPaymentInput[];
    createMany?: Prisma.PaymentAllocationCreateManyPaymentInputEnvelope;
    set?: Prisma.PaymentAllocationWhereUniqueInput | Prisma.PaymentAllocationWhereUniqueInput[];
    disconnect?: Prisma.PaymentAllocationWhereUniqueInput | Prisma.PaymentAllocationWhereUniqueInput[];
    delete?: Prisma.PaymentAllocationWhereUniqueInput | Prisma.PaymentAllocationWhereUniqueInput[];
    connect?: Prisma.PaymentAllocationWhereUniqueInput | Prisma.PaymentAllocationWhereUniqueInput[];
    update?: Prisma.PaymentAllocationUpdateWithWhereUniqueWithoutPaymentInput | Prisma.PaymentAllocationUpdateWithWhereUniqueWithoutPaymentInput[];
    updateMany?: Prisma.PaymentAllocationUpdateManyWithWhereWithoutPaymentInput | Prisma.PaymentAllocationUpdateManyWithWhereWithoutPaymentInput[];
    deleteMany?: Prisma.PaymentAllocationScalarWhereInput | Prisma.PaymentAllocationScalarWhereInput[];
};
export type PaymentAllocationUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentAllocationCreateWithoutPaymentInput, Prisma.PaymentAllocationUncheckedCreateWithoutPaymentInput> | Prisma.PaymentAllocationCreateWithoutPaymentInput[] | Prisma.PaymentAllocationUncheckedCreateWithoutPaymentInput[];
    connectOrCreate?: Prisma.PaymentAllocationCreateOrConnectWithoutPaymentInput | Prisma.PaymentAllocationCreateOrConnectWithoutPaymentInput[];
    upsert?: Prisma.PaymentAllocationUpsertWithWhereUniqueWithoutPaymentInput | Prisma.PaymentAllocationUpsertWithWhereUniqueWithoutPaymentInput[];
    createMany?: Prisma.PaymentAllocationCreateManyPaymentInputEnvelope;
    set?: Prisma.PaymentAllocationWhereUniqueInput | Prisma.PaymentAllocationWhereUniqueInput[];
    disconnect?: Prisma.PaymentAllocationWhereUniqueInput | Prisma.PaymentAllocationWhereUniqueInput[];
    delete?: Prisma.PaymentAllocationWhereUniqueInput | Prisma.PaymentAllocationWhereUniqueInput[];
    connect?: Prisma.PaymentAllocationWhereUniqueInput | Prisma.PaymentAllocationWhereUniqueInput[];
    update?: Prisma.PaymentAllocationUpdateWithWhereUniqueWithoutPaymentInput | Prisma.PaymentAllocationUpdateWithWhereUniqueWithoutPaymentInput[];
    updateMany?: Prisma.PaymentAllocationUpdateManyWithWhereWithoutPaymentInput | Prisma.PaymentAllocationUpdateManyWithWhereWithoutPaymentInput[];
    deleteMany?: Prisma.PaymentAllocationScalarWhereInput | Prisma.PaymentAllocationScalarWhereInput[];
};
export type PaymentAllocationCreateWithoutChargeInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    payment: Prisma.PaymentCreateNestedOneWithoutAllocationsInput;
};
export type PaymentAllocationUncheckedCreateWithoutChargeInput = {
    id?: string;
    paymentId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type PaymentAllocationCreateOrConnectWithoutChargeInput = {
    where: Prisma.PaymentAllocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentAllocationCreateWithoutChargeInput, Prisma.PaymentAllocationUncheckedCreateWithoutChargeInput>;
};
export type PaymentAllocationCreateManyChargeInputEnvelope = {
    data: Prisma.PaymentAllocationCreateManyChargeInput | Prisma.PaymentAllocationCreateManyChargeInput[];
    skipDuplicates?: boolean;
};
export type PaymentAllocationUpsertWithWhereUniqueWithoutChargeInput = {
    where: Prisma.PaymentAllocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentAllocationUpdateWithoutChargeInput, Prisma.PaymentAllocationUncheckedUpdateWithoutChargeInput>;
    create: Prisma.XOR<Prisma.PaymentAllocationCreateWithoutChargeInput, Prisma.PaymentAllocationUncheckedCreateWithoutChargeInput>;
};
export type PaymentAllocationUpdateWithWhereUniqueWithoutChargeInput = {
    where: Prisma.PaymentAllocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentAllocationUpdateWithoutChargeInput, Prisma.PaymentAllocationUncheckedUpdateWithoutChargeInput>;
};
export type PaymentAllocationUpdateManyWithWhereWithoutChargeInput = {
    where: Prisma.PaymentAllocationScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentAllocationUpdateManyMutationInput, Prisma.PaymentAllocationUncheckedUpdateManyWithoutChargeInput>;
};
export type PaymentAllocationScalarWhereInput = {
    AND?: Prisma.PaymentAllocationScalarWhereInput | Prisma.PaymentAllocationScalarWhereInput[];
    OR?: Prisma.PaymentAllocationScalarWhereInput[];
    NOT?: Prisma.PaymentAllocationScalarWhereInput | Prisma.PaymentAllocationScalarWhereInput[];
    id?: Prisma.StringFilter<"PaymentAllocation"> | string;
    paymentId?: Prisma.StringFilter<"PaymentAllocation"> | string;
    chargeId?: Prisma.StringFilter<"PaymentAllocation"> | string;
    amount?: Prisma.DecimalFilter<"PaymentAllocation"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"PaymentAllocation"> | Date | string;
};
export type PaymentAllocationCreateWithoutPaymentInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    charge: Prisma.ChargeCreateNestedOneWithoutAllocationsInput;
};
export type PaymentAllocationUncheckedCreateWithoutPaymentInput = {
    id?: string;
    chargeId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type PaymentAllocationCreateOrConnectWithoutPaymentInput = {
    where: Prisma.PaymentAllocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentAllocationCreateWithoutPaymentInput, Prisma.PaymentAllocationUncheckedCreateWithoutPaymentInput>;
};
export type PaymentAllocationCreateManyPaymentInputEnvelope = {
    data: Prisma.PaymentAllocationCreateManyPaymentInput | Prisma.PaymentAllocationCreateManyPaymentInput[];
    skipDuplicates?: boolean;
};
export type PaymentAllocationUpsertWithWhereUniqueWithoutPaymentInput = {
    where: Prisma.PaymentAllocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentAllocationUpdateWithoutPaymentInput, Prisma.PaymentAllocationUncheckedUpdateWithoutPaymentInput>;
    create: Prisma.XOR<Prisma.PaymentAllocationCreateWithoutPaymentInput, Prisma.PaymentAllocationUncheckedCreateWithoutPaymentInput>;
};
export type PaymentAllocationUpdateWithWhereUniqueWithoutPaymentInput = {
    where: Prisma.PaymentAllocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentAllocationUpdateWithoutPaymentInput, Prisma.PaymentAllocationUncheckedUpdateWithoutPaymentInput>;
};
export type PaymentAllocationUpdateManyWithWhereWithoutPaymentInput = {
    where: Prisma.PaymentAllocationScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentAllocationUpdateManyMutationInput, Prisma.PaymentAllocationUncheckedUpdateManyWithoutPaymentInput>;
};
export type PaymentAllocationCreateManyChargeInput = {
    id?: string;
    paymentId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type PaymentAllocationUpdateWithoutChargeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: Prisma.PaymentUpdateOneRequiredWithoutAllocationsNestedInput;
};
export type PaymentAllocationUncheckedUpdateWithoutChargeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentAllocationUncheckedUpdateManyWithoutChargeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentAllocationCreateManyPaymentInput = {
    id?: string;
    chargeId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type PaymentAllocationUpdateWithoutPaymentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    charge?: Prisma.ChargeUpdateOneRequiredWithoutAllocationsNestedInput;
};
export type PaymentAllocationUncheckedUpdateWithoutPaymentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chargeId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentAllocationUncheckedUpdateManyWithoutPaymentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chargeId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentAllocationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paymentId?: boolean;
    chargeId?: boolean;
    amount?: boolean;
    createdAt?: boolean;
    payment?: boolean | Prisma.PaymentDefaultArgs<ExtArgs>;
    charge?: boolean | Prisma.ChargeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paymentAllocation"]>;
export type PaymentAllocationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paymentId?: boolean;
    chargeId?: boolean;
    amount?: boolean;
    createdAt?: boolean;
    payment?: boolean | Prisma.PaymentDefaultArgs<ExtArgs>;
    charge?: boolean | Prisma.ChargeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paymentAllocation"]>;
export type PaymentAllocationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paymentId?: boolean;
    chargeId?: boolean;
    amount?: boolean;
    createdAt?: boolean;
    payment?: boolean | Prisma.PaymentDefaultArgs<ExtArgs>;
    charge?: boolean | Prisma.ChargeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paymentAllocation"]>;
export type PaymentAllocationSelectScalar = {
    id?: boolean;
    paymentId?: boolean;
    chargeId?: boolean;
    amount?: boolean;
    createdAt?: boolean;
};
export type PaymentAllocationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "paymentId" | "chargeId" | "amount" | "createdAt", ExtArgs["result"]["paymentAllocation"]>;
export type PaymentAllocationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payment?: boolean | Prisma.PaymentDefaultArgs<ExtArgs>;
    charge?: boolean | Prisma.ChargeDefaultArgs<ExtArgs>;
};
export type PaymentAllocationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payment?: boolean | Prisma.PaymentDefaultArgs<ExtArgs>;
    charge?: boolean | Prisma.ChargeDefaultArgs<ExtArgs>;
};
export type PaymentAllocationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payment?: boolean | Prisma.PaymentDefaultArgs<ExtArgs>;
    charge?: boolean | Prisma.ChargeDefaultArgs<ExtArgs>;
};
export type $PaymentAllocationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PaymentAllocation";
    objects: {
        payment: Prisma.$PaymentPayload<ExtArgs>;
        charge: Prisma.$ChargePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        paymentId: string;
        chargeId: string;
        amount: runtime.Decimal;
        createdAt: Date;
    }, ExtArgs["result"]["paymentAllocation"]>;
    composites: {};
};
export type PaymentAllocationGetPayload<S extends boolean | null | undefined | PaymentAllocationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaymentAllocationPayload, S>;
export type PaymentAllocationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaymentAllocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentAllocationCountAggregateInputType | true;
};
export interface PaymentAllocationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PaymentAllocation'];
        meta: {
            name: 'PaymentAllocation';
        };
    };
    findUnique<T extends PaymentAllocationFindUniqueArgs>(args: Prisma.SelectSubset<T, PaymentAllocationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaymentAllocationClient<runtime.Types.Result.GetResult<Prisma.$PaymentAllocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PaymentAllocationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaymentAllocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentAllocationClient<runtime.Types.Result.GetResult<Prisma.$PaymentAllocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PaymentAllocationFindFirstArgs>(args?: Prisma.SelectSubset<T, PaymentAllocationFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaymentAllocationClient<runtime.Types.Result.GetResult<Prisma.$PaymentAllocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PaymentAllocationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaymentAllocationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentAllocationClient<runtime.Types.Result.GetResult<Prisma.$PaymentAllocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PaymentAllocationFindManyArgs>(args?: Prisma.SelectSubset<T, PaymentAllocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentAllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PaymentAllocationCreateArgs>(args: Prisma.SelectSubset<T, PaymentAllocationCreateArgs<ExtArgs>>): Prisma.Prisma__PaymentAllocationClient<runtime.Types.Result.GetResult<Prisma.$PaymentAllocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PaymentAllocationCreateManyArgs>(args?: Prisma.SelectSubset<T, PaymentAllocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PaymentAllocationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PaymentAllocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentAllocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PaymentAllocationDeleteArgs>(args: Prisma.SelectSubset<T, PaymentAllocationDeleteArgs<ExtArgs>>): Prisma.Prisma__PaymentAllocationClient<runtime.Types.Result.GetResult<Prisma.$PaymentAllocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PaymentAllocationUpdateArgs>(args: Prisma.SelectSubset<T, PaymentAllocationUpdateArgs<ExtArgs>>): Prisma.Prisma__PaymentAllocationClient<runtime.Types.Result.GetResult<Prisma.$PaymentAllocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PaymentAllocationDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaymentAllocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PaymentAllocationUpdateManyArgs>(args: Prisma.SelectSubset<T, PaymentAllocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PaymentAllocationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PaymentAllocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentAllocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PaymentAllocationUpsertArgs>(args: Prisma.SelectSubset<T, PaymentAllocationUpsertArgs<ExtArgs>>): Prisma.Prisma__PaymentAllocationClient<runtime.Types.Result.GetResult<Prisma.$PaymentAllocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PaymentAllocationCountArgs>(args?: Prisma.Subset<T, PaymentAllocationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentAllocationCountAggregateOutputType> : number>;
    aggregate<T extends PaymentAllocationAggregateArgs>(args: Prisma.Subset<T, PaymentAllocationAggregateArgs>): Prisma.PrismaPromise<GetPaymentAllocationAggregateType<T>>;
    groupBy<T extends PaymentAllocationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaymentAllocationGroupByArgs['orderBy'];
    } : {
        orderBy?: PaymentAllocationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaymentAllocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentAllocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PaymentAllocationFieldRefs;
}
export interface Prisma__PaymentAllocationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    payment<T extends Prisma.PaymentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PaymentDefaultArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    charge<T extends Prisma.ChargeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChargeDefaultArgs<ExtArgs>>): Prisma.Prisma__ChargeClient<runtime.Types.Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PaymentAllocationFieldRefs {
    readonly id: Prisma.FieldRef<"PaymentAllocation", 'String'>;
    readonly paymentId: Prisma.FieldRef<"PaymentAllocation", 'String'>;
    readonly chargeId: Prisma.FieldRef<"PaymentAllocation", 'String'>;
    readonly amount: Prisma.FieldRef<"PaymentAllocation", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"PaymentAllocation", 'DateTime'>;
}
export type PaymentAllocationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAllocationSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAllocationOmit<ExtArgs> | null;
    include?: Prisma.PaymentAllocationInclude<ExtArgs> | null;
    where: Prisma.PaymentAllocationWhereUniqueInput;
};
export type PaymentAllocationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAllocationSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAllocationOmit<ExtArgs> | null;
    include?: Prisma.PaymentAllocationInclude<ExtArgs> | null;
    where: Prisma.PaymentAllocationWhereUniqueInput;
};
export type PaymentAllocationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PaymentAllocationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PaymentAllocationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PaymentAllocationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAllocationSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAllocationOmit<ExtArgs> | null;
    include?: Prisma.PaymentAllocationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentAllocationCreateInput, Prisma.PaymentAllocationUncheckedCreateInput>;
};
export type PaymentAllocationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PaymentAllocationCreateManyInput | Prisma.PaymentAllocationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PaymentAllocationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAllocationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentAllocationOmit<ExtArgs> | null;
    data: Prisma.PaymentAllocationCreateManyInput | Prisma.PaymentAllocationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PaymentAllocationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PaymentAllocationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAllocationSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAllocationOmit<ExtArgs> | null;
    include?: Prisma.PaymentAllocationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentAllocationUpdateInput, Prisma.PaymentAllocationUncheckedUpdateInput>;
    where: Prisma.PaymentAllocationWhereUniqueInput;
};
export type PaymentAllocationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PaymentAllocationUpdateManyMutationInput, Prisma.PaymentAllocationUncheckedUpdateManyInput>;
    where?: Prisma.PaymentAllocationWhereInput;
    limit?: number;
};
export type PaymentAllocationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAllocationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentAllocationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentAllocationUpdateManyMutationInput, Prisma.PaymentAllocationUncheckedUpdateManyInput>;
    where?: Prisma.PaymentAllocationWhereInput;
    limit?: number;
    include?: Prisma.PaymentAllocationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PaymentAllocationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAllocationSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAllocationOmit<ExtArgs> | null;
    include?: Prisma.PaymentAllocationInclude<ExtArgs> | null;
    where: Prisma.PaymentAllocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentAllocationCreateInput, Prisma.PaymentAllocationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PaymentAllocationUpdateInput, Prisma.PaymentAllocationUncheckedUpdateInput>;
};
export type PaymentAllocationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAllocationSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAllocationOmit<ExtArgs> | null;
    include?: Prisma.PaymentAllocationInclude<ExtArgs> | null;
    where: Prisma.PaymentAllocationWhereUniqueInput;
};
export type PaymentAllocationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentAllocationWhereInput;
    limit?: number;
};
export type PaymentAllocationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAllocationSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAllocationOmit<ExtArgs> | null;
    include?: Prisma.PaymentAllocationInclude<ExtArgs> | null;
};
