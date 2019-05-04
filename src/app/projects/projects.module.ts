import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectsComponent} from './projects/projects.component';
import {ProjectsRoutingModule} from "./projects-routing.module";
import {ViewerProjectComponent} from "./viewerproject/viewerproject.component";
import {NewProjectComponent} from './newproject/newproject.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [ProjectsComponent, ViewerProjectComponent, NewProjectComponent],
    imports: [
        CommonModule,
        ProjectsRoutingModule,
        FormsModule
    ],
    exports: [ProjectsComponent]
})
export class ProjectsModule {
}
