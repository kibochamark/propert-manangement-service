export declare class TenantControllerDTO {
    fullName: string;
    phone: string;
    altPhone?: string;
    nationalId?: string;
    email?: string;
    occupation?: string;
    emergencyContactName?: string;
    emergencyContactPhone?: string;
}
declare const UpdateTenantDTO_base: import("@nestjs/mapped-types").MappedType<Partial<TenantControllerDTO>>;
export declare class UpdateTenantDTO extends UpdateTenantDTO_base {
}
export {};
