import { Component, OnInit } from '@angular/core';
import { ClinicInformationService } from "../clinic-information.service";

@Component({
  selector: 'app-appointment-page',
  templateUrl: './appointment-page.component.html',
  styleUrls: ['./appointment-page.component.css']
})
export class AppointmentPageComponent implements OnInit {

  constructor(public info:ClinicInformationService) { }

  ngOnInit() {
  }

}
