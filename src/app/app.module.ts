import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtByNationOnlyComponent } from './components/art-by-nation-only/art-by-nation-only.component';
import { ArtOnExhibitComponent } from './components/art-on-exhibit/art-on-exhibit.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileDialogComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileDialogComponent,
    FooterComponent,
    ArtOnExhibitComponent,
    ArtByNationOnlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  entryComponents: [ProfileDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
