<template>
    <div class="row">
        <div class="col-sm-12 mt-3 mb-3">
            <router-link class="btn btn-success" :to="{ name:'AppointmentCreate', params:{codes:postcodes, lt:lats, ln:lngs} }">Randevu Oluştur</router-link>
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
                <tr v-for="appointment in appointments" :key="appointment.id">
                <th>{{ appointment.customer.name }}</th>
                <td>{{ appointment.customer.surname }}</td>
                <td>{{ appointment.customer.phonenumber }}</td>
                <td>{{ appointment.apartment.postcode }}</td>
                <td>{{ appointment.startdate }}</td>
                <td>{{ appointment.enddate }}</td>
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
import { mapActions } from 'vuex'
  export default {
    name: 'AppointmentList',
    data() {
      return {
          appointments: null,
          postcodes: [],
          lats: [],
          lngs: []
      }
    },
    methods:{
        ...mapActions({
            appointmentList: 'appointment/appointmentList',
            getAll: 'apartment/getAll',
            getLatLong: 'map/getLatLong'
        }),

        getAppointments(){
            this.appointmentList().then(response => {
                this.appointments = response
            })
        },

        initializePostcode(){
          this.getAll().then(response => {
          for(var i=0; i<response.length; i++){
              this.postcodes.push(response[i].postcode)
              this.getLatLong(response[i].postcode).then(response => {
                  this.lats.push(response.result.latitude)
                  this.lngs.push(response.result.longitude)
              })
          }
        })
      },
    },
    created(){
        this.initializePostcode()
        this.getAppointments()
        
    }
  }
</script>