import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlaygroundDetailPage } from '../playground-detail/playground-detail';
import { RestProvider } from '../../providers/rest/rest';
import { LoadingController } from 'ionic-angular';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';
import { ENV } from '../../env';

@IonicPage({
  name: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RestProvider]
})
export class HomePage {

  public stories = new Array();
  public posts = new Array();
  private detailPage;

  options: GeolocationOptions;
  currentPos: Geoposition;

  data: any;

  errorMessage: string;
  page = 0;
  perPage = 10;
  totalData = 100;
  totalPage = 1;

  public like_btn = {
    color: 'black',
    icon_name: 'heart-outline'
  };

  constructor(
    public navCtrl: NavController,
    public restProvider: RestProvider,
    public loadingCtrl: LoadingController,
    private geolocation: Geolocation
  ) {

    this.detailPage = PlaygroundDetailPage;

    let loader = loadingCtrl.create({ content: "..." });
    loader.present();

    restProvider.getStories(0).subscribe(stories => {
      console.log('stories : ', stories);
      this.data = stories;
      this.stories = this.data.data;
      this.perPage = this.data.per_page;
      this.totalData = this.data.total;
      this.stories = stories;
    });

    restProvider.getPosts(0).subscribe(posts => {

      posts.forEach(element => {
        element.file = element.file + ".jpg";
        return element
      });

      this.data = posts;
      this.posts = this.data.data;
      this.perPage = this.data.per_page;
      this.totalData = this.data.total;
      this.totalPage += 1;

      this.posts = posts;
    });

    loader.dismiss();
  }

  loadPlaygroundDetail(playground) {
    console.log(playground);
    this.navCtrl.push(this.detailPage, { playground: playground });
  }

  doInfinite(infiniteScroll) {
    this.page = this.page + 1;
    setTimeout(() => {
      this.restProvider.getPosts(((this.page)))
        .subscribe(
          posts => {
            this.data = posts;
            this.perPage = this.data.per_page;
            this.totalData = this.data.total;
            this.totalPage += 1;
            for (let i = 0; i < posts.length; i++) {
              this.posts.push(this.data[i]);
            }
          },
          error => this.errorMessage = <any>error);

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }


  likeButton() {
    if (this.like_btn.icon_name === 'heart-outline') {
      this.like_btn.icon_name = 'heart';
      this.like_btn.color = 'danger';
    }
    else {
      this.like_btn.icon_name = 'heart-outline';
      this.like_btn.color = 'black';
    }
  }
}