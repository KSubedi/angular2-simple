import { Component } from "@angular/core";
import { Helpers } from "./shared/helpers";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: "app",
    templateUrl: Helpers.getTemplatePath("app"),
    directives: [
        ROUTER_DIRECTIVES
    ]
})

export class AppComponent{

    name: string;
    
    constructor(){
        this.name = "Angular 2";
        document.title = this.name; 
    }
}