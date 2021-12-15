<template>
  <div class="son">
    <IconArrowLeft />

    <h2 class="week-from-to">
      <WeekFromTo />
    </h2>
    <IconsArrowRight />
  </div>
</template>

<script>
import IconArrowLeft from "./IconArrowLeft.vue";
import WeekFromTo from "./WeekFromTo.vue";
import IconsArrowRight from "./IconsArrowRight.vue";
export default {
  components: { IconArrowLeft, WeekFromTo, IconsArrowRight },
};
</script>

<style>
.son {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: right;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
