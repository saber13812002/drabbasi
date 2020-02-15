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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the NbaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NbaPage = (function () {
    function NbaPage(navCtrl, navParams, playerDataProvider, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.playerDataProvider = playerDataProvider;
        this.loadingCtrl = loadingCtrl;
        this.match = new Array();
        this.page = 0;
        this.perPage = 10;
        this.totalData = 100;
        this.totalPage = 1;
        this.apiUrl = 'https://berimbasket.ir/';
        this.apiFolder = 'bball';
        var loader = loadingCtrl.create({ content: "..." });
        loader.present();
        playerDataProvider.getMatch(0).subscribe(function (match) {
            console.log('match : ', match);
            for (var i = 0; i < match.length; i++) {
                match[i].logoA = _this.apiUrl + match[i].logoTitleA;
                match[i].logoB = _this.apiUrl + match[i].logoTitleB;
            }
            loader.dismiss();
            _this.data = match;
            _this.match = _this.data.data;
            _this.perPage = _this.data.per_page;
            _this.totalData = _this.data.total;
            _this.totalPage += 1; //this.data.total_pages;
            _this.match = match;
        });
    }
    NbaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NbaPage');
    };
    NbaPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        setTimeout(function () {
            _this.playerDataProvider.getMatch(_this.page * 10)
                .subscribe(function (match) {
                for (var i = 0; i < match.length; i++) {
                    match[i].logoA = _this.apiUrl + match[i].logoTitleA;
                    match[i].logoB = _this.apiUrl + match[i].logoTitleB;
                }
                _this.data = match;
                _this.perPage = _this.data.per_page;
                _this.totalData = _this.data.total;
                _this.totalPage += 1; // this.data.total_pages;
                for (var i = 0; i < _this.data.length; i++) {
                    _this.match.push(_this.data[i]);
                }
            }, function (error) { return _this.errorMessage = error; });
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 1000);
    };
    NbaPage = __decorate([
        IonicPage({
            name: 'nba'
        }),
        Component({
            selector: 'page-nba',
            templateUrl: 'nba.html',
            providers: [RestProvider]
        }),
        __metadata("design:paramtypes", [NavController, NavParams, RestProvider, LoadingController])
    ], NbaPage);
    return NbaPage;
}());
export { NbaPage };
//# sourceMappingURL=nba.js.map