import { Component, AfterViewInit, OnDestroy, ElementRef } from "@angular/core";
import react from "react";
import ReactDOM from "react-dom";
import { ActivatedRoute, Router } from "@angular/router";
import { getComponentByRoute } from "./utils/index";
const RC = react.createElement;
@Component({
  selector: "app-react-container",
  templateUrl: "./react-container.component.html",
  styleUrls: ["./react-container.component.css"]
})
export class ReactContainerComponent implements AfterViewInit, OnDestroy {
  constructor(
    private el: ElementRef,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  /**
   * react组件无参数跳转路由
   */
  navigate = path => {
    this.router.navigate([path]);
  };
  /**
   * react组件有参数路由跳转
   */
  navigateWithQueryParams = (path, param) => {
    this.router.navigate([path + "/" + param]);
  };

  /**
   * 根据path渲染react组件
   */
  showReactComponent = () => {
    let { path } = this.route.snapshot.url[0];
    let Component = getComponentByRoute(path);
    let container = this.el.nativeElement.querySelector("#react-container");

    ReactDOM.render(
      RC(Component, {
        path,
        id: path.split("react")[1],
        navigate: this.navigate,
        navigateWithQueryParams: this.navigateWithQueryParams
      }),
      container
    );
  };

  /**
   * ng组件清除之前先卸载react组件
   */
  removeReactComponent = () => {
    let container = this.el.nativeElement.querySelector("#react-container");
    ReactDOM.unmountComponentAtNode(container);
  };

  ngAfterViewInit() {
    this.showReactComponent();
  }
  ngOnDestroy() {
    this.removeReactComponent();
  }
}
