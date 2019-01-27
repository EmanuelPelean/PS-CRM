import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: 'file-input.component.html',
  styleUrls: ['file-input.component.less']
})
export class FileInputComponent {
  @Output() fileReceived: EventEmitter<FileList> = new EventEmitter<FileList>();

  public changeListener(files: FileList): void {
    this.fileReceived.emit(files);
  }
}
