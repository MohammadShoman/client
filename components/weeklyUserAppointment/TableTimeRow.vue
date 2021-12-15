<template>
  <div>
    
    <tr :key="index" v-for="(items, index) in list2">
        <th :key="i" v-for="(item,i) in items.weekDays[0].appointmentTimes">
            {{item.Time}}
        </th>
      
      <td :key="index" v-for="(count, index) in number" class="day">
        <!-- event -->
        <CardEvent
          v-if="items.weekDays[index].appointmentTimes[index].appointments.length == 1"
          :userName="items.weekDays[index].appointmentTimes[0].appointments"
          :appointmentTimeFrom="
            items.weekDays[index].appointmentTimes[0].appointments
          "
          :appointmentTimeTo="
            items.weekDays[index].appointmentTimes[0].appointments
          "
        />

        <div v-else-if="items.weekDays[index].appointments.length > 1">
          {{ items.weekDays[index].appointmentTimes[0].appointments.length }}
        </div>
      </td>
    </tr>
  </div>
</template>

<script>
import CardEvent from "../weeklyappointments/CardEvent.vue";
export default {
  name: "TableTimeRow",
  components: { CardEvent },
  computed: {
    list2: function () {
      return this.$store.getters.getWeeklyTimeAppoinments;
    },
  },

  created() {
    this.$store.dispatch("getWeeklyTimeAppoinments");
  },

  methods: {},
};
</script>

<style>
.body {
  margin: 0%;
}
.arrow1 {
  cursor: pointer;
}

.arrow2 {
  cursor: pointer;
}
.header {
  background-color: #c3c0c01c;
  padding: 25px;
}
.header-items {
  margin-right: 2.5%;
  margin-left: 2.5%;
}
.calendar-wrapper {
  padding: 6%;
  background-color: #c3c0c01c;
}
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 13px;
  -ms-user-select: none;
  user-select: none;
  float: left;
  margin-left: 20px;
  font-family: sans-serif;
  margin-bottom: 40px;
}
.container input {
  opacity: 0;
  cursor: pointer;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.container:hover input ~ .checkmark {
  background-color: #ffffff;
}
.container input:checked ~ .checkmark {
  background-color: #0b5efc;
  box-shadow: 0px 0px 15px 2px rgb(170 167 167 / 25%);
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.container input:checked ~ .checkmark:after {
  display: block;
}
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
.center {
  padding-top: 25px;
  display: block;
  text-align: center;
  font-size: 20px;
  font-family: sans-serif;
}
.son {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
}
.button-group {
  position: relative;
  display: inline-flex;
  float: right;
}
.buttons {
  margin-right: 20px;
  font-size: 13px;
}
.button1 {
  background-color: #fff;
  border-radius: 5px;
  line-height: 20px;
  padding: 5px 20px;
  color: #0b5efc !important;
  margin-right: 5px;
  font-family: sans-serif;
  border: 1px solid #0b5efc;
  text-decoration: none;
  letter-spacing: 1px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.button1:focus {
  background-color: #eceef8;
  border-radius: 5px;
  line-height: 20px;
  padding: 5px 20px;
  color: #0b5efc !important;
  margin-right: 5px;
  font-family: sans-serif;
  border: 1px solid #0b5efc;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 1px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.button1:hover {
  background-color: #eceef8;
  border-radius: 5px;
  line-height: 20px;
  padding: 5px 20px;
  border: none;
  color: #0b5efc !important;
  margin-right: 5px;
  font-family: sans-serif;
  border: 1px solid #0b5efc;
  text-decoration: none;
  letter-spacing: 1px;
  cursor: pointer;
}

.button2 {
  background-color: #fff;
  border-radius: 5px;
  line-height: 20px;
  padding: 5px 25px;
  color: #0b5efc !important;
  margin-right: 5px;
  font-family: sans-serif;
  border: 1px solid #0b5efc;
  text-decoration: none;
  letter-spacing: 1px;
}
.button2:focus {
  background-color: #eceef8;
  border-radius: 5px;
  line-height: 20px;
  padding: 5px 25px;
  color: #0b5efc !important;
  margin-right: 5px;
  font-family: sans-serif;
  border: 1px solid #0b5efc;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 1px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.button2:hover {
  background-color: #eceef8;
  border-radius: 5px;
  line-height: 20px;
  padding: 5px 25px;
  border: none;
  color: #0b5efc !important;
  margin-right: 5px;
  font-family: sans-serif;
  border: 1px solid #0b5efc;
  text-decoration: none;
  letter-spacing: 1px;
  cursor: pointer;
}
.button3 {
  background-color: #fff;
  border-radius: 5px;
  line-height: 20px;
  padding: 5px 10px;
  color: #0b5efc !important;
  margin-right: 5px;
  font-family: sans-serif;
  border: 1px solid #0b5efc;
  text-decoration: none;
  letter-spacing: 1px;
}
.button3:focus {
  background-color: #eceef8;
  border-radius: 5px;
  line-height: 20px;
  padding: 5px 10px;
  color: #0b5efc !important;
  margin-right: 5px;
  font-family: sans-serif;
  border: 1px solid #0b5efc;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 1px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.button3:hover {
  background-color: #eceef8;
  border-radius: 5px;
  line-height: 20px;
  padding: 5px 10px;
  border: none;
  color: #0b5efc !important;
  margin-right: 5px;
  font-family: sans-serif;
  border: 1px solid #0b5efc;
  text-decoration: none;
  letter-spacing: 1px;
  cursor: pointer;
}
.button4 {
  background-color: #fff;
  border-radius: 5px;
  line-height: 20px;
  padding: 5px 20px;
  color: #0b5efc !important;
  margin-right: 5px;
  font-family: sans-serif;
  border: 1px solid #0b5efc;
  text-decoration: none;
  letter-spacing: 1px;
}
.button4:focus {
  background-color: #eceef8;
  border-radius: 5px;
  line-height: 20px;
  padding: 5px 20px;
  color: #0b5efc !important;
  margin-right: 5px;
  font-family: sans-serif;
  border: 1px solid #0b5efc;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 1px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.button4:hover {
  background-color: #eceef8;
  border-radius: 5px;
  line-height: 20px;
  padding: 5px 20px;
  border: none;
  color: #0b5efc !important;
  margin-right: 5px;
  font-family: sans-serif;
  border: 1px solid #0b5efc;
  text-decoration: none;
  letter-spacing: 1px;
  cursor: pointer;
}
.filter {
  color: #949191;
}
.left {
  font-family: sans-serif;
  font-size: 10px;
  color: #949191;
  margin-bottom: 20px;
}
.middle {
  padding-top: 50px;
  text-align: center;
  font-size: 17px;
  font-family: sans-serif;
  letter-spacing: 1.8px;
}

#calendar {
  width: 100%;
  grid-template-columns: repeat(7, 12.2%);
  box-shadow: 1px 25px 20px 0px rgb(170 167 167 / 25%);
}
#calendar tr,
#calendar tbody {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(8, 12.5%);
  background-color: #fff;
}
caption {
  text-align: center;
  grid-column: 1 / -1;
  font-size: 130%;
  padding: 10px 0;
  color: #949191;
  font-family: sans-serif;
  letter-spacing: 2px;
}
#calendar a {
  color: #949191;
  text-decoration: none;
}
#calendar td,
#calendar th {
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #ebe9f1;
}
#calendar .weekdays {
  background: #ffffff;
  border: 1px solid #ebe9f1;
}
#calendar .weekdays th {
  text-align: center;
  border: none !important;
  padding: 10px 6px;
  color: #949191;
  background-color: #fff;
  font-size: 12px;
  font-family: sans-serif;
  font-weight: bold;
  padding: 3px;
}
#calendar td {
  min-height: 130px;
  display: flex;
  flex-direction: column;
}
#calendar .days li:hover {
  background: #d3d3d3;
}

