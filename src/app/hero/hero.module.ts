import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { HeroesComponent } from "./hero-list/hero-list.component";
import { HeroDetaiComponent } from "./hero-detail/hero-detail.component";

import { HeroRoutingModule } from "./hero-routing.module";
const MODULE_COMPONENTS = [HeroesComponent, HeroDetaiComponent];
@NgModule({
  imports: [CommonModule, FormsModule, HeroRoutingModule],
  declarations: MODULE_COMPONENTS
})
export class HeroModule {}
