import { SafeResourceUrl } from "@angular/platform-browser";

export class Slider{
    id!:number;
    sliderTitle!:string;
    sliderText!:string;
    sliderSubtitle!:string;
    sliderUrl!:string;
    imageUrl!:string;
    mediaUrl!:string;
    isActive!:boolean;
    order!:number;
    safeContent!:SafeResourceUrl;    
}
