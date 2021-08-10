export declare class ProductsService {
    constructor();
    getAll(): Promise<import("./products").IProduct[]>;
    getProduct(id: number): Promise<import("./products").IProduct>;
    getProductsByCategorySlug(slug: string): Promise<import("./products").IProduct[]>;
    getTopProducts(): Promise<import("./products").IProduct[]>;
    getProductsByTag(tag: string): Promise<import("./products").IProduct[]>;
}
