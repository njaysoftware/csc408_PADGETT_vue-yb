import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      //lazy-loading method for incorporating the view.
      component: () => import("./views/About.vue")
    },
    {
      path: "/customer",
      name: "customer",
      //lazy-loading method for incorporating the view.
      component: () => import("./views/Customer.vue")
    },
    {
      path: "/customer-details/:userId",
      name: "customer-details",
      //lazy-loading method for incorporating the view.
      component: () => import("./views/CustomerDetails.vue")
    },
    {
      path: "/customer-details/:userId/rentals",
      name: "customer-rentals",
      //lazy-loading method for incorporating the view.
      component: () => import("./views/CustomerRentals.vue")
    },
    {
      path: "/movie-details/:movieId",
      name: "movie-details",

      component: () => import("./views/MovieDetails.vue")
    },
    {
      path: "/movie-rentees/:movieId/rentals",
      name: "movie-rentees",
      component: () => import("./views/MovieRentees.vue")
    }
  ]
});
