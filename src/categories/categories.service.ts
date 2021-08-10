import { Injectable } from "@nestjs/common";


@Injectable()
export class CategoriesService {
    constructor() { }

    async getAll() {
        const categories = [
            {
                parent: { id: 1, name: "Обувь", slug: "shoes", parent: 0 },
                children: [
                    { id: 11, name: "Кроссовки", slug: "sneakers", parent: 1 },
                    { id: 12, name: "Сабо", slug: "sabo", parent: 1 }
                ]
            },
            {
                parent: { id: 2, name: "Аксессуары", slug: "accessories", parent: 0 },
                children: [{ id: 21, name: "Сумки", slug: "bags", parent: 2 }]
            },
        ];

        return categories;
    }
}