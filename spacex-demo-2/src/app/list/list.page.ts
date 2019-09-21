import { Component, OnInit } from '@angular/core';
import { RocketsService } from './rockets.service';
import { Rocket } from './rocket.model';
import { Observable } from 'rxjs';
import { tap, delay } from 'rxjs/operators'
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  items$: Observable<Rocket[]>;

  constructor(private rocketsService: RocketsService, private loadingController: LoadingController) {
  }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Connecting to space ...'
    });
    loading.present();
    this.items$ = this.rocketsService.getRockets().pipe(
      delay(1000),
      tap(() => loading.dismiss())
    );
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
