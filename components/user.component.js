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
var bungalow_service_1 = require("../services/bungalow.service");
//import {RegionService} from '../services/regions.service';
var UserComponent = (function () {
    //constructor(private bungalowService: BungalowService,private regionService: RegionService){
    function UserComponent(bungalowService) {
        var _this = this;
        this.bungalowService = bungalowService;
        this.name = 'SriLanka';
        this.showBungalows = false;
        this.showRegions = false;
        this.bungalowSelect = 'please select a bungalow...';
        this.bungalowService.getRegions().subscribe(function (regions) {
            _this.regions = regions;
        });
        this.bungalowService.getBungalows().subscribe(function (bungalows) {
            _this.bungalows = bungalows;
        });
    }
    UserComponent.prototype.toggleBungalow = function () {
        if (this.showBungalows == false) {
            this.showBungalows = true;
        }
        else {
            this.showBungalows = false;
        }
    };
    UserComponent.prototype.toggleRegion = function () {
        if (this.showRegions == false) {
            this.showRegions = true;
        }
        else {
            this.showRegions = false;
        }
    };
    /*onChange(bungalow: Bungalows) {
      this.bungalow = bungalow;
  
    }*/
    UserComponent.prototype.onChange = function (bungalow) {
        var _this = this;
        this.bungalowService.getBungalowsByID(bungalow.id).subscribe(function (bungalow) { return _this.bungalow = bungalow; });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'user',
        templateUrl: "user.component.html",
        //providers:[BungalowService,RegionService],
        providers: [bungalow_service_1.BungalowService]
    }),
    __metadata("design:paramtypes", [bungalow_service_1.BungalowService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map