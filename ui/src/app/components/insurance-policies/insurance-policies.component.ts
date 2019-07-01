import { Component, OnInit } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';

@Component({
  selector: 'app-insurance-policies',
  templateUrl: './insurance-policies.component.html',
  styleUrls: ['./insurance-policies.component.css']
})
export class InsurancePoliciesComponent implements OnInit {

 policy1 =  [];
    policy2 =  [];
    policy3 =  [];
    policy4 =  [];

    totalRecords: number;

    cols: any[];

    loading: boolean;
    /* constructor(private carService: CarService) { } */
    constructor() { }

    ngOnInit() {
        //datasource imitation
        /* this.carService.getCarsLarge().then(cars => {
            this.datasource = cars;
            this.totalRecords = this.datasource.length;
        }); */

        this.cols = [
            { field: 'policyNumber', header: 'Policy Number' },
            { field: 'status', header: 'Status' },
            { field: 'customerNumber', header: 'Customer Number' },
            { field: 'reference', header: 'Reference' }
        ];
        this.policy1 = [
          {policyNumber: 123, status: 'OPEN', customerNumber: 1017, reference: 'ABC'},
          {policyNumber: 456, status: 'OPEN', customerNumber: 1018, reference: 'DEF'}
        ]
        this.policy2 = [
          {policyNumber: 784, status: 'OPEN', customerNumber: 1019, reference: 'QWE'},
          {policyNumber: 235, status: 'OPEN', customerNumber: 1020, reference: 'TYU'}
        ]
        this.policy3 = [
          {policyNumber: 789, status: 'OPEN', customerNumber: 1021, reference: 'VFG'},
          {policyNumber: 657, status: 'OPEN', customerNumber: 1022, reference: 'RTY'}
        ]
        this.policy4 = [
          {policyNumber: 159, status: 'OPEN', customerNumber: 1023, reference: 'UYT'},
          {policyNumber: 753, status: 'OPEN', customerNumber: 1024, reference: 'HJK'}
        ]

        this.loading = false;
    }

    /* loadCarsLazy(event: LazyLoadEvent) {
        this.loading = true;

        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

        //imitate db connection over a network
        setTimeout(() => {
            if (this.datasource) {
                this.cars = this.datasource.slice(event.first, (event.first + event.rows));
                this.loading = false;
            }
        }, 1000);
    } */
    
  
}