#calendar .event {
  flex: 0 0 auto;
  font-size: 13px;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 5px;
  line-height: 14px;
  background: #eceef8;
  border: 1px solid #0b5efc;
  color: #0b5efc;
  text-decoration: none;
  margin-top: 40px;
}
#calendar .event-desc {
  color: #949191;
  margin: 3px 0 7px 0;
  text-decoration: none;
  font-size: 80%;
  font-family: sans-serif;
}
#calendar .other-month {
  background: #f5f5f5;
  color: #949191;
}
/* ============================
                  Mobile Responsiveness
     ============================*/
@media (max-width: 768px) {
  #calendar .weekdays,
  #calendar .other-month {
    display: none;
  }
  #calendar li {
    height: auto !important;
    border: 1px solid #ededed;
    width: 100%;
    padding: 10px;
    margin-bottom: -1px;
  }
  #calendar,
  #calendar tr,
  #calendar tbody {
    grid-template-columns: 1fr;
  }
  #calendar tr {
    grid-column: 1 / 2;
  }
  #calendar .date {
    align-self: flex-start;
  }
}
.icon-bar {
  width: 100%;
  background-color: #fff;
  overflow: auto;
  box-shadow: 0px 0px 15px 4px rgb(170 167 167 / 25%);
}
.icon-bar a {
  float: right;
  width: 6%;
  text-align: center;
  padding: 10px 0;
  transition: all 0.3s ease;
  color: white;
  font-size: 25px;
  color: #949191;
  text-decoration: none;
}
.icon2 {
  font-style: inherit;
}
.icon2:hover {
  background-color: #fff;
}

.icon-bar a:hover {
  background-color: #eceef8;
}

.right-bar a:hover {
  background-color: #eceef8;
}

.active {
  background-color: #eceef8;
}
.dropdown-content a:hover {
  background-color: #eceef8;
}

.dropdown:hover .dropdown-content {
  display: inline-grid;
  top: 95px;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 0px 9px 3px rgb(170 167 167 / 25%);
  z-index: 1;
  right: 78px;
}
.dropdown-content a {
  color: #949191;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  right: 0;
  font-size: 12px;
  font-family: sans-serif;
  width: auto;
}
.arrows {
  float: right;
  margin-left: -20px;
}
.arrows2 {
  float: left;
  margin-left: -20px;
}
#calendar .event2 {
  flex: 0 0 auto;
  font-size: 13px;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 5px;
  line-height: 14px;
  background: #f8ecf5;
  border: 1px solid #fc0bc8;
  color: #fc0bc8;
  text-decoration: none;
  margin-top: 40px;
}
.username {
  margin-left: 35px;
  float: left;
  font-size: 14px;
  font-family: sans-serif;
  letter-spacing: 3px;
  font-weight: 700;
  color: cornflowerblue;
}
.week-from-to {
  padding-bottom: 5px;
  color: grey;
}
</style>
