var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { PlaygroundDetailPage } from '../playground-detail/playground-detail';
import { RestProvider } from '../../providers/rest/rest';
import { LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
var HomePage = (function () {
    function HomePage(navCtrl, restProvider, loadingCtrl, geolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.geolocation = geolocation;
        this.stories = new Array();
        this.posts = new Array();
        this.page = 0;
        this.perPage = 10;
        this.totalData = 100;
        this.totalPage = 1;
        this.like_btn = {
            color: 'black',
            icon_name: 'heart-outline'
        };
        this.detailPage = PlaygroundDetailPage;
        var loader = loadingCtrl.create({ content: "..." });
        loader.present();
        restProvider.getStories(0).subscribe(function (stories) {
            console.log('stories : ', stories);
            _this.data = stories;
            _this.stories = _this.data.data;
            _this.perPage = _this.data.per_page;
            _this.totalData = _this.data.total;
            _this.stories = stories;
        });
        restProvider.getPosts(0).subscribe(function (posts) {
            console.log('stories : ', posts);
            posts.forEach(function (element) {
                element.file = element.file + ".jpg";
                return element;
            });
            _this.data = posts;
            _this.posts = _this.data.data;
            _this.perPage = _this.data.per_page;
            _this.totalData = _this.data.total;
            _this.totalPage += 1;
            _this.posts = posts;
        });
        loader.dismiss();
    }
    HomePage.prototype.loadPlaygroundDetail = function (playground) {
        console.log(playground);
        this.navCtrl.push(this.detailPage, { playground: playground });
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        setTimeout(function () {
            _this.restProvider.getPosts(((_this.page)))
                .subscribe(function (posts) {
                _this.data = posts;
                _this.perPage = _this.data.per_page;
                _this.totalData = _this.data.total;
                _this.totalPage += 1;
                for (var i = 0; i < posts.length; i++) {
                    _this.posts.push(_this.data[i]);
                }
            }, function (error) { return _this.errorMessage = error; });
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 1000);
    };
    HomePage.prototype.likeButton = function () {
        if (this.like_btn.icon_name === 'heart-outline') {
            this.like_btn.icon_name = 'heart';
            this.like_btn.color = 'danger';
        }
        else {
            this.like_btn.icon_name = 'heart-outline';
            this.like_btn.color = 'black';
        }
    };
    HomePage = __decorate([
        IonicPage({
            name: 'home'
        }),
        Component({
            selector: 'page-home',
            templateUrl: 'home.html',
            providers: [RestProvider]
        }),
        __metadata("design:paramtypes", [NavController,
            RestProvider,
            LoadingController,
            Geolocation])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map