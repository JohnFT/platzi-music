<template lang="pug">
  #app
    img(src="./assets/logo.png")
    h1 PlatziMuisc
    select(v-model="selectedCountry")
      option(v-for="country of countries " v-bind:value="country.value") {{ country.name }}
    spinner(v-show="loading")
    ul
      artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid") 
</template>

<script>
import Artist from "./components/Artist";
import Spinner from "./components/Spinner";
import getArtist from "./api";

export default {
  name: "app",
  components: {
    Artist,
    Spinner
  },
  data() {
    return {
      artists: [],
      countries: [
        { name: "Colombía", value: "colombia" },
        { name: "Argentina", value: "argentina" },
        { name: "España", value: "spain" }
      ],
      selectedCountry: "colombia",
      loading: true
    };
  },
  methods: {
    refreshArtist: function() {
      const self = this;
      this.loading = true;
      getArtist(this.selectedCountry).then(artists => {
        self.artists = artists || [];
        self.loading = false;
      });
    }
  },
  watch: {
    selectedCountry: function() {
      this.refreshArtist();
    }
  },
  mounted: function() {
    this.refreshArtist();
  }
};
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
