<template>
  <div class="h-100 w-100">
    <l-map
        @click="mapClicked"
        :zoom="zoom"
        :center="center"
        style="height: 100%"
        :options="{zoomControl: false}"
    >
      <l-tile-layer
          :url="url"
          :attribution="attribution"
      />
      <l-control-zoom position="bottomright"></l-control-zoom>
    </l-map>
  </div>
</template>

<script>
import {LMap, LTileLayer, LControlZoom} from "vue2-leaflet";

export default {
  name: "Map",
  props: ['mapPosition', 'mapZoom'],
  components: {
    LMap,
    LTileLayer,
    LControlZoom
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
          '&copy; WeatherApp RO',
    };
  },
  methods: {
    mapClicked(e) {
      this.$emit('clicked-map-position', e.latlng)
    },
  },
  computed: {
    center: function () {
      return this.mapPosition;
    },
    zoom: function () {
      return this.mapZoom;
    },
  },
};
</script>
<style>
</style>
