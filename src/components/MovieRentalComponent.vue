<template>
  <tr>
    <td>
      <img :src="this.imageUrl" class="thumbnail">
      {{title}}
    </td>
    <td>{{rating}}</td>
    <td>{{length}}</td>
    <td>{{transaction.disk_type}}</td>
    <td>{{this.rented}}</td>
    <td>{{this.returned}}</td>
  </tr>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    imageUrl: function() {
      return (
        "https://nathanielpadgett.info/images/movie_" +
        this.transaction.movie_id +
        ".jpg"
      );
    },
    rented: function() {
      var options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      };
      var day = new Date(this.transaction.rent_date);
      return day.toLocaleString("en-us", options);
    },
    returned: function() {
      if (this.transaction.return_date == null) return null;
      var options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      };
      var day = new Date(this.transaction.return_date);
      return day.toLocaleString("en-us", options);
    }
  },
  props: ["id", "title", "rating", "length", "transaction"]
};
</script>

<style scoped lang="scss">
.thumbnail {
  width: 75px;
}
td {
  text-align: left;
}
</style>
