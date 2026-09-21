import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PropertyModel = runtime.Types.Result.DefaultSelection<Prisma.$PropertyPayload>;
export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null;
    _avg: PropertyAvgAggregateOutputType | null;
    _sum: PropertySumAggregateOutputType | null;
    _min: PropertyMinAggregateOutputType | null;
    _max: PropertyMaxAggregateOutputType | null;
};
export type PropertyAvgAggregateOutputType = {
    defaultWaterRate: runtime.Decimal | null;
};
export type PropertySumAggregateOutputType = {
    defaultWaterRate: runtime.Decimal | null;
};
export type PropertyMinAggregateOutputType = {
    id: string | null;
    ownerId: string | null;
    name: string | null;
    address: string | null;
    location: string | null;
    description: string | null;
    defaultWaterRate: runtime.Decimal | null;
    currency: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PropertyMaxAggregateOutputType = {
    id: string | null;
    ownerId: string | null;
    name: string | null;
    address: string | null;
    location: string | null;
    description: string | null;
    defaultWaterRate: runtime.Decimal | null;
    currency: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PropertyCountAggregateOutputType = {
    id: number;
    ownerId: number;
    name: number;
    address: number;
    location: number;
    description: number;
    defaultWaterRate: number;
    currency: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PropertyAvgAggregateInputType = {
    defaultWaterRate?: true;
};
export type PropertySumAggregateInputType = {
    defaultWaterRate?: true;
};
export type PropertyMinAggregateInputType = {
    id?: true;
    ownerId?: true;
    name?: true;
    address?: true;
    location?: true;
    description?: true;
    defaultWaterRate?: true;
    currency?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PropertyMaxAggregateInputType = {
    id?: true;
    ownerId?: true;
    name?: true;
    address?: true;
    location?: true;
    description?: true;
    defaultWaterRate?: true;
    currency?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PropertyCountAggregateInputType = {
    id?: true;
    ownerId?: true;
    name?: true;
    address?: true;
    location?: true;
    description?: true;
    defaultWaterRate?: true;
    currency?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PropertyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PropertyWhereInput;
    orderBy?: Prisma.PropertyOrderByWithRelationInput | Prisma.PropertyOrderByWithRelationInput[];
    cursor?: Prisma.PropertyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PropertyCountAggregateInputType;
    _avg?: PropertyAvgAggregateInputType;
    _sum?: PropertySumAggregateInputType;
    _min?: PropertyMinAggregateInputType;
    _max?: PropertyMaxAggregateInputType;
};
export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
    [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProperty[P]> : Prisma.GetScalarType<T[P], AggregateProperty[P]>;
};
export type PropertyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PropertyWhereInput;
    orderBy?: Prisma.PropertyOrderByWithAggregationInput | Prisma.PropertyOrderByWithAggregationInput[];
    by: Prisma.PropertyScalarFieldEnum[] | Prisma.PropertyScalarFieldEnum;
    having?: Prisma.PropertyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PropertyCountAggregateInputType | true;
    _avg?: PropertyAvgAggregateInputType;
    _sum?: PropertySumAggregateInputType;
    _min?: PropertyMinAggregateInputType;
    _max?: PropertyMaxAggregateInputType;
};
export type PropertyGroupByOutputType = {
    id: string;
    ownerId: string;
    name: string;
    address: string;
    location: string | null;
    description: string | null;
    defaultWaterRate: runtime.Decimal;
    currency: string;
    createdAt: Date;
    updatedAt: Date;
    _count: PropertyCountAggregateOutputType | null;
    _avg: PropertyAvgAggregateOutputType | null;
    _sum: PropertySumAggregateOutputType | null;
    _min: PropertyMinAggregateOutputType | null;
    _max: PropertyMaxAggregateOutputType | null;
};
export type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PropertyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PropertyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PropertyGroupByOutputType[P]>;
}>>;
export type PropertyWhereInput = {
    AND?: Prisma.PropertyWhereInput | Prisma.PropertyWhereInput[];
    OR?: Prisma.PropertyWhereInput[];
    NOT?: Prisma.PropertyWhereInput | Prisma.PropertyWhereInput[];
    id?: Prisma.StringFilter<"Property"> | string;
    ownerId?: Prisma.StringFilter<"Property"> | string;
    name?: Prisma.StringFilter<"Property"> | string;
    address?: Prisma.StringFilter<"Property"> | string;
    location?: Prisma.StringNullableFilter<"Property"> | string | null;
    description?: Prisma.StringNullableFilter<"Property"> | string | null;
    defaultWaterRate?: Prisma.DecimalFilter<"Property"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Property"> | string;
    createdAt?: Prisma.DateTimeFilter<"Property"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Property"> | Date | string;
    owner?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    houses?: Prisma.HouseListRelationFilter;
};
export type PropertyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    defaultWaterRate?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    owner?: Prisma.UserOrderByWithRelationInput;
    houses?: Prisma.HouseOrderByRelationAggregateInput;
};
export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    AND?: Prisma.PropertyWhereInput | Prisma.PropertyWhereInput[];
    OR?: Prisma.PropertyWhereInput[];
    NOT?: Prisma.PropertyWhereInput | Prisma.PropertyWhereInput[];
    ownerId?: Prisma.StringFilter<"Property"> | string;
    address?: Prisma.StringFilter<"Property"> | string;
    location?: Prisma.StringNullableFilter<"Property"> | string | null;
    description?: Prisma.StringNullableFilter<"Property"> | string | null;
    defaultWaterRate?: Prisma.DecimalFilter<"Property"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Property"> | string;
    createdAt?: Prisma.DateTimeFilter<"Property"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Property"> | Date | string;
    owner?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    houses?: Prisma.HouseListRelationFilter;
}, "id" | "name">;
export type PropertyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    defaultWaterRate?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PropertyCountOrderByAggregateInput;
    _avg?: Prisma.PropertyAvgOrderByAggregateInput;
    _max?: Prisma.PropertyMaxOrderByAggregateInput;
    _min?: Prisma.PropertyMinOrderByAggregateInput;
    _sum?: Prisma.PropertySumOrderByAggregateInput;
};
export type PropertyScalarWhereWithAggregatesInput = {
    AND?: Prisma.PropertyScalarWhereWithAggregatesInput | Prisma.PropertyScalarWhereWithAggregatesInput[];
    OR?: Prisma.PropertyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PropertyScalarWhereWithAggregatesInput | Prisma.PropertyScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Property"> | string;
    ownerId?: Prisma.StringWithAggregatesFilter<"Property"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Property"> | string;
    address?: Prisma.StringWithAggregatesFilter<"Property"> | string;
    location?: Prisma.StringNullableWithAggregatesFilter<"Property"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"Property"> | string | null;
    defaultWaterRate?: Prisma.DecimalWithAggregatesFilter<"Property"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringWithAggregatesFilter<"Property"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Property"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Property"> | Date | string;
};
export type PropertyCreateInput = {
    id?: string;
    name: string;
    address: string;
    location?: string | null;
    description?: string | null;
    defaultWaterRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: Prisma.UserCreateNestedOneWithoutPropertiesInput;
    houses?: Prisma.HouseCreateNestedManyWithoutPropertyInput;
};
export type PropertyUncheckedCreateInput = {
    id?: string;
    ownerId: string;
    name: string;
    address: string;
    location?: string | null;
    description?: string | null;
    defaultWaterRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    houses?: Prisma.HouseUncheckedCreateNestedManyWithoutPropertyInput;
};
export type PropertyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    defaultWaterRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutPropertiesNestedInput;
    houses?: Prisma.HouseUpdateManyWithoutPropertyNestedInput;
};
export type PropertyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    defaultWaterRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    houses?: Prisma.HouseUncheckedUpdateManyWithoutPropertyNestedInput;
};
export type PropertyCreateManyInput = {
    id?: string;
    ownerId: string;
    name: string;
    address: string;
    location?: string | null;
    description?: string | null;
    defaultWaterRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PropertyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    defaultWaterRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PropertyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    defaultWaterRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PropertyListRelationFilter = {
    every?: Prisma.PropertyWhereInput;
    some?: Prisma.PropertyWhereInput;
    none?: Prisma.PropertyWhereInput;
};
export type PropertyOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PropertyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    defaultWaterRate?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PropertyAvgOrderByAggregateInput = {
    defaultWaterRate?: Prisma.SortOrder;
};
export type PropertyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    defaultWaterRate?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PropertyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    defaultWaterRate?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PropertySumOrderByAggregateInput = {
    defaultWaterRate?: Prisma.SortOrder;
};
export type PropertyScalarRelationFilter = {
    is?: Prisma.PropertyWhereInput;
    isNot?: Prisma.PropertyWhereInput;
};
export type PropertyCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.PropertyCreateWithoutOwnerInput, Prisma.PropertyUncheckedCreateWithoutOwnerInput> | Prisma.PropertyCreateWithoutOwnerInput[] | Prisma.PropertyUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.PropertyCreateOrConnectWithoutOwnerInput | Prisma.PropertyCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.PropertyCreateManyOwnerInputEnvelope;
    connect?: Prisma.PropertyWhereUniqueInput | Prisma.PropertyWhereUniqueInput[];
};
export type PropertyUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.PropertyCreateWithoutOwnerInput, Prisma.PropertyUncheckedCreateWithoutOwnerInput> | Prisma.PropertyCreateWithoutOwnerInput[] | Prisma.PropertyUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.PropertyCreateOrConnectWithoutOwnerInput | Prisma.PropertyCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.PropertyCreateManyOwnerInputEnvelope;
    connect?: Prisma.PropertyWhereUniqueInput | Prisma.PropertyWhereUniqueInput[];
};
export type PropertyUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.PropertyCreateWithoutOwnerInput, Prisma.PropertyUncheckedCreateWithoutOwnerInput> | Prisma.PropertyCreateWithoutOwnerInput[] | Prisma.PropertyUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.PropertyCreateOrConnectWithoutOwnerInput | Prisma.PropertyCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.PropertyUpsertWithWhereUniqueWithoutOwnerInput | Prisma.PropertyUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.PropertyCreateManyOwnerInputEnvelope;
    set?: Prisma.PropertyWhereUniqueInput | Prisma.PropertyWhereUniqueInput[];
    disconnect?: Prisma.PropertyWhereUniqueInput | Prisma.PropertyWhereUniqueInput[];
    delete?: Prisma.PropertyWhereUniqueInput | Prisma.PropertyWhereUniqueInput[];
    connect?: Prisma.PropertyWhereUniqueInput | Prisma.PropertyWhereUniqueInput[];
    update?: Prisma.PropertyUpdateWithWhereUniqueWithoutOwnerInput | Prisma.PropertyUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.PropertyUpdateManyWithWhereWithoutOwnerInput | Prisma.PropertyUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.PropertyScalarWhereInput | Prisma.PropertyScalarWhereInput[];
};
export type PropertyUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.PropertyCreateWithoutOwnerInput, Prisma.PropertyUncheckedCreateWithoutOwnerInput> | Prisma.PropertyCreateWithoutOwnerInput[] | Prisma.PropertyUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.PropertyCreateOrConnectWithoutOwnerInput | Prisma.PropertyCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.PropertyUpsertWithWhereUniqueWithoutOwnerInput | Prisma.PropertyUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.PropertyCreateManyOwnerInputEnvelope;
    set?: Prisma.PropertyWhereUniqueInput | Prisma.PropertyWhereUniqueInput[];
    disconnect?: Prisma.PropertyWhereUniqueInput | Prisma.PropertyWhereUniqueInput[];
    delete?: Prisma.PropertyWhereUniqueInput | Prisma.PropertyWhereUniqueInput[];
    connect?: Prisma.PropertyWhereUniqueInput | Prisma.PropertyWhereUniqueInput[];
    update?: Prisma.PropertyUpdateWithWhereUniqueWithoutOwnerInput | Prisma.PropertyUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.PropertyUpdateManyWithWhereWithoutOwnerInput | Prisma.PropertyUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.PropertyScalarWhereInput | Prisma.PropertyScalarWhereInput[];
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PropertyCreateNestedOneWithoutHousesInput = {
    create?: Prisma.XOR<Prisma.PropertyCreateWithoutHousesInput, Prisma.PropertyUncheckedCreateWithoutHousesInput>;
    connectOrCreate?: Prisma.PropertyCreateOrConnectWithoutHousesInput;
    connect?: Prisma.PropertyWhereUniqueInput;
};
export type PropertyUpdateOneRequiredWithoutHousesNestedInput = {
    create?: Prisma.XOR<Prisma.PropertyCreateWithoutHousesInput, Prisma.PropertyUncheckedCreateWithoutHousesInput>;
    connectOrCreate?: Prisma.PropertyCreateOrConnectWithoutHousesInput;
    upsert?: Prisma.PropertyUpsertWithoutHousesInput;
    connect?: Prisma.PropertyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PropertyUpdateToOneWithWhereWithoutHousesInput, Prisma.PropertyUpdateWithoutHousesInput>, Prisma.PropertyUncheckedUpdateWithoutHousesInput>;
};
export type PropertyCreateWithoutOwnerInput = {
    id?: string;
    name: string;
    address: string;
    location?: string | null;
    description?: string | null;
    defaultWaterRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    houses?: Prisma.HouseCreateNestedManyWithoutPropertyInput;
};
export type PropertyUncheckedCreateWithoutOwnerInput = {
    id?: string;
    name: string;
    address: string;
    location?: string | null;
    description?: string | null;
    defaultWaterRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    houses?: Prisma.HouseUncheckedCreateNestedManyWithoutPropertyInput;
};
export type PropertyCreateOrConnectWithoutOwnerInput = {
    where: Prisma.PropertyWhereUniqueInput;
    create: Prisma.XOR<Prisma.PropertyCreateWithoutOwnerInput, Prisma.PropertyUncheckedCreateWithoutOwnerInput>;
};
export type PropertyCreateManyOwnerInputEnvelope = {
    data: Prisma.PropertyCreateManyOwnerInput | Prisma.PropertyCreateManyOwnerInput[];
    skipDuplicates?: boolean;
};
export type PropertyUpsertWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.PropertyWhereUniqueInput;
    update: Prisma.XOR<Prisma.PropertyUpdateWithoutOwnerInput, Prisma.PropertyUncheckedUpdateWithoutOwnerInput>;
    create: Prisma.XOR<Prisma.PropertyCreateWithoutOwnerInput, Prisma.PropertyUncheckedCreateWithoutOwnerInput>;
};
export type PropertyUpdateWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.PropertyWhereUniqueInput;
    data: Prisma.XOR<Prisma.PropertyUpdateWithoutOwnerInput, Prisma.PropertyUncheckedUpdateWithoutOwnerInput>;
};
export type PropertyUpdateManyWithWhereWithoutOwnerInput = {
    where: Prisma.PropertyScalarWhereInput;
    data: Prisma.XOR<Prisma.PropertyUpdateManyMutationInput, Prisma.PropertyUncheckedUpdateManyWithoutOwnerInput>;
};
export type PropertyScalarWhereInput = {
    AND?: Prisma.PropertyScalarWhereInput | Prisma.PropertyScalarWhereInput[];
    OR?: Prisma.PropertyScalarWhereInput[];
    NOT?: Prisma.PropertyScalarWhereInput | Prisma.PropertyScalarWhereInput[];
    id?: Prisma.StringFilter<"Property"> | string;
    ownerId?: Prisma.StringFilter<"Property"> | string;
    name?: Prisma.StringFilter<"Property"> | string;
    address?: Prisma.StringFilter<"Property"> | string;
    location?: Prisma.StringNullableFilter<"Property"> | string | null;
    description?: Prisma.StringNullableFilter<"Property"> | string | null;
    defaultWaterRate?: Prisma.DecimalFilter<"Property"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Property"> | string;
    createdAt?: Prisma.DateTimeFilter<"Property"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Property"> | Date | string;
};
export type PropertyCreateWithoutHousesInput = {
    id?: string;
    name: string;
    address: string;
    location?: string | null;
    description?: string | null;
    defaultWaterRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: Prisma.UserCreateNestedOneWithoutPropertiesInput;
};
export type PropertyUncheckedCreateWithoutHousesInput = {
    id?: string;
    ownerId: string;
    name: string;
    address: string;
    location?: string | null;
    description?: string | null;
    defaultWaterRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PropertyCreateOrConnectWithoutHousesInput = {
    where: Prisma.PropertyWhereUniqueInput;
    create: Prisma.XOR<Prisma.PropertyCreateWithoutHousesInput, Prisma.PropertyUncheckedCreateWithoutHousesInput>;
};
export type PropertyUpsertWithoutHousesInput = {
    update: Prisma.XOR<Prisma.PropertyUpdateWithoutHousesInput, Prisma.PropertyUncheckedUpdateWithoutHousesInput>;
    create: Prisma.XOR<Prisma.PropertyCreateWithoutHousesInput, Prisma.PropertyUncheckedCreateWithoutHousesInput>;
    where?: Prisma.PropertyWhereInput;
};
export type PropertyUpdateToOneWithWhereWithoutHousesInput = {
    where?: Prisma.PropertyWhereInput;
    data: Prisma.XOR<Prisma.PropertyUpdateWithoutHousesInput, Prisma.PropertyUncheckedUpdateWithoutHousesInput>;
};
export type PropertyUpdateWithoutHousesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    defaultWaterRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutPropertiesNestedInput;
};
export type PropertyUncheckedUpdateWithoutHousesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    defaultWaterRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PropertyCreateManyOwnerInput = {
    id?: string;
    name: string;
    address: string;
    location?: string | null;
    description?: string | null;
    defaultWaterRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PropertyUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    defaultWaterRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    houses?: Prisma.HouseUpdateManyWithoutPropertyNestedInput;
};
export type PropertyUncheckedUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    defaultWaterRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    houses?: Prisma.HouseUncheckedUpdateManyWithoutPropertyNestedInput;
};
export type PropertyUncheckedUpdateManyWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    defaultWaterRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PropertyCountOutputType = {
    houses: number;
};
export type PropertyCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    houses?: boolean | PropertyCountOutputTypeCountHousesArgs;
};
export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertyCountOutputTypeSelect<ExtArgs> | null;
};
export type PropertyCountOutputTypeCountHousesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HouseWhereInput;
};
export type PropertySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ownerId?: boolean;
    name?: boolean;
    address?: boolean;
    location?: boolean;
    description?: boolean;
    defaultWaterRate?: boolean;
    currency?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    houses?: boolean | Prisma.Property$housesArgs<ExtArgs>;
    _count?: boolean | Prisma.PropertyCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["property"]>;
