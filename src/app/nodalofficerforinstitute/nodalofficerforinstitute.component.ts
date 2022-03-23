import { Component, OnInit } from '@angular/core';
import { InstituteService } from '../Service/institute.service'; 
import { Institutedetails } from '../Model/Instituteapplication.model'; 
@Component({
  selector: 'app-nodalofficerforinstitute',
  templateUrl: './nodalofficerforinstitute.component.html',
  styleUrls: ['./nodalofficerforinstitute.component.css']
})
export class NodalofficerforinstituteComponent implements OnInit {

  constructor(private catservice:InstituteService){}
  ngOnInit(): void {
    this.fetchStudent();
    
  }  instituteinfo:any={};
  fetchStudent(){
    debugger;
    this.catservice.getStudent().subscribe((data:any)=>{this.instituteinfo=data;
      console.table(this.instituteinfo=data)})
  }
  
  Approve(id:number)
  {
    debugger;
    this.ngOnInit();
    let i=1;
    this.catservice.getcatbyid(id,i).subscribe((data)=>
    {console.log(data)
    if(data="Success")
    {
      window.alert("Data Upload");
    }
    else
    {
      window.alert("Data is not Upload");
    }
    }
    );
  }
  Reject(id:number)
  {
    debugger;
    this.ngOnInit();
    let i=0;
    this.catservice.getcatbyid(id,i).subscribe((data)=>
    {console.log(data)
    if(data="Success")
    {
      window.alert("Data Upload");
    }
    else
    {
      window.alert("Data is not Upload");
    }
    }
    );
  }

}
