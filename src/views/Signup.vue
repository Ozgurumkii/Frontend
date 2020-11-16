<template>
  <div class="col-sm-4 m-auto">
    <form @submit.prevent="submit" class="form-signin mt-5 mb-5">
      <div class="col-sm-12 float-left d-flex justify-content-center">
        <i class="fa fa-user-plus fa-5x"></i>
      </div>
      <label class="h6 mb-3 mt-2 alert alert-info col-sm-12 text-center font-weight-normal">Kullanıcı Kayıt Sayfası</label>
      <div class="form-group">
        <input type="email" class="form-control" placeholder="İsim">
      </div>
      <div class="form-group">
        <input type="email" class="form-control" placeholder="Soyisim">
      </div>
      <div class="form-group">
        <input type="email" class="form-control" placeholder="E-Posta">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Şifre">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Şifre Tekrar">
      </div>
      <hr>
      <div class="form-group">
        <input type="email" class="form-control" placeholder="Personel Kodu (Örn: 32XXX)">
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Üye Ol</button>
      <small class="form-text text-muted">Üye olduysanız <router-link class="text-info h6" to="/signin">giriş yapın</router-link></small>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Signup',
  components: {
    //
  },
  methods: {
    submit(){
      console.log("Submit!!");
    }
  }
}

</script>