export type PropertySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ownerId?: boolean;
    name?: boolean;
    address?: boolean;
    location?: boolean;
    description?: boolean;
    defaultWaterRate?: boolean;
    currency?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["property"]>;
export type PropertySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ownerId?: boolean;
    name?: boolean;
    address?: boolean;
    location?: boolean;
    description?: boolean;
    defaultWaterRate?: boolean;
    currency?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["property"]>;
export type PropertySelectScalar = {
    id?: boolean;
    ownerId?: boolean;
    name?: boolean;
    address?: boolean;
    location?: boolean;
    description?: boolean;
    defaultWaterRate?: boolean;
    currency?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PropertyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ownerId" | "name" | "address" | "location" | "description" | "defaultWaterRate" | "currency" | "createdAt" | "updatedAt", ExtArgs["result"]["property"]>;
export type PropertyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    houses?: boolean | Prisma.Property$housesArgs<ExtArgs>;
    _count?: boolean | Prisma.PropertyCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PropertyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PropertyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $PropertyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Property";
    objects: {
        owner: Prisma.$UserPayload<ExtArgs>;
        houses: Prisma.$HousePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ownerId: string;
        name: string;
        address: string;
        location: string | null;
        description: string | null;
        defaultWaterRate: runtime.Decimal;
        currency: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["property"]>;
    composites: {};
};
export type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PropertyPayload, S>;
export type PropertyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PropertyCountAggregateInputType | true;
};
export interface PropertyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Property'];
        meta: {
            name: 'Property';
        };
    };
    findUnique<T extends PropertyFindUniqueArgs>(args: Prisma.SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PropertyClient<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PropertyClient<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PropertyFindFirstArgs>(args?: Prisma.SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma.Prisma__PropertyClient<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PropertyClient<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PropertyFindManyArgs>(args?: Prisma.SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PropertyCreateArgs>(args: Prisma.SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma.Prisma__PropertyClient<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PropertyCreateManyArgs>(args?: Prisma.SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PropertyDeleteArgs>(args: Prisma.SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma.Prisma__PropertyClient<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PropertyUpdateArgs>(args: Prisma.SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma.Prisma__PropertyClient<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PropertyDeleteManyArgs>(args?: Prisma.SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PropertyUpdateManyArgs>(args: Prisma.SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PropertyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PropertyUpsertArgs>(args: Prisma.SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma.Prisma__PropertyClient<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PropertyCountArgs>(args?: Prisma.Subset<T, PropertyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PropertyCountAggregateOutputType> : number>;
    aggregate<T extends PropertyAggregateArgs>(args: Prisma.Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>;
    groupBy<T extends PropertyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PropertyGroupByArgs['orderBy'];
    } : {
        orderBy?: PropertyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PropertyFieldRefs;
}
export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    owner<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    houses<T extends Prisma.Property$housesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Property$housesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PropertyFieldRefs {
    readonly id: Prisma.FieldRef<"Property", 'String'>;
    readonly ownerId: Prisma.FieldRef<"Property", 'String'>;
    readonly name: Prisma.FieldRef<"Property", 'String'>;
    readonly address: Prisma.FieldRef<"Property", 'String'>;
    readonly location: Prisma.FieldRef<"Property", 'String'>;
    readonly description: Prisma.FieldRef<"Property", 'String'>;
    readonly defaultWaterRate: Prisma.FieldRef<"Property", 'Decimal'>;
    readonly currency: Prisma.FieldRef<"Property", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Property", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Property", 'DateTime'>;
}
export type PropertyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertySelect<ExtArgs> | null;
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    include?: Prisma.PropertyInclude<ExtArgs> | null;
    where: Prisma.PropertyWhereUniqueInput;
};
export type PropertyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertySelect<ExtArgs> | null;
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    include?: Prisma.PropertyInclude<ExtArgs> | null;
    where: Prisma.PropertyWhereUniqueInput;
};
export type PropertyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertySelect<ExtArgs> | null;
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    include?: Prisma.PropertyInclude<ExtArgs> | null;
    where?: Prisma.PropertyWhereInput;
    orderBy?: Prisma.PropertyOrderByWithRelationInput | Prisma.PropertyOrderByWithRelationInput[];
    cursor?: Prisma.PropertyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PropertyScalarFieldEnum | Prisma.PropertyScalarFieldEnum[];
};
export type PropertyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertySelect<ExtArgs> | null;
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    include?: Prisma.PropertyInclude<ExtArgs> | null;
    where?: Prisma.PropertyWhereInput;
    orderBy?: Prisma.PropertyOrderByWithRelationInput | Prisma.PropertyOrderByWithRelationInput[];
    cursor?: Prisma.PropertyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PropertyScalarFieldEnum | Prisma.PropertyScalarFieldEnum[];
};
export type PropertyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertySelect<ExtArgs> | null;
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    include?: Prisma.PropertyInclude<ExtArgs> | null;
    where?: Prisma.PropertyWhereInput;
    orderBy?: Prisma.PropertyOrderByWithRelationInput | Prisma.PropertyOrderByWithRelationInput[];
    cursor?: Prisma.PropertyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PropertyScalarFieldEnum | Prisma.PropertyScalarFieldEnum[];
};
export type PropertyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertySelect<ExtArgs> | null;
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    include?: Prisma.PropertyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PropertyCreateInput, Prisma.PropertyUncheckedCreateInput>;
};
export type PropertyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PropertyCreateManyInput | Prisma.PropertyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PropertyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    data: Prisma.PropertyCreateManyInput | Prisma.PropertyCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PropertyIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PropertyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertySelect<ExtArgs> | null;
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    include?: Prisma.PropertyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PropertyUpdateInput, Prisma.PropertyUncheckedUpdateInput>;
    where: Prisma.PropertyWhereUniqueInput;
};
export type PropertyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PropertyUpdateManyMutationInput, Prisma.PropertyUncheckedUpdateManyInput>;
    where?: Prisma.PropertyWhereInput;
    limit?: number;
};
export type PropertyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PropertyUpdateManyMutationInput, Prisma.PropertyUncheckedUpdateManyInput>;
    where?: Prisma.PropertyWhereInput;
    limit?: number;
    include?: Prisma.PropertyIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PropertyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertySelect<ExtArgs> | null;
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    include?: Prisma.PropertyInclude<ExtArgs> | null;
    where: Prisma.PropertyWhereUniqueInput;
    create: Prisma.XOR<Prisma.PropertyCreateInput, Prisma.PropertyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PropertyUpdateInput, Prisma.PropertyUncheckedUpdateInput>;
};
export type PropertyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertySelect<ExtArgs> | null;
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    include?: Prisma.PropertyInclude<ExtArgs> | null;
    where: Prisma.PropertyWhereUniqueInput;
};
export type PropertyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PropertyWhereInput;
    limit?: number;
};
export type Property$housesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PropertyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertySelect<ExtArgs> | null;
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    include?: Prisma.PropertyInclude<ExtArgs> | null;
};
