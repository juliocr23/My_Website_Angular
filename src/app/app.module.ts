import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { BlogComponent } from './blog/blog.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ProjectComponent } from './project/project.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    BlogComponent,
    EducationComponent,
    FooterComponent,
    CopyrightComponent,
    ProjectComponent,
    ProjectPageComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    ButtonModule
  
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
