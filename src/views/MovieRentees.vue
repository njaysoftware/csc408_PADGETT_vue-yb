<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-2">
        <img :src="imgUrl" class="img-fluid">
      </div>
      <div class="col-12 col-md-10">
        <h1 class="mt-5">Users who have rented {{ this.movie.title}}</h1>
      </div>
    </div>
    <div class="row">
      <table class="table">
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
          <th>Rental Date</th>
          <th>Return Date</th>
        </thead>
        <tbody class="table-striped">
          <rentee-component
            v-for="(rentor, index ) in rentees"
            v-bind="rentor"
            :key="rentor.id"
            :index="index"
          ></rentee-component>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
//import the movierentee component
import RenteeComponent from "@/components/RenteeComponent.vue";
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
function Rentor({
  id,
  name,
  email,
  email_varified_at,
  isAdmin,
  created_at,
  updated_at,
  pivot
}) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.email_varified_at = email_varified_at;
  this.isAdmin = isAdmin;
  this.created_at = created_at;
  this.updated_at = updated_at;
  this.pivot = pivot;
}
export default {
  data() {
    return {
      id: null,
      rentees: [],
      movie: Object,
      imgUrl:
        "https://nathanielpadgett.info/images/movie_" +
        this.$route.params.movieId +
        ".jpg"
    };
  },
  methods: {
    //function to get the rentees for a given movie
    readCustomers() {
      this.rentees = [];
      let url =
        "https://nathanielpadgett.info/api/movies/" + this.id + "/rentals";
      window.axios.get(url).then(({ data }) => {
        data[0].rentors.forEach(rentor => {
          this.rentees.push(new Rentor(rentor));
        });
      });
    },
    readMovie() {
      let url = "https://nathanielpadgett.info/api/movies/" + this.id;
      window.axios.get(url).then(({ data }) => {
        this.movie = new Movie(data);
      });
    }
  },
  components: {
    RenteeComponent
  },
  created() {
    this.id = this.$route.params.movieId;
    this.readCustomers();
    this.readMovie();
  }
};
</script>
<style scoped>
.thumbnail {
  height: 75px;
  width: 75px;
}
</style>
