import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-treatments-page',
  templateUrl: './treatments-page.component.html',
  styleUrls: ['./treatments-page.component.css']
})
export class TreatmentsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onLoad(){
    let obj=$(".treatments-page-content").get(0);
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }

}
