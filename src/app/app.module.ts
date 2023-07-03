import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroHeaderComponent } from './components/hero-header/hero-header.component';
import { ClientsComponent } from './components/clients/clients.component';
import { TimelineComponent } from './components/timeline/timeline.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeroHeaderComponent, ClientsComponent, TimelineComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
