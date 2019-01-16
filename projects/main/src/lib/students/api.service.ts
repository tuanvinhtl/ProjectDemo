import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class apiService {

    constructor(private http: HttpClient) { }

    public baseUrl: string = 'http://59e877d5a9779400125a8d95.mockapi.io/api/entity/Employee'

    public getData(): Observable<any> {
        return this.http.get(this.baseUrl)
    }
}
