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
                <tr v-for="customer in customers" :key="customer.id">
                <th>{{ customer.name }}</th>
                <td>{{ customer.surname }}</td>
                <td>{{ customer.email }}</td>
                <td>{{ customer.phonenumber }}</td>
                <td>
                    <router-link 
                    class="btn btn-warning mr-2" 
                    :to="{ name: 'CustomerUpdate', 
                    params: { id:customer.id, name:customer.name, surname:customer.surname, email:customer.email, phonenumber:customer.phonenumber } }">Düzenle</router-link>
                    <a href="#" class="btn btn-danger" @click="removeCustomer(customer.id)">Sil</a>
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
    name: 'CustomerList',
    data() {
      return {
          customers: null
      }
    },
    methods:{
        ...mapActions({
            customerList: 'customer/customerList',
            deleteCustomer: 'customer/deleteCustomer'
        }),

        getCustomers(){
            this.customerList().then(response => {
                this.customers = response
            })
        },

        removeCustomer(customerId){
            this.deleteCustomer(customerId).then(response => {
                if(response == 200){
                    this.getCustomers()
                }
            })
        }
    },
    created(){
        this.getCustomers()
    }
  }
</script>