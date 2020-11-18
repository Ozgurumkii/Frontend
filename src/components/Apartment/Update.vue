<template>
    <div class="row">
        <div class="col-sm-6 m-auto">
            <div class="text-success">
            </div>
            <form @submit.prevent="update" class="mt-5 mb-3">
                <div class="alert alert-info text-center">
                    Apartman Güncelleme Formu
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Postcode (örn: MK14 7QD)" v-model="apartment.postcode">
                    <small class="form-text text-muted">Sadece postcode girişi yapınız</small>
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" checked>
                    <label class="form-check-label text-success" for="exampleCheck1">Apartman Kullanımda</label>
                </div>
                <p class="text-info" v-text="info"></p>
                <p class="text-error" v-text="error"></p>
                <button type="submit" class="btn btn-primary float-right">Güncelle</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            apartment:{
                id: '',
                postcode: '',
                state: '1'
            },
            info: '',
            error: ''
        }
    },
    methods:{
        ...mapActions({
            updateApartment: 'apartment/updateApartment'
        }),
        update(){
            this.updateApartment(this.apartment).then(response => {
                if(response == 200){
                    this.info = 'Başarıyla güncellendi'
                    this.error = ''
                }
                else{
                    this.info = ''
                    this.error = 'Güncellenirken bir hata oluştu'
                }
            })
        }
    },
    created(){
        this.apartment.id = this.$route.params.id
        this.apartment.postcode = this.$route.params.postcode
    }
}
</script>