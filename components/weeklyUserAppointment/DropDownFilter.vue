<template>
  <nav role="navigation">
    <ul>
      <li class="list-b">
        <a href="#" aria-haspopup="true">{{listValue}}</a>
        <div class="drop-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Group_1"
            data-name="Group 1"
            width="15"
            height="15"
            viewBox="0 0 45 45"
          >
            <path
              id="Path_1"
              data-name="Path 1"
              d="M32.71,18.446,22.3,29.129,12.29,18.446ZM6.79,0H38.214V.011a6.783,6.783,0,0,1,6.775,6.768H45V38.214h-.011a6.783,6.783,0,0,1-6.768,6.775V45H6.786v-.011A6.783,6.783,0,0,1,.011,38.221H0V6.786H.011A6.783,6.783,0,0,1,6.779.011V0ZM38.21,5.149H6.779V5.138A1.676,1.676,0,0,0,5.138,6.786h.011V38.221H5.138a1.676,1.676,0,0,0,1.648,1.641v-.011H38.221v.011a1.676,1.676,0,0,0,1.641-1.648h-.011V6.779h.011a1.676,1.676,0,0,0-1.648-1.641v.011Z"
              fill="#0b5efc"
              fill-rule="evenodd"
            />
          </svg>
        </div>

        <ul  class="dropdown" aria-label="submenu" >
          <li @click="clicked(items.name)" :key="index" v-for="(items, index) in list   "><a href="#">{{ items.name }}</a></li>
        </ul>
        <!-- <ul class="dropdown" aria-label="submenu">
                <li><a href="#">Sub-1</a></li>
                <li><a href="#">Sub-2</a></li>
                <li><a href="#">Sub-3</a></li>
              </ul> -->
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "DropDownFilter",
  props: {
    list2: Array,
   listValue:String
  },
  
  methods: {
    clicked(name) {
      this.listValue=name
    },
  },
};
</script>

<style></style>
