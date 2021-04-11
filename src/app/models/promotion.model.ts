import { SafeResourceUrl } from "@angular/platform-browser";

export class Promotion{
    id!:number;
    promotionTitle!:string;
    imageUrl!:string;
    mediaUrl!:string;
    promotionText!:string;
    promotionBoxSize!:string;
    isActive!:boolean;
    promotionUrl!:boolean;
    order!:number;
    getHomepage!:boolean;
    promotionSubtitle!:string;
    safeUrl!:SafeResourceUrl;
}