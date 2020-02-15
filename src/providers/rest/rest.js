var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Response } from '@angular/http';
import { ENV } from '../../env';
var RestProvider = (function () {
    function RestProvider(http) {
        this.http = http;
        this.apiUrl = ENV.api.baseUrl;
        this.apiFolder = '';
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.getStories = function (page) {
        var URL1 = this.apiUrl + this.apiFolder;
        //'/getUsersStory.php?token=asdfadsfklajdhi849hjbsvdsv&page=' + page;
        var data = { Count: '20', page: '1', CourseID: '1', CategoryID: '0', ItemOrder: 'False', Tadvin: 'True', SearchPhrase: '' };
        var headers = new HttpHeaders();
        headers.set('Content-Type', "application/json; charset=utf-8");
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        return this.http.post(URL1, data, { headers: headers })
            .catch(function (err) {
            // Do messaging and error handling here
            return Observable.throw(err);
        });
    };
    RestProvider.prototype.getUsers = function (page) {
        var URL1 = this.apiUrl + this.apiFolder + '/getUsers.php?token=asdfadsfklajdhi849hjbsvdsv&page=' + page;
        return this.http.get(URL1)
            .catch(function (err) {
            // Do messaging and error handling here //TODO: add service to send message for pages
            return Observable.throw(err);
        });
    };
    RestProvider.prototype.getPosts = function (page) {
        var URL2 = this.apiUrl + this.apiFolder;
        //'/Sessions/?token=asdfadsfklajdhi849hjbsvdsv&page=' + page;
        var data = { Count: '20', page: '1', CourseID: '1', CategoryID: '0', ItemOrder: 'False', Tadvin: 'True', SearchPhrase: '' };
        var headers = new HttpHeaders();
        headers.set('Content-Type', "application/json; charset=utf-8");
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        return this.http.post(URL2, data, { headers: headers })
            .catch(function (err) {
            // Do messaging and error handling here //TODO: add service to send message for pages
            return Observable.throw(err);
        });
    };
    RestProvider.prototype.getMatch = function (page) {
        var URL3 = this.apiUrl + this.apiFolder + '/getScoresV2.php?user=12&format=json&from=' + page;
        return this.http.get(URL3)
            .catch(function (err) {
            // Do messaging and error handling here //TODO: add service to send message for pages
            return Observable.throw(err);
        });
    };
    RestProvider.prototype.postLogin = function (username, password) {
        var uri = ENV.security.serverUrl + ENV.security.jwtToken;
        var data = {
            username: username,
            password: password
        };
        var headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json');
        return this.http.post(uri, data, { headers: headers })
            .catch(function (err) {
            // Do messaging and error handling here //TODO: add service to send message for pages
            return Observable.throw(err);
        });
    };
    RestProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    };
    RestProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], RestProvider);
    return RestProvider;
}());
export { RestProvider };
//# sourceMappingURL=rest.js.map