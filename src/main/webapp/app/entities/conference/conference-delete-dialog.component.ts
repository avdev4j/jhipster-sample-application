import { Component } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IConference } from 'app/shared/model/conference.model';
import { ConferenceService } from './conference.service';

@Component({
  templateUrl: './conference-delete-dialog.component.html'
})
export class ConferenceDeleteDialogComponent {
  conference: IConference;

  constructor(
    protected conferenceService: ConferenceService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.conferenceService.delete(id).subscribe(() => {
      this.eventManager.broadcast({
        name: 'conferenceListModification',
        content: 'Deleted an conference'
      });
      this.activeModal.dismiss(true);
    });
  }
}
