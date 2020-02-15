var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
        var data = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\r\n  <soap:Body>\r\n    <GetSessions xmlns=\"http://tempuri.org/\">\r\n      <Count>20</Count>\r\n      <page>1</page>\r\n      <CourseID>1</CourseID>\r\n      <CategoryID>0</CategoryID>\r\n      <ItemOrder>0</ItemOrder>\r\n      <Tadvin>0</Tadvin>\r\n      <SearchPhrase></SearchPhrase>\r\n    </GetSessions>\r\n  </soap:Body>\r\n</soap:Envelope>";
        var headers = new HttpHeaders();
        headers.set('Content-Type', "text/xml; charset=utf-8");
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        return this.http.post(URL1, data, { headers: headers })
            .catch(function (err) {
            // Do messaging and error handling here
            return Observable.throw(err);
        });
    };
    RestProvider.prototype.getSession = function (page) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http
                        .get("https://dacis.liara.run/api/session/20/1/1/0/0/0")
                        .map(function (res) { return res; })];
            });
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
        return this.http.get("https://dacis.liara.run/api/session/20/1/1/0/0/0")
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
//# sourceMappingURL=rest-cloud.js.map