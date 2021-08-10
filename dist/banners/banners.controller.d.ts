import { BannersService } from "./banners.service";
export declare class BannersController {
    private bannersService;
    constructor(bannersService: BannersService);
    getAll(): Promise<import("./banners").IBanner[]>;
}
