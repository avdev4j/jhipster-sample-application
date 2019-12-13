import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MsIgniteSharedModule } from 'app/shared/shared.module';
import { ConferenceComponent } from './conference.component';
import { ConferenceDetailComponent } from './conference-detail.component';
import { ConferenceUpdateComponent } from './conference-update.component';
import { ConferenceDeleteDialogComponent } from './conference-delete-dialog.component';
import { conferenceRoute } from './conference.route';

@NgModule({
  imports: [MsIgniteSharedModule, RouterModule.forChild(conferenceRoute)],
  declarations: [ConferenceComponent, ConferenceDetailComponent, ConferenceUpdateComponent, ConferenceDeleteDialogComponent],
  entryComponents: [ConferenceDeleteDialogComponent]
})
export class MsIgniteConferenceModule {}
