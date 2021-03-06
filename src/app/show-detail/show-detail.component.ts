import { Component, OnInit } from '@angular/core';
import {Show} from '../show';
import {ShowService} from '../shows.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {
  show: Show;

  constructor(
    private route: ActivatedRoute,
    private showService: ShowService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getShow();
  }
  getShow(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.showService.getItem(id)
      .subscribe(show => this.show  = show);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.showService.updateItem(this.show)
      .subscribe(() => this.goBack());
  }
}
