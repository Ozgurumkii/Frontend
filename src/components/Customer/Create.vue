<template>
    <div class="row">
        <div class="col-sm-6 m-auto">
            <form @submit.prevent="create" class="mt-5 mb-3">
                <div class="alert alert-info text-center">
                    Müşteri Ekleme Formu
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="İsim" v-model="customer.name">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Soyisim" v-model="customer.surname">
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="E-Posta" v-model="customer.email">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Telefon (0 5XX)" v-model="customer.phonenumber">
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
            customer:{
                name: '',
                surname: '',
                email: '',
                phonenumber: ''
            },
            info: '',
            error: ''
        }
    },
    methods:{
        ...mapActions({
            createCustomer: 'customer/createCustomer'
        }),

        create(){
            this.createCustomer(this.customer).then(response => {
                if(response == 200){
                    this.info = 'Başarıyla eklendi'
                    this.error = ''
                    this.customer.name = ''
                    this.customer.surname = ''
                    this.customer.email = ''
                    this.customer.phonenumber = ''
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