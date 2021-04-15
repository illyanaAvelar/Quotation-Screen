import { quotationsList } from './serviceMock' 

export default {
//simular a chamada do método
  list: async () => {
    // return http.get('quotations')
    return quotationsList;
  }
}