import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlayerDetailPage } from '../player-detail/player-detail';
import { RestProvider } from '../../providers/rest/rest';
import { LoadingController } from 'ionic-angular';
import { ENV } from '../../env';

@IonicPage({
  name: 'contact'
})
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [RestProvider]
})

export class ContactPage {

  public sessions = new Array();
  public serverWebApp;

  private detailPage;
  data: any;

  errorMessage: string;
  page = 0;
  perPage = 10;
  totalData = 100;
  totalPage = 1;


  constructor(
    public navCtrl: NavController,
    public restProvider: RestProvider,
    public loadingCtrl: LoadingController
  ) {
    this.detailPage = PlayerDetailPage;

    this.serverWebApp = ENV.webapp.baseUrl;
    let loader = loadingCtrl.create({ content: "..." });
    loader.present();

    restProvider.getUsers(0).subscribe(sessions => {
      console.log('sessions : ', sessions);
      for (let i = 0; i < sessions.length; i++) {
        if (sessions[i].personalPic)
          sessions[i].img = ENV.webapp.baseUrl + ENV.webapp.avatarFolder + "/" + sessions[i].personalPic;
        else
          sessions[i].img = ENV.webapp.baseUrl + "/img/default/defaultAvatar.png";
      }
      loader.dismiss();

      this.data = sessions;
      this.sessions = this.data.data;
      this.perPage = this.data.per_page;
      this.totalData = this.data.total;
      this.totalPage += 1;//this.data.total_pages;

      this.sessions = sessions;
    });
  }

  loadPlayerDetail(person) {
    console.log(person);
    this.navCtrl.push(this.detailPage, { person: person });
  }

  doInfinite(infiniteScroll) {
    this.page = this.page + 1;
    setTimeout(() => {
      this.restProvider.getUsers(this.page)
        .subscribe(
          sessions => {
            for (let i = 0; i < sessions.length; i++) {
              if (sessions[i].personalPic)
                sessions[i].img = ENV.webapp.baseUrl + ENV.webapp.avatarFolder + "/" + sessions[i].personalPic;
              else
                sessions[i].img = ENV.webapp.baseUrl + "/img/default/defaultAvatar.png";
            }
            this.data = sessions;
            this.perPage = this.data.per_page;
            this.totalData = this.data.total;
            this.totalPage += 1;// this.data.total_pages;
            for (let i = 0; i < this.data.length; i++) {
              this.sessions.push(this.data[i]);
            }
          },
          error => this.errorMessage = <any>error);

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }
}
