<template>

  <div class="a">
 <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
    

    <b-card class="card"  >
      <div  class="card-Header">
        <div class="left">
        <i class='fas fa-exclamation-triangle' style='font-size:14px;color:orange'></i>
        <h6 class="name">Name</h6>
        </div>
       <i class='fas fa-compress-alt' id="icon" style="color:gray"></i>
      </div>
      <div class="cardBody">
      <b-card-text style="color:blue">Doctor name</b-card-text>
      <b-card-text>time</b-card-text>
      <b-card-text>procedure</b-card-text>
      </div>
      
    </b-card>

</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.a{
  margin: 100px 0 100px 200px;
}
.card{
  width: 25%;
  height: 160px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
border-radius: 5px;
}
.card-Header{
  display: flex;
  flex-direction: row;
  background-color: #e4e1e1;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  border-radius: 5px 5px 0 0;
}
.card-body{
  padding: 0;
}
.cardBody{
padding-left: 4%;
padding-top: 2%;
}
#icon{
  float: right;
}
.fa-compress-alt{
  margin: 10px 10px 0 0;
}
.name{
  margin-left:10px;
}
.left{
  display: flex;
  flex-direction: row;
  margin: 10px 0 0 10px;
}
</style>