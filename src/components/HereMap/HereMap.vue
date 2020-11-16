<template>
  <div id="map">
  <!--In the following div the HERE Map will render-->
    <div id="mapContainer" class="mt-5" style="height:300px;width:100%" ref="hereMap"></div>
  </div>
</template>

<script>
export default {
  name: "HereMap",
  props: {
    center: Object
    // center object { lat: 40.730610, lng: -73.935242 }
  },
  data() {
    return {
      platform: null,
      apikey: "DPcVUQBLarowJLWcvaa_2eThTXRcOFJWFDfmLvUSi5g",
      centerLat:51.729157,
      centerLng:0.478027,
      mapsCoord: {
        postcode: ["MK14 7QD"],
        lat: [52.054222],
        lng: [-0.746955],
      }
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
  methods: {
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
        center: this.center
        // center object { lat: 40.730610, lng: -73.935242 }
      });

      // center marker
      const marker1 = new H.map.Marker({lat: this.centerLat, lng: this.centerLng }, { icon:icon });
      map.addObject(marker1);
      
      marker1.addEventListener("tap", event => {
        console.log(event.target.b);
      })

      
      var markers = [];
      for(var i=0; i<this.mapsCoord.postcode.length; i++){
          markers[i] = new H.map.Marker({lat: this.mapsCoord.lat[i], lng: this.mapsCoord.lng[i] });
          map.addObject(markers[i]);

          markers[i].addEventListener("tap", event => {
            console.log(event.target.b);
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
};
</script>

<style scoped>
#map {
  width: 50vw;
  min-width: 360px;
  text-align: center;
  margin: 5% auto;
  background-color: #ccc;
}
</style>