<template>
  <div @click.prevent="decreaseValue" class="arrow1">
    <a href="#"
      ><i class="arrow-icon"></i
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#949191"
        class="bi bi-chevron-left"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
        /></svg
    ></a>
  </div>
</template>

<script>
export default {
  name: "IconsArrowLeft",

  methods: {
    decreaseValue: function () {
      this.$store.dispatch("addDays", {
        date: this.$store.getters.getStartDate,
        num: -7,
        status: "change_startDate",
      });
      this.$store.dispatch("getAppoinments");
    },
  },
};
</script>

<style></style>
