import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderModel } from '@gsa-sam/layouts';
import { NavigationMode } from '@gsa-sam/components';
import { LocationStrategy } from '@angular/common';

@Component({
  templateUrl: './header-alerts.component.html',
  styleUrls: ['./header-alerts.component.scss']
})
export class HeaderAlertsComponent implements OnInit {

  constructor(private locationStrategy: LocationStrategy) {}

  public linkEvent = new BehaviorSubject<object>(null);

  modelHeader: HeaderModel = {
    secondaryLinks: [
      {
        imageClassPrefix: 'sds',
        imageClass: 'request',
        text: 'Requests',
        route: '/',
        id: 'request',
        hasCounter: true,
        selected: true,
        mode: NavigationMode.INTERNAL
      },
      {
        imageClassPrefix: 'sds',
        imageClass: 'messages',
        text: 'Messages',
        route: '/',
        id: 'messages',
        mode: NavigationMode.INTERNAL
      },
      {
        imageClassPrefix: 'sds',
        imageClass: 'workspace',
        text: 'Workspace',
        route: '/',
        id: 'workspace',
        mode: NavigationMode.INTERNAL
      },
      {
        imageClassPrefix: 'sds',
        imageClass: 'log-out',
        text: 'Sign Out',
        route: '/',
        id: 'signOut',
        mode: NavigationMode.INTERNAL
      }
    ],
    navigationLinks: [
      {
        text: 'Home',
        selected: true,
        route: '/',
        id: 'home',
        mode: NavigationMode.INTERNAL
      },
      {
        text: 'Search',
        route: '/',
        id: 'search',
        mode: NavigationMode.INTERNAL
      },
      {
        text: 'Databank',
        route: '/',
        id: 'databank',
        mode: NavigationMode.INTERNAL
      },
      {
        text: 'Data Services',
        route: '/',
        id: 'dataService',
        mode: NavigationMode.INTERNAL
      },
      { text: 'Help', route: '/', id: 'help', mode: NavigationMode.INTERNAL }
    ],
    home: {
      text: 'Logo',
      logo: this.locationStrategy.getBaseHref() + 'assets/img/logo-sam.svg',
      route: '/',
      id: 'home',
      mode: NavigationMode.INTERNAL
    }
  };

  alerts = [
    {
      header: 'Test Alert',
      date: new Date().toDateString()
    },
    {
      header: 'New Alert New Alert New Alert New Alert New Alert New Alert New Alert New Alert New Alert New Alert New Alert ',
      date: new Date().toDateString(),
    }
  ];

  ngOnInit() {
    this.linkEvent.subscribe(value => {
      console.log('Link Event Clicked Change');
      console.log(value);
    });
  }

  onSeeAllAlerts() {
    console.log('See All Alerts Clicked');
  }
}
