import {Component, HostBinding, Input, OnInit} from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss']
})
export class CustomCheckboxComponent {
  @HostBinding('class') classes = 'block aspect-w-5 aspect-h-3';

  @Input() set lastChange(val: any) {
    this.checked = false;
  }

  checked = false;
}
