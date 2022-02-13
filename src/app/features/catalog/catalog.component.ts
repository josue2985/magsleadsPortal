import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { ICalcs, CatalogService } from '../../shared/services/catalog.service';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  calculators: ICalcs[];

  constructor(
    private route: ActivatedRoute,
    private catalogService: CatalogService,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
    this.catalogService.getCatalog().then( calculators => {
      this.calculators = calculators;
    });

    this.route.queryParams.subscribe(params => {
      const calculatorsName = this.route.snapshot.paramMap.get('calculatorsName');
      if (calculatorsName) {
        this.viewportScroller.scrollToAnchor(calculatorsName);
      }
    });
  }

}
