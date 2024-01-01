import axios from 'axios';
import transferService from 'app/bff/services/transfer';
import { BaseResponse } from 'app/bff/models/base';
import { MainPageDataResp } from 'app/bff/models/sources/mainPageData';

export default {
  fetchMainPageData: async () => {
    return axios.get<BaseResponse<MainPageDataResp>>('/sources/main-page-data.json')
      .then((response) => transferService.checkHttpResponse(response) ? response.data.transferResponse : null);
  }
};
