import { SafeResourceUrl } from "@angular/platform-browser";

export class Popup{
    id!:number;
    title!:string;
    text!:string;
    popupUrl!:string;
    isActive!:boolean;
    imageUrl!:string;
    safeContent!:SafeResourceUrl;
}