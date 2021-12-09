import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {first, map, tap} from 'rxjs/operators';
import {iBackendResponse} from '../models/iBackendResponse';


@Injectable({
    providedIn: 'root'
})
export class BackendService {

    constructor(private http: HttpClient) {
    }

    private urlEndPoint = 'http://localhost:8090/';

    callBackEnd(param: any, service: any, json_: boolean = true) {
        let headers: any;
        let contenType = 'text/json';
        // tslint:disable-next-line:triple-equals
        if (json_ != false) {
            contenType = 'application/json';
        }
        headers = new HttpHeaders({
            'Content-Type': contenType,
            Accept: 'application/json'
        });

        // tslint:disable-next-line:triple-equals
        let json = json_ ? JSON.stringify(param) : param;
        console.log(json);
        return this.http.post(this.urlEndPoint + service, json, headers).pipe(
            map(response => response as unknown as any)
        );
    }
    _callBackEnd(param: any, service: any): Promise<iBackendResponse> {
        let headers: any;
        headers = new HttpHeaders({
            'Content-Type': 'text/json',
            Accept: 'application/json'
        });
        let json = '';
        json = JSON.stringify(param);
        console.log(json);
        return this.http.post(this.urlEndPoint + service, json, headers).pipe(
            first(), map(response => response as unknown as any)
        ).toPromise();
    }

    callBackEndNoParam(service: any) {
        return this.http.get(this.urlEndPoint + service).pipe(
            map(response => response as unknown as any)
        );
    }
}
