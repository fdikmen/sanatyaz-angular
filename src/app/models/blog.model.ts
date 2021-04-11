import { NumberValueAccessor } from "@angular/forms";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";

export class Blog{
     id!: number;
     name!: string;
     title!:string;
     subtitle!:string;
     content!:string;
     imageUrl!:string;
     dateTime!:string;
     getHomepage!:boolean;
     isActive!:boolean;
     order!:number;
     safeContent!:SafeResourceUrl;     
}