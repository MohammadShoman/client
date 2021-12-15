<template>
  <tr class="weekdays">
    <th>&nbsp;</th>
    <th ref="header" :key="day" v-for="(day, index) in 7" scope="col">
      {{ addDays(startDate, index).split(" ")[0] }}

      <br />
      {{ addDays(startDate, index).split(" ")[1] }}

      {{ addDays(startDate, index).split(" ")[2] }}
    </th>
  </tr>
</template>

<script>
export default {};
</script>

<style>
.weekdays {
  margin-bottom: 0.05%;
}
.weekdays th {
  text-align: center;
  border: none !important;
  padding: 10px 6px;
  color: #949191;
  background-color: #fff;
  font-size: 12px;
  font-family: sans-serif;
  font-weight: bold;
  padding: 3px;
  margin-bottom: 3px;
}
</style>
