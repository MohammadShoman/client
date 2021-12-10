<template>
  <div>
    <tr :key="index1" v-for="(items, index1) in list">
      <th>&nbsp; {{ items.name }}</th>
      <td :key="index2" v-for="(count, index2) in 7" class="day">
        <!-- event -->
        <CardEvent
          v-if="items.weekDays[index2].appointments.length == 1"
          :userName="
            items.weekDays[index2].appointments[0].appointment_patient_id
          "
          :appointmentTimeFrom="
            items.weekDays[index2].appointments[0].appointment_start_time
          "
          :appointmentTimeTo="
            items.weekDays[index2].appointments[0].appointment_end_time
          "
        />

        <div v-else-if="items.weekDays[index2].appointments.length > 1">
          {{ items.weekDays[index2].appointments.length }}
        </div>
      </td>
    </tr>
  </div>
</template>

<script>
import TableHeaderDate from "./TableHeaderDate.vue";
import CardEvent from "./CardEvent.vue";
export default {
  methods: {},
  computed: {
    list: function () {
      return this.$store.getters.getAppoinment;
    },
  },

  created() {
    this.$store.dispatch("getAppoinments");
  },

  mounted() {},
  components: { TableHeaderDate, CardEvent },
};
</script>

<style>
body.rtl {
  direction: rtl;
}
</style>
