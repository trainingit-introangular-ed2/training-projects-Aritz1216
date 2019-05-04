import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Project} from "../models/project.model";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-viewerproject',
    templateUrl: './viewerproject.component.html',
    styleUrls: ['./viewerproject.component.css']
})
export class ViewerProjectComponent implements OnInit {

    public projects: Project[];
    public currentProject: Project;
    public currentId: number;

    constructor(route: ActivatedRoute) {
        this.currentId = +route.snapshot.params['id'];
    }

    ngOnInit() {
        this.projects = environment.projects;
        this.currentProject = this.projects.find( p => p.id === this.currentId);
    }

}
