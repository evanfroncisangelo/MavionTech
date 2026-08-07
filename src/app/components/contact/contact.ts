import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  submitted = signal(false);
  form: FormGroup;

  contactInfo = [
    { icon: '📧', label: 'Email', value: 'mgmancenon@gmail.com', href: 'mailto:mgmancenon@gmail.com' },
    { icon: '📞', label: 'Phone', value: '09774159834', href: 'tel:09774159834' },
    { icon: '🌐', label: 'Website', value: 'maviontech.com', href: 'https://maviontech.com' },
  ];

  services = [
    'Custom Software', 'Web Development', 'Mobile App', 'Cloud Solutions', 'DevOps', 'API Integration', 'IT Consulting',
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      service: ['', Validators.required],
      budget: [''],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitted.set(true);
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl && ctrl.invalid && ctrl.touched);
  }
}
