/**
 * 响应拦截
 * @param {Object} http
 */
module.exports = vm => {
  uni.$u.http.interceptors.response.use(
    response => {
      return new Promise((resolve, reject) => {
        /* 对响应成功做点什么 可使用async await 做异步操作*/
        const data = response.data;
        // 自定义参数
        const custom = response.config?.custom;
        // 响应拦截
        if (data.code === '20000') {
          // 成功
          if (custom?.useToast) {
            // 是否弹出toast
            uni.$u.toast(data.message || '成功');
          }
          return resolve(data.data);
        } else if (data.code === '10120') {
          // 登录过期
          // 去清除缓存
          uni.$u.toast(data.message || '登录过期');
        } else {
          // 请求失败
          uni.$u.toast(data.message || '请求错误');
        }

        return reject(data || {});
      });
    },
    response => {
      /*  对响应错误做点什么 （statusCode !== 200）*/
      return Promise.reject(response);
    }
  );
};
