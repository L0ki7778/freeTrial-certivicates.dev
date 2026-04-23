import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { form, FormField, validateStandardSchema } from '@angular/forms/signals';
import { z } from 'zod';

export type LoginModel = z.infer<typeof loginModelSchema>;
export const loginModelSchema = z.object({
  email: z.email(),
  password: z.string().min(8, 'Password muss länger als 8 zeichen lang sein.'),
});

@Component({
  selector: 'app-login',
  imports: [FormField, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public readonly submittedData: WritableSignal<LoginModel> = signal<LoginModel>({ email: '', password: '' });
  private readonly loginModel: WritableSignal<LoginModel> = signal<LoginModel>({ email: '', password: '' });

  public readonly loginForm = form(this.loginModel,
    (schemaPath) => validateStandardSchema(schemaPath, loginModelSchema));

  public onSubmit(event: Event): void {
    event.preventDefault();
    this.submittedData.set(this.loginModel());
  }
}

