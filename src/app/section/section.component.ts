import { Component, OnInit, Input } from '@angular/core';
import { Item, AnswerService } from '../answer.service';
import { MatButtonToggleChange } from '@angular/material/button-toggle';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.sass']
})
export class SectionComponent implements OnInit {
  @Input() item: Item;
  children: Item[];
  unfolds = new Set<string>();
  editLink = '';
  constructor(
    private answer: AnswerService
    ) { }

  ngOnInit() {
    this.editLink = '/write/' + encodeURIComponent(this.item.path);
    this.answer.getChildren(this.item.path).then(children => {
      this.children = children;
    });
  }

  unfold(item: Item) {
    this.unfolds = this.unfolds.add(item.path);
  }

  onChange(path: string, event: MatButtonToggleChange) {
    if (event.source.checked) {
      this.unfolds.add(path);
    } else {
      this.unfolds.delete(path);
    }
  }
}

