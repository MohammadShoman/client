import axios from "axios";

const Calendar = {
  namespace: true,
  state: {
    startDate: "",
    startDate2: "",
    weeklyHeaderDays: "",
    list: [],
    type: "doctors",
    dailyDate: "",
    lang: "en",
  },

  mutations: {
    changeStartDate(state, payload) {
      return (state.startDate = payload.startDate);
    },
    changeStartDate2(state, payload) {
      return (state.startDate2 = payload.startDate2);
    },
    changeWeeklyHeaderDays(state, payload) {
      return (state.weeklyHeaderDays = payload.weeklyHeaderDays);
    },
    changeList(state, payload) {
      return (state.list = payload.list);
    },
    filterUsers(state, payload) {
      return (state.type = payload.type);
    },
    changeDailyDate(state, payload) {
      return (state.dailyDate = payload.dailyDate);
    },
    changeLang(state, payload) {
      return (state.lang = payload.lang);
    },
  },
  actions: {
    setLang(context, payload) {
      context.commit("changeLang", {
        lang: payload.lang,
      });
    },
    addDays(context, payload) {
      const newD = new Date(payload.date);
      newD.setDate(newD.getDate() + payload.num);
      if (payload.status === "change_startDate")
        context.commit("changeStartDate", { startDate: newD.toString() });
      else if (payload.status === "change_startDate2")
        context.commit("changeStartDate2", { startDate2: newD.toString() });
    },

    getAppoinments(context) {
      axios
        .get(
          `http://localhost:5000/weeklyAppointments/${context.state.type}/${context.state.startDate}`
        )
        .then((res) => {
          context.commit("changeList", { list: res.data.Users });
        });
      {
      }
    },
    getFilterData(context, payload) {
      context.commit("filterUsers", { type: payload.type });
    },
    getDailyDate(context, payload) {
      context.commit("changeDailyDate", { dailyDate: payload.dailyDate });
    },
  },
  getters: {
    getStartDate(state) {
      return state.startDate;
    },
    getStartDate2(state) {
      return state.startDate2;
    },
    getWeeklyHeaderDays(state) {
      return state.weeklyHeaderDays;
    },
    getAppoinment(state) {
      return state.list;
    },
    getFilterData(state) {
      return state.type;
    },
    getDailyDate(state) {
      return state.dailyDate;
    },
    getLang(state) {
      return state.lang;
    },
  },
};
export default Calendar;
