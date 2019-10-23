import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-hero-list",
  templateUrl: "./hero-list.component.html",
  styleUrls: ["./hero-list.component.css"]
})
export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}
  heroList: Hero[];
  activeHeroId: string;

  handleClick(hero: Hero): void {
    this.activeHeroId = hero.id;
  }
  //查询英雄
  getHeroList(): void {
    this.heroService
      .getHeroList()
      .subscribe(heroList => (this.heroList = heroList));
  }

  // 获取活动item
  getActiveId(): void {
    this.route.paramMap.subscribe(p => {
      this.activeHeroId = p.get("id");
    });
  }

  ngOnInit() {
    this.getHeroList();
    this.getActiveId();
  }
}
