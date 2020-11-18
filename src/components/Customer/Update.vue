<template>
    <div class="row">
        <div class="col-sm-6 m-auto">
            <form @submit.prevent="update" class="mt-5 mb-3">
                <div class="alert alert-info text-center">
                    Müşteri Güncelleme Formu
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
            customer:{
                id: '',
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
            updateCustomer: 'customer/updateCustomer'
        }),
        update(){
            this.updateCustomer(this.customer).then(response => {
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
        this.customer.id = this.$route.params.id
        this.customer.name = this.$route.params.name
        this.customer.surname = this.$route.params.surname
        this.customer.email = this.$route.params.email
        this.customer.phonenumber = this.$route.params.phonenumber
    }
}
</script>