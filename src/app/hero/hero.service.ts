import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { HEROES } from "./hero.mock";
import { MessageService } from "../message.service";
import { Observable, of } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroList(): Observable<Hero[]> {
    this.messageService.add("召唤了所有英雄");
    return of(HEROES);
  }
}
