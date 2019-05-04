import {Component, OnInit} from '@angular/core';
import {Project} from "../models/project.model";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Component({
    selector: 'app-newproject',
    templateUrl: './newproject.component.html',
    styleUrls: ['./newproject.component.css']
})
export class NewProjectComponent implements OnInit {

    public project: Project;
    public projects: Project[];

    public router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    ngOnInit() {
        this.project = <Project>{};
    }

    guardarProjecto() {
        this.projects = environment.projects;
        this.project.id = this.projects.length;
        this.projects.push({ ...this.project});
        environment.projects = this.projects;

        this.router.navigate(['/projects']);
    }

}
