import { Component, OnInit } from '@angular/core';
import { ClinicInformationService } from '../clinic-information.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public info:ClinicInformationService) { }

  ngOnInit() {
  }

}
