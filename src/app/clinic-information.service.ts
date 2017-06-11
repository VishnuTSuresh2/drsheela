import { Injectable } from '@angular/core';

@Injectable()
export class ClinicInformationService {
  phone:string;
  email:string;
  address:string;
  facebook:string;
  constructor() {
    this.phone="+91 94976 79597";
    this.email="sheilaanilkumar@gmail.com";
    this.address="Kompara House, 48/1567-A, Deepam Road, Ponnurunni East, Vyttila, Kochi, Kerala 682019, India";
    this.facebook="https://www.facebook.com/sheela.anilkumar.3";
  }

}
