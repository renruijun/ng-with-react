import { Component, OnInit } from "@angular/core";
import { HeroService } from "../hero/hero.service";
import { Hero } from "../hero/hero";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor(private heroService: HeroService) {}
  heroes: Hero[];

  getHeroes(): void {
    this.heroService.getHeroList().subscribe(heroes => {
      this.heroes = heroes.slice(0, 3);
    });
  }

  ngOnInit() {
    this.getHeroes();
  }
}
