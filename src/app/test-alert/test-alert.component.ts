import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-alert',
  templateUrl: './test-alert.component.html',
  styleUrls: ['./test-alert.component.css'],
})
export class TestAlertComponent implements OnInit {
  @Input() type: string;

  constructor() {}

  ngOnInit(): void {}

  getAlertType(type) {
    switch (type) {
      case 'primary':
        return 'CIT-alert--primary';
      case 'secondary':
        return 'CIT-alert--secondary';
      case 'tertiary':
        return 'CIT-alert--tertiary';
      default:
        return 'CIT-alert--default';
    }
  }
}
