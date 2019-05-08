import { Action } from '@ngrx/store';

export enum UploadDocumentsActionTypes {
  UPLOAD_DOC_REQUEST = '[Upload Doc] Request',
  UPLOAD_DOC_SUCCESS = '[Upload Doc] Upload Success',
  UPLOAD_DOC_FAIL = '[Upload Doc] Upload Fail'
}
export class UploadDocumentsRequestAction implements Action {
  readonly type = UploadDocumentsActionTypes.UPLOAD_DOC_REQUEST;
  constructor(public payload: { file: File; type: string; userId: string }) {}
}

export class UploadDocumentsSuccessAction implements Action {
  readonly type = UploadDocumentsActionTypes.UPLOAD_DOC_SUCCESS;
}

export class UploadDocumentsFailAction implements Action {
  readonly type = UploadDocumentsActionTypes.UPLOAD_DOC_FAIL;
   constructor(public payload: { err: string }) {}
}

// action types
export type UploadDocumentsActions =
  | UploadDocumentsRequestAction
  | UploadDocumentsSuccessAction
  | UploadDocumentsFailAction;
