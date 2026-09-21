import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type HouseModel = runtime.Types.Result.DefaultSelection<Prisma.$HousePayload>;
export type AggregateHouse = {
    _count: HouseCountAggregateOutputType | null;
    _avg: HouseAvgAggregateOutputType | null;
    _sum: HouseSumAggregateOutputType | null;
    _min: HouseMinAggregateOutputType | null;
    _max: HouseMaxAggregateOutputType | null;
};
export type HouseAvgAggregateOutputType = {
    defaultMonthlyRent: runtime.Decimal | null;
    defaultDepositAmount: runtime.Decimal | null;
};
export type HouseSumAggregateOutputType = {
    defaultMonthlyRent: runtime.Decimal | null;
    defaultDepositAmount: runtime.Decimal | null;
};
export type HouseMinAggregateOutputType = {
    id: string | null;
    propertyId: string | null;
    unitNumber: string | null;
    houseType: string | null;
    waterMeterNumber: string | null;
    defaultMonthlyRent: runtime.Decimal | null;
    defaultDepositAmount: runtime.Decimal | null;
    status: $Enums.HouseStatus | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type HouseMaxAggregateOutputType = {
    id: string | null;
    propertyId: string | null;
    unitNumber: string | null;
    houseType: string | null;
    waterMeterNumber: string | null;
    defaultMonthlyRent: runtime.Decimal | null;
    defaultDepositAmount: runtime.Decimal | null;
    status: $Enums.HouseStatus | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type HouseCountAggregateOutputType = {
    id: number;
    propertyId: number;
    unitNumber: number;
    houseType: number;
    waterMeterNumber: number;
    defaultMonthlyRent: number;
    defaultDepositAmount: number;
    status: number;
    notes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type HouseAvgAggregateInputType = {
    defaultMonthlyRent?: true;
    defaultDepositAmount?: true;
};
export type HouseSumAggregateInputType = {
    defaultMonthlyRent?: true;
    defaultDepositAmount?: true;
};
export type HouseMinAggregateInputType = {
    id?: true;
    propertyId?: true;
    unitNumber?: true;
    houseType?: true;
    waterMeterNumber?: true;
    defaultMonthlyRent?: true;
    defaultDepositAmount?: true;
    status?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type HouseMaxAggregateInputType = {
    id?: true;
    propertyId?: true;
    unitNumber?: true;
    houseType?: true;
    waterMeterNumber?: true;
    defaultMonthlyRent?: true;
    defaultDepositAmount?: true;
    status?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type HouseCountAggregateInputType = {
    id?: true;
    propertyId?: true;
    unitNumber?: true;
    houseType?: true;
    waterMeterNumber?: true;
    defaultMonthlyRent?: true;
    defaultDepositAmount?: true;
    status?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type HouseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HouseWhereInput;
    orderBy?: Prisma.HouseOrderByWithRelationInput | Prisma.HouseOrderByWithRelationInput[];
    cursor?: Prisma.HouseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | HouseCountAggregateInputType;
    _avg?: HouseAvgAggregateInputType;
    _sum?: HouseSumAggregateInputType;
    _min?: HouseMinAggregateInputType;
    _max?: HouseMaxAggregateInputType;
};
export type GetHouseAggregateType<T extends HouseAggregateArgs> = {
    [P in keyof T & keyof AggregateHouse]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHouse[P]> : Prisma.GetScalarType<T[P], AggregateHouse[P]>;
};
export type HouseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HouseWhereInput;
    orderBy?: Prisma.HouseOrderByWithAggregationInput | Prisma.HouseOrderByWithAggregationInput[];
    by: Prisma.HouseScalarFieldEnum[] | Prisma.HouseScalarFieldEnum;
    having?: Prisma.HouseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HouseCountAggregateInputType | true;
    _avg?: HouseAvgAggregateInputType;
    _sum?: HouseSumAggregateInputType;
    _min?: HouseMinAggregateInputType;
    _max?: HouseMaxAggregateInputType;
};
export type HouseGroupByOutputType = {
    id: string;
    propertyId: string;
    unitNumber: string;
    houseType: string | null;
    waterMeterNumber: string | null;
    defaultMonthlyRent: runtime.Decimal;
    defaultDepositAmount: runtime.Decimal | null;
    status: $Enums.HouseStatus;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: HouseCountAggregateOutputType | null;
    _avg: HouseAvgAggregateOutputType | null;
    _sum: HouseSumAggregateOutputType | null;
    _min: HouseMinAggregateOutputType | null;
    _max: HouseMaxAggregateOutputType | null;
};
export type GetHouseGroupByPayload<T extends HouseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HouseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HouseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HouseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HouseGroupByOutputType[P]>;
}>>;
export type HouseWhereInput = {
    AND?: Prisma.HouseWhereInput | Prisma.HouseWhereInput[];
    OR?: Prisma.HouseWhereInput[];
    NOT?: Prisma.HouseWhereInput | Prisma.HouseWhereInput[];
    id?: Prisma.StringFilter<"House"> | string;
    propertyId?: Prisma.StringFilter<"House"> | string;
    unitNumber?: Prisma.StringFilter<"House"> | string;
    houseType?: Prisma.StringNullableFilter<"House"> | string | null;
    waterMeterNumber?: Prisma.StringNullableFilter<"House"> | string | null;
    defaultMonthlyRent?: Prisma.DecimalFilter<"House"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    defaultDepositAmount?: Prisma.DecimalNullableFilter<"House"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumHouseStatusFilter<"House"> | $Enums.HouseStatus;
    notes?: Prisma.StringNullableFilter<"House"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"House"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"House"> | Date | string;
    property?: Prisma.XOR<Prisma.PropertyScalarRelationFilter, Prisma.PropertyWhereInput>;
    tenancies?: Prisma.TenancyListRelationFilter;
};
export type HouseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    unitNumber?: Prisma.SortOrder;
    houseType?: Prisma.SortOrderInput | Prisma.SortOrder;
    waterMeterNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    defaultMonthlyRent?: Prisma.SortOrder;
    defaultDepositAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    property?: Prisma.PropertyOrderByWithRelationInput;
    tenancies?: Prisma.TenancyOrderByRelationAggregateInput;
};
export type HouseWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    propertyId_unitNumber?: Prisma.HousePropertyIdUnitNumberCompoundUniqueInput;
    AND?: Prisma.HouseWhereInput | Prisma.HouseWhereInput[];
    OR?: Prisma.HouseWhereInput[];
    NOT?: Prisma.HouseWhereInput | Prisma.HouseWhereInput[];
    propertyId?: Prisma.StringFilter<"House"> | string;
    unitNumber?: Prisma.StringFilter<"House"> | string;
    houseType?: Prisma.StringNullableFilter<"House"> | string | null;
    waterMeterNumber?: Prisma.StringNullableFilter<"House"> | string | null;
    defaultMonthlyRent?: Prisma.DecimalFilter<"House"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    defaultDepositAmount?: Prisma.DecimalNullableFilter<"House"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumHouseStatusFilter<"House"> | $Enums.HouseStatus;
    notes?: Prisma.StringNullableFilter<"House"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"House"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"House"> | Date | string;
    property?: Prisma.XOR<Prisma.PropertyScalarRelationFilter, Prisma.PropertyWhereInput>;
    tenancies?: Prisma.TenancyListRelationFilter;
}, "id" | "propertyId_unitNumber">;
export type HouseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    unitNumber?: Prisma.SortOrder;
    houseType?: Prisma.SortOrderInput | Prisma.SortOrder;
    waterMeterNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    defaultMonthlyRent?: Prisma.SortOrder;
    defaultDepositAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.HouseCountOrderByAggregateInput;
    _avg?: Prisma.HouseAvgOrderByAggregateInput;
    _max?: Prisma.HouseMaxOrderByAggregateInput;
    _min?: Prisma.HouseMinOrderByAggregateInput;
    _sum?: Prisma.HouseSumOrderByAggregateInput;
};
export type HouseScalarWhereWithAggregatesInput = {
    AND?: Prisma.HouseScalarWhereWithAggregatesInput | Prisma.HouseScalarWhereWithAggregatesInput[];
    OR?: Prisma.HouseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HouseScalarWhereWithAggregatesInput | Prisma.HouseScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"House"> | string;
    propertyId?: Prisma.StringWithAggregatesFilter<"House"> | string;
    unitNumber?: Prisma.StringWithAggregatesFilter<"House"> | string;
    houseType?: Prisma.StringNullableWithAggregatesFilter<"House"> | string | null;
    waterMeterNumber?: Prisma.StringNullableWithAggregatesFilter<"House"> | string | null;
    defaultMonthlyRent?: Prisma.DecimalWithAggregatesFilter<"House"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    defaultDepositAmount?: Prisma.DecimalNullableWithAggregatesFilter<"House"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumHouseStatusWithAggregatesFilter<"House"> | $Enums.HouseStatus;
    notes?: Prisma.StringNullableWithAggregatesFilter<"House"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"House"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"House"> | Date | string;
};
export type HouseCreateInput = {
    id?: string;
    unitNumber: string;
    houseType?: string | null;
    waterMeterNumber?: string | null;
    defaultMonthlyRent: runtime.Decimal | runtime.DecimalJsLike | number | string;
    defaultDepositAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.HouseStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    property: Prisma.PropertyCreateNestedOneWithoutHousesInput;
    tenancies?: Prisma.TenancyCreateNestedManyWithoutHouseInput;
};
export type HouseUncheckedCreateInput = {
    id?: string;
    propertyId: string;
    unitNumber: string;
    houseType?: string | null;
    waterMeterNumber?: string | null;
    defaultMonthlyRent: runtime.Decimal | runtime.DecimalJsLike | number | string;
    defaultDepositAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.HouseStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tenancies?: Prisma.TenancyUncheckedCreateNestedManyWithoutHouseInput;
};
export type HouseUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    houseType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    waterMeterNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    defaultMonthlyRent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    defaultDepositAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    property?: Prisma.PropertyUpdateOneRequiredWithoutHousesNestedInput;
    tenancies?: Prisma.TenancyUpdateManyWithoutHouseNestedInput;
};
export type HouseUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
    unitNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    houseType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    waterMeterNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    defaultMonthlyRent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    defaultDepositAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenancies?: Prisma.TenancyUncheckedUpdateManyWithoutHouseNestedInput;
};
export type HouseCreateManyInput = {
    id?: string;
    propertyId: string;
    unitNumber: string;
    houseType?: string | null;
    waterMeterNumber?: string | null;
    defaultMonthlyRent: runtime.Decimal | runtime.DecimalJsLike | number | string;
    defaultDepositAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.HouseStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HouseUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    houseType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    waterMeterNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    defaultMonthlyRent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    defaultDepositAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HouseUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
    unitNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    houseType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    waterMeterNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    defaultMonthlyRent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    defaultDepositAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HouseListRelationFilter = {
    every?: Prisma.HouseWhereInput;
    some?: Prisma.HouseWhereInput;
    none?: Prisma.HouseWhereInput;
};
export type HouseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type HousePropertyIdUnitNumberCompoundUniqueInput = {
    propertyId: string;
    unitNumber: string;
};
export type HouseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    unitNumber?: Prisma.SortOrder;
    houseType?: Prisma.SortOrder;
    waterMeterNumber?: Prisma.SortOrder;
    defaultMonthlyRent?: Prisma.SortOrder;
    defaultDepositAmount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HouseAvgOrderByAggregateInput = {
    defaultMonthlyRent?: Prisma.SortOrder;
    defaultDepositAmount?: Prisma.SortOrder;
};
export type HouseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    unitNumber?: Prisma.SortOrder;
    houseType?: Prisma.SortOrder;
    waterMeterNumber?: Prisma.SortOrder;
    defaultMonthlyRent?: Prisma.SortOrder;
    defaultDepositAmount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HouseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    unitNumber?: Prisma.SortOrder;
    houseType?: Prisma.SortOrder;
    waterMeterNumber?: Prisma.SortOrder;
    defaultMonthlyRent?: Prisma.SortOrder;
    defaultDepositAmount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HouseSumOrderByAggregateInput = {
    defaultMonthlyRent?: Prisma.SortOrder;
    defaultDepositAmount?: Prisma.SortOrder;
};
export type HouseScalarRelationFilter = {
    is?: Prisma.HouseWhereInput;
    isNot?: Prisma.HouseWhereInput;
};
export type HouseCreateNestedManyWithoutPropertyInput = {
    create?: Prisma.XOR<Prisma.HouseCreateWithoutPropertyInput, Prisma.HouseUncheckedCreateWithoutPropertyInput> | Prisma.HouseCreateWithoutPropertyInput[] | Prisma.HouseUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.HouseCreateOrConnectWithoutPropertyInput | Prisma.HouseCreateOrConnectWithoutPropertyInput[];
    createMany?: Prisma.HouseCreateManyPropertyInputEnvelope;
    connect?: Prisma.HouseWhereUniqueInput | Prisma.HouseWhereUniqueInput[];
};
export type HouseUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: Prisma.XOR<Prisma.HouseCreateWithoutPropertyInput, Prisma.HouseUncheckedCreateWithoutPropertyInput> | Prisma.HouseCreateWithoutPropertyInput[] | Prisma.HouseUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.HouseCreateOrConnectWithoutPropertyInput | Prisma.HouseCreateOrConnectWithoutPropertyInput[];
    createMany?: Prisma.HouseCreateManyPropertyInputEnvelope;
    connect?: Prisma.HouseWhereUniqueInput | Prisma.HouseWhereUniqueInput[];
};
export type HouseUpdateManyWithoutPropertyNestedInput = {
    create?: Prisma.XOR<Prisma.HouseCreateWithoutPropertyInput, Prisma.HouseUncheckedCreateWithoutPropertyInput> | Prisma.HouseCreateWithoutPropertyInput[] | Prisma.HouseUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.HouseCreateOrConnectWithoutPropertyInput | Prisma.HouseCreateOrConnectWithoutPropertyInput[];
    upsert?: Prisma.HouseUpsertWithWhereUniqueWithoutPropertyInput | Prisma.HouseUpsertWithWhereUniqueWithoutPropertyInput[];
    createMany?: Prisma.HouseCreateManyPropertyInputEnvelope;
    set?: Prisma.HouseWhereUniqueInput | Prisma.HouseWhereUniqueInput[];
    disconnect?: Prisma.HouseWhereUniqueInput | Prisma.HouseWhereUniqueInput[];
    delete?: Prisma.HouseWhereUniqueInput | Prisma.HouseWhereUniqueInput[];
    connect?: Prisma.HouseWhereUniqueInput | Prisma.HouseWhereUniqueInput[];
    update?: Prisma.HouseUpdateWithWhereUniqueWithoutPropertyInput | Prisma.HouseUpdateWithWhereUniqueWithoutPropertyInput[];
    updateMany?: Prisma.HouseUpdateManyWithWhereWithoutPropertyInput | Prisma.HouseUpdateManyWithWhereWithoutPropertyInput[];
    deleteMany?: Prisma.HouseScalarWhereInput | Prisma.HouseScalarWhereInput[];
};
export type HouseUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: Prisma.XOR<Prisma.HouseCreateWithoutPropertyInput, Prisma.HouseUncheckedCreateWithoutPropertyInput> | Prisma.HouseCreateWithoutPropertyInput[] | Prisma.HouseUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.HouseCreateOrConnectWithoutPropertyInput | Prisma.HouseCreateOrConnectWithoutPropertyInput[];
    upsert?: Prisma.HouseUpsertWithWhereUniqueWithoutPropertyInput | Prisma.HouseUpsertWithWhereUniqueWithoutPropertyInput[];
    createMany?: Prisma.HouseCreateManyPropertyInputEnvelope;
    set?: Prisma.HouseWhereUniqueInput | Prisma.HouseWhereUniqueInput[];
    disconnect?: Prisma.HouseWhereUniqueInput | Prisma.HouseWhereUniqueInput[];
    delete?: Prisma.HouseWhereUniqueInput | Prisma.HouseWhereUniqueInput[];
    connect?: Prisma.HouseWhereUniqueInput | Prisma.HouseWhereUniqueInput[];
    update?: Prisma.HouseUpdateWithWhereUniqueWithoutPropertyInput | Prisma.HouseUpdateWithWhereUniqueWithoutPropertyInput[];
    updateMany?: Prisma.HouseUpdateManyWithWhereWithoutPropertyInput | Prisma.HouseUpdateManyWithWhereWithoutPropertyInput[];
    deleteMany?: Prisma.HouseScalarWhereInput | Prisma.HouseScalarWhereInput[];
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type EnumHouseStatusFieldUpdateOperationsInput = {
    set?: $Enums.HouseStatus;
};
export type HouseCreateNestedOneWithoutTenanciesInput = {
    create?: Prisma.XOR<Prisma.HouseCreateWithoutTenanciesInput, Prisma.HouseUncheckedCreateWithoutTenanciesInput>;
    connectOrCreate?: Prisma.HouseCreateOrConnectWithoutTenanciesInput;
    connect?: Prisma.HouseWhereUniqueInput;
};
export type HouseUpdateOneRequiredWithoutTenanciesNestedInput = {
    create?: Prisma.XOR<Prisma.HouseCreateWithoutTenanciesInput, Prisma.HouseUncheckedCreateWithoutTenanciesInput>;
    connectOrCreate?: Prisma.HouseCreateOrConnectWithoutTenanciesInput;
    upsert?: Prisma.HouseUpsertWithoutTenanciesInput;
    connect?: Prisma.HouseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.HouseUpdateToOneWithWhereWithoutTenanciesInput, Prisma.HouseUpdateWithoutTenanciesInput>, Prisma.HouseUncheckedUpdateWithoutTenanciesInput>;
};
export type HouseCreateWithoutPropertyInput = {
    id?: string;
    unitNumber: string;
    houseType?: string | null;
    waterMeterNumber?: string | null;
    defaultMonthlyRent: runtime.Decimal | runtime.DecimalJsLike | number | string;
    defaultDepositAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.HouseStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tenancies?: Prisma.TenancyCreateNestedManyWithoutHouseInput;
};
export type HouseUncheckedCreateWithoutPropertyInput = {
    id?: string;
    unitNumber: string;
    houseType?: string | null;
    waterMeterNumber?: string | null;
    defaultMonthlyRent: runtime.Decimal | runtime.DecimalJsLike | number | string;
    defaultDepositAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.HouseStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tenancies?: Prisma.TenancyUncheckedCreateNestedManyWithoutHouseInput;
};
export type HouseCreateOrConnectWithoutPropertyInput = {
    where: Prisma.HouseWhereUniqueInput;
    create: Prisma.XOR<Prisma.HouseCreateWithoutPropertyInput, Prisma.HouseUncheckedCreateWithoutPropertyInput>;
};
export type HouseCreateManyPropertyInputEnvelope = {
    data: Prisma.HouseCreateManyPropertyInput | Prisma.HouseCreateManyPropertyInput[];
    skipDuplicates?: boolean;
};
export type HouseUpsertWithWhereUniqueWithoutPropertyInput = {
    where: Prisma.HouseWhereUniqueInput;
    update: Prisma.XOR<Prisma.HouseUpdateWithoutPropertyInput, Prisma.HouseUncheckedUpdateWithoutPropertyInput>;
    create: Prisma.XOR<Prisma.HouseCreateWithoutPropertyInput, Prisma.HouseUncheckedCreateWithoutPropertyInput>;
};
export type HouseUpdateWithWhereUniqueWithoutPropertyInput = {
    where: Prisma.HouseWhereUniqueInput;
    data: Prisma.XOR<Prisma.HouseUpdateWithoutPropertyInput, Prisma.HouseUncheckedUpdateWithoutPropertyInput>;
};
export type HouseUpdateManyWithWhereWithoutPropertyInput = {
    where: Prisma.HouseScalarWhereInput;
    data: Prisma.XOR<Prisma.HouseUpdateManyMutationInput, Prisma.HouseUncheckedUpdateManyWithoutPropertyInput>;
};
export type HouseScalarWhereInput = {
    AND?: Prisma.HouseScalarWhereInput | Prisma.HouseScalarWhereInput[];
    OR?: Prisma.HouseScalarWhereInput[];
    NOT?: Prisma.HouseScalarWhereInput | Prisma.HouseScalarWhereInput[];
    id?: Prisma.StringFilter<"House"> | string;
    propertyId?: Prisma.StringFilter<"House"> | string;
    unitNumber?: Prisma.StringFilter<"House"> | string;
    houseType?: Prisma.StringNullableFilter<"House"> | string | null;
    waterMeterNumber?: Prisma.StringNullableFilter<"House"> | string | null;
    defaultMonthlyRent?: Prisma.DecimalFilter<"House"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    defaultDepositAmount?: Prisma.DecimalNullableFilter<"House"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumHouseStatusFilter<"House"> | $Enums.HouseStatus;
    notes?: Prisma.StringNullableFilter<"House"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"House"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"House"> | Date | string;
};
export type HouseCreateWithoutTenanciesInput = {
    id?: string;
    unitNumber: string;
    houseType?: string | null;
    waterMeterNumber?: string | null;
    defaultMonthlyRent: runtime.Decimal | runtime.DecimalJsLike | number | string;
    defaultDepositAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.HouseStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    property: Prisma.PropertyCreateNestedOneWithoutHousesInput;
};
export type HouseUncheckedCreateWithoutTenanciesInput = {
    id?: string;
    propertyId: string;
    unitNumber: string;
    houseType?: string | null;
    waterMeterNumber?: string | null;
    defaultMonthlyRent: runtime.Decimal | runtime.DecimalJsLike | number | string;
    defaultDepositAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.HouseStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HouseCreateOrConnectWithoutTenanciesInput = {
    where: Prisma.HouseWhereUniqueInput;
    create: Prisma.XOR<Prisma.HouseCreateWithoutTenanciesInput, Prisma.HouseUncheckedCreateWithoutTenanciesInput>;
};
export type HouseUpsertWithoutTenanciesInput = {
    update: Prisma.XOR<Prisma.HouseUpdateWithoutTenanciesInput, Prisma.HouseUncheckedUpdateWithoutTenanciesInput>;
    create: Prisma.XOR<Prisma.HouseCreateWithoutTenanciesInput, Prisma.HouseUncheckedCreateWithoutTenanciesInput>;
    where?: Prisma.HouseWhereInput;
};
export type HouseUpdateToOneWithWhereWithoutTenanciesInput = {
    where?: Prisma.HouseWhereInput;
    data: Prisma.XOR<Prisma.HouseUpdateWithoutTenanciesInput, Prisma.HouseUncheckedUpdateWithoutTenanciesInput>;
};
export type HouseUpdateWithoutTenanciesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    houseType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    waterMeterNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    defaultMonthlyRent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    defaultDepositAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    property?: Prisma.PropertyUpdateOneRequiredWithoutHousesNestedInput;
};
export type HouseUncheckedUpdateWithoutTenanciesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
    unitNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    houseType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    waterMeterNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    defaultMonthlyRent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    defaultDepositAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HouseCreateManyPropertyInput = {
    id?: string;
    unitNumber: string;
    houseType?: string | null;
    waterMeterNumber?: string | null;
    defaultMonthlyRent: runtime.Decimal | runtime.DecimalJsLike | number | string;
    defaultDepositAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.HouseStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HouseUpdateWithoutPropertyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    houseType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    waterMeterNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    defaultMonthlyRent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    defaultDepositAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenancies?: Prisma.TenancyUpdateManyWithoutHouseNestedInput;
};
export type HouseUncheckedUpdateWithoutPropertyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    houseType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    waterMeterNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    defaultMonthlyRent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    defaultDepositAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenancies?: Prisma.TenancyUncheckedUpdateManyWithoutHouseNestedInput;
};
export type HouseUncheckedUpdateManyWithoutPropertyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    houseType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    waterMeterNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    defaultMonthlyRent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    defaultDepositAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HouseCountOutputType = {
    tenancies: number;
};
export type HouseCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenancies?: boolean | HouseCountOutputTypeCountTenanciesArgs;
};
export type HouseCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HouseCountOutputTypeSelect<ExtArgs> | null;
};
export type HouseCountOutputTypeCountTenanciesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TenancyWhereInput;
};
export type HouseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    propertyId?: boolean;
    unitNumber?: boolean;
    houseType?: boolean;
    waterMeterNumber?: boolean;
    defaultMonthlyRent?: boolean;
    defaultDepositAmount?: boolean;
    status?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
    tenancies?: boolean | Prisma.House$tenanciesArgs<ExtArgs>;
    _count?: boolean | Prisma.HouseCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["house"]>;
