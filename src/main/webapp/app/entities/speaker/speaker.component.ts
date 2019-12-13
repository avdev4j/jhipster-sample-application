import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ISpeaker } from 'app/shared/model/speaker.model';
import { SpeakerService } from './speaker.service';
import { SpeakerDeleteDialogComponent } from './speaker-delete-dialog.component';

@Component({
  selector: 'jhi-speaker',
  templateUrl: './speaker.component.html'
})
export class SpeakerComponent implements OnInit, OnDestroy {
  speakers: ISpeaker[];
  eventSubscriber: Subscription;

  constructor(protected speakerService: SpeakerService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll() {
    this.speakerService.query().subscribe((res: HttpResponse<ISpeaker[]>) => {
      this.speakers = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInSpeakers();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: ISpeaker) {
    return item.id;
  }

  registerChangeInSpeakers() {
    this.eventSubscriber = this.eventManager.subscribe('speakerListModification', () => this.loadAll());
  }

  delete(speaker: ISpeaker) {
    const modalRef = this.modalService.open(SpeakerDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.speaker = speaker;
  }
}
