import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.css']
})
export class AlumniComponent implements OnInit {
  isExpanded: boolean = true;
  isExpanded1: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
