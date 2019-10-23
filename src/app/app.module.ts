import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MessagesComponent } from "./messages/messages.component";
import { AppRoutingModule } from "./app-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroModule } from "./hero/hero.module";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ReactContainerComponent } from "./react/react-container.component";

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    DashboardComponent,
    NotFoundComponent,
    ReactContainerComponent
  ],
  imports: [BrowserModule, FormsModule, HeroModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
