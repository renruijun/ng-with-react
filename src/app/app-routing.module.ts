import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ReactContainerComponent } from "./react/react-container.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "react1", component: ReactContainerComponent },
  { path: "react2", component: ReactContainerComponent },
  { path: "react3", component: ReactContainerComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
