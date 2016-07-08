import { provideRouter, RouterConfig } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";

// Router configuration
// Add all the routes below
export const routes: RouterConfig = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "login",
        component: LoginComponent
    }
];

// Export router provider
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];