export type HouseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    propertyId?: boolean;
    unitNumber?: boolean;
    houseType?: boolean;
    waterMeterNumber?: boolean;
    defaultMonthlyRent?: boolean;
    defaultDepositAmount?: boolean;
    status?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["house"]>;
export type HouseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    propertyId?: boolean;
    unitNumber?: boolean;
    houseType?: boolean;
    waterMeterNumber?: boolean;
    defaultMonthlyRent?: boolean;
    defaultDepositAmount?: boolean;
    status?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["house"]>;
export type HouseSelectScalar = {
    id?: boolean;
    propertyId?: boolean;
    unitNumber?: boolean;
    houseType?: boolean;
    waterMeterNumber?: boolean;
    defaultMonthlyRent?: boolean;
    defaultDepositAmount?: boolean;
    status?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type HouseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "propertyId" | "unitNumber" | "houseType" | "waterMeterNumber" | "defaultMonthlyRent" | "defaultDepositAmount" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["house"]>;
export type HouseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
    tenancies?: boolean | Prisma.House$tenanciesArgs<ExtArgs>;
    _count?: boolean | Prisma.HouseCountOutputTypeDefaultArgs<ExtArgs>;
};
export type HouseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
};
export type HouseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
};
export type $HousePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "House";
    objects: {
        property: Prisma.$PropertyPayload<ExtArgs>;
        tenancies: Prisma.$TenancyPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        propertyId: string;
        unitNumber: string;
        houseType: string | null;
        waterMeterNumber: string | null;
        defaultMonthlyRent: runtime.Decimal;
        defaultDepositAmount: runtime.Decimal | null;
        status: $Enums.HouseStatus;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["house"]>;
    composites: {};
};
export type HouseGetPayload<S extends boolean | null | undefined | HouseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HousePayload, S>;
export type HouseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HouseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HouseCountAggregateInputType | true;
};
export interface HouseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['House'];
        meta: {
            name: 'House';
        };
    };
    findUnique<T extends HouseFindUniqueArgs>(args: Prisma.SelectSubset<T, HouseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HouseClient<runtime.Types.Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends HouseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HouseClient<runtime.Types.Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends HouseFindFirstArgs>(args?: Prisma.SelectSubset<T, HouseFindFirstArgs<ExtArgs>>): Prisma.Prisma__HouseClient<runtime.Types.Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends HouseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HouseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HouseClient<runtime.Types.Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends HouseFindManyArgs>(args?: Prisma.SelectSubset<T, HouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends HouseCreateArgs>(args: Prisma.SelectSubset<T, HouseCreateArgs<ExtArgs>>): Prisma.Prisma__HouseClient<runtime.Types.Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends HouseCreateManyArgs>(args?: Prisma.SelectSubset<T, HouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends HouseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HouseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends HouseDeleteArgs>(args: Prisma.SelectSubset<T, HouseDeleteArgs<ExtArgs>>): Prisma.Prisma__HouseClient<runtime.Types.Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends HouseUpdateArgs>(args: Prisma.SelectSubset<T, HouseUpdateArgs<ExtArgs>>): Prisma.Prisma__HouseClient<runtime.Types.Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends HouseDeleteManyArgs>(args?: Prisma.SelectSubset<T, HouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends HouseUpdateManyArgs>(args: Prisma.SelectSubset<T, HouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends HouseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HouseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends HouseUpsertArgs>(args: Prisma.SelectSubset<T, HouseUpsertArgs<ExtArgs>>): Prisma.Prisma__HouseClient<runtime.Types.Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends HouseCountArgs>(args?: Prisma.Subset<T, HouseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HouseCountAggregateOutputType> : number>;
    aggregate<T extends HouseAggregateArgs>(args: Prisma.Subset<T, HouseAggregateArgs>): Prisma.PrismaPromise<GetHouseAggregateType<T>>;
    groupBy<T extends HouseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HouseGroupByArgs['orderBy'];
    } : {
        orderBy?: HouseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: HouseFieldRefs;
}
export interface Prisma__HouseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    property<T extends Prisma.PropertyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PropertyDefaultArgs<ExtArgs>>): Prisma.Prisma__PropertyClient<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tenancies<T extends Prisma.House$tenanciesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.House$tenanciesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TenancyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface HouseFieldRefs {
    readonly id: Prisma.FieldRef<"House", 'String'>;
    readonly propertyId: Prisma.FieldRef<"House", 'String'>;
    readonly unitNumber: Prisma.FieldRef<"House", 'String'>;
    readonly houseType: Prisma.FieldRef<"House", 'String'>;
    readonly waterMeterNumber: Prisma.FieldRef<"House", 'String'>;
    readonly defaultMonthlyRent: Prisma.FieldRef<"House", 'Decimal'>;
    readonly defaultDepositAmount: Prisma.FieldRef<"House", 'Decimal'>;
    readonly status: Prisma.FieldRef<"House", 'HouseStatus'>;
    readonly notes: Prisma.FieldRef<"House", 'String'>;
    readonly createdAt: Prisma.FieldRef<"House", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"House", 'DateTime'>;
}
export type HouseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HouseSelect<ExtArgs> | null;
    omit?: Prisma.HouseOmit<ExtArgs> | null;
    include?: Prisma.HouseInclude<ExtArgs> | null;
    where: Prisma.HouseWhereUniqueInput;
};
export type HouseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HouseSelect<ExtArgs> | null;
    omit?: Prisma.HouseOmit<ExtArgs> | null;
    include?: Prisma.HouseInclude<ExtArgs> | null;
    where: Prisma.HouseWhereUniqueInput;
};
export type HouseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HouseSelect<ExtArgs> | null;
    omit?: Prisma.HouseOmit<ExtArgs> | null;
    include?: Prisma.HouseInclude<ExtArgs> | null;
    where?: Prisma.HouseWhereInput;
    orderBy?: Prisma.HouseOrderByWithRelationInput | Prisma.HouseOrderByWithRelationInput[];
    cursor?: Prisma.HouseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HouseScalarFieldEnum | Prisma.HouseScalarFieldEnum[];
};
export type HouseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HouseSelect<ExtArgs> | null;
    omit?: Prisma.HouseOmit<ExtArgs> | null;
    include?: Prisma.HouseInclude<ExtArgs> | null;
    where?: Prisma.HouseWhereInput;
    orderBy?: Prisma.HouseOrderByWithRelationInput | Prisma.HouseOrderByWithRelationInput[];
    cursor?: Prisma.HouseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HouseScalarFieldEnum | Prisma.HouseScalarFieldEnum[];
};
export type HouseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HouseSelect<ExtArgs> | null;
    omit?: Prisma.HouseOmit<ExtArgs> | null;
    include?: Prisma.HouseInclude<ExtArgs> | null;
    where?: Prisma.HouseWhereInput;
    orderBy?: Prisma.HouseOrderByWithRelationInput | Prisma.HouseOrderByWithRelationInput[];
    cursor?: Prisma.HouseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HouseScalarFieldEnum | Prisma.HouseScalarFieldEnum[];
};
export type HouseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HouseSelect<ExtArgs> | null;
    omit?: Prisma.HouseOmit<ExtArgs> | null;
    include?: Prisma.HouseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HouseCreateInput, Prisma.HouseUncheckedCreateInput>;
};
export type HouseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.HouseCreateManyInput | Prisma.HouseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type HouseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HouseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HouseOmit<ExtArgs> | null;
    data: Prisma.HouseCreateManyInput | Prisma.HouseCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.HouseIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type HouseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HouseSelect<ExtArgs> | null;
    omit?: Prisma.HouseOmit<ExtArgs> | null;
    include?: Prisma.HouseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HouseUpdateInput, Prisma.HouseUncheckedUpdateInput>;
    where: Prisma.HouseWhereUniqueInput;
};
export type HouseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.HouseUpdateManyMutationInput, Prisma.HouseUncheckedUpdateManyInput>;
    where?: Prisma.HouseWhereInput;
    limit?: number;
};
export type HouseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HouseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HouseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HouseUpdateManyMutationInput, Prisma.HouseUncheckedUpdateManyInput>;
    where?: Prisma.HouseWhereInput;
    limit?: number;
    include?: Prisma.HouseIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type HouseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HouseSelect<ExtArgs> | null;
    omit?: Prisma.HouseOmit<ExtArgs> | null;
    include?: Prisma.HouseInclude<ExtArgs> | null;
    where: Prisma.HouseWhereUniqueInput;
    create: Prisma.XOR<Prisma.HouseCreateInput, Prisma.HouseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.HouseUpdateInput, Prisma.HouseUncheckedUpdateInput>;
};
export type HouseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HouseSelect<ExtArgs> | null;
    omit?: Prisma.HouseOmit<ExtArgs> | null;
    include?: Prisma.HouseInclude<ExtArgs> | null;
    where: Prisma.HouseWhereUniqueInput;
};
export type HouseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HouseWhereInput;
    limit?: number;
};
export type House$tenanciesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenancySelect<ExtArgs> | null;
    omit?: Prisma.TenancyOmit<ExtArgs> | null;
    include?: Prisma.TenancyInclude<ExtArgs> | null;
    where?: Prisma.TenancyWhereInput;
    orderBy?: Prisma.TenancyOrderByWithRelationInput | Prisma.TenancyOrderByWithRelationInput[];
    cursor?: Prisma.TenancyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TenancyScalarFieldEnum | Prisma.TenancyScalarFieldEnum[];
};
export type HouseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HouseSelect<ExtArgs> | null;
    omit?: Prisma.HouseOmit<ExtArgs> | null;
    include?: Prisma.HouseInclude<ExtArgs> | null;
};
