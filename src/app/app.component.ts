import { Component } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { ScholarshipService } from './Service/scholarship.service';
import { Scholarship } from './Model/scholarship.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Scholarship';
  application:FormGroup;
  constructor (private fb: FormBuilder,private catservice:ScholarshipService){
  this.application =this.fb.group(
    
    {
    'anumber':new FormControl
  ('',[Validators.required,Validators.maxLength(12)]),
'category':new FormControl
('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
'fathername':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
'mothername':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
'income':new FormControl('',[Validators.required,Validators.pattern('/\-?\d*\.?\d{1,2}/')]),
'institute':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
'presentcourse':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
  'presentcourseyear':new FormControl('',[Validators.required,Validators.pattern('/\-?\d*\.?\d{1,2}/')]), 
  'date':new FormControl('',[Validators.required,Validators.pattern('/\-?\d*\.?\d{1,2}/')]),
  'universityname'  :new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
  'previouscourse':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
  'previouspassingyear':new FormControl('',[Validators.required,Validators.pattern('/\-?\d*\.?\d{1,2}/')]),
  'previouspercentage':new FormControl('',[Validators.required,Validators.pattern('/\-?\d*\.?\d{1,2}/')]),
  ' rnumber':new FormControl('',[Validators.required,Validators.pattern('/\-?\d*\.?\d{1,2}/')]),
  'bname':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
  'pyear':new FormControl('',[Validators.required,Validators.pattern('/\-?\d*\.?\d{1,2}/')]),
  'sscpercentage':new FormControl('',[Validators.required,Validators.pattern('/\-?\d*\.?\d{1,2}/')]),
  'hrollnumber':new FormControl('',[Validators.required,Validators.pattern('/\-?\d*\.?\d{1,2}/')]),
  'hbname':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
  'hpassingyear':new FormControl('',[Validators.required,Validators.pattern('/\-?\d*\.?\d{1,2}/')]),
  'hscpercentage':new FormControl('',[Validators.required,Validators.pattern('/\-?\d*\.?\d{1,2}/')]),
  ' admissionfees':new FormControl('',[Validators.required,Validators.pattern('/\-?\d*\.?\d{1,2}/')]),
  ' tutuionfees':new FormControl('',[Validators.required,Validators.pattern('/\-?\d*\.?\d{1,2}/')]),
  'otherfees':new FormControl('',[Validators.required,Validators.pattern('/\-?\d*\.?\d{1,2}/')]),
  'typeofdisable':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
  'percentageofdisable':new FormControl('',[Validators.required,Validators.pattern('/\-?\d*\.?\d{1,2}/')]),
  'profession':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
  'house':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
  'pin':new FormControl('',[Validators.required,Validators.pattern('/\-?\d*\.?\d{1,2}/')]),
  })
}
 
  scholarship:any={};
  addscholarship(){
    debugger;
    this.scholarship.FatherName=this.application.get('fathername')?.value;
    this.catservice.insertScholarship(this.scholarship).subscribe((data)=>
    {
      console.log(data)
      if(data="success")
      {
        window.alert("Data Added");
      }else{
        window.alert("Data is Not Added");
      }
    }
    )
  }
  
  get category(){
    return this.application.get('category');
  }
  get anumber(){
    return this.application.get('anumber');
  }
  get fathername(){
    return this.application.get('fathername');
  }
  get mothername(){
    return this.application.get('mothername');
  }
  get income(){
    return this.application.get('income');
  }
  get institute(){
    return this.application.get('iinstitute');
  }
  get presentcourse(){
    return this.application.get('presentcourse');
  }
  get presentcourseyear(){
    return this.application.get('presentcourseyear');
  }
  get date(){
    return this.application.get('date');
  }
  get universityname(){
    return this.application.get('universityname');
  }
  get previouscourse(){
    return this.application.get('previouscourse');
  }
  get previouspassingyear(){
    return this.application.get('previouspassingyear');
  }
  get previouspercentage(){
    return this.application.get('previouspassingyear');
  }
  
  get bname(){
    return this.application.get('rbname');
  }
  get pyear(){
    return this.application.get('pyear');
  }
  get sscpercentage(){
    return this.application.get('sscpercentage');
  }
  get hrollnumber(){
    return this.application.get('hrollnumber');
  }
  get hbname(){
    return this.application.get('hbname');
  }
  get hpassingyear(){
    return this.application.get('hpassingyear');
  }
  get hscpercentage(){
    return this.application.get('hscpercentage');
  }
 
  get typeofdisable(){
    return this.application.get('typeofdisable');
  }
  get percentageofdisable(){
    return this.application.get('percentageofdisable');
  }
  get profession(){
    return this.application.get('profession');
  }
  get house(){
    return this.application.get('house');
  }
  get pin(){
    return this.application.get('pin');
  }

}

