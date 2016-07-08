export class Helpers{
    // Gets template path for given component
    public static getTemplatePath(name: string){
        if(name === "app"){
            return "/templates/app/" + name + ".component.html"
        }else{
            return "/templates/app/components/" + name + "/" + name + ".component.html";
        }
    }

    // Get style path
    public static getStylePath(name: string){
        if(name === "app"){
            return "styles/app/" + name + ".component.css"
        }else{
            return "styles/app/components/" + name + "/" + name + ".component.css";
        }
    }
}