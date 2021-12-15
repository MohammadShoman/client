<template>
  <div>
    <table id="calendar">
      <TableHeaderDate />
      <TableTimeRow />
    </table>
  </div>
</template>

<script>
import TableTimeRow from "./TableTimeRow.vue";
import TableHeaderDate from "../weeklyappointments/TableHeaderDate.vue";

export default { components: { TableHeaderDate, TableTimeRow } };
</script>

<style></style>
