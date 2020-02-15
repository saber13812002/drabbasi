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
/**
 * Generated class for the PlayerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlayerDetailPage = (function () {
    function PlayerDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.person = {
            name: "",
            aliasName: "",
            birthPlace: "",
            codeMarkaz: "",
            lastDegreeHozeh: "",
            lastDegreeClassic: "",
            field: "",
            expert: "",
            cityId: "",
            cityOther: "",
            date: "",
            time: "",
            uImages: ""
        };
        this.apiUrl = 'https://berimbasket.ir/';
        this.apiFolder = 'bball';
        var personId = navParams.data.person.id;
        this.person.name = navParams.data.person.namefa;
        this.person.aliasName = navParams.data.person.aliasName;
        this.person.birthPlace = navParams.data.person.birthPlace;
        this.person.codeMarkaz = navParams.data.person.codeMarkaz;
        this.person.lastDegreeHozeh = navParams.data.person.lastDegreeHozeh;
        this.person.field = navParams.data.person.field;
        this.person.expert = navParams.data.person.expert;
        this.person.lastDegreeClassic = navParams.data.person.lastDegreeClassic;
        this.person.cityId = navParams.data.person.cityId;
        this.person.cityOther = navParams.data.person.cityOther;
        this.person.date = navParams.data.person.date;
        this.person.time = navParams.data.person.time;
        if (navParams.data.person.uImages != null)
            this.person.uImages = this.apiFolder + navParams.data.person.img;
        else
            this.person.uImages = "";
    }
    PlayerDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlayerDetailPage');
    };
    PlayerDetailPage = __decorate([
        IonicPage({
            name: 'player-detail'
        }),
        Component({
            selector: 'page-player-detail',
            templateUrl: 'player-detail.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams])
    ], PlayerDetailPage);
    return PlayerDetailPage;
}());
export { PlayerDetailPage };
//# sourceMappingURL=player-detail.js.map