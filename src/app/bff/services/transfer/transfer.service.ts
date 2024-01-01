import { AxiosResponse } from 'axios';
import { ReturnCodesEnum } from 'app/bff/enums/codes';
import { BaseResponse } from 'app/bff/models/base';

const checkHttpResponse = <T>(response: AxiosResponse<BaseResponse<T>>, triggerAlert = true): boolean => {
  if (triggerAlert) {
    try {
      switch (response.data.responseHeader.returnCode) {
        case ReturnCodesEnum.Success: {
          break;
        }
        default: {
          alert(response.data.responseHeader.returnMessage);
          break;
        }
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  return response.data.responseHeader.returnCode === ReturnCodesEnum.Success;
};

export default {
  checkHttpResponse
};
