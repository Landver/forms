import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: []
})
export class DemoFormSkuWithBuilderComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['ABC123']
    });
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value:', value);
  }
}
