<template>
  <view class="wrap u-text-center u-font-18"> ahahah</view>
</template>

<script>
export default {
  data() {
    return {
      validateForm: {
        value: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            { required: true, message: '请输入账号!', trigger: 'blur' },
            { pattern: /^(?=.*\S).+$/, message: '请输入账号!', trigger: 'blur' },
            {
              trigger: ['change', 'blur'],
              asyncValidator: (rule, value, callback) => {
                if (!value) {
                  LocalStorageUtil.removeItem('login');
                }
                callback();
              },
            },
          ],
          password: [
            { required: true, message: '请输入密码!', trigger: 'blur' },
            { pattern: /^(?=.*\S).+$/, message: '请输入密码!', trigger: 'blur' },
          ],
        },
      },
    };
  },
  computed: {
    inputStyle() {
      let style = {};
      if (this.validateForm.value.username) {
        style.color = '#fff';
        style.backgroundColor = this.$u.color['warning'];
      }
      return style;
    },
  },
  methods: {
    submit() {
      console.log(232);
    },
  },
};
</script>

<style lang="scss" scoped></style>
