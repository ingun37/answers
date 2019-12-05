import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MarkdownService } from 'ngx-markdown';
import { md2HTML } from '../answer.service';

@Component({
  selector: 'app-excerpt',
  templateUrl: './excerpt.component.html',
  styleUrls: ['./excerpt.component.sass']
})
export class ExcerptComponent implements OnInit {
  @Input() mdstr: string;
  
  htmlstr: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer,
    private markdownService: MarkdownService,
  ) { }

  ngOnInit() {
    if (this.mdstr) {
      this.htmlstr = this.sanitizer.bypassSecurityTrustHtml(md2HTML(this.markdownService, this.mdstr));
    }
  }

}

