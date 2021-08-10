import { ProductsService } from "./products.service";
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getAll(): Promise<import("./products").IProduct[]>;
    getTop(): Promise<import("./products").IProduct[]>;
    getProductsByTag(tag: string): Promise<import("./products").IProduct[]>;
    getProduct(id: number): Promise<import("./products").IProduct>;
    getProductsByCategorySlug(slug: string): Promise<import("./products").IProduct[]>;
}
