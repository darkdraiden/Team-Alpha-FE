import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {
  paymentOptions = ['Credit Card', 'PayPal', 'Cash on Delivery'];
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      recipientName: ['', Validators.required],
      recipientAddress: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      paymentOption: ['', Validators.required]
    });
  }
  getTotalAmount():any {}
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}

