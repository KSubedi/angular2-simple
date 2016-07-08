import { Component } from "@angular/core";
import { Helpers } from "../../shared/helpers";

// Set the component name here
let  componentName = "home"; 

@Component({
    selector: componentName,
    templateUrl: Helpers.getTemplatePath(componentName),
    styleUrls: [Helpers.getStylePath(componentName)]
})

export class HomeComponent{
}