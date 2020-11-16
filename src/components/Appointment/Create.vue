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
                    <input type="date" class="form-control" placeholder="Tarih değeri">
                </div>
                <div class="form-group">
                    <input type="time" class="form-control" placeholder="Tarih değeri">
                </div>
                <hr>
                <div class="form-group">
                    <input type="text" class="form-control" v-model="currentPostCode" placeholder="Haritadan seçin ya da postcode girin">
                </div>
                <button type="submit" class="btn btn-primary float-right">Ekle</button>
            </form>
        </div>
        <div class="col-sm-7">
            <div id="map">
            <!--In the following div the HERE Map will render-->
                <div id="mapContainer" class="mt-5" style="height:300px;width:100%" ref="hereMap"></div>
            </div>
            <div class="alert alert-info">
                <p v-text="distance"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
                platform: null,
                distance: null,
                apikey: "DPcVUQBLarowJLWcvaa_2eThTXRcOFJWFDfmLvUSi5g",
                currentPostCode: "",
                centerLat:51.729157,
                centerLng:0.478027,
                postcodes: ["testkonum", "MK14 7QD"],
                lats: [52.4773549, 52.054222],
                lngs: [-2.0037152, -0.746955],
        }
  },
  async mounted() {
        // Initialize the platform object:
        const platform = new window.H.service.Platform({
        apikey: this.apikey
        });
        this.platform = platform;
        this.initializeHereMap();
    },
  methods:{
      currentPostCodes(value, index){
          this.currentPostCode = value[index]
      },
      calculationDistance(){
          // Hesaplama yapılacak
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
          })
      }
      

      addEventListener("resize", () => map.getViewPort().resize());

      // add behavior control
      new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

      // add UI
      H.ui.UI.createDefault(map, maptypes);
      // End rendering the initial map
    }
  }
}
</script>