import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: 'file-input.component.html',
  styleUrls: ['file-input.component.less']
})

export class FileInputComponent {
  @Output() fileReceived: EventEmitter<File> = new EventEmitter<File>();

  public changeListener(event: File): void {
    this.fileReceived.emit(event);
  }
}
