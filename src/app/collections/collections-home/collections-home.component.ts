/** @format */

import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-collections-home",
    templateUrl: "./collections-home.component.html",
    styleUrls: ["./collections-home.component.css"],
})
export class CollectionsHomeComponent implements OnInit {
    data = [
        { name: "Akash", age: 22, job: "Designer", employed: false },
        { name: "Gitesh", age: 23, job: "Engineer", employed: false },
        { name: "Mahesh", age: 25, job: "Engineer", employed: true },
    ];
    headers = [
        { key: "name", label: "Name" },
        { key: "age", label: "Age" },
        { key: "job", label: "Job" },
        { key: "employed", label: "Has a Job?" },
    ];

    constructor() {}

    ngOnInit() {}
}
