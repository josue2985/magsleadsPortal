import { Component, OnInit } from '@angular/core';
import { ICalcs, CatalogService } from '../../../shared/services/catalog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent implements OnInit {

  calculatorName: any;
  calculator: ICalcs;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private catalogService: CatalogService
  ) { }

  ngOnInit(): void {
    this.calculatorName = this.route.snapshot.paramMap.get('calculatorName');
    console.log("que es esto" + this.calculator);
    this.catalogService.get(this.calculatorName).then(result => {
      this.calculator = result;
      if (!this.calculator) {
         // this.router.navigate(['/page-not-found']);
      }
    });
  }

}
