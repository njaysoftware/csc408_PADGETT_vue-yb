<template>
  <tr>
    <td>{{ name }}</td>
    <td>{{ email }}</td>
    <td v-if="isAdmin">Administrator</td>
    <td v-else>Customer</td>
    <td>
      <div class="btn btn-sm btn-success">
        <router-link :to="'/customer-details/' + this.id">View</router-link>
      </div>
      <div class="btn btn-sm tn-dark">
        <router-link :to="'/customer-details/' + this.id + '/rentals'">Rentals</router-link>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    view() {
      console.log("Component Viewing id" + this.id);

      //this.$router.push({name: 'customer-details/3', params: { id: 3}})
      let myRoute = "/customer-details/3";
      this.$router.push(myRoute);
    },
    rentals() {
      this.$emit(rentals, this.id);
    }
  },
  props: ["id", "name", "email", "isAdmin", "update_at"]
};
</script>
<style>
</style>
