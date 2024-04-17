import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HeaderComponent } from '@shared/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, 
    ReactiveFormsModule,
    HeaderComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent {
  
  imageUrl!:SafeUrl; 
  imageBannerUrl!:SafeUrl;
  loginForm = new FormGroup(
    {
      email: new FormControl('', [ Validators.required, Validators.email]),
      password: new FormControl('', [ Validators.required, Validators.minLength(8)]),

    }
  );
  

  constructor(
    private sanitizer: DomSanitizer,
  ) {
    const imgRoute = 'assets/images/product/photo/banner.png';
    const imgBannerRoute = 'assets/images/login/login.svg';
    this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(imgRoute);
    this.imageBannerUrl = this.sanitizer.bypassSecurityTrustUrl(imgBannerRoute);
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    console.log(this.loginForm.value);
  }
}
