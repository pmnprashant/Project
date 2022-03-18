import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Scholarship } from "src/app/Model/scholarship.model";

@Injectable()
export class ScholarshipService
{

    constructor(private http:HttpClient)
    {

    }
  //.net core prjwebapi1 url
    readonly uri="http://localhost:50685/api/Scholarships";

  

    //Post
    
    insertScholarship(cat:Scholarship)
    {
      debugger;
    
       return this.http.post(this.uri,cat,{responseType: 'text'})
    }
}