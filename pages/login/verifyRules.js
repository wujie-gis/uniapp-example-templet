/**
 * 账号验证规则
 */
export const rules = {
  username: [
    { required: true, message: '请输入账号!', trigger: 'blur' },
    { pattern: /^(?=.*\S).+$/, message: '请输入账号!', trigger: 'blur' },
    {
      trigger: ['change', 'blur'],
      asyncValidator: (rule, value, callback) => {
        if (!value) {
          //   LocalStorageUtil.removeItem('login');
        }
        callback();
      },
    },
  ],
  password: [
    { required: true, message: '请输入密码!', trigger: 'blur' },
    { pattern: /^(?=.*\S).+$/, message: '请输入密码!', trigger: 'blur' },
  ],
};
