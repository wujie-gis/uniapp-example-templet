// get请求的参数以及配置项都在第二个参数中
export function httpGet(url, config = {}) {
  const baseConfig = {
    custom: {
      useToast: false,
    },
    ...config,
  };
  return uni.$u.http.get(url, baseConfig);
}

export function httpPost(url, data = {}, config = {}) {
  const baseConfig = {
    custom: {
      useToast: false,
    },
    ...config,
  };
  return uni.$u.http.post(url, data, baseConfig);
}

export function httpPut(url, data = {}, config = {}) {
  const baseConfig = {
    custom: {
      useToast: false,
    },
    ...config,
  };
  return uni.$u.http.put(url, data, baseConfig);
}

export function httpDelete(url, data = {}, config = {}) {
  const baseConfig = {
    custom: {
      useToast: false,
    },
    ...config,
  };
  return uni.$u.http.delete(url, data, baseConfig);
}

/** 常用的contentTyp类型 */
export const ContentTypeEnum = {
  // json
  JSON: 'application/json;charset=UTF-8',
  // json
  TEXT: 'text/plain;charset=UTF-8',
  // form-data 一般配合qs
  FORM_URLENCODED: 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  上传
  FORM_DATA: 'multipart/form-data;charset=UTF-8',
};
