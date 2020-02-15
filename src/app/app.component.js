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
import { Config, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { LoginPage } from '../pages/login/login';
var KolbehKeramatApp = (function () {
    function KolbehKeramatApp(platform, statusBar, splashScreen, translate, config) {
        var _this = this;
        this.translate = translate;
        this.config = config;
        this.rootPage = LoginPage;
        this.textDir = "rtl";
        translate.setDefaultLang('fa');
        translate.use('fa');
        //this.initTranslate();
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //this is to determine the text direction depending on the selected language
            _this.translate.onLangChange.subscribe(function (event) {
                _this.textDir = event.lang == 'fa' ? 'rtl' : 'ltr';
            });
        });
    }
    KolbehKeramatApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('fa');
        //translate.setDefaultLang('en');
        this.translate.use('fa');
        if (this.translate.getBrowserLang() !== undefined) {
            this.translate.use(this.translate.getBrowserLang());
        }
        else {
            this.translate.use('fa'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    KolbehKeramatApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [Platform,
            StatusBar,
            SplashScreen,
            TranslateService,
            Config])
    ], KolbehKeramatApp);
    return KolbehKeramatApp;
}());
export { KolbehKeramatApp };
//# sourceMappingURL=app.component.js.map