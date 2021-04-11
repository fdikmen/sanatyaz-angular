import { SafeResourceUrl } from "@angular/platform-browser";

export class Purpose{
    id!:number;
    text!:string;
    title!:string;
    imageUrl!:string;
    content!:string;
    safeContent!:SafeResourceUrl;
}