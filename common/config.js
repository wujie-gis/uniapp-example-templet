let BASE_URL = '';

if (process.env.NODE_ENV == 'development') {
  BASE_URL = 'https://xpgj.mynatapp.cc/repair'; // 开发环境
} else {
  BASE_URL = 'https://xpgj.mynatapp.cc/repair'; // 生产环境
}
let staticDomainURL = BASE_URL + '/static';

const configService = {
  BASE_URL,
  staticDomainURL: staticDomainURL,
};

export default configService;
