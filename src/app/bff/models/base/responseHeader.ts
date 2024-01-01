import { ReturnCodesEnum } from 'app/bff/enums/codes';

export interface ResponseHeader {
  returnCode: ReturnCodesEnum;
  returnMessage: string;
}
