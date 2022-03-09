import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
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
    private Activatedroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.sectionTitle = 'Crear un Magnet Lead';

    this.Activatedroute.queryParamMap
    .subscribe((params: any) => {
        this.status = +params.get('status') || 0;
    });

    if (this.status === 200) {
      const body = document.getElementById('body');
      body?.classList.add('no-scroll');
    }
  }

  onDismiss(): void {
    this.router.navigate(['/contactus']);
    const body = document.getElementById('body');
    if (body?.classList.contains('no-scroll')) {
      body?.classList.remove('no-scroll');
    }
  }

}
