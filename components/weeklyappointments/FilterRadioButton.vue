<template>
  <label class="container"
    >{{ nameData }}
    <input @change="filterData" type="radio" name="radio" />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: "FilterRadioButton",
  methods: {
    filterData() {
      this.$emit("filter-data");
    },
  },
  props: {
    nameData: String,
    type:String,
  },
};
</script>

<style></style>