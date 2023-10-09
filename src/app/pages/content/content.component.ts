import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: string | null = '0';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get("id");
      if (this.id !== '0') {
        this.setValuesToComponent(this.id)
      }

    }
    )
  }
  setValuesToComponent(id: string | null) {
    if (id) {
      const result = dataFake.filter(article => article.id.toString() == id);
      if (result) {
        this.contentTitle = result[0].title;
        this.contentDescription = result[0].description;
        this.photoCover = result[0].photo;
      }
    }

  }
}
