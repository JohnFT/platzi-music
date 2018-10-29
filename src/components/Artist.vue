<template lang="pug">
    li.artist 
        h3
            a(:href="artist.url" target="_black") {{ artist.name }}
        img( :src="artist.image[2]['#text']")
</template>

<script>
export default {
  name: "artist",
  props: ["artist"]
};
</script>

<style lang="stylus" scoped>
li.artist {
    display: block;
    margin: 10px 0;
}
</style>
