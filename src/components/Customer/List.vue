<template>
    <div class="row">
        <div class="col-sm-12 mt-3 mb-3">
            <router-link class="btn btn-success" to="/customer/create">Müşteri Ekle</router-link>
        </div>
        <div class="col-sm-12 mb-3">
            <table class="table table-striped text-center">
            <thead>
                <tr>
                <th>İsim</th>
                <th>Soyisim</th>
                <th>E-Posta</th>
                <th>Telefon</th>
                <th>İşlemler</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="index in 5" :key="index">
                <th>Ezgi</th>
                <td>Kavdır</td>
                <td>ezgikavdir@ozgurumkii.com</td>
                <td>0555 555 55 55</td>
                <td>
                    <router-link class="btn btn-warning mr-2" to="/customer/update">Düzenle</router-link>
                    <button class="btn btn-danger">Sil</button>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'CustomerList',
    components: {
    },
    data() {
      return {
      }
    }
  }
</script>