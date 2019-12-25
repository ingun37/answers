import { Component, OnInit, Input } from '@angular/core';
import { MDService } from '../md.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  @Input() mdstr: string;
  constructor(
    private sanitizer: DomSanitizer,
    private md: MDService,
  ) { }
  htmlstr: SafeHtml;

  ngOnInit() {

    this.htmlstr = this.sanitizer.bypassSecurityTrustHtml(this.md.md2HTML(this.mdstr));
    
  }

}
