import { Controller, Get, Param, Query } from "@nestjs/common";
import { BannersService } from "./banners.service";


@Controller('/banners')
export class BannersController {
    constructor(private bannersService: BannersService) { }

    @Get()
    getAll() {
        return this.bannersService.getAll();
    }


    // @Get()
    // getAll() {
    //     return this.productsService.getAll();
    // }

    // @Get('/top')
    // getTop() {
    //     return this.productsService.getTopProducts();
    // }
    // @Get('/tags/:tag')
    // getProductsByTag(@Param('tag') tag: string) {
    //     return this.productsService.getProductsByTag(tag);
    // }

    // @Get(':id')
    // getProduct(@Param('id') id: number) {
    //     return this.productsService.getProduct(id);
    // }

    // @Get('/category/:slug')
    // getProductsByCategorySlug(@Param('slug') slug: string) {
    //     return this.productsService.getProductsByCategorySlug(slug);
    // }
    // Не закончено
    //
    // @Get('/search')
    // getSearchProducts(@Query('query') query: string) {
    //     return this.productsService.getSearchProducts(query);
    // }

}