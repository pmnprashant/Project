import { Injectable } from "@angular/core";



import{HttpClient, HttpErrorResponse} from "@angular/common/http";



@Injectable()

export class StateService

{

    constructor(private http:HttpClient)

    {



    }

    readonly uri="http://localhost:55936/api/";

    getState()

    {

        debugger;

        return this.http.get(`${this.uri}States`);

    }



    getDistrict(stateId: number) {

        debugger;

        return this.http.get(`${this.uri}district/${stateId}`);

      }

}