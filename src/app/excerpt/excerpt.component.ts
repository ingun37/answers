import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MDService } from '../md.service';


@Component({
  selector: 'app-excerpt',
  templateUrl: './excerpt.component.html',
  styleUrls: ['./excerpt.component.sass']
})
export class ExcerptComponent implements OnInit {
  @Input() mdstr: string;
  mdstr2: string;
  htmlstr: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer,
    private md: MDService,
  ) { }

  ngOnInit() {
    if (this.mdstr) {
      this.htmlstr = this.sanitizer.bypassSecurityTrustHtml(this.md.md2HTML(this.mdstr));
    }
  }

}




export enum ItemAttribute {
  QUESTION = 'question',
  ANSWER = 'answer'
}

function getSafe(fn, defaultVal) {
  try {
      return fn();
  } catch (e) {
      return defaultVal;
  }
}

