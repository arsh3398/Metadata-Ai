import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroHeaderComponent } from './components/hero-header/hero-header.component';
import { ClientsComponent } from './components/clients/clients.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { FeaturesComponent } from './components/features/features.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { InformationSectionComponent } from './components/information-section/information-section.component';
import { SlineInDirective } from './Directives/sline-in.directive';
import { SocialpostsComponent } from './components/socialposts/socialposts.component';
import { WorldmapComponent } from './components/worldmap/worldmap.component';
import { IntegrationComponent } from './components/integration/integration.component';
import { DemoComponent } from './components/demo/demo.component';
import { BannerComponent } from './components/banner/banner.component';
import { CustomerStoryComponent } from './components/customer-story/customer-story.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CareerComponent } from './components/career/career.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './components/slider/slider.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [AppComponent, HeaderComponent, HeroHeaderComponent, ClientsComponent, TimelineComponent, FeaturesComponent, ReviewsComponent, InformationSectionComponent, SlineInDirective, SocialpostsComponent, WorldmapComponent, IntegrationComponent, DemoComponent, BannerComponent, CustomerStoryComponent, FooterComponent, NavbarComponent, AboutUsComponent, ContactUsComponent, CareerComponent, HomeComponent, SliderComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,ReactiveFormsModule],
  providers: [
    {provide : LocationStrategy , useClass: HashLocationStrategy}
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
