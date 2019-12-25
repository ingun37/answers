import { Component } from '@angular/core';
import { StaticDBService, _Node } from './static-db.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
  loading = true;
  pageMDStr: string = null;
  node: _Node = null;
  home: _Node = null;
  constructor(
    private db: StaticDBService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}
  ngOnInit() {
    this.route.queryParamMap.subscribe(map => {
      this.loading = true;
      this.node = null;
      this.home = null;
      this.pageMDStr = null;
      if (map.has('page')) {
        this.http.get(`assets/${map.get('page')}.md`, {responseType: 'text'}).subscribe(mdstr => {
          this.loading = false;
          this.pageMDStr = mdstr;
        })
      } else if (map.has('sha1')) {
        this.db.getItem(map.get('sha1')).then(node => {
          this.loading = false;
          this.node = node;
        });
      } else {
        this.db.getHome().then(home => {
          this.loading = false;
          this.home = home;
        });
      }
    });
  }
}
