import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { NavItem } from '@papelx/models';

@Component({
  selector: 'papelx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() navigation: NavItem[] = [];
  @Output() sidenavToggle = new EventEmitter();
  @Input() title = 'ND TITLE';
  user: any = {
    photoURL: 'https://i.pravatar.cc/300',
    displayName: 'Usuado Pruebas',
    email: 'fake@noserver.com'
  };

  constructor() {}

  ngOnInit(): void {}
}
