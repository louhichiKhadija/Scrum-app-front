import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  httpClient: HttpClient) {}


  register(user) {
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this.httpClient.post('http://localhost:9000/auth/register', user, {headers: header, reportProgress: true,
    responseType: 'text'} );  
  }


  uploadImage(file){ 
    
  //const header  = new HttpHeaders().set('Content-Type', 'multipart/form-data');
    //return this.httpClient.post('http://localhost:9000/auth/upload-image',file, {headers: header});
    const req = new HttpRequest('POST', 'http://localhost:9000/auth/upload-image', file, {
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.httpClient.request(req);
  }
}
