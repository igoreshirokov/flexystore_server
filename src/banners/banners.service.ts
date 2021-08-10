import { Injectable } from "@nestjs/common";
import { banners } from "./banners";

@Injectable()
export class BannersService {
    constructor() { }

    async getAll() {
        return banners;
    }

    // async getProduct(id: number) {
    //     const product = products.filter(p => p.id == id);
    //     return product[0];
    // }
    
    // async getProductsByCategorySlug(slug: string) {
    //     const productsFromCategory = products.filter(p => p.category == slug);
    //     return productsFromCategory;
    // }
    // async getTopProducts() {
    //     const topProducts = products.filter(p => p.tags.includes('top'));
    //     return topProducts;
    // }
    // async getProductsByTag(tag: string) {
    //     const productsByTag = products.filter(p => p.tags.includes(tag));
    //     return productsByTag;
    // }
    // Не закончено
    //
    // async getSearchProducts(query: string) {
    //     const productsSearched = products.filter(p => p.tags.includes(tag));
    //     return productsByTag;
    // }



}