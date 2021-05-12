import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data-handle-event',
  templateUrl: './display-data-and-handle-event.component.html',
  styleUrls: ['./display-data-and-handle-event.component.scss']
})
export class DisplayDataAndHandleEventComponent implements OnInit {

  title = 'Display Data and Handle Event';
  details = 'Lorem ipsum dolor sit amet.';
  formattedDetails = '<b>Lorem ipsum dolor sit amet.</b>';
  imgSrc = 'https://dummyimage.com/300x200/000/fff';
  colspan = 2;
  rowspan = 2;

  isSaved = false;
  constructor() { }

  ngOnInit(): void {
  }
  get titleVal(): string {
    return this.title + ': Getter';
  }
  getTitleVal(): string {
    return this.title + ': From Function';
  }
  sqrtVal(num: number): number {
    return Math.sqrt(num);
  }
  changeStatus(): void {
    this.isSaved = !this.isSaved;
  }

}
