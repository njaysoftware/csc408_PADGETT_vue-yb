<template>
  <div class="container">
    <div class="row">
      <movie-component
        v-for="(movie, index) in movies"
        v-bind="movie"
        :index="index"
        :key="movie.id"
      ></movie-component>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieComponent from "@/components/MovieComponent.vue";
//create a makeable object for each movie that we get back
function Movie({
  id,
  title,
  rating,
  length,
  description,
  onDVD,
  onBluRay,
  deleted_at,
  created_at,
  updated_at
}) {
  this.id = id;
  this.title = title;
  this.rating = rating;
  this.length = length;
  this.description = description;
  this.onDVD = onDVD;
  this.onBluRay = onBluRay;
  this.deleted_at = deleted_at;
  this.created_at = created_at;
  this.updated_at = updated_at;
}
export default {
  data() {
    return {
      movies: []
    };
  },
  methods: {
    read() {
      this.movies = [];
      let url = "https://nathanielpadgett.info/api/movies";
      window.axios.get(url).then(({ data }) => {
        data.forEach(movie => {
          this.movies.push(new Movie(movie));
        });
      });
    }
  },
  created() {
    this.read();
  },
  components: {
    MovieComponent
  }
};
</script>
