import { httpGet } from '@/util/request/axios.js';

/** 获取openId */
export function getOpenId(code = 'getOpenId', role = 'team') {
  return httpGet('/getOpenId', {
    params: { code, role, appid: 'wxbae4ab9f39dda648' },
    custom: {
      useToast: false,
    },
  });
}

/** 微信通过手机号登陆 */
export function loginByPhone(params = {}) {
  const defaultParams = { openId: '12132', appid: 'wxbae4ab9f39dda648' };
  return httpGet('/loginByPhoneNumber', {
    params: Object.assign({}, params, defaultParams),
    custom: {
      useToast: false,
    },
  });
}
