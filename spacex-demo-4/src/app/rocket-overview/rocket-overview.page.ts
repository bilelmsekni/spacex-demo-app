import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rocket-overview',
  templateUrl: './rocket-overview.page.html',
  styleUrls: ['./rocket-overview.page.scss'],
})
export class RocketOverviewPage implements OnInit {

  defaultHref: string;

  constructor() { }

  ngOnInit() {
    this.defaultHref = '/rockets'
  }

}
