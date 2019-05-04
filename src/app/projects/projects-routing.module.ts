import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectsComponent} from "./projects/projects.component";
import {NewProjectComponent} from "./newproject/newproject.component";
import {ViewerProjectComponent} from "./viewerproject/viewerproject.component";

const routes: Routes = [
    {
        path: '',
        component: ProjectsComponent
    },
    {
        path: 'new',
        component: NewProjectComponent
    },
    {
        path: ':id',
        component: ViewerProjectComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsRoutingModule {
}
