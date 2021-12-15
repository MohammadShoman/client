<template>
  <div>
    <b-form class="forget2">
      <p>we send code for {{" *******"+ getPhoneNumber.slice(7,10) }}</p>
      <b-input-group class="userName">
        <b-form-input
          v-model="code"
          id="inline-form-input-username"
          placeholder="code here"
        ></b-form-input>
      </b-input-group>

      <b-button @click.prevent="forget2" class="btn" variant="primary"
        >send</b-button
      >
      <p style="color: red">{{ getForgetMessage }}</p>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: this.$store.getters.getPhoneNumber,
      code: "",
    };
  },
  computed: {
    getPhoneNumber() {
      return this.$store.getters.getPhoneNumber;
    },
  },
  methods: {
    forget2() {
      this.$store
        .dispatch("forget2", {
          phone: this.phoneNumber,
          code: this.code,
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

<style>
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
  margin-top: 100px;
}
.btn {
  width: 100px;
  margin-top: 25px;
}
</style>
