<template>
  <tr x class="weekdays">
    <th>&nbsp;</th>
    <th
      @click="pushTo(getDate(index))"
      ref="header"
      :key="day"
      v-for="(day, index) in 7"
      scope="col"
    >
      {{ getDate(index) }}
    </th>
  </tr>
</template>

<script>
export default {
  name: "DateHeader",

  methods: {
    getDate: function (index) {
      let date = new Date(this.$store.getters.getStartDate);
      console.log("date ", date);
      date.setDate(date.getDate() + index);
      return (
        date.toLocaleString("en-us", { weekday: "short" }) +
        " " +
        date.toLocaleString("en-us", { month: "short" }) +
        " " +
        date.getDate()
      );
    },

    pushTo(date) {
      console.log("hi ", date);
      this.$store.dispatch("getDailyDate", { dailyDate: date });
      this.$router.push("dailyappointments");
    },
  },
};
</script>

<style></style>
