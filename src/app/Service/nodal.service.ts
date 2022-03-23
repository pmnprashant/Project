import { Injectable } from "@angular/core";


import{HttpClient} from "@angular/common/http";

@Injectable()
export class ViewService
{
    constructor(private http:HttpClient)
    {

    }
    //.net core prjwebapi1 url
    readonly uri="http://localhost:55936/api/stateofficerstudent";
    getStudent()
    {debugger;
        return this.http.get(this.uri);
    }

    getcatbyid(id:number,i:number)
    {
        debugger;
        return this.http.get(this.uri+'/'+id+','+i);
    }
   
}
