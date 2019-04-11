<template>
  <div class="login">
    
  </div>
</template>

<script>
import url from '@/api'

export default {
  name: 'Login',
  data () {
    return {
      
    }
  },
  mounted() {
    this.loginAjax();
  },
  methods:{
    loginAjax:function () {
      // console.log('url',url)
      this.$axios.post(url.login,{username:'admin',password:12345678})
        .then(function (res) {
          console.log(res);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  }
}
</script>

<style scoped>

</style>
