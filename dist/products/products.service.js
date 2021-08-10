"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const products_1 = require("./products");
let ProductsService = class ProductsService {
    constructor() { }
    async getAll() {
        return products_1.products;
    }
    async getProduct(id) {
        const product = products_1.products.filter(p => p.id == id);
        return product[0];
    }
    async getProductsByCategorySlug(slug) {
        const productsFromCategory = products_1.products.filter(p => p.category == slug);
        return productsFromCategory;
    }
    async getTopProducts() {
        const topProducts = products_1.products.filter(p => p.tags.includes('top'));
        return topProducts;
    }
    async getProductsByTag(tag) {
        const productsByTag = products_1.products.filter(p => p.tags.includes(tag));
        return productsByTag;
    }
};
ProductsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map