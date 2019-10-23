import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HeroesComponent } from "./hero-list/hero-list.component";
import { HeroDetaiComponent } from "./hero-detail/hero-detail.component";

const routes: Routes = [
  { path: "hero-list", component: HeroesComponent },
  { path: "detail/:id", component: HeroDetaiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule {}
