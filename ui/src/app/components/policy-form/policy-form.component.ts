import { Component, OnInit, ViewChild, ElementRef, ContentChild } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { NgxExtendedPdfViewerService, NgxExtendedPdfViewerComponent } from 'ngx-extended-pdf-viewer';
import { PdfFileService } from '../../services/pdf-file.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-policy-form',
  templateUrl: './policy-form.component.html',
  styleUrls: ['./policy-form.component.css'],
  providers: [NgxExtendedPdfViewerComponent]
})
export class PolicyFormComponent implements OnInit {
  firstName: any = '';
  plans: any;
  page:number=1;
  globalPage:number=1;
  public filePathAndName = "http://0.0.0.0:8000/RealForm.pdf";
  constructor(private pdfFileService: PdfFileService,private httpClient:HttpClient) {
    this.plans = [
      { label: '1 Year', value: null },
      { label: '2 Year', value: null },
      { label: '3 Year', value: null },
      { label: '4 Year', value: null }
    ];
  }

  ngOnInit() {
    this.filePathAndName = "http://0.0.0.0:8000/RealForm.pdf";
    // this.filePathAndName = "../../../assets/RealForm_output.pdf";
  }

  public onFocusEvent(id: string) {
    this.pdfFileService.getPdfFile(id).subscribe((url) => {
      this.filePathAndName = url;
      let qs= this.parseQueryString(url);
      this.globalPage=Number(qs['page']);
    });
  }
  // parses the query string
    parseQueryString(queryString?: string): any {
        // if the query string is NULL or undefined
        if (!queryString) {
            queryString = window.location.search.substring(1);
        }

        const params = {};

        const queries = queryString.split("&");

        queries.forEach((indexQuery: string) => {
            const indexPair = indexQuery.split("=");

            const queryKey = decodeURIComponent(indexPair[0]);
            const queryValue = decodeURIComponent(indexPair.length > 1 ? indexPair[1] : "");

            params[queryKey] = queryValue;
        });

        return params;
    }

    public onPageLoaded(){
      this.page=this.globalPage;
    }
    public onPageRendered(){
      this.page=this.globalPage;
    }


}