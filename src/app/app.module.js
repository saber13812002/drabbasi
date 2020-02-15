var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { KolbehKeramatApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { NbaPage } from '../pages/nba/nba';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PlayerDetailPage } from '../pages/player-detail/player-detail';
import { PlaygroundDetailPage } from '../pages/playground-detail/playground-detail';
import { MapPage } from '../pages/map/map';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageServiceProvider } from '../providers/language-service/language-service';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                KolbehKeramatApp,
                AboutPage,
                LoginPage,
                ContactPage,
                HomePage,
                TabsPage,
                NbaPage,
                PlayerDetailPage,
                PlaygroundDetailPage,
                MapPage,
            ],
            imports: [
                HttpModule,
                BrowserModule,
                HttpClientModule,
                IonicModule.forRoot(KolbehKeramatApp, {}, {
                    links: [
                        { segment: 'player', component: PlayerDetailPage, name: 'PlayerDetail' },
                        { segment: 'playground/:id', component: PlaygroundDetailPage, name: 'PlaygroundDetail' },
                    ]
                }),
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (createTranslateLoader),
                        deps: [HttpClient]
                    }
                })
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                KolbehKeramatApp,
                AboutPage,
                LoginPage,
                ContactPage,
                HomePage,
                TabsPage,
                NbaPage,
                PlayerDetailPage,
                PlaygroundDetailPage,
                MapPage,
            ],
            providers: [
                StatusBar,
                SplashScreen,
                LanguageServiceProvider,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                RestProvider,
                Geolocation,
                LanguageServiceProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
export function createTranslateLoader(http) {
    return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
//# sourceMappingURL=app.module.js.map