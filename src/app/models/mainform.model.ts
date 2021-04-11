import { SafeResourceUrl } from "@angular/platform-browser";

export class MainForm{
    id!:number;
    title!:string;
    content!:string;
    isActive!:boolean;
    safeUrl!:SafeResourceUrl;
}