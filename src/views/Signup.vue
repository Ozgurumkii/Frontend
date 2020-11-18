<template>
  <div class="col-sm-4 m-auto">
    <form @submit.prevent="submit" class="form-signin mt-5 mb-5">
      <div class="col-sm-12 float-left d-flex justify-content-center">
        <i class="fa fa-user-plus fa-5x"></i>
      </div>
      <label class="h6 mb-3 mt-2 alert alert-info col-sm-12 text-center font-weight-normal">Kullanıcı Kayıt Sayfası</label>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="İsim" v-model="form.name">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Soyisim" v-model="form.surname">
      </div>
      <div class="form-group">
        <input type="email" class="form-control" placeholder="E-Posta" v-model="form.email">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Şifre" v-model="form.password">
      </div>
      <hr>
      <div class="form-group">
        <input type="number" class="form-control" placeholder="Personel Kodu (Örn: 32XXX)" v-model="form.usercode">
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Üye Ol</button>
      <small class="form-text text-muted">Üye olduysanız <router-link class="text-info h6" to="/signin">giriş yapın</router-link></small>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Signup',
  components: {
    //
  },
  data(){
    return{
      form: {
        name: '',
        surname: '',
        email: '',
        password: '',
        usercode: null
      }
    }
  },
  methods: {
    async submit(){
      let response = await axios.post('registervalidate', this.form)

      console.log(response.data);
    }
  }
}

</script>
