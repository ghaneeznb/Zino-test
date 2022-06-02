import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-confirmation-info',
  templateUrl: './confirmation-info.component.html',
  styleUrls: ['./confirmation-info.component.scss']
})
export class ConfirmationInfoComponent implements OnInit {

  @Input() formDetails: any

  constructor() { }

  ngOnInit(): void {

    console.log(this.formDetails);
  }

}
