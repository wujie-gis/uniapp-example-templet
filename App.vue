<script>
import { getOpenId } from '@/api/login.api.js';
export default {
  mounted() {
    this.getOpenIdData();
  },
  methods: {
    getOpenIdData() {
      getOpenId().then(res => {
        // console.log(res, 2222);
      });
    },
  },
  onLaunch: function () {
    console.log('App Launch');
  },
  onShow: function () {
    console.log('App Show');
  },
  onHide: function () {
    console.log('App Hide');
  },
};
</script>

<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import '@/uview-ui/index.scss';
</style>
