<template>
    <div class="row mb-5">
        <div class="col-sm-5">
            <form class="mt-5">
                <div class="alert alert-info text-center">
                    Müşteri Bilgisi
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="İsim">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Soyisim">
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="E-Posta">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Telefon (0 5XX)">
                </div>
                <hr>
                <div class="alert alert-info text-center">
                    Randevu Adresi ve Tarihi
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" v-model="currentPostCode" placeholder="Haritadan seçin" readonly>
                </div>
                <hr>
                <div class="form-group d-flex justify-content-between">
                    <label class="col-sm-4 d-flex align-items-center">Başlangıç tarihi</label>
                    <input type="datetime-local" class="form-control col-sm-7" @change="changeenddate($event.target.value)" v-model="appointment.startdate">
                </div>
                <div class="form-group d-flex justify-content-between">
                    <label class="col-sm-4 d-flex align-items-center">Bitiş tarihi</label>
                    <input type="text" class="form-control col-sm-8" v-model="appointment.enddate" readonly>
                </div>
                <button type="submit" class="btn btn-primary float-right">Ekle</button>
            </form>
        </div>
        <div class="col-sm-7">
            <div id="map">
            <!--In the following div the HERE Map will render-->
                <div id="mapContainer" class="mt-5" style="height:300px;width:100%" ref="hereMap"></div>
            </div>
            <div class="alert alert-info mt-3">
                <p v-text="distanceText"></p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
                customer:{
                    name:'',
                    surname:'',
                    email:'',
                    phonenumber:''
                },
                appointment:{
                    customerid: '',
                    apartmentid: '',
                    startdate: '',
                    enddate: ''
                },
                currentPostCode: "",
                platform: null,
                distanceText: '',
                distanceSeconds: 0,
                apikey: "TDprOmh5AoOfFljZtXPjufuWFw7dhvioMuHS9SEtEVw",
                centerLat:51.729157,
                centerLng:0.478027,
                postcodes: [],
                lats: [],
                lngs: [],
        }
  },
  async mounted() {
        // Initialize the platform object:
        const platform = new window.H.service.Platform({
        apikey: this.apikey
        });
        this.platform = platform;
        this.initializeHereMap(this.postcodes);
        
    },
  methods:{
      ...mapActions({
          distance: 'appointment/distance',
          getAll: 'apartment/getAll',
          getLatLong: 'map/getLatLong'
      }),

      changeenddate(dt){
          var t = new Date(dt);
          t.setSeconds(t.getSeconds() + parseInt(this.distanceSeconds));
          var current = t.toLocaleString()
          this.appointment.enddate = current
      },

      currentPostCodes(value, index){
          this.currentPostCode = value[index]
      },
      calculationDistance(){
          this.distance(this.currentPostCode).then(response => {
              this.distanceSeconds = parseInt(response.value)*2+3600;
              var DistanceTime = new Date(parseInt(response.value) * 1000*2+60*60).toISOString().substr(12, 7)
              this.distanceText = "Tahmini varış süresi : " 
              + response.text.replace('hr', 'saat').replace('min', 'dakika') +
              " => Ofise dönüş süresi : " + DistanceTime.substring(0, 1) + " Saat " + DistanceTime.substring(2, 4) + " Dakika (1 saat gözlem süresi hesaba katılmamıştır)";
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
      initializeHereMap() { // rendering map

    var svgMarkup = '<svg width="80" height="36" ' +
    'xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="white" fill="#1b468d" x="1" y="1" width="55" ' +
    'height="36" /><text x="28" y="24" font-size="12pt" ' +
    'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
    'fill="white">Office</text></svg>';

      const mapContainer = this.$refs.hereMap;
      const H = window.H;

      var icon = new H.map.Icon(svgMarkup);

      // Obtain the default map types from the platform object
      var maptypes = this.platform.createDefaultLayers();

      // Instantiate (and display) a map object:
      var map = new H.Map(mapContainer, maptypes.vector.normal.map, {
        zoom: 10,
        center: { lat: this.centerLat, lng: this.centerLng }
        // center object { lat: 40.730610, lng: -73.935242 }
      });

      // center marker
      const marker1 = new H.map.Marker({lat: this.centerLat, lng: this.centerLng }, { icon:icon });
      map.addObject(marker1);
      
      marker1.addEventListener("tap", event => {
        console.log(event.target.b);
      })
      
        var self = this;
        var markers = [];
        for(var i=0; i<this.postcodes.length; i++){
            markers[i] = new H.map.Marker({lat: this.lats[i], lng: this.lngs[i] });
            map.addObject(markers[i]);

            markers[i].addEventListener("tap", event => {
                var index = event.target.la.id - 1;
                self.currentPostCodes(self.postcodes, index);
                self.calculationDistance()
            })
        }
      

      addEventListener("resize", () => map.getViewPort().resize());

      // add behavior control
      new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

      // add UI
      H.ui.UI.createDefault(map, maptypes);
      // End rendering the initial map
    }
  },
  created(){
      //this.initializePostcode()
      this.postcodes = this.$route.params.codes
      this.lats = this.$route.params.lt
      this.lngs = this.$route.params.ln
  }
}
</script>