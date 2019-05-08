import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { StudentsStateMain } from '../reducers';
import * as uploadDocActions from '../actions/upload-documents-action.types';

@Injectable({
  providedIn: 'root'
})
export class StorageStoreService {
  constructor(private store: Store<StudentsStateMain>) {}

  public uploadDocument(file: File, type: string, userId: string) {
    this.store.dispatch(
      new uploadDocActions.UploadDocumentsRequestAction({ file, type, userId })
    );
  }
}
