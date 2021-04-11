import { CreatePage } from "./create-page.model";

export class Menu{
    id!:number;
    mainMenuId!:number;
    menuName!:string;
    imageUrl!:string;
    iconClass!:string;
    isActive!:boolean;
    getHomepage!:boolean;
    Order!:number;
    subMenu!:boolean;
    menu!:Menu[];
    createPage!:CreatePage[];    
}