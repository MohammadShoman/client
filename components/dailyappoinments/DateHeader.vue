<template>
  <div class="son">
    <IconArrowLeft @decrease-value="decreaseDate" />
    <h2 class="week-from-to"></h2>
    <IconsArrowRight @increase-value="increaseDate" />
  </div>
</template>

<script>
import IconArrowLeft from "../weeklyappointments/IconArrowLeft.vue";
import IconsArrowRight from "../weeklyappointments/IconsArrowRight.vue";
export default {
  methods: {
    decreaseDate() {
      this.$store.dispatch("addDays", {
        date: this.$store.getters.getStartDate,
        num: -1,
        status: "change_startDate",
      });
      this.$store.dispatch("getAppoinments");
    },
    increaseDate() {
      this.$store.dispatch("addDays", {
        date: this.$store.getters.getStartDate,
        num: 1,
        status: "change_startDate",
      });
      this.$store.dispatch("getAppoinments");
    },
  },
  components: { IconArrowLeft, IconsArrowRight },
};
</script>

<style></style>
