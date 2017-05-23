import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,ActivatedRouteSnapshot } from '@angular/router';
import { Http, Jsonp,Response  } from '@angular/http';
import { Observable } from 'rxjs/Rx';

declare var $:any;
declare var window:any;

@Injectable()
export class TreatmentsDataResolverService implements Resolve<any> {

  constructor(private jsonp:Jsonp) { }
  resolve(){
    return new Promise((resolve,reject)=>{
      resolve();
    });
  }
}
