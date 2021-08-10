export interface IProduct {
    id: number;
    name: string;
    category: string;
    tags: string[];
    price: number;
    oldPrice?: number;
    images: string[];
}
export declare const products: IProduct[];
