import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-demo-signal',
  imports: [],
  templateUrl: './demo-signal.html',
  styleUrl: './demo-signal.css',
})
export class DemoSignal {
  protected readonly count = signal(0);

  incrementar(){
    this.count.update(i => i + 1);
  }

}
