<template>
  <div>
    <b-form class="forget2">
      <p>Enter New Password</p>
      <b-input-group class="userName">
        <b-form-input
          type="password"
          v-model="password"
          id="inline-form-input-username"
          placeholder="password"
        ></b-form-input>
      </b-input-group>

      <b-input-group class="userName">
        <b-form-input
          type="password"
          v-model="confirm"
          id="inline-form-input-username"
          placeholder="confirm password"
        ></b-form-input>
      </b-input-group>

      <b-button
        @click.prevent="checkPass(password, confirm)"
        class="btn"
        variant="primary"
        >save</b-button
      >
      <p style="color: red">{{ m }}</p>
      <p style="color: green">{{ t }}</p>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      confirm: "",
      m: "",
      t: "",
    };
  },
  methods: {
    restPassword() {
      this.$store
        .dispatch("restPassword", {
          password: this.password,
          phone: this.$store.getters.getPhoneNumber,
        })
        .then((success) => {
          console.log(success);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    checkPass(a, b) {
      console.log("aaaaaaa", a, b);
      if (a === b) {
        this.restPassword();
        this.t = "password cheange successfully";
        console.log(this.t);
      } else {
        this.m = "passwords dont match";
        console.log(m);
      }
    },
  },
};
</script>

<style scoped>
.forget2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20% auto;
  width: 45%;
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
.userName {
  width: 200px;
  margin-top: 50px;
}
.btn {
  width: 100px;
  margin-top: 25px;
}
</style>
