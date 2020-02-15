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
import { PlayerDetailPage } from '../player-detail/player-detail';
import { RestProvider } from '../../providers/rest/rest';
import { LoadingController } from 'ionic-angular';
import { ENV } from '../../env';
var ContactPage = (function () {
    function ContactPage(navCtrl, restProvider, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.sessions = new Array();
        this.page = 0;
        this.perPage = 10;
        this.totalData = 100;
        this.totalPage = 1;
        this.detailPage = PlayerDetailPage;
        this.serverWebApp = ENV.webapp.baseUrl;
        var loader = loadingCtrl.create({ content: "..." });
        loader.present();
        restProvider.getUsers(0).subscribe(function (sessions) {
            console.log('sessions : ', sessions);
            for (var i = 0; i < sessions.length; i++) {
                if (sessions[i].personalPic)
                    sessions[i].img = ENV.webapp.baseUrl + ENV.webapp.avatarFolder + "/" + sessions[i].personalPic;
                else
                    sessions[i].img = ENV.webapp.baseUrl + "/img/default/defaultAvatar.png";
            }
            loader.dismiss();
            _this.data = sessions;
            _this.sessions = _this.data.data;
            _this.perPage = _this.data.per_page;
            _this.totalData = _this.data.total;
            _this.totalPage += 1; //this.data.total_pages;
            _this.sessions = sessions;
        });
    }
    ContactPage.prototype.loadPlayerDetail = function (person) {
        console.log(person);
        this.navCtrl.push(this.detailPage, { person: person });
    };
    ContactPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        setTimeout(function () {
            _this.restProvider.getUsers(_this.page)
                .subscribe(function (sessions) {
                for (var i = 0; i < sessions.length; i++) {
                    if (sessions[i].personalPic)
                        sessions[i].img = ENV.webapp.baseUrl + ENV.webapp.avatarFolder + "/" + sessions[i].personalPic;
                    else
                        sessions[i].img = ENV.webapp.baseUrl + "/img/default/defaultAvatar.png";
                }
                _this.data = sessions;
                _this.perPage = _this.data.per_page;
                _this.totalData = _this.data.total;
                _this.totalPage += 1; // this.data.total_pages;
                for (var i = 0; i < _this.data.length; i++) {
                    _this.sessions.push(_this.data[i]);
                }
            }, function (error) { return _this.errorMessage = error; });
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 1000);
    };
    ContactPage = __decorate([
        IonicPage({
            name: 'contact'
        }),
        Component({
            selector: 'page-contact',
            templateUrl: 'contact.html',
            providers: [RestProvider]
        }),
        __metadata("design:paramtypes", [NavController,
            RestProvider,
            LoadingController])
    ], ContactPage);
    return ContactPage;
}());
export { ContactPage };
//# sourceMappingURL=contact.js.map