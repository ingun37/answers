import { Component, OnInit } from '@angular/core';
import { MDService } from '../md.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private md: MDService,
    private http: HttpClient
  ) { }
  htmlstr: SafeHtml;

  ngOnInit() {

    this.http.get('assets/about.md', {responseType: 'text'}).subscribe(mdstr => {
      this.htmlstr = this.sanitizer.bypassSecurityTrustHtml(this.md.md2HTML(mdstr));
    })
  }

}
