<template>
  <div class="about pt-4 pb-3">
    <h1>Yellow Bucket Customers</h1>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <customer-component
          v-for="(customer, index) in  customers"
          v-bind="customer"
          :index="index"
          :key="customer.id"
          @view="view"
          @rental="rentals"
        ></customer-component>
      </tbody>
    </table>
  </div>
</template>
<script>
//@ts-check
import CustomerComponent from "@/components/CustomerComponent.vue";
//create an object for the customer
function Customer({ id, name, email, isAdmin, updated_at }) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.isAdmin = isAdmin;
  this.updated_at = updated_at;
}

export default {
  data() {
    return {
      customers: []
    };
  },
  methods: {
    read() {
      this.customers = [];
      window.axios
        .get("https://nathanielpadgett.info/api/customers")
        .then(({ data }) => {
          data.forEach(customer => {
            this.customers.push(new Customer(customer));
          });
        });
    },
    view(id) {},
    rentals(id) {}
  },
  components: {
    CustomerComponent
  },
  created() {
    this.read();
  }
};
</script>
<style>
</style>

