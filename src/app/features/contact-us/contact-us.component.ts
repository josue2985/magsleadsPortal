import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {

  sectionTitle: string;
  status = 0;
  // confirmationUrl = environment.baseUrl + 'contactus?status=200';

  contactForm = new FormGroup({
    name: new FormControl(''),
    company: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });

  constructor(
    private router: Router,
    private Activatedroute: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: any,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // console.log(this.confirmationUrl);
    this.sectionTitle = 'Crear un Magnet Lead';

    this.Activatedroute.queryParamMap
    .subscribe((params: any) => {
        this.status = +params.get('status') || 0;
    });

    if (this.status === 200 || this.status === 503 && isPlatformBrowser(this.platformId)) {
      const body = document.getElementById('body');
      body?.classList.add('no-scroll');
    }
  }

  onSubmit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const body = new HttpParams()
      .set('form-name', 'contact')
      .append('name', this.contactForm.value.name)
      .append('company', this.contactForm.value.company)
      .append('phone', this.contactForm.value.phone)
      .append('email', this.contactForm.value.email)
      .append('message', this.contactForm.value.message);
      this.http.post('/', body.toString(), {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).subscribe(
        res => {},
        err => {
          if (err instanceof ErrorEvent) {
            // client side error
            this.router.navigateByUrl('/contactus?status=503');
            // alert('Mensaje Error.');
            // console.log(err.error.message);
          } else {
            // backend error. If status is 200, then the message successfully sent
            if (err.status === 200) {
              // alert('Mensaje Enviado!');
              this.router.navigateByUrl('/contactus?status=200');
            } else {
              this.router.navigateByUrl('/contactus?status=503');
              // console.log('Error status:');
              // console.log(err.status);
              // console.log('Error body:');
              // console.log(err.error);
            }
          }
        }
      );
     }

  }

  onDismiss(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.router.navigate(['/contactus']);
      const body = document.getElementById('body');
      if (body?.classList.contains('no-scroll')) {
        body?.classList.remove('no-scroll');
      }
    }
  }

}
