import { Component, OnInit } from '@angular/core';
import { ViewService } from '../Service/nodal.service'; 
import { Scholarship } from '../Model/scholarship.model';

@Component({
  selector: 'app-statenodalofficer',
  templateUrl: './statenodalofficer.component.html',
  styleUrls: ['./statenodalofficer.component.css']
})
export class StatenodalofficerComponent implements OnInit {

  constructor(private catservice:ViewService){}
  ngOnInit(): void {
    this.fetchStudent();
    
  }
  categoryinfo:any={};
  fetchStudent(){
    debugger;
    this.catservice.getStudent().subscribe((data:any)=>{this.categoryinfo=data;
      console.table(this.categoryinfo=data)})
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
