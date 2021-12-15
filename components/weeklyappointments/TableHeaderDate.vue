<template>
  <tr class="weekdays">
    <th>&nbsp;</th>
    <th ref="header" :key="day" v-for="(day, index) in 7" scope="col">
      {{ a(index) }}
    </th>
  </tr>
</template>

<script>
export default {
  name: "DateHeader",

  methods: {
    a: function (index) {
      let date = new Date(this.$store.getters.getStartDate);
      console.log("date ", date);
      date.setDate(date.getDate() + index);
      return (
        date.toLocaleString("en-us", { weekday: "short" }) +
        "\n" +
        date.toLocaleString("en-us", { month: "short" }) +
        " " +
        date.getDate()
      );
    },
  },
};
</script>

<style></style>
