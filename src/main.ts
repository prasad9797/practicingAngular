import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppComponent } from './app/app/app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppComponent],
  template: `
    <app-app/>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App,{
  providers: [
    importProvidersFrom(CommonModule)
  ]
});
