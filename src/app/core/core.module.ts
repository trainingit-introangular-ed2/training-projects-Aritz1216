import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {LayoutComponent} from './layout/layout.component';
import {MainComponent} from "./main/main.component";
import {HeaderComponent} from "./header/header.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [HeaderComponent, MainComponent, FooterComponent, LayoutComponent],
    imports: [
        CommonModule, RouterModule, FormsModule
    ],
    exports: [LayoutComponent]
})
export class CoreModule {
}
