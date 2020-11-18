<template>
    <div class="row">
        <div class="col-sm-6 m-auto">
            <form @submit.prevent="submit" class="mt-5 mb-3">
                <div class="alert alert-info text-center">
                    Apartman Ekleme Formu
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Postcode (örn: MK14 7QD)" v-model="form.postcode">
                    <small class="form-text text-muted">Sadece postcode girişi yapınız</small>
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="form.state" checked>
                    <label class="form-check-label text-info" for="exampleCheck1">Müsait</label>
                </div>
                <p class="text-success" v-text="info"></p>
                <p class="text-error" v-text="error"></p>
                <button type="submit" class="btn btn-primary float-right">Ekle</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            form:{
                postcode: '',
                state: '1'
            },
            info: '',
            error: ''
        }
    },
    methods:{
        ...mapActions({
            createApartment: 'apartment/createApartment'
        }),

        submit(){
            this.createApartment(this.form).then(response => {
                if(response == 200){
                    this.info = 'Başarıyla eklendi'
                    this.error = ''
                    this.form.postcode = ''
                }
                else{
                    this.info = ''
                    this.error = 'Eklenirken bir hata oluştu'
                }
            })
        }
    }
}
</script>