import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-document-upload',
  templateUrl: 'document-upload.component.html',
  styleUrls: ['document-upload.component.less']
})
export class DocumentUploadComponent {
  @Input()
  permitUploadProgress$$$: Observable<number>;

  @Input()
  medicalUploadProgress$$$: Observable<number>;

  @Output()
  uploadPermitEvent = new EventEmitter<File>();

  @Output()
  uploadMedicalEvent = new EventEmitter<File>();


  public uploadPermit(event) {
    this.uploadPermitEvent.emit(event.target.files[0]);
  }

  public uploadMedical(event) {
    this.uploadMedicalEvent.emit(event.target.files[0]);
  }

}
