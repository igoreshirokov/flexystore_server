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
const categories_module_1 = require("./categories/categories.module");
const serve_static_1 = require("@nestjs/serve-static");
const path = require("path");
const products_module_1 = require("./products/products.module");
const banners_module_1 = require("./banners/banners.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path.resolve(__dirname, 'static')
            }),
            categories_module_1.CategoriesModule,
            products_module_1.ProductsModule,
            banners_module_1.BannersModule
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map