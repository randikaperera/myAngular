import {Injectable} from '@angular/core';
import {Http, BaseRequestOptions, Headers,} from '@angular/http';
import 'rxjs/add/operator/map';
//import {HttpHeaders} from '@angular/common/http';


@Injectable()
export class BungalowService{
constructor(private http:Http){
    console.log('HELLO RANDIKA PERERA');
}
getRegions(){
   // console.log('HELLO RANDIKA PERERA in');
    return this.http.get('http://localhost:9001/api/regionAPI/regions')
    .map(res=>res.json());
}

createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic cmFuZGlrYToxMjM0'); 
  }
  getBungalows(){
    return this.http.get('http://localhost:9001/api/bungalowAPI/bungalows')
    .map(res=>res.json());
  }


getBungalowsByID(id:String){
   //console.log('HELLO RANDIKA PERERA in');

  // let headers = new Headers({ 'Authentication': 'Basic cmFuZGlrYToxMjM0'});
 // let headers = new Headers();
 // this.createAuthorizationHeader(headers);
  //  return this.http.get('http://localhost:9001/api/bungalowAPI/bungalows',{headers:headers})
 // let url = new URL('api/v1/something/{id}/etc/{name}/and/so/on/'+id);
  return this.http.get('http://localhost:9001/api/bungalowAPI/bungalows/'+id)
   .map(res=>res.json());
  
  //return this.http.get('http://localhost:9001/api/bungalowAPI/bungalows')
  //  .map(res=>res.json());

    
}
/*
getBungalowsById(String: id){
    return this.http.get('http://localhost:9001/api/bungalowAPI/bungalows')
    .map(res=>res.json());
}
*/
private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html instead of application/json
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}