<template>
    <div class="row">
        <div class="col-sm-12 mt-3 mb-3">
            <router-link class="btn btn-success" to="/appointment/create">Randevu Oluştur</router-link>
        </div>
        <div class="col-sm-12 mb-3">
            <table class="table table-striped text-center">
            <thead>
                <tr>
                <th>İsim</th>
                <th>Soyisim</th>
                <th>Telefon</th>
                <th>Postcode</th>
                <th>Başlangıç Tarihi</th>
                <th>Bitiş Tarihi</th>
                <th>İşlemler</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="index in 5" :key="index">
                <th>1</th>
                <td>Mark</td>
                <td>0 5XX</td>
                <td>Mark</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                    <router-link class="btn btn-warning mr-2" to="/appointment/update">Düzenle</router-link>
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
    name: 'AppointmentList',
    components: {
    },
    data() {
      return {
      }
    }
  }
</script>