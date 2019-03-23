<template>
  <div class="col-12 col-sm-4 col-md-3 thumbnail p-1">
    <img class="img-fluid pt-1" :src="imgUrl">
    <h1>{{ this.title }}</h1>
    <p>rated: {{ this.rating }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgUrl: "http://nathanielpadgett.info/images/movie_" + this.id + ".jpg"
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
div {
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
}
</style>



