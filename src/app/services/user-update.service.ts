import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserUpdateService {

  constructor(private http:HttpClient) { }

  public doRegistration(user):Observable<any>{
    return this.http.post("http://localhost:9000/auth/register",user,{responseType:'text' as 'json'});
  }


  public getUser(user_id:User):Observable<any>{
    return this.http.get("http://localhost:9000/user/getone/"+user_id);  
  }
  public updateUser(id,user):Observable<any>{
    return this.http.post("http://localhost:9000/user/update/"+id,user,{responseType:'text' as 'json'});
  }

 public getphoto(id:User):Observable<any>{
  const req = new HttpRequest('GET', 'http://localhost:9000/user/photo/'+id ,{
    reportProgress: true,
    responseType: 'text'
  });
  //return this.http.get("http://localhost:9000/user/photo/"+id);  
  return this.http.request(req);
}





uploadImage(file){ 
    
  //const header  = new HttpHeaders().set('Content-Type', 'multipart/form-data');
    //return this.httpClient.post('http://localhost:9000/auth/upload-image',file, {headers: header});
    const req = new HttpRequest('POST', 'http://localhost:9000/user/upload-image', file, {
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.http.request(req);
  }





 
 }



