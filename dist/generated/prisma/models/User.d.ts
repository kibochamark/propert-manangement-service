import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    kindeId: string | null;
    email: string | null;
    name: string | null;
    role: $Enums.Role | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    kindeId: string | null;
    email: string | null;
    name: string | null;
    role: $Enums.Role | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    kindeId: number;
    email: number;
    name: number;
    role: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    kindeId?: true;
    email?: true;
    name?: true;
    role?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    kindeId?: true;
    email?: true;
    name?: true;
    role?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    kindeId?: true;
    email?: true;
    name?: true;
    role?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    kindeId: string;
    email: string;
    name: string | null;
    role: $Enums.Role;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    kindeId?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    properties?: Prisma.PropertyListRelationFilter;
    chargesCreated?: Prisma.ChargeListRelationFilter;
    chargesVoided?: Prisma.ChargeListRelationFilter;
    paymentsRecorded?: Prisma.PaymentListRelationFilter;
    paymentsVoided?: Prisma.PaymentListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    kindeId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    properties?: Prisma.PropertyOrderByRelationAggregateInput;
    chargesCreated?: Prisma.ChargeOrderByRelationAggregateInput;
    chargesVoided?: Prisma.ChargeOrderByRelationAggregateInput;
    paymentsRecorded?: Prisma.PaymentOrderByRelationAggregateInput;
    paymentsVoided?: Prisma.PaymentOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    kindeId?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    properties?: Prisma.PropertyListRelationFilter;
    chargesCreated?: Prisma.ChargeListRelationFilter;
    chargesVoided?: Prisma.ChargeListRelationFilter;
    paymentsRecorded?: Prisma.PaymentListRelationFilter;
    paymentsVoided?: Prisma.PaymentListRelationFilter;
}, "id" | "kindeId" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    kindeId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    kindeId?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    name?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    role?: Prisma.EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    isActive?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    kindeId: string;
    email: string;
    name?: string | null;
    role?: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    properties?: Prisma.PropertyCreateNestedManyWithoutOwnerInput;
    chargesCreated?: Prisma.ChargeCreateNestedManyWithoutCreatedByInput;
    chargesVoided?: Prisma.ChargeCreateNestedManyWithoutVoidedByInput;
    paymentsRecorded?: Prisma.PaymentCreateNestedManyWithoutRecordedByInput;
    paymentsVoided?: Prisma.PaymentCreateNestedManyWithoutVoidedByInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    kindeId: string;
    email: string;
    name?: string | null;
    role?: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    properties?: Prisma.PropertyUncheckedCreateNestedManyWithoutOwnerInput;
    chargesCreated?: Prisma.ChargeUncheckedCreateNestedManyWithoutCreatedByInput;
    chargesVoided?: Prisma.ChargeUncheckedCreateNestedManyWithoutVoidedByInput;
    paymentsRecorded?: Prisma.PaymentUncheckedCreateNestedManyWithoutRecordedByInput;
    paymentsVoided?: Prisma.PaymentUncheckedCreateNestedManyWithoutVoidedByInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kindeId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    properties?: Prisma.PropertyUpdateManyWithoutOwnerNestedInput;
    chargesCreated?: Prisma.ChargeUpdateManyWithoutCreatedByNestedInput;
    chargesVoided?: Prisma.ChargeUpdateManyWithoutVoidedByNestedInput;
    paymentsRecorded?: Prisma.PaymentUpdateManyWithoutRecordedByNestedInput;
    paymentsVoided?: Prisma.PaymentUpdateManyWithoutVoidedByNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kindeId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    properties?: Prisma.PropertyUncheckedUpdateManyWithoutOwnerNestedInput;
    chargesCreated?: Prisma.ChargeUncheckedUpdateManyWithoutCreatedByNestedInput;
    chargesVoided?: Prisma.ChargeUncheckedUpdateManyWithoutVoidedByNestedInput;
    paymentsRecorded?: Prisma.PaymentUncheckedUpdateManyWithoutRecordedByNestedInput;
    paymentsVoided?: Prisma.PaymentUncheckedUpdateManyWithoutVoidedByNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    kindeId: string;
    email: string;
    name?: string | null;
    role?: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kindeId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kindeId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kindeId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kindeId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kindeId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutPropertiesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPropertiesInput, Prisma.UserUncheckedCreateWithoutPropertiesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPropertiesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPropertiesInput, Prisma.UserUncheckedCreateWithoutPropertiesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPropertiesInput;
    upsert?: Prisma.UserUpsertWithoutPropertiesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPropertiesInput, Prisma.UserUpdateWithoutPropertiesInput>, Prisma.UserUncheckedUpdateWithoutPropertiesInput>;
};
export type UserCreateNestedOneWithoutChargesVoidedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutChargesVoidedInput, Prisma.UserUncheckedCreateWithoutChargesVoidedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutChargesVoidedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutChargesCreatedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutChargesCreatedInput, Prisma.UserUncheckedCreateWithoutChargesCreatedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutChargesCreatedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutChargesVoidedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutChargesVoidedInput, Prisma.UserUncheckedCreateWithoutChargesVoidedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutChargesVoidedInput;
    upsert?: Prisma.UserUpsertWithoutChargesVoidedInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutChargesVoidedInput, Prisma.UserUpdateWithoutChargesVoidedInput>, Prisma.UserUncheckedUpdateWithoutChargesVoidedInput>;
};
export type UserUpdateOneRequiredWithoutChargesCreatedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutChargesCreatedInput, Prisma.UserUncheckedCreateWithoutChargesCreatedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutChargesCreatedInput;
    upsert?: Prisma.UserUpsertWithoutChargesCreatedInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutChargesCreatedInput, Prisma.UserUpdateWithoutChargesCreatedInput>, Prisma.UserUncheckedUpdateWithoutChargesCreatedInput>;
};
export type UserCreateNestedOneWithoutPaymentsRecordedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPaymentsRecordedInput, Prisma.UserUncheckedCreateWithoutPaymentsRecordedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPaymentsRecordedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutPaymentsVoidedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPaymentsVoidedInput, Prisma.UserUncheckedCreateWithoutPaymentsVoidedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPaymentsVoidedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutPaymentsRecordedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPaymentsRecordedInput, Prisma.UserUncheckedCreateWithoutPaymentsRecordedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPaymentsRecordedInput;
    upsert?: Prisma.UserUpsertWithoutPaymentsRecordedInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPaymentsRecordedInput, Prisma.UserUpdateWithoutPaymentsRecordedInput>, Prisma.UserUncheckedUpdateWithoutPaymentsRecordedInput>;
};
export type UserUpdateOneWithoutPaymentsVoidedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPaymentsVoidedInput, Prisma.UserUncheckedCreateWithoutPaymentsVoidedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPaymentsVoidedInput;
    upsert?: Prisma.UserUpsertWithoutPaymentsVoidedInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPaymentsVoidedInput, Prisma.UserUpdateWithoutPaymentsVoidedInput>, Prisma.UserUncheckedUpdateWithoutPaymentsVoidedInput>;
};
export type UserCreateWithoutPropertiesInput = {
    id?: string;
    kindeId: string;
    email: string;
    name?: string | null;
    role?: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chargesCreated?: Prisma.ChargeCreateNestedManyWithoutCreatedByInput;
    chargesVoided?: Prisma.ChargeCreateNestedManyWithoutVoidedByInput;
    paymentsRecorded?: Prisma.PaymentCreateNestedManyWithoutRecordedByInput;
    paymentsVoided?: Prisma.PaymentCreateNestedManyWithoutVoidedByInput;
};
export type UserUncheckedCreateWithoutPropertiesInput = {
    id?: string;
    kindeId: string;
    email: string;
    name?: string | null;
    role?: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chargesCreated?: Prisma.ChargeUncheckedCreateNestedManyWithoutCreatedByInput;
    chargesVoided?: Prisma.ChargeUncheckedCreateNestedManyWithoutVoidedByInput;
    paymentsRecorded?: Prisma.PaymentUncheckedCreateNestedManyWithoutRecordedByInput;
    paymentsVoided?: Prisma.PaymentUncheckedCreateNestedManyWithoutVoidedByInput;
};
export type UserCreateOrConnectWithoutPropertiesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPropertiesInput, Prisma.UserUncheckedCreateWithoutPropertiesInput>;
};
export type UserUpsertWithoutPropertiesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPropertiesInput, Prisma.UserUncheckedUpdateWithoutPropertiesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPropertiesInput, Prisma.UserUncheckedCreateWithoutPropertiesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPropertiesInput, Prisma.UserUncheckedUpdateWithoutPropertiesInput>;
};
export type UserUpdateWithoutPropertiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kindeId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chargesCreated?: Prisma.ChargeUpdateManyWithoutCreatedByNestedInput;
    chargesVoided?: Prisma.ChargeUpdateManyWithoutVoidedByNestedInput;
    paymentsRecorded?: Prisma.PaymentUpdateManyWithoutRecordedByNestedInput;
    paymentsVoided?: Prisma.PaymentUpdateManyWithoutVoidedByNestedInput;
};
export type UserUncheckedUpdateWithoutPropertiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kindeId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chargesCreated?: Prisma.ChargeUncheckedUpdateManyWithoutCreatedByNestedInput;
    chargesVoided?: Prisma.ChargeUncheckedUpdateManyWithoutVoidedByNestedInput;
    paymentsRecorded?: Prisma.PaymentUncheckedUpdateManyWithoutRecordedByNestedInput;
    paymentsVoided?: Prisma.PaymentUncheckedUpdateManyWithoutVoidedByNestedInput;
};
export type UserCreateWithoutChargesVoidedInput = {
    id?: string;
    kindeId: string;
    email: string;
    name?: string | null;
    role?: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    properties?: Prisma.PropertyCreateNestedManyWithoutOwnerInput;
    chargesCreated?: Prisma.ChargeCreateNestedManyWithoutCreatedByInput;
    paymentsRecorded?: Prisma.PaymentCreateNestedManyWithoutRecordedByInput;
    paymentsVoided?: Prisma.PaymentCreateNestedManyWithoutVoidedByInput;
};
export type UserUncheckedCreateWithoutChargesVoidedInput = {
    id?: string;
    kindeId: string;
    email: string;
    name?: string | null;
    role?: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    properties?: Prisma.PropertyUncheckedCreateNestedManyWithoutOwnerInput;
    chargesCreated?: Prisma.ChargeUncheckedCreateNestedManyWithoutCreatedByInput;
    paymentsRecorded?: Prisma.PaymentUncheckedCreateNestedManyWithoutRecordedByInput;
    paymentsVoided?: Prisma.PaymentUncheckedCreateNestedManyWithoutVoidedByInput;
};
export type UserCreateOrConnectWithoutChargesVoidedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutChargesVoidedInput, Prisma.UserUncheckedCreateWithoutChargesVoidedInput>;
};
export type UserCreateWithoutChargesCreatedInput = {
    id?: string;
    kindeId: string;
    email: string;
    name?: string | null;
    role?: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    properties?: Prisma.PropertyCreateNestedManyWithoutOwnerInput;
    chargesVoided?: Prisma.ChargeCreateNestedManyWithoutVoidedByInput;
    paymentsRecorded?: Prisma.PaymentCreateNestedManyWithoutRecordedByInput;
    paymentsVoided?: Prisma.PaymentCreateNestedManyWithoutVoidedByInput;
};
export type UserUncheckedCreateWithoutChargesCreatedInput = {
    id?: string;
    kindeId: string;
    email: string;
    name?: string | null;
    role?: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    properties?: Prisma.PropertyUncheckedCreateNestedManyWithoutOwnerInput;
    chargesVoided?: Prisma.ChargeUncheckedCreateNestedManyWithoutVoidedByInput;
    paymentsRecorded?: Prisma.PaymentUncheckedCreateNestedManyWithoutRecordedByInput;
    paymentsVoided?: Prisma.PaymentUncheckedCreateNestedManyWithoutVoidedByInput;
};
export type UserCreateOrConnectWithoutChargesCreatedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutChargesCreatedInput, Prisma.UserUncheckedCreateWithoutChargesCreatedInput>;
};
export type UserUpsertWithoutChargesVoidedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutChargesVoidedInput, Prisma.UserUncheckedUpdateWithoutChargesVoidedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutChargesVoidedInput, Prisma.UserUncheckedCreateWithoutChargesVoidedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutChargesVoidedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutChargesVoidedInput, Prisma.UserUncheckedUpdateWithoutChargesVoidedInput>;
};
export type UserUpdateWithoutChargesVoidedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kindeId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    properties?: Prisma.PropertyUpdateManyWithoutOwnerNestedInput;
    chargesCreated?: Prisma.ChargeUpdateManyWithoutCreatedByNestedInput;
    paymentsRecorded?: Prisma.PaymentUpdateManyWithoutRecordedByNestedInput;
    paymentsVoided?: Prisma.PaymentUpdateManyWithoutVoidedByNestedInput;
};
export type UserUncheckedUpdateWithoutChargesVoidedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kindeId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    properties?: Prisma.PropertyUncheckedUpdateManyWithoutOwnerNestedInput;
    chargesCreated?: Prisma.ChargeUncheckedUpdateManyWithoutCreatedByNestedInput;
    paymentsRecorded?: Prisma.PaymentUncheckedUpdateManyWithoutRecordedByNestedInput;
    paymentsVoided?: Prisma.PaymentUncheckedUpdateManyWithoutVoidedByNestedInput;
};
export type UserUpsertWithoutChargesCreatedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutChargesCreatedInput, Prisma.UserUncheckedUpdateWithoutChargesCreatedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutChargesCreatedInput, Prisma.UserUncheckedCreateWithoutChargesCreatedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutChargesCreatedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutChargesCreatedInput, Prisma.UserUncheckedUpdateWithoutChargesCreatedInput>;
};
export type UserUpdateWithoutChargesCreatedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kindeId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    properties?: Prisma.PropertyUpdateManyWithoutOwnerNestedInput;
    chargesVoided?: Prisma.ChargeUpdateManyWithoutVoidedByNestedInput;
    paymentsRecorded?: Prisma.PaymentUpdateManyWithoutRecordedByNestedInput;
    paymentsVoided?: Prisma.PaymentUpdateManyWithoutVoidedByNestedInput;
};
export type UserUncheckedUpdateWithoutChargesCreatedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kindeId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    properties?: Prisma.PropertyUncheckedUpdateManyWithoutOwnerNestedInput;
    chargesVoided?: Prisma.ChargeUncheckedUpdateManyWithoutVoidedByNestedInput;
    paymentsRecorded?: Prisma.PaymentUncheckedUpdateManyWithoutRecordedByNestedInput;
    paymentsVoided?: Prisma.PaymentUncheckedUpdateManyWithoutVoidedByNestedInput;
};
export type UserCreateWithoutPaymentsRecordedInput = {
    id?: string;
    kindeId: string;
    email: string;
    name?: string | null;
    role?: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    properties?: Prisma.PropertyCreateNestedManyWithoutOwnerInput;
    chargesCreated?: Prisma.ChargeCreateNestedManyWithoutCreatedByInput;
    chargesVoided?: Prisma.ChargeCreateNestedManyWithoutVoidedByInput;
    paymentsVoided?: Prisma.PaymentCreateNestedManyWithoutVoidedByInput;
};
export type UserUncheckedCreateWithoutPaymentsRecordedInput = {
    id?: string;
    kindeId: string;
    email: string;
    name?: string | null;
    role?: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    properties?: Prisma.PropertyUncheckedCreateNestedManyWithoutOwnerInput;
    chargesCreated?: Prisma.ChargeUncheckedCreateNestedManyWithoutCreatedByInput;
    chargesVoided?: Prisma.ChargeUncheckedCreateNestedManyWithoutVoidedByInput;
    paymentsVoided?: Prisma.PaymentUncheckedCreateNestedManyWithoutVoidedByInput;
};
export type UserCreateOrConnectWithoutPaymentsRecordedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPaymentsRecordedInput, Prisma.UserUncheckedCreateWithoutPaymentsRecordedInput>;
};
export type UserCreateWithoutPaymentsVoidedInput = {
    id?: string;
    kindeId: string;
    email: string;
    name?: string | null;
    role?: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    properties?: Prisma.PropertyCreateNestedManyWithoutOwnerInput;
    chargesCreated?: Prisma.ChargeCreateNestedManyWithoutCreatedByInput;
    chargesVoided?: Prisma.ChargeCreateNestedManyWithoutVoidedByInput;
    paymentsRecorded?: Prisma.PaymentCreateNestedManyWithoutRecordedByInput;
};
export type UserUncheckedCreateWithoutPaymentsVoidedInput = {
    id?: string;
    kindeId: string;
    email: string;
    name?: string | null;
    role?: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    properties?: Prisma.PropertyUncheckedCreateNestedManyWithoutOwnerInput;
    chargesCreated?: Prisma.ChargeUncheckedCreateNestedManyWithoutCreatedByInput;
    chargesVoided?: Prisma.ChargeUncheckedCreateNestedManyWithoutVoidedByInput;
    paymentsRecorded?: Prisma.PaymentUncheckedCreateNestedManyWithoutRecordedByInput;
};
export type UserCreateOrConnectWithoutPaymentsVoidedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPaymentsVoidedInput, Prisma.UserUncheckedCreateWithoutPaymentsVoidedInput>;
};
export type UserUpsertWithoutPaymentsRecordedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPaymentsRecordedInput, Prisma.UserUncheckedUpdateWithoutPaymentsRecordedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPaymentsRecordedInput, Prisma.UserUncheckedCreateWithoutPaymentsRecordedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPaymentsRecordedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPaymentsRecordedInput, Prisma.UserUncheckedUpdateWithoutPaymentsRecordedInput>;
};
export type UserUpdateWithoutPaymentsRecordedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kindeId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    properties?: Prisma.PropertyUpdateManyWithoutOwnerNestedInput;
    chargesCreated?: Prisma.ChargeUpdateManyWithoutCreatedByNestedInput;
    chargesVoided?: Prisma.ChargeUpdateManyWithoutVoidedByNestedInput;
    paymentsVoided?: Prisma.PaymentUpdateManyWithoutVoidedByNestedInput;
};
export type UserUncheckedUpdateWithoutPaymentsRecordedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kindeId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    properties?: Prisma.PropertyUncheckedUpdateManyWithoutOwnerNestedInput;
    chargesCreated?: Prisma.ChargeUncheckedUpdateManyWithoutCreatedByNestedInput;
    chargesVoided?: Prisma.ChargeUncheckedUpdateManyWithoutVoidedByNestedInput;
    paymentsVoided?: Prisma.PaymentUncheckedUpdateManyWithoutVoidedByNestedInput;
};
export type UserUpsertWithoutPaymentsVoidedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPaymentsVoidedInput, Prisma.UserUncheckedUpdateWithoutPaymentsVoidedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPaymentsVoidedInput, Prisma.UserUncheckedCreateWithoutPaymentsVoidedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPaymentsVoidedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPaymentsVoidedInput, Prisma.UserUncheckedUpdateWithoutPaymentsVoidedInput>;
};
export type UserUpdateWithoutPaymentsVoidedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kindeId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    properties?: Prisma.PropertyUpdateManyWithoutOwnerNestedInput;
    chargesCreated?: Prisma.ChargeUpdateManyWithoutCreatedByNestedInput;
    chargesVoided?: Prisma.ChargeUpdateManyWithoutVoidedByNestedInput;
    paymentsRecorded?: Prisma.PaymentUpdateManyWithoutRecordedByNestedInput;
};
export type UserUncheckedUpdateWithoutPaymentsVoidedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kindeId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    properties?: Prisma.PropertyUncheckedUpdateManyWithoutOwnerNestedInput;
    chargesCreated?: Prisma.ChargeUncheckedUpdateManyWithoutCreatedByNestedInput;
    chargesVoided?: Prisma.ChargeUncheckedUpdateManyWithoutVoidedByNestedInput;
    paymentsRecorded?: Prisma.PaymentUncheckedUpdateManyWithoutRecordedByNestedInput;
};
export type UserCountOutputType = {
    properties: number;
    chargesCreated: number;
    chargesVoided: number;
    paymentsRecorded: number;
    paymentsVoided: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    properties?: boolean | UserCountOutputTypeCountPropertiesArgs;
    chargesCreated?: boolean | UserCountOutputTypeCountChargesCreatedArgs;
    chargesVoided?: boolean | UserCountOutputTypeCountChargesVoidedArgs;
    paymentsRecorded?: boolean | UserCountOutputTypeCountPaymentsRecordedArgs;
    paymentsVoided?: boolean | UserCountOutputTypeCountPaymentsVoidedArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountPropertiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PropertyWhereInput;
};
export type UserCountOutputTypeCountChargesCreatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChargeWhereInput;
};
export type UserCountOutputTypeCountChargesVoidedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChargeWhereInput;
};
export type UserCountOutputTypeCountPaymentsRecordedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
};
export type UserCountOutputTypeCountPaymentsVoidedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kindeId?: boolean;
    email?: boolean;
    name?: boolean;
    role?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    properties?: boolean | Prisma.User$propertiesArgs<ExtArgs>;
    chargesCreated?: boolean | Prisma.User$chargesCreatedArgs<ExtArgs>;
    chargesVoided?: boolean | Prisma.User$chargesVoidedArgs<ExtArgs>;
    paymentsRecorded?: boolean | Prisma.User$paymentsRecordedArgs<ExtArgs>;
    paymentsVoided?: boolean | Prisma.User$paymentsVoidedArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kindeId?: boolean;
    email?: boolean;
    name?: boolean;
    role?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kindeId?: boolean;
    email?: boolean;
    name?: boolean;
    role?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    kindeId?: boolean;
    email?: boolean;
    name?: boolean;
    role?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "kindeId" | "email" | "name" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    properties?: boolean | Prisma.User$propertiesArgs<ExtArgs>;
    chargesCreated?: boolean | Prisma.User$chargesCreatedArgs<ExtArgs>;
    chargesVoided?: boolean | Prisma.User$chargesVoidedArgs<ExtArgs>;
    paymentsRecorded?: boolean | Prisma.User$paymentsRecordedArgs<ExtArgs>;
    paymentsVoided?: boolean | Prisma.User$paymentsVoidedArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        properties: Prisma.$PropertyPayload<ExtArgs>[];
        chargesCreated: Prisma.$ChargePayload<ExtArgs>[];
        chargesVoided: Prisma.$ChargePayload<ExtArgs>[];
        paymentsRecorded: Prisma.$PaymentPayload<ExtArgs>[];
        paymentsVoided: Prisma.$PaymentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        kindeId: string;
        email: string;
        name: string | null;
        role: $Enums.Role;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    properties<T extends Prisma.User$propertiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    chargesCreated<T extends Prisma.User$chargesCreatedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$chargesCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    chargesVoided<T extends Prisma.User$chargesVoidedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$chargesVoidedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    paymentsRecorded<T extends Prisma.User$paymentsRecordedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$paymentsRecordedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    paymentsVoided<T extends Prisma.User$paymentsVoidedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$paymentsVoidedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly kindeId: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'Role'>;
    readonly isActive: Prisma.FieldRef<"User", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$propertiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$chargesCreatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$chargesVoidedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$paymentsRecordedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$paymentsVoidedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
