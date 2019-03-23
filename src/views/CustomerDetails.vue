<template>
  <div class="pt-4 pb-3">
    <h3>Customer Details</h3>
    <div class="card" style="width: 50%;">
      <div class="card-body">
        <h5 class="card-title">{{customer.name}} - {{ customer.id }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{this.role}}</h6>
        <p class="card-text">Email: {{ customer.email }}</p>
        <p class="card-text">Last Update: {{ this.updated }}</p>
      </div>
    </div>
  </div>
</template>

<script>
//@ts-check
function Customer({ id, name, email, isAdmin, update_at }) {
  this.id = parseInt(id);
  this.name = name;
  this.email = email;
  this.isAdmin = isAdmin;
  this.update_at = update_at;
}
export default {
  data() {
    return {
      customer: Object
    };
  },
  methods: {
    read() {
      let url = "http://csc408dev.com/api/customers/" + this.id;
      window.axios.get(url).then(({ data }) => {
        this.customer = data;
      });
    }
  },
  computed: {
    role: function() {
      this.customer.isAdmin ? "Administrator" : "Customer";
    },
    updated: function() {
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      };
      var today = new Date(this.customer.updated_at);
      return today.toLocaleString("en-US", options);
    }
  },
  components: {},
  created() {
    this.id = this.$route.params.userId;
    this.read();
  },
  props: ["id", "name", "email", "isAdmin", "updated_at"]
};
</script>

<style>
.card {
  margin: auto;
}
.card-body {
  text-align: left;
}
</style>
