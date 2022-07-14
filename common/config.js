let BASE_URL = '';

if (process.env.NODE_ENV == 'development') {
  BASE_URL = 'http://192.168.1.88:8000/trainingSupervision'; // 开发环境
} else {
  BASE_URL = 'http://git.cqbitmap.com:8011/trainingSupervision'; // 生产环境
}
let staticDomainURL = BASE_URL + '/static';

const configService = {
  BASE_URL,
  staticDomainURL: staticDomainURL,
};

export default configService;
