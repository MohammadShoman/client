<template>
  <div class="form-container sign-in-container">
    <form action="#">
      <h1>Sign in</h1>
      <div class="social-container">
        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
      </div>
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <a href="#">Forgot your password?</a>
      <button @click.prevent="login" class="second-button">Sign In</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      fullName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("LOGIN", {
          email: this.email,
          password: this.password,
        })
        .then((success) => {
          this.$router.push("/");
        })
        .catch((err) => {
        });
    },
  },
};
</script>

<style scoped>
.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}
.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}
</style>
