import {Routes, RouterModule} from "@angular/router";
import {InstructionsPageComponent} from "./pages/instructions-page.component";
import {HomePageComponent} from "./pages/home-page.component";
import {GamePageComponent} from "./pages/game-page.component";
import {AboutPageComponent} from "./pages/about-page.component";

const APP_ROUTES: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'game', component: GamePageComponent},
  {path: 'instructions', component: InstructionsPageComponent},
  {path: 'about', component: AboutPageComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
