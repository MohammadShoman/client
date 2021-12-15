<template>
  <div>
    <b-form class="forgetPassword">
      <label class="sr-only" for="inline-form-input-username">Username</label>
      <p>Enter Your Email</p>
      <b-input-group prepend="@" class="userName">
        <b-form-input
          v-model="email"
          id="inline-form-input-username"
          placeholder="email"
        ></b-form-input>
      </b-input-group>

      <b-button @click.prevent="forget" class="btn" variant="primary"
        >Save</b-button
      >
      <p style="color: red">{{ getForgetMessage }}</p>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  computed: {
    getForgetMessage() {
      return this.$store.getters.getForgetMessage;
    },
  },
  methods: {
    forget() {
      this.$store
        .dispatch("forgetPassword", {
          email: this.email,
        })
        .then((success) => {
          console.log(success);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.forgetPassword {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20% auto;
  width: 45%;
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: #fff;
  
}
.userName {
  width: 300px;
  margin-top: 100px;
}
.btn {
  width: 100px;
  margin-top: 25px;
}
</style>
