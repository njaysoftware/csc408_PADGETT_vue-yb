<template>
  <tr>
    <td>{{ this.name }}</td>
    <td>{{ this.email }}</td>
    <td v-if="this.isAdmin">Administrator</td>
    <td v-else>Customer</td>
    <td>{{ this.rented }}</td>
    <td>{{ this.returned }}</td>
  </tr>
</template>
<script>
//create an object with a class.

export default {
  data() {
    return {};
  },
  computed: {
    rented: function() {
      var options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      };
      var date = new Date(this.pivot.rent_date);
      return date.toLocaleString("en-us", options);
    },
    returned: function() {
      if (this.pivot.return_date == null) return null;
      var options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      };
      var date = new Date(this.pivot.return_date);
      return date.toLocaleString("en-us", options);
    }
  },
  props: [
    "id",
    "name",
    "email",
    "email_varified_at",
    "isAdmin",
    "created_at",
    "updated_at",
    "pivot"
  ]
};
</script>

<style scoped>
</style>
