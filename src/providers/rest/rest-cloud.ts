import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Response } from '@angular/http';
import { ENV } from '../../env';
import { SessionBody } from '../../models/session';

@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  apiUrl = ENV.api.baseUrl;
  apiFolder = '';

  getStories(page): Observable<any[]> {
    let URL1 = this.apiUrl + this.apiFolder;
    //'/getUsersStory.php?token=asdfadsfklajdhi849hjbsvdsv&page=' + page;
    let data = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\r\n  <soap:Body>\r\n    <GetSessions xmlns=\"http://tempuri.org/\">\r\n      <Count>20</Count>\r\n      <page>1</page>\r\n      <CourseID>1</CourseID>\r\n      <CategoryID>0</CategoryID>\r\n      <ItemOrder>0</ItemOrder>\r\n      <Tadvin>0</Tadvin>\r\n      <SearchPhrase></SearchPhrase>\r\n    </GetSessions>\r\n  </soap:Body>\r\n</soap:Envelope>"

    let headers = new HttpHeaders();
    headers.set('Content-Type', "text/xml; charset=utf-8");
    headers.set('Access-Control-Allow-Origin' , '*');
    headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

    return this.http.post(URL1,data,{headers:headers})
      //.catch(this.handleError);
      .catch((err) => {
                
        // Do messaging and error handling here
       
        return Observable.throw(err)
    })
  }

  public async getSession(page){ 
    return this.http
        .get("https://dacis.liara.run/api/session/20/1/1/0/0/0")
        .map(res=>res as SessionBody);
}

  getUsers(page): Observable<any[]> {
    let URL1 = this.apiUrl + this.apiFolder + '/getUsers.php?token=asdfadsfklajdhi849hjbsvdsv&page=' + page;

    return this.http.get(URL1)
      //.catch(this.handleError);
      .catch((err) => {
                
        // Do messaging and error handling here //TODO: add service to send message for pages
       
        return Observable.throw(err)
    })
  }

  getPosts(page): Observable<any[]> {
    let URL2 = this.apiUrl + this.apiFolder ;
    //'/Sessions/?token=asdfadsfklajdhi849hjbsvdsv&page=' + page;

    return this.http.get("https://dacis.liara.run/api/session/20/1/1/0/0/0")
      //.catch(this.handleError);
      .catch((err) => {
                
        // Do messaging and error handling here //TODO: add service to send message for pages
       
        return Observable.throw(err)
    })
  }

  getMatch(page): Observable<any[]> {
    let URL3 = this.apiUrl + this.apiFolder + '/getScoresV2.php?user=12&format=json&from=' + page;

    return this.http.get(URL3)
      //.catch(this.handleError);
      .catch((err) => {
                
        // Do messaging and error handling here //TODO: add service to send message for pages
       
        return Observable.throw(err)
    })
  }

  postLogin(username, password) {
    let uri = ENV.security.serverUrl + ENV.security.jwtToken;

    let data = {
      username: username,
      password: password
    };

    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');

    return this.http.post(uri, data, { headers: headers })
      //.catch(this.handleError);
      .catch((err) => {
                
        // Do messaging and error handling here //TODO: add service to send message for pages
       
        return Observable.throw(err)
    })
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
