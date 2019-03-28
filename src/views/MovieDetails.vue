 <template>
  <div class="p3 row" id="backgroundForDetails">
    <div class="col-12 col-sm-3">
      <img class="img-fluid p-1 m-1" :src="imgUrl">
    </div>
    <div class="col-12 col-sm-9">
      <h1>{{ this.movie.title }}</h1>
      <p>Rating: {{ movie.rating }}</p>
      <p>Length: {{ movie.length }}</p>
      <p v-if="this.movie.onBluRay == 1 && this.movie.onDVD == 1">Available on Bluray and DVD</p>
      <p v-else-if="this.movie.onBluRay == 1 && this.movie.onDVD == 0">Available on Bluray</p>
      <p v-else-if="this.movie.onBluRay == 0  && this.movie.onDVD == 1">Available on DVD</p>
      <p v-else>Sorry this movie is temporarily unavailable</p>
      <p class="pr-sm-4 pr-md-5">{{ movie.description }}</p>
    </div>
  </div>
</template>
<script>
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
      movie: Object,
      id: null,

      imgUrl:
        "https://nathanielpadgett.info/images/movie_" +
        this.$route.params.movieId +
        ".jpg"
    };
  },
  methods: {
    read() {
      let url = "https://nathanielpadgett.info/api/movies/" + this.id;
      window.axios.get(url).then(({ data }) => {
        this.movie = new Movie(data);
      });
    }
  },
  created() {
    this.id = this.$route.params.movieId;
    this.read();
  }
};
</script>

<style scoped lang="scss">
#backgroundForDetails {
  border-style: solid;
  border-width: 1px;
  border-color: grey;
  color: black;
}
img {
  border-style: solid;
  border-color: grey;
  border-width: 1px;
  border-radius: 20px;
}
h1 {
  margin: 10px;
}
</style>
