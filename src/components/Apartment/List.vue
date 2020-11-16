<template>
    <div class="row">
        <div class="col-sm-12 mt-3 mb-3">
            <router-link class="btn btn-success" to="/apartment/create">Apartman Ekle</router-link>
        </div>
        <div class="col-sm-12 mb-3">
            <table class="table table-striped text-center">
            <thead>
                <tr>
                <th>Postcode</th>
                <th>Durum</th>
                <th>Oluşturulma Tarihi</th>
                <th>İşlemler</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="index in 5" :key="index">
                <th>Bla bla</th>
                <td>durum durum</td>
                <td>tarih tarih</td>
                <td>
                    <router-link class="btn btn-warning mr-2" to="/apartment/update">Düzenle</router-link>
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
}
</script>