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
                <th>İşlemler</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="apartment in apartments" :key="apartment.id">
                <td>{{ apartment.postcode }}</td>
                <td>{{ apartment.state == 1 ? "Müsait" : "Dolu" }}</td>
                <td>
                    <router-link class="btn btn-warning mr-2" :to="{ name : 'ApartmentUpdate', params : { id:apartment.id, postcode:apartment.postcode } }">Düzenle</router-link>
                    <a href="#" class="btn btn-danger" @click="removeApartment(apartment.id)">Sil</a>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            apartments: null
        }
    },
    methods:{
        ...mapActions({
            apartmentList: 'apartment/apartmentList',
            deleteApartment: 'apartment/deleteApartment'
        }),

        getApartments(){
            this.apartmentList().then(response => {
                this.apartments = response
            })
        },

        removeApartment(apartmentId){
            this.deleteApartment(apartmentId).then(response => {
                if(response == 200){
                    this.getApartments()
                }
            })
        }
    },
    created: function(){
        this.getApartments()
    }
}
</script>