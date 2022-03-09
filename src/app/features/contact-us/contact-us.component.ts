import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  sectionTitle: string;
  status = 0;
  confirmationUrl = environment.baseUrl + 'contactus?status=200';

  constructor(
    private router: Router,
    private Activatedroute: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  ngOnInit(): void {
    this.sectionTitle = 'Crear un Magnet Lead';

    this.Activatedroute.queryParamMap
    .subscribe((params: any) => {
        this.status = +params.get('status') || 0;
    });

    if (this.status === 200 && isPlatformBrowser(this.platformId)) {
      const body = document.getElementById('body');
      body?.classList.add('no-scroll');
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
