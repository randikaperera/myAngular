import { Component } from '@angular/core';
import { BungalowService } from '../services/bungalow.service';
import { FormsModule } from '@angular/forms';
//import {RegionService} from '../services/regions.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: `user.component.html`,
  //providers:[BungalowService,RegionService],
  providers: [BungalowService]
})

export class UserComponent {
  name: string;
  bungalows: Bungalows[];
  regions: Regions[];
  showBungalows: boolean;
  showRegions: boolean;
  bungalowSelect: string;
  bungalow: Bungalows;

  //constructor(private bungalowService: BungalowService,private regionService: RegionService){
  constructor(private bungalowService: BungalowService) {
    this.name = 'SriLanka';
    this.showBungalows = false;
    this.showRegions = false;
    this.bungalowSelect = 'please select a bungalow...';

    this.bungalowService.getRegions().subscribe(regions => {
      this.regions = regions;
    });
    this.bungalowService.getBungalows().subscribe(bungalows => {
      this.bungalows = bungalows;

    });

  }

  toggleBungalow() {
    if (this.showBungalows == false) {
      this.showBungalows = true;
    }
    else {
      this.showBungalows = false;
    }
  }
  toggleRegion() {
    if (this.showRegions == false) {
      this.showRegions = true;
    }
    else {
      this.showRegions = false;
    }
  }
  /*onChange(bungalow: Bungalows) {
    this.bungalow = bungalow;

  }*/
  onChange(bungalow: Bungalows) {
this.bungalowService.getBungalowsByID(bungalow.id).subscribe(bungalow=>this.bungalow=bungalow);
  }
}


interface Bungalows {
  id: string;
  name: string;
  regionId: string;
  code: string;
  rate: string;
  address: string;
  contactNumber: string;
  bungalowImageURL: string;
  maximumOccupancy: string;


}
interface Regions {
  id: string;
  name: string;
}
