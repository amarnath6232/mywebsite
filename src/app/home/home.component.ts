import { Component, OnInit } from '@angular/core';
declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadPdf() {
    const pdfUrl = './assets/resume/resume.pdf';
    const pdfName = 'Amarnath Reddy';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

}
