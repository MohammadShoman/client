<template>
  <div>
    <DateHeader />
    <IconArrowLeft @weeklyappointments-decrease-value="decreaseDate" />
    <IconsArrowRight @weeklyappointments-decrease-value="decreaseDate" />

    {{ getDailyDate }}
  </div>
</template>

<script>
import DateHeader from "../components/dailyappoinments/DateHeader.vue";
import IconsArrowRight from "../components/weeklyappointments/IconsArrowRight.vue";
export default {
  computed: {
    decreaseDate() {
      this.$store.dispatch("addDays", {
        date: this.$store.getters.getStartDate,
        num: -1,
        status: "change_startDate",
      });
      this.$store.dispatch("getAppoinments");
    },
    getDailyDate() {
      return this.$store.getters.getDailyDate;
    },

  },
  components: { DateHeader, IconsArrowRight },
};
</script>

<style></style>
