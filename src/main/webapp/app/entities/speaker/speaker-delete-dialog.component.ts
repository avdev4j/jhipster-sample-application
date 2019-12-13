import { Component } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ISpeaker } from 'app/shared/model/speaker.model';
import { SpeakerService } from './speaker.service';

@Component({
  templateUrl: './speaker-delete-dialog.component.html'
})
export class SpeakerDeleteDialogComponent {
  speaker: ISpeaker;

  constructor(protected speakerService: SpeakerService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.speakerService.delete(id).subscribe(() => {
      this.eventManager.broadcast({
        name: 'speakerListModification',
        content: 'Deleted an speaker'
      });
      this.activeModal.dismiss(true);
    });
  }
}
