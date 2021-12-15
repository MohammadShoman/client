<template>
  <div>
    <div class="container1" id="container1">
      <LoginForm />
      <LoginWelcome />
    </div>
    <SocialMediaIcons />
  </div>
</template>

<script>
import LoginForm from "../components/login/LoginForm.vue";
import LoginWelcome from "../components/login/LoginWelcome.vue";
import SocialMediaIcons from "../components/login/SocialMediaIcons.vue";
export default {
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
          if (success.status === 200) {
            this.$router.push("/weeklyappointments");
            console.log(success);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: { LoginForm, LoginWelcome, SocialMediaIcons },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");

* {
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  background-color: #f7f7f7;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1 {
  font-weight: bold;
  margin: 0;
}

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

button {
  border-radius: 20px;
  border: 1px solid #0b5efc;
  background-color: #0b5efc;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  font-family: "Montserrat";
}
.ghost {
  border-radius: 20px;
  border: 1px solid #0b5efc;
  background-color: #ffffff !important;
  color: #0b5efc;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  margin-top: 60px;
  font-family: "Montserrat";
  display: none;
}
.ghost:hover {
  background-color: aqua;
}

button:active {
  transform: scale(0.95);
}
button:hover {
  cursor: pointer;
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

form {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

.container1 {
  margin-top: 90px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0px 28px rgb(0 0 0 / 25%), 0 7px 10px rgb(0 0 0 / 22%);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}


@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}


</style>
