import { HeroService } from "../hero.service";
import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetaiComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  hero: Hero;

  getHeroes = () => {
    this.heroService.getHeroList().subscribe(heroes => {
      this.route.paramMap.subscribe(p => {
        let id = p.get("id");
        this.hero = heroes.filter(k => {
          return k.id === id;
        })[0];
      });
    });
  };

  ngOnInit() {
    this.getHeroes();
  }

  handleGoBack() {
    let heroId = this.hero.id;
    this.router.navigate(["/hero-list", { id: heroId }]);
  }
}
