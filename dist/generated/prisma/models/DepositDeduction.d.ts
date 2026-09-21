import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DepositDeductionModel = runtime.Types.Result.DefaultSelection<Prisma.$DepositDeductionPayload>;
export type AggregateDepositDeduction = {
    _count: DepositDeductionCountAggregateOutputType | null;
    _avg: DepositDeductionAvgAggregateOutputType | null;
    _sum: DepositDeductionSumAggregateOutputType | null;
    _min: DepositDeductionMinAggregateOutputType | null;
    _max: DepositDeductionMaxAggregateOutputType | null;
};
export type DepositDeductionAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type DepositDeductionSumAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type DepositDeductionMinAggregateOutputType = {
    id: string | null;
    refundId: string | null;
    reason: string | null;
    amount: runtime.Decimal | null;
};
export type DepositDeductionMaxAggregateOutputType = {
    id: string | null;
    refundId: string | null;
    reason: string | null;
    amount: runtime.Decimal | null;
};
export type DepositDeductionCountAggregateOutputType = {
    id: number;
    refundId: number;
    reason: number;
    amount: number;
    _all: number;
};
export type DepositDeductionAvgAggregateInputType = {
    amount?: true;
};
export type DepositDeductionSumAggregateInputType = {
    amount?: true;
};
export type DepositDeductionMinAggregateInputType = {
    id?: true;
    refundId?: true;
    reason?: true;
    amount?: true;
};
export type DepositDeductionMaxAggregateInputType = {
    id?: true;
    refundId?: true;
    reason?: true;
    amount?: true;
};
export type DepositDeductionCountAggregateInputType = {
    id?: true;
    refundId?: true;
    reason?: true;
    amount?: true;
    _all?: true;
};
export type DepositDeductionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepositDeductionWhereInput;
    orderBy?: Prisma.DepositDeductionOrderByWithRelationInput | Prisma.DepositDeductionOrderByWithRelationInput[];
    cursor?: Prisma.DepositDeductionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DepositDeductionCountAggregateInputType;
    _avg?: DepositDeductionAvgAggregateInputType;
    _sum?: DepositDeductionSumAggregateInputType;
    _min?: DepositDeductionMinAggregateInputType;
    _max?: DepositDeductionMaxAggregateInputType;
};
export type GetDepositDeductionAggregateType<T extends DepositDeductionAggregateArgs> = {
    [P in keyof T & keyof AggregateDepositDeduction]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDepositDeduction[P]> : Prisma.GetScalarType<T[P], AggregateDepositDeduction[P]>;
};
export type DepositDeductionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepositDeductionWhereInput;
    orderBy?: Prisma.DepositDeductionOrderByWithAggregationInput | Prisma.DepositDeductionOrderByWithAggregationInput[];
    by: Prisma.DepositDeductionScalarFieldEnum[] | Prisma.DepositDeductionScalarFieldEnum;
    having?: Prisma.DepositDeductionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DepositDeductionCountAggregateInputType | true;
    _avg?: DepositDeductionAvgAggregateInputType;
    _sum?: DepositDeductionSumAggregateInputType;
    _min?: DepositDeductionMinAggregateInputType;
    _max?: DepositDeductionMaxAggregateInputType;
};
export type DepositDeductionGroupByOutputType = {
    id: string;
    refundId: string;
    reason: string;
    amount: runtime.Decimal;
    _count: DepositDeductionCountAggregateOutputType | null;
    _avg: DepositDeductionAvgAggregateOutputType | null;
    _sum: DepositDeductionSumAggregateOutputType | null;
    _min: DepositDeductionMinAggregateOutputType | null;
    _max: DepositDeductionMaxAggregateOutputType | null;
};
export type GetDepositDeductionGroupByPayload<T extends DepositDeductionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DepositDeductionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DepositDeductionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DepositDeductionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DepositDeductionGroupByOutputType[P]>;
}>>;
export type DepositDeductionWhereInput = {
    AND?: Prisma.DepositDeductionWhereInput | Prisma.DepositDeductionWhereInput[];
    OR?: Prisma.DepositDeductionWhereInput[];
    NOT?: Prisma.DepositDeductionWhereInput | Prisma.DepositDeductionWhereInput[];
    id?: Prisma.StringFilter<"DepositDeduction"> | string;
    refundId?: Prisma.StringFilter<"DepositDeduction"> | string;
    reason?: Prisma.StringFilter<"DepositDeduction"> | string;
    amount?: Prisma.DecimalFilter<"DepositDeduction"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    refund?: Prisma.XOR<Prisma.DepositRefundScalarRelationFilter, Prisma.DepositRefundWhereInput>;
};
export type DepositDeductionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    refundId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    refund?: Prisma.DepositRefundOrderByWithRelationInput;
};
export type DepositDeductionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DepositDeductionWhereInput | Prisma.DepositDeductionWhereInput[];
    OR?: Prisma.DepositDeductionWhereInput[];
    NOT?: Prisma.DepositDeductionWhereInput | Prisma.DepositDeductionWhereInput[];
    refundId?: Prisma.StringFilter<"DepositDeduction"> | string;
    reason?: Prisma.StringFilter<"DepositDeduction"> | string;
    amount?: Prisma.DecimalFilter<"DepositDeduction"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    refund?: Prisma.XOR<Prisma.DepositRefundScalarRelationFilter, Prisma.DepositRefundWhereInput>;
}, "id">;
export type DepositDeductionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    refundId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    _count?: Prisma.DepositDeductionCountOrderByAggregateInput;
    _avg?: Prisma.DepositDeductionAvgOrderByAggregateInput;
    _max?: Prisma.DepositDeductionMaxOrderByAggregateInput;
    _min?: Prisma.DepositDeductionMinOrderByAggregateInput;
    _sum?: Prisma.DepositDeductionSumOrderByAggregateInput;
};
export type DepositDeductionScalarWhereWithAggregatesInput = {
    AND?: Prisma.DepositDeductionScalarWhereWithAggregatesInput | Prisma.DepositDeductionScalarWhereWithAggregatesInput[];
    OR?: Prisma.DepositDeductionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DepositDeductionScalarWhereWithAggregatesInput | Prisma.DepositDeductionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DepositDeduction"> | string;
    refundId?: Prisma.StringWithAggregatesFilter<"DepositDeduction"> | string;
    reason?: Prisma.StringWithAggregatesFilter<"DepositDeduction"> | string;
    amount?: Prisma.DecimalWithAggregatesFilter<"DepositDeduction"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DepositDeductionCreateInput = {
    id?: string;
    reason: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    refund: Prisma.DepositRefundCreateNestedOneWithoutDeductionsInput;
};
export type DepositDeductionUncheckedCreateInput = {
    id?: string;
    refundId: string;
    reason: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DepositDeductionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    refund?: Prisma.DepositRefundUpdateOneRequiredWithoutDeductionsNestedInput;
};
export type DepositDeductionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    refundId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DepositDeductionCreateManyInput = {
    id?: string;
    refundId: string;
    reason: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DepositDeductionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DepositDeductionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    refundId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DepositDeductionListRelationFilter = {
    every?: Prisma.DepositDeductionWhereInput;
    some?: Prisma.DepositDeductionWhereInput;
    none?: Prisma.DepositDeductionWhereInput;
};
export type DepositDeductionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DepositDeductionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    refundId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type DepositDeductionAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type DepositDeductionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    refundId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type DepositDeductionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    refundId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type DepositDeductionSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type DepositDeductionCreateNestedManyWithoutRefundInput = {
    create?: Prisma.XOR<Prisma.DepositDeductionCreateWithoutRefundInput, Prisma.DepositDeductionUncheckedCreateWithoutRefundInput> | Prisma.DepositDeductionCreateWithoutRefundInput[] | Prisma.DepositDeductionUncheckedCreateWithoutRefundInput[];
    connectOrCreate?: Prisma.DepositDeductionCreateOrConnectWithoutRefundInput | Prisma.DepositDeductionCreateOrConnectWithoutRefundInput[];
    createMany?: Prisma.DepositDeductionCreateManyRefundInputEnvelope;
    connect?: Prisma.DepositDeductionWhereUniqueInput | Prisma.DepositDeductionWhereUniqueInput[];
};
export type DepositDeductionUncheckedCreateNestedManyWithoutRefundInput = {
    create?: Prisma.XOR<Prisma.DepositDeductionCreateWithoutRefundInput, Prisma.DepositDeductionUncheckedCreateWithoutRefundInput> | Prisma.DepositDeductionCreateWithoutRefundInput[] | Prisma.DepositDeductionUncheckedCreateWithoutRefundInput[];
    connectOrCreate?: Prisma.DepositDeductionCreateOrConnectWithoutRefundInput | Prisma.DepositDeductionCreateOrConnectWithoutRefundInput[];
    createMany?: Prisma.DepositDeductionCreateManyRefundInputEnvelope;
    connect?: Prisma.DepositDeductionWhereUniqueInput | Prisma.DepositDeductionWhereUniqueInput[];
};
export type DepositDeductionUpdateManyWithoutRefundNestedInput = {
    create?: Prisma.XOR<Prisma.DepositDeductionCreateWithoutRefundInput, Prisma.DepositDeductionUncheckedCreateWithoutRefundInput> | Prisma.DepositDeductionCreateWithoutRefundInput[] | Prisma.DepositDeductionUncheckedCreateWithoutRefundInput[];
    connectOrCreate?: Prisma.DepositDeductionCreateOrConnectWithoutRefundInput | Prisma.DepositDeductionCreateOrConnectWithoutRefundInput[];
    upsert?: Prisma.DepositDeductionUpsertWithWhereUniqueWithoutRefundInput | Prisma.DepositDeductionUpsertWithWhereUniqueWithoutRefundInput[];
    createMany?: Prisma.DepositDeductionCreateManyRefundInputEnvelope;
    set?: Prisma.DepositDeductionWhereUniqueInput | Prisma.DepositDeductionWhereUniqueInput[];
    disconnect?: Prisma.DepositDeductionWhereUniqueInput | Prisma.DepositDeductionWhereUniqueInput[];
    delete?: Prisma.DepositDeductionWhereUniqueInput | Prisma.DepositDeductionWhereUniqueInput[];
    connect?: Prisma.DepositDeductionWhereUniqueInput | Prisma.DepositDeductionWhereUniqueInput[];
    update?: Prisma.DepositDeductionUpdateWithWhereUniqueWithoutRefundInput | Prisma.DepositDeductionUpdateWithWhereUniqueWithoutRefundInput[];
    updateMany?: Prisma.DepositDeductionUpdateManyWithWhereWithoutRefundInput | Prisma.DepositDeductionUpdateManyWithWhereWithoutRefundInput[];
    deleteMany?: Prisma.DepositDeductionScalarWhereInput | Prisma.DepositDeductionScalarWhereInput[];
};
export type DepositDeductionUncheckedUpdateManyWithoutRefundNestedInput = {
    create?: Prisma.XOR<Prisma.DepositDeductionCreateWithoutRefundInput, Prisma.DepositDeductionUncheckedCreateWithoutRefundInput> | Prisma.DepositDeductionCreateWithoutRefundInput[] | Prisma.DepositDeductionUncheckedCreateWithoutRefundInput[];
    connectOrCreate?: Prisma.DepositDeductionCreateOrConnectWithoutRefundInput | Prisma.DepositDeductionCreateOrConnectWithoutRefundInput[];
    upsert?: Prisma.DepositDeductionUpsertWithWhereUniqueWithoutRefundInput | Prisma.DepositDeductionUpsertWithWhereUniqueWithoutRefundInput[];
    createMany?: Prisma.DepositDeductionCreateManyRefundInputEnvelope;
    set?: Prisma.DepositDeductionWhereUniqueInput | Prisma.DepositDeductionWhereUniqueInput[];
    disconnect?: Prisma.DepositDeductionWhereUniqueInput | Prisma.DepositDeductionWhereUniqueInput[];
    delete?: Prisma.DepositDeductionWhereUniqueInput | Prisma.DepositDeductionWhereUniqueInput[];
    connect?: Prisma.DepositDeductionWhereUniqueInput | Prisma.DepositDeductionWhereUniqueInput[];
    update?: Prisma.DepositDeductionUpdateWithWhereUniqueWithoutRefundInput | Prisma.DepositDeductionUpdateWithWhereUniqueWithoutRefundInput[];
    updateMany?: Prisma.DepositDeductionUpdateManyWithWhereWithoutRefundInput | Prisma.DepositDeductionUpdateManyWithWhereWithoutRefundInput[];
    deleteMany?: Prisma.DepositDeductionScalarWhereInput | Prisma.DepositDeductionScalarWhereInput[];
};
export type DepositDeductionCreateWithoutRefundInput = {
    id?: string;
    reason: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DepositDeductionUncheckedCreateWithoutRefundInput = {
    id?: string;
    reason: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DepositDeductionCreateOrConnectWithoutRefundInput = {
    where: Prisma.DepositDeductionWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepositDeductionCreateWithoutRefundInput, Prisma.DepositDeductionUncheckedCreateWithoutRefundInput>;
};
export type DepositDeductionCreateManyRefundInputEnvelope = {
    data: Prisma.DepositDeductionCreateManyRefundInput | Prisma.DepositDeductionCreateManyRefundInput[];
    skipDuplicates?: boolean;
};
export type DepositDeductionUpsertWithWhereUniqueWithoutRefundInput = {
    where: Prisma.DepositDeductionWhereUniqueInput;
    update: Prisma.XOR<Prisma.DepositDeductionUpdateWithoutRefundInput, Prisma.DepositDeductionUncheckedUpdateWithoutRefundInput>;
    create: Prisma.XOR<Prisma.DepositDeductionCreateWithoutRefundInput, Prisma.DepositDeductionUncheckedCreateWithoutRefundInput>;
};
export type DepositDeductionUpdateWithWhereUniqueWithoutRefundInput = {
    where: Prisma.DepositDeductionWhereUniqueInput;
    data: Prisma.XOR<Prisma.DepositDeductionUpdateWithoutRefundInput, Prisma.DepositDeductionUncheckedUpdateWithoutRefundInput>;
};
export type DepositDeductionUpdateManyWithWhereWithoutRefundInput = {
    where: Prisma.DepositDeductionScalarWhereInput;
    data: Prisma.XOR<Prisma.DepositDeductionUpdateManyMutationInput, Prisma.DepositDeductionUncheckedUpdateManyWithoutRefundInput>;
};
export type DepositDeductionScalarWhereInput = {
    AND?: Prisma.DepositDeductionScalarWhereInput | Prisma.DepositDeductionScalarWhereInput[];
    OR?: Prisma.DepositDeductionScalarWhereInput[];
    NOT?: Prisma.DepositDeductionScalarWhereInput | Prisma.DepositDeductionScalarWhereInput[];
    id?: Prisma.StringFilter<"DepositDeduction"> | string;
    refundId?: Prisma.StringFilter<"DepositDeduction"> | string;
    reason?: Prisma.StringFilter<"DepositDeduction"> | string;
    amount?: Prisma.DecimalFilter<"DepositDeduction"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DepositDeductionCreateManyRefundInput = {
    id?: string;
    reason: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DepositDeductionUpdateWithoutRefundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DepositDeductionUncheckedUpdateWithoutRefundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DepositDeductionUncheckedUpdateManyWithoutRefundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DepositDeductionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    refundId?: boolean;
    reason?: boolean;
    amount?: boolean;
    refund?: boolean | Prisma.DepositRefundDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["depositDeduction"]>;
export type DepositDeductionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    refundId?: boolean;
    reason?: boolean;
    amount?: boolean;
    refund?: boolean | Prisma.DepositRefundDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["depositDeduction"]>;
export type DepositDeductionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    refundId?: boolean;
    reason?: boolean;
    amount?: boolean;
    refund?: boolean | Prisma.DepositRefundDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["depositDeduction"]>;
export type DepositDeductionSelectScalar = {
    id?: boolean;
    refundId?: boolean;
    reason?: boolean;
    amount?: boolean;
};
export type DepositDeductionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "refundId" | "reason" | "amount", ExtArgs["result"]["depositDeduction"]>;
export type DepositDeductionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    refund?: boolean | Prisma.DepositRefundDefaultArgs<ExtArgs>;
};
export type DepositDeductionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    refund?: boolean | Prisma.DepositRefundDefaultArgs<ExtArgs>;
};
export type DepositDeductionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    refund?: boolean | Prisma.DepositRefundDefaultArgs<ExtArgs>;
};
export type $DepositDeductionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DepositDeduction";
    objects: {
        refund: Prisma.$DepositRefundPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        refundId: string;
        reason: string;
        amount: runtime.Decimal;
    }, ExtArgs["result"]["depositDeduction"]>;
    composites: {};
};
export type DepositDeductionGetPayload<S extends boolean | null | undefined | DepositDeductionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DepositDeductionPayload, S>;
export type DepositDeductionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DepositDeductionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DepositDeductionCountAggregateInputType | true;
};
export interface DepositDeductionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DepositDeduction'];
        meta: {
            name: 'DepositDeduction';
        };
    };
    findUnique<T extends DepositDeductionFindUniqueArgs>(args: Prisma.SelectSubset<T, DepositDeductionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DepositDeductionClient<runtime.Types.Result.GetResult<Prisma.$DepositDeductionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DepositDeductionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DepositDeductionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DepositDeductionClient<runtime.Types.Result.GetResult<Prisma.$DepositDeductionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DepositDeductionFindFirstArgs>(args?: Prisma.SelectSubset<T, DepositDeductionFindFirstArgs<ExtArgs>>): Prisma.Prisma__DepositDeductionClient<runtime.Types.Result.GetResult<Prisma.$DepositDeductionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DepositDeductionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DepositDeductionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DepositDeductionClient<runtime.Types.Result.GetResult<Prisma.$DepositDeductionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DepositDeductionFindManyArgs>(args?: Prisma.SelectSubset<T, DepositDeductionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepositDeductionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DepositDeductionCreateArgs>(args: Prisma.SelectSubset<T, DepositDeductionCreateArgs<ExtArgs>>): Prisma.Prisma__DepositDeductionClient<runtime.Types.Result.GetResult<Prisma.$DepositDeductionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DepositDeductionCreateManyArgs>(args?: Prisma.SelectSubset<T, DepositDeductionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DepositDeductionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DepositDeductionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepositDeductionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DepositDeductionDeleteArgs>(args: Prisma.SelectSubset<T, DepositDeductionDeleteArgs<ExtArgs>>): Prisma.Prisma__DepositDeductionClient<runtime.Types.Result.GetResult<Prisma.$DepositDeductionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DepositDeductionUpdateArgs>(args: Prisma.SelectSubset<T, DepositDeductionUpdateArgs<ExtArgs>>): Prisma.Prisma__DepositDeductionClient<runtime.Types.Result.GetResult<Prisma.$DepositDeductionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DepositDeductionDeleteManyArgs>(args?: Prisma.SelectSubset<T, DepositDeductionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DepositDeductionUpdateManyArgs>(args: Prisma.SelectSubset<T, DepositDeductionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DepositDeductionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DepositDeductionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepositDeductionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DepositDeductionUpsertArgs>(args: Prisma.SelectSubset<T, DepositDeductionUpsertArgs<ExtArgs>>): Prisma.Prisma__DepositDeductionClient<runtime.Types.Result.GetResult<Prisma.$DepositDeductionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DepositDeductionCountArgs>(args?: Prisma.Subset<T, DepositDeductionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DepositDeductionCountAggregateOutputType> : number>;
    aggregate<T extends DepositDeductionAggregateArgs>(args: Prisma.Subset<T, DepositDeductionAggregateArgs>): Prisma.PrismaPromise<GetDepositDeductionAggregateType<T>>;
    groupBy<T extends DepositDeductionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DepositDeductionGroupByArgs['orderBy'];
    } : {
        orderBy?: DepositDeductionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DepositDeductionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepositDeductionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DepositDeductionFieldRefs;
}
export interface Prisma__DepositDeductionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    refund<T extends Prisma.DepositRefundDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DepositRefundDefaultArgs<ExtArgs>>): Prisma.Prisma__DepositRefundClient<runtime.Types.Result.GetResult<Prisma.$DepositRefundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DepositDeductionFieldRefs {
    readonly id: Prisma.FieldRef<"DepositDeduction", 'String'>;
    readonly refundId: Prisma.FieldRef<"DepositDeduction", 'String'>;
    readonly reason: Prisma.FieldRef<"DepositDeduction", 'String'>;
    readonly amount: Prisma.FieldRef<"DepositDeduction", 'Decimal'>;
}
export type DepositDeductionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepositDeductionSelect<ExtArgs> | null;
    omit?: Prisma.DepositDeductionOmit<ExtArgs> | null;
    include?: Prisma.DepositDeductionInclude<ExtArgs> | null;
    where: Prisma.DepositDeductionWhereUniqueInput;
};
export type DepositDeductionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepositDeductionSelect<ExtArgs> | null;
    omit?: Prisma.DepositDeductionOmit<ExtArgs> | null;
    include?: Prisma.DepositDeductionInclude<ExtArgs> | null;
    where: Prisma.DepositDeductionWhereUniqueInput;
};
export type DepositDeductionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DepositDeductionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DepositDeductionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DepositDeductionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepositDeductionSelect<ExtArgs> | null;
    omit?: Prisma.DepositDeductionOmit<ExtArgs> | null;
    include?: Prisma.DepositDeductionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepositDeductionCreateInput, Prisma.DepositDeductionUncheckedCreateInput>;
};
export type DepositDeductionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DepositDeductionCreateManyInput | Prisma.DepositDeductionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DepositDeductionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepositDeductionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DepositDeductionOmit<ExtArgs> | null;
    data: Prisma.DepositDeductionCreateManyInput | Prisma.DepositDeductionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DepositDeductionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DepositDeductionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepositDeductionSelect<ExtArgs> | null;
    omit?: Prisma.DepositDeductionOmit<ExtArgs> | null;
    include?: Prisma.DepositDeductionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepositDeductionUpdateInput, Prisma.DepositDeductionUncheckedUpdateInput>;
    where: Prisma.DepositDeductionWhereUniqueInput;
};
export type DepositDeductionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DepositDeductionUpdateManyMutationInput, Prisma.DepositDeductionUncheckedUpdateManyInput>;
    where?: Prisma.DepositDeductionWhereInput;
    limit?: number;
};
export type DepositDeductionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepositDeductionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DepositDeductionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepositDeductionUpdateManyMutationInput, Prisma.DepositDeductionUncheckedUpdateManyInput>;
    where?: Prisma.DepositDeductionWhereInput;
    limit?: number;
    include?: Prisma.DepositDeductionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DepositDeductionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepositDeductionSelect<ExtArgs> | null;
    omit?: Prisma.DepositDeductionOmit<ExtArgs> | null;
    include?: Prisma.DepositDeductionInclude<ExtArgs> | null;
    where: Prisma.DepositDeductionWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepositDeductionCreateInput, Prisma.DepositDeductionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DepositDeductionUpdateInput, Prisma.DepositDeductionUncheckedUpdateInput>;
};
export type DepositDeductionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepositDeductionSelect<ExtArgs> | null;
    omit?: Prisma.DepositDeductionOmit<ExtArgs> | null;
    include?: Prisma.DepositDeductionInclude<ExtArgs> | null;
    where: Prisma.DepositDeductionWhereUniqueInput;
};
export type DepositDeductionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepositDeductionWhereInput;
    limit?: number;
};
export type DepositDeductionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepositDeductionSelect<ExtArgs> | null;
    omit?: Prisma.DepositDeductionOmit<ExtArgs> | null;
    include?: Prisma.DepositDeductionInclude<ExtArgs> | null;
};
