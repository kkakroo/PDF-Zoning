import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfFileService {

  constructor(private httpClient: HttpClient) { }

  getPdfFile(id: string): Observable<any>{
    var body = {
      key : id
    };
    return this.httpClient.post<any>('http://localhost:9874/highlight',body);
  }
}
