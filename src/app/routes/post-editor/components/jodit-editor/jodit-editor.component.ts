import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { JoditAngularComponent } from 'jodit-angular';

import { EventObj } from 'jodit-angular/lib/Events';
import { joditConfig } from './jodit-config';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'smb-jodit-editor',
  templateUrl: './jodit-editor.component.html',
  styleUrls: ['./jodit-editor.component.scss']
})
export class JoditEditorComponent implements AfterViewInit {
  @Input('content') content: string | null;
  @Output() emitValue = new EventEmitter<string>();

  @ViewChild('jodit') joditRef: JoditAngularComponent;

  public config = joditConfig;

  constructor() { }

  ngAfterViewInit(): void {
    this.joditRef.writeValue(this.content);
  }

  public handleEvent($event: EventObj) {
    this.emitValue.emit($event.args[0]);
  }
}
