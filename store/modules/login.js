import axios from "axios";
var jwt = require("jsonwebtoken");
const login = {
  namespace: true,
  state: {
    message: "",
    forgetMessage: "",
    phoneNumber: "",
  },
  actions: {
    async LOGIN(context, payload) {
      try {
        const result = await axios.post(
          "https://services.agentsoncloud.com/login",
          payload
        );
        this.$router.push("/weeklyappointments");
        document.cookie = `token=${result.data.token}`;
        console.log(result);
      } catch (err) {
        console.log(err.response.data.message);
        console.log(err.response.status);

        context.state.message = err.response.data.message;
      }
    },
    async forgetPassword(context, payload) {
      try {
        const result = await axios.post(
          "https://services.agentsoncloud.com/forgot",
          payload
        );
        console.log(result);
        console.log(result.data.token);
        const token = result.data.token;
        const decoded = jwt.verify(token,"change this key later on 00");
        context.state.phoneNumber = decoded.phone;
        console.log(context.state.phoneNumber);
        this.$router.push("/forget2");
      } catch (err) {
        console.log("error in catch");
        console.log(err.response.data.message);
        console.log(err.response.status);
        context.state.forgetMessage = err.response.data.message;
      }
    },
    async forget2(context, payload) {
      try {
        const result = await axios.post(
          "https://services.agentsoncloud.com/forgot/verify",
          payload
        );
        console.log(result);
        this.$router.push("/restPassword");
      } catch (err) {
        console.log(err.response.data.message);
        console.log(err.response.status);
        
      }
    },
    async restPassword(context, payload) {
      try {
        const result = await axios.post(
          "https://services.agentsoncloud.com/forgot/password",
          payload
        );
        console.log(result);
        this.$router.push("/login");
      } catch (err) {
        console.log(err.response.data.message);
        console.log(err.response.status);
        
      }
    },
  },
  mutations: {},
  getters: {
    getMessage(state) {
      return state.message;
    },
    getForgetMessage(state) {
      return state.forgetMessage;
    },
    getPhoneNumber(state) {
      return state.phoneNumber;
    },
  },
};
export default login;
