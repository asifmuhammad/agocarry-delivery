import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/network/api.service';
import { Helper } from 'src/models/helper.models';
import { Faq } from 'src/models/faq.models';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss']
})
export class FaqPage implements OnInit {
  private subscriptions = new Array<Subscription>();
  faqs: Array<Faq>;
  isLoading = true;
  curFaqId;

  constructor(private apiService: ApiService) {
    this.faqs = Helper.getFaqs();
  }

  ngOnInit() {
    this.apiService.getFaqs().subscribe(res => {
      this.faqs = res;
      Helper.setFaqs(this.faqs);
    }, err => {
      console.log("getFaqs", err);
    });
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    //this.uiElementService.dismissLoading();
  }

  expandFaq(faq: Faq) {
    this.curFaqId = (this.curFaqId == faq.id) ? -1 : faq.id;
  }

}
