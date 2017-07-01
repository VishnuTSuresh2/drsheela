import { Component, OnInit } from '@angular/core';
import { ClinicInformationService } from "../clinic-information.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public info:ClinicInformationService) { }

  ngOnInit() {
  }

}
