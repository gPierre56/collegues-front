import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button class =alert-danger>test</button>
    <p>
      <ngb-alert [dismissible]="false">
        <strong>Warning!</strong> Better check yourself, you're not looking too good.
      </ngb-alert>
    </p>
  `,
  styles: []
})


export class AppComponent {
  title = 'collegues-front';
}
