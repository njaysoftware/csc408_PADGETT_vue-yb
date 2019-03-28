<template>
  <div class="col-12 col-sm-5 col-md-4 col-lg-3 thumbnail padding-0 hover-style">
    <div class="m-1 divWithBorder" style="padding:0px;">
      <img class="img-fluid p-1" :src="imgUrl">
      <h1>{{ this.title }}</h1>
      <p>Rated: {{ this.rating }}</p>
      <div class="btn btn-primary button custom-hover">
        <router-link :to="'/movie-details/' + this.id">Details</router-link>
      </div>
      <div class="btn btn-primary button custom-hover">
        <router-link :to="'/movie-rentees/' + this.id + '/rentals'">Rentees</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgUrl: "https://nathanielpadgett.info/images/movie_" + this.id + ".jpg"
    };
  },
  methods: {},
  props: [
    "id",
    "title",
    "rating",
    "length",
    "description",
    "onDVD",
    "onBluRay",
    "deleted_at",
    "created_at",
    "updated_at"
  ]
};
</script>
<style scoped lang="scss" >
.divWithBorder {
  background-color: white;
  //border-style: solid;
  border-width: 1px;
  //border-color: gray;
  border-radius: 12px;
}

img {
  border-radius: 12px;
}
h1 {
  margin: 10px;
  font-size: 1.3rem;
}
.button {
  margin: 10px;
  background-color: white;
  border-style: solid;
  border-color: grey;
  color: grey;
}

#cursorEnter {
  background-color: #c2c8d1;
  border-color: black;
}
a {
  font-size: 1em;
  font-weight: bold;
  color: black;
  &.router-link-exact-active {
    color: #42b983;
  }
}
.padding-0 {
  padding-right: 0;
  padding-left: 0;
  padding-bottom: 0;
}
.custom-hover:hover {
  background-color: #c2c8d1;
  border-color: black;
  width: 40%;
  height: 40%;
  color: black;
}
</style>



