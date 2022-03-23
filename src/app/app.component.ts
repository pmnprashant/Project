import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators,AbstractControl} from '@angular/forms';
import { ScholarshipService } from './Service/scholarship.service';
import { Scholarship } from './Model/scholarship.model';
import { StateService } from './Service/state.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Scholarship';
  application:FormGroup;
  constructor (private fb: FormBuilder,private catservice:ScholarshipService,private Sservice:StateService){
  this.application =this.fb.group(
    
    {
    'anumber':new FormControl
  ('',[Validators.required,Validators.maxLength(12)]),
  'religion':new FormControl
  ('',Validators.required),

'category':new FormControl
('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
'fathername':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
'mothername':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
'income':new FormControl('',Validators.required),
'institute':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
'presentcourse':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
  'presentcourseyear':new FormControl('',Validators.required), 
  'date':new FormControl('',Validators.required),
  'universityname':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
  'previouscourse':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
  'previouspassingyear':new FormControl('',Validators.required),
  'previouspercentage':new FormControl('',Validators.required),
  'rnumber':new FormControl('',Validators.required),
  'bname':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
  'pyear':new FormControl('',Validators.required),
  'sscpercentage':new FormControl('',Validators.required),
  'hrollnumber':new FormControl('',Validators.required),
  'hbname':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
  'hpassingyear':new FormControl('',Validators.required),
  'hscpercentage':new FormControl('',Validators.required),
  'admissionfees':new FormControl('',Validators.required),
  'tutuionfees':new FormControl('',Validators.required),
  'otherfees':new FormControl('',Validators.required),
  'disable':new FormControl('',Validators.required),
  'status':new FormControl('',Validators.required),
  'profession':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
  'house':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
  'pin':new FormControl('',Validators.required),
  'mode':new FormControl('',Validators.required),
  'state':new FormControl('',Validators.required),
  'district':new FormControl('',Validators.required),
 'block': new FormControl('',Validators.required),
 'scheme': new FormControl('',Validators.required),
 'typeofdisable': new FormControl('',Validators.required),
 'percentageofdisable': new FormControl('',Validators.required)
 
  })
}
stateinfo: any;

featchState()
{
  debugger;
  this.Sservice.getState().subscribe((data)=>{this.stateinfo=data;});
}

ngOnInit(): void {
  debugger;
  this.featchState();
}

districtInfo:any={};
stateId?:number;
onChangeState(event:Event) {

  this.stateId =parseInt((event.target as HTMLInputElement).value);
    this.Sservice.getDistrict(this.stateId).subscribe((data)=>this.districtInfo=data);
    debugger;

}

 
  scholarship:any={};
  addscholarship(){
    debugger;
    this.scholarship.Religion =this.application.get('religion')?.value;
    this.scholarship.ModeStudy =this.application.get('mode')?.value;
    this.scholarship.FatherName=this.application.get('fathername')?.value;
    this.scholarship.StudentAadhar=this.application.get('anumber')?.value;
    this.scholarship.Community=this.application.get('category')?.value;
    this.scholarship.MotherName=this.application.get('mothername')?.value;
    this.scholarship.FamilyIncome=this.application.get('income')?.value;
    this.scholarship.InstituteName=this.application.get('institute')?.value;
    this.scholarship.PresentCourse=this.application.get('presentcourse')?.value;
    this.scholarship.PresentCourseYear=this.application.get('presentcourseyear')?.value;
    this.scholarship.StartDate=this.application.get('date')?.value;
    this.scholarship.UniversityName=this.application.get('universityname')?.value;
    this.scholarship.PreviousCourse=this.application.get('previouscourse')?.value;
    this.scholarship.PreviousPassingYear=this.application.get('previouspassingyear')?.value;
    this.scholarship.AcademicPercentage=this.application.get('previouspercentage')?.value;
    this.scholarship.TenthRollNumber=this.application.get('rnumber')?.value;
    this.scholarship.TenthBoardName=this.application.get('bname')?.value;
    this.scholarship.TenthPassingYear =this.application.get('pyear')?.value;
    this.scholarship.Percentage=this.application.get('sscpercentage')?.value;
    this.scholarship.TwelvethRollNumber=this.application.get('hrollnumber')?.value;
    this.scholarship.TwelvethBoardName=this.application.get('hbname')?.value;
    this.scholarship.TwelvethpassingYear=this.application.get('hpassingyear')?.value;
    this.scholarship.TwelvethPercentage=this.application.get('hscpercentage')?.value;
    this.scholarship.Admissionfee=this.application.get('admissionfees')?.value;
    this.scholarship.Tutuionfee=this.application.get('tutuionfees')?.value;
    this.scholarship.Otherfee=this.application.get('otherfees')?.value;
    this.scholarship.IsDisabled=this.application.get('disable')?.value;
    this.scholarship.TypeDisability=this.application.get('typeofdisable')?.value;
    this.scholarship.PercentageDisability=this.application.get('percentageofdisable')?.value;
    this.scholarship.StateId=this.application.get('state')?.value;
    this.scholarship.MaritalStatus=this.application.get('status')?.value;
    this.scholarship.HouseNumber=this.application.get('house')?.value;
    this.scholarship.Pincode=this.application.get('pin')?.value;
    this.scholarship.DistrictId=this.application.get('district')?.value;
    this.scholarship.Block=this.application.get('block')?.value;
    this.scholarship.Scheme=this.application.get('scheme')?.value;

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
  
  resetscholarship(){
    this.application.reset();
  }
 
  get scheme(){
    return this.application.get('scheme');
  }
  get typeofdisable(){
    return this.application.get('typeofdisable');
  }
  get percentageofdisable(){
    return this.application.get('percentageofdisable');
  }
  get status(){
    return this.application.get('status');
  }
  get state(){
    return this.application.get('state');
  }
  get district(){
    return this.application.get('district');

  }
  get block(){
    return this.application.get('block');

  }
  get disable(){
    return this.application.get('disable');
  }
  get mode(){
    return this.application.get('mode');
  }
  
  get category(){
    return this.application.get('category');
  }
  get anumber(){
    return this.application.get('anumber');
  }
  get religion(){
    return this.application.get('religion');
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
    return this.application.get('previouspercentage');
  }
  get admissionfees(){
    return this.application.get('admissionfees');
  }
  get tutuionfees(){
    return this.application.get('tutuionfees');
  }
  get otherfees(){
    return this.application.get('otherfees');
  }
  get rnumber(){
    return this.application.get('rnumber');
  }
  
  get bname(){
    return this.application.get('bname');
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

