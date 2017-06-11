import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-treatments-page',
  templateUrl: './treatments-page.component.html',
  styleUrls: ['./treatments-page.component.css']
})
export class TreatmentsPageComponent implements OnInit {
  treatments;
  constructor() {

    this.treatments = [
      {
        "domain": "HAIR",
        "treatments": [
          "Hair Fall",
          "Premature Graying"
        ]
      },
      {
        "domain": "CHILD HEALTH CONDITIONS",
        "treatments": [
          "ADHD",
          "Bed Wetting",
          "Fever",
          "Influenza",
          "Teething Problems",
          "Tonsillitis",
          "UTI",
          "Worm Troubles"
        ]
      },
      {
        "domain": "BRAIN",
        "treatments": [
          "After Stroke Management",
          "Alzheimier’s Disease",
          "Memory Problems",
          "Migraine",
          "Vertigo"
        ]
      },
      {
        "domain": "ENT",
        "treatments": [
          "Ear Balancing Problems",
          "Ear Polyp",
          "Illness of Larynx",
          "Nasal Polyp",
          "Otalgia",
          "Sinusitis",
          "Tonsilitis"
        ]
      },
      {
        "domain": "CARDIAC",
        "treatments": [
          "Anginous Condition of the Heart",
          "Cardiac Asthma",
          "Hyper Tension (High BP)",
          "Fatty Heart",
          "Mitral & Lortic Regurgitation",
          "Myocardial Infarction",
          "Myocarditis, Endocarditis & Pericarditis"
        ]
      },
      {
        "domain": "LIFESTYLE DISORDERS",
        "treatments": [
          "Diabetes",
          "Sleep Disorders - a) Insomnia",
          "Weight Loss"
        ]
      },
      {
        "domain": "ORTHOPAEDIC",
        "treatments": [
          "Ankylosing Spondylitis",
          "Back Pain",
          "Bone Health",
          "Cramps & Numbness in Muscles",
          "Disk Prolapse",
          "Joint Pains",
          "Pain Between Ribs",
          "Sciatica"
        ]
      },
      {
        "domain": "OTHER SPECIAL CONDITIONS",
        "treatments": [
          "All Contagious Diseases - Conjunctivitis, Chickenpox, Dengue Fever, Measles",
          "Anaemia",
          "Hernia",
          "Hyper Hydrosis",
          "Hyper Thyrodism",
          "Tooth Ache",
          "Uric Acid",
          "Varicose Vein"
        ]
      }
    ];
  }

  ngOnInit() {
  }
  onLoad() {
    let obj = $(".treatments-page-content").get(0);
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }

}
