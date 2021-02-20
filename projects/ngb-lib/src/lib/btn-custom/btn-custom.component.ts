import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nbl-btn-custom',
  templateUrl: './btn-custom.component.html',
  styleUrls: ['./btn-custom.component.sass'],
})
export class BtnCustomComponent implements OnInit {

  @Input() text: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
