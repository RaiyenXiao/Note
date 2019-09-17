import mock  from 'mockRes' //本地mock数据
import { postRequest } from '@/utils/request'
const mockUrl = 'https://www.easy-mock.com/mock/5d527b363610bf6842a3e193/myproject'
const api = {
    admin: mockUrl+'/demo'
}
/**
 * 登陆
 */
export function login (parameter) {
    // return new Promise(resolve => {
    //   resolve(mock.user)
    // })
    return postRequest(api.admin, parameter)
}
  