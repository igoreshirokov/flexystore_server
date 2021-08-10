import { CategoriesService } from "./categories.service";
export declare class CategoriesController {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
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
