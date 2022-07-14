// 引入配置
import configService from '@/common/config';
// 初始化请求配置
uni.$u.http.setConfig(defaultConfig => {
  /* defaultConfig 为默认全局配置 */
  defaultConfig.baseURL = configService.BASE_URL; /* 根域名 */
  return defaultConfig;
});

export default vm => {
  require('./requestInterceptors')(vm);
  require('./responseInterceptors')(vm);
};
