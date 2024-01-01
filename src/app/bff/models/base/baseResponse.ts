import { ResponseHeader } from './responseHeader';

export interface BaseResponse<T> {
  responseHeader: ResponseHeader;
  transferResponse: T;
}
