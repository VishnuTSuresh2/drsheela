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
        "domain": "LIVER COMPLAINTS, KIDNEY & INTESTINE", 
        "treatments": [
          "Bladder Problems",
          "Cholecystitis Gallstones",
          "Chronic Appendicitis",
          "Excessive Protein in Urine",
          "Fissure",
          "Fistula",
          "Intestinal Colic",
          "Jaundice",
          "Kidney Stone",
          "Liver Cirrhosis",
          "Liver Cyst & Calcification",
          "Piles",
          "Urinary Incontinence",
          "Urinary Tract Infections",
          "Vomiting"
          ]
      }, {
        "domain": "WOMEN HEALTH CONDITIONS", 
        "treatments": [
          "Infertility",
          "Amenorrhea",
          "Endometriosis",
          "Fallopian Tube Complaints",
          "Gynaec Sacroiliac Complaints",
          "Irregular Menstruation",
          "Leucorrhoea",
          "Menopausal Disorders",
          "Menstrual Cramps",
          "Ovarian Cyst",
          "PCOS",
          "Uterine Fibroid"
        ]
      }, {
        "domain": "RESPIRATORY", 
        "treatments": [
          "Allergic Rhinitis",
          "Asthma",
          "Bronchitis",
          "Cough",
          "Pulmonary Respiratory Diseases",
          "Voice Hoarseness",
          "COPD",
          "Coryza",
          "Dyspnoea"
        ]

      }, {
        "domain": "STOMACH DISORDERS", 
        "treatments": [
          "Acidity",
          "Constipation",
          "Diarrhoea",
          "Food Poisoning",
          "IBS",
          "Ulcers",
          "Gastritis",
          "Gastralgia",
          "Hyperacidity",
          "Heartburn",
          "Dyspepsia",
          "Colic",
          "Crohn's Disease"
        ]
      }, {
        "domain": "HAIR",
        "treatments": [
          "Hair Fall",
          "Premature Graying",
          "Dandruff"
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
          "Worm Troubles",
          "Anaemia",
          "Abdominal Colic",
          "Digestive Problems",
          "Sleep Disorders",
          "Allergic Sneezing",
          "Dyspnoea, cold, cough, fever",
          "Bronchial catarrh, sneezing"
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
          "Mitral & Aortic Regurgitation",
          "Myocardial Infarction",
          "Myocarditis, Endocarditis & Pericarditis",
          "Rheumatic Endocarditis",
          "After Bypass Management"
        ]
      },
      {
        "domain": "LIFESTYLE DISORDERS",
        "treatments": [
          "Diabetes",
          "Sleep Disorders - a) Insomnia",
          "Weight Loss",
        ]
      },
      {
        "domain": "ORTHOPAEDIC",
        "treatments": [
          "Ankylosing Spondylitis",
          "Back Pain",
          "Bone Health",
          "Cramps & Numbness in Muscles",
          "Disc Prolapse",
          "Joint Pains",
          "Pain between Ribs",
          "Sciatica"
        ]
      },
      {
        "domain": "OTHER SPECIAL CONDITIONS",
        "treatments": [
          "All Contagious Diseases - Conjunctivitis, Chickenpox, Dengue Fever, Measles, Diphtheria, H1N1",
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
