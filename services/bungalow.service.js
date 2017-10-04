"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
//import {HttpHeaders} from '@angular/common/http';
var BungalowService = (function () {
    function BungalowService(http) {
        this.http = http;
        console.log('HELLO RANDIKA PERERA');
    }
    BungalowService.prototype.getRegions = function () {
        // console.log('HELLO RANDIKA PERERA in');
        return this.http.get('http://localhost:9001/api/regionAPI/regions')
            .map(function (res) { return res.json(); });
    };
    BungalowService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Basic cmFuZGlrYToxMjM0');
    };
    BungalowService.prototype.getBungalows = function () {
        return this.http.get('http://localhost:9001/api/bungalowAPI/bungalows')
            .map(function (res) { return res.json(); });
    };
    BungalowService.prototype.getBungalowsByID = function (id) {
        //console.log('HELLO RANDIKA PERERA in');
        // let headers = new Headers({ 'Authentication': 'Basic cmFuZGlrYToxMjM0'});
        // let headers = new Headers();
        // this.createAuthorizationHeader(headers);
        //  return this.http.get('http://localhost:9001/api/bungalowAPI/bungalows',{headers:headers})
        // let url = new URL('api/v1/something/{id}/etc/{name}/and/so/on/'+id);
        return this.http.get('http://localhost:9001/api/bungalowAPI/bungalows/' + id)
            .map(function (res) { return res.json(); });
        //return this.http.get('http://localhost:9001/api/bungalowAPI/bungalows')
        //  .map(res=>res.json());
    };
    /*
    getBungalowsById(String: id){
        return this.http.get('http://localhost:9001/api/bungalowAPI/bungalows')
        .map(res=>res.json());
    }
    */
    BungalowService.prototype.getHeaders = function () {
        // I included these headers because otherwise FireFox
        // will request text/html instead of application/json
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    return BungalowService;
}());
BungalowService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BungalowService);
exports.BungalowService = BungalowService;
//# sourceMappingURL=bungalow.service.js.map