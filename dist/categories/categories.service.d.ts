export declare class CategoriesService {
    constructor();
    getAll(): Promise<{
        parent: {
            id: number;
            name: string;
            slug: string;
            parent: number;
        };
        children: {
            id: number;
            name: string;
            slug: string;
            parent: number;
        }[];
    }[]>;
}
