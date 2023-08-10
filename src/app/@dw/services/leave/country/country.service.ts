import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CountryService {
    constructor(
        private http: HttpClient,
    ) {}

    // 나라 목록 가져오기
    getCountryList(){
        return this.http.get('/api/v1/nsmarts/getCountryList')
    }
}
