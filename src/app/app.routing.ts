import {Routes, RouterModule} from "@angular/router";
import {InstructionsComponent} from "./instructions/instructions.component";
import {HomeComponent} from "./home/home.component";
import {GameComponent} from "./game/game.component";

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'instructions', component: InstructionsComponent},
  {path: 'game', component: GameComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
