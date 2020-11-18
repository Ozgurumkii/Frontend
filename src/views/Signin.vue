<template>
  <div class="col-sm-4 m-auto">
    <form @submit.prevent="submit" class="form-signin mt-5 mb-5">
      <div class="col-sm-12 float-left d-flex justify-content-center">
        <i class="fa fa-user-circle-o fa-5x"></i>
      </div>
      <label class="h6 mb-3 mt-2 alert alert-info col-sm-12 text-center font-weight-normal">Kullanıcı Giriş Sayfası</label>
      <div class="form-group">
        <input type="email" class="form-control" placeholder="E-Posta" v-model="form.email">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Şifre" v-model="form.password">
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Giriş Yap</button>
      <small class="form-text text-muted">Henüz üye olmadıysanız <router-link class="text-info h6" to="/signup">üye olun</router-link></small>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Signin',
  components: {
  },
  data(){
    return{
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      signIn: 'auth/signIn'
    }),
    submit(){
      this.signIn(this.form).then(() => {
        this.$router.replace({
          name: 'Home'
        })
      })
    }
  }
}

</script>
