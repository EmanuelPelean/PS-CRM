import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { map, switchMap, catchError, tap, concatMap } from 'rxjs/operators';
import * as studentActions from '../actions/students.actions';
import * as uploadDocActions from '../actions/upload-documents-action.types';
import { StorageService } from '../../services';

@Injectable()
export class UploadDocumentsEffects {
  constructor(
    private actions$: Actions,
    private storageService: StorageService
  ) {}

  @Effect()
  uploadDocument$ = this.actions$.pipe(
    ofType<uploadDocActions.UploadDocumentsRequestAction>(
      uploadDocActions.UploadDocumentsActionTypes.UPLOAD_DOC_REQUEST
    ),
    map(
      (action: uploadDocActions.UploadDocumentsRequestAction) => action.payload
    ),
    switchMap((documentData: { file; type; userId }) =>
      from(
        this.storageService.uploadDocToFireStorage(
          documentData.file,
          documentData.type,
          documentData.userId
        )
      ).pipe(
        concatMap((fileUrl: any) => [
          new studentActions.UpdateDocURLRequestAction({ fileUrl })
        ]),
        catchError(err =>
          of(new uploadDocActions.UploadDocumentsFailAction({ err }))
        )
      )
    )
  );
}
