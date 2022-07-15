<template>
  <view class="wrap">
    <view class="top"></view>
    <view class="content">
      <view class="title">欢迎登录</view>
      <u-form ref="validateFormRef" :model="validateForm.value">
        <u-form-item label="账号" prop="phoneNumber" :border-bottom="false">
          <u-input class="u-border-bottom" v-model="validateForm.value.phoneNumber" placeholder="请输入账号" />
        </u-form-item>
        <u-form-item label="密码" prop="password" :border-bottom="false">
          <u-input
            type="password"
            class="u-border-bottom"
            v-model="validateForm.value.msgCode"
            placeholder="请输入密码"
          />
        </u-form-item>
      </u-form>
      <button @tap="submit" :style="[inputStyle]" class="loginBtn">登录</button>
      <view class="alternative">
        <view class="password">注册</view>
        <view class="issue">忘记密码</view>
      </view>
    </view>
    <view class="buttom">
      <view style="display: flex">
        <view style="width: 100%"></view>
        <view style="padding: 66px">
          <view class="u-text-center">
            <view class="icon">
              <u-icon size="70" name="weixin-fill" color="rgb(83,194,64)"></u-icon>
            </view>
            微信
          </view>
        </view>
        <view style="width: 100%"></view>
      </view>

      <view class="hint u-safe-area-inset-bottom" style="position: absolute; bottom: 20px">
        登录代表同意
        <text class="link">用户协议、隐私政策，</text>
        并授权使用您的账号信息（如昵称、头像、收获地址）以便您统一管理
      </view>
    </view>
  </view>
</template>

<script>
import { rules } from './verifyRules';
import { loginByPhone } from '@/api/login.api';
export default {
  data() {
    return {
      validateForm: {
        value: {
          phoneNumber: '19922222222',
          msgCode: 'bitmap123',
        },
        rules: rules,
      },
    };
  },
  //#region 计算属性
  computed: {
    inputStyle() {
      let style = {};
      if (this.validateForm.value.phoneNumber) {
        style.color = '#fff';
        style.backgroundColor = this.$u.color['warning'];
      }
      return style;
    },
  },
  //#endregion
  methods: {
    submit() {
      console.log(232);
      loginByPhone(this.validateForm.value).then(res => {
        console.log(res);
        this.$store.commit('setUserInfo', res);
        console.log(this.$store.getters.getUserInfo);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
