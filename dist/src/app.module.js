"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const prismaservice_module_1 = require("./prismaservice/prismaservice.module");
const config_1 = require("@nestjs/config");
const property_module_1 = require("./property/property.module");
const users_module_1 = require("./users/users.module");
const house_module_1 = require("./house/house.module");
const tenant_module_1 = require("./tenant/tenant.module");
const tenancy_module_1 = require("./tenancy/tenancy.module");
const balance_module_1 = require("./balance/balance.module");
const charge_module_1 = require("./charge/charge.module");
const rent_module_1 = require("./rent/rent.module");
const payment_module_1 = require("./payment/payment.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prismaservice_module_1.PrismaServiceModule,
            schedule_1.ScheduleModule.forRoot(),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            property_module_1.PropertyModule,
            users_module_1.UsersModule,
            house_module_1.HouseModule,
            tenant_module_1.TenantModule,
            tenancy_module_1.TenancyModule,
            balance_module_1.BalanceModule,
            charge_module_1.ChargeModule,
            rent_module_1.RentModule,
            payment_module_1.PaymentModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map