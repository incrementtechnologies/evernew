<template>
<div class="container-fluid">
  
  <h3>EverNew Appliance, this is Kent. How may I help you?</h3>
    <div class="search-form">
    <b-form inline>
    <label class="sr-only" for="inline-form-input-zipcode">What is your zipcode</label>
    <div class="insidebutton">
    <b-input
      id="inline-form-input-zipcode"
      class="mb-5 mr-sm-0 mb-sm-0"
      placeholder="What is your zip code?"
    ></b-input>

    <b-button class="button" variant="primary" type="button" data-toggle="modal" data-target="#error"> <i class="fas fa-search"></i></b-button>
    </div>
  </b-form>
             
     </div>
    
       <!--MODAL FOR ERROR-->
      <div class="modal fade right" id="error" tabindex="-1" role="dialog" aria-labelledby="noZipcode"
            aria-hidden="true" data-keyboard="false" data-backdrop="static">
            <div class="modal-dialog modal-side modal-notify modal-primary modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title" id="header"></h6>
                </div> 
                <div class="modal-body p-12">
                <p class="d-block text-center">The zip code is out of order.</p>
                 </div>
          <div class="modal-footer ">
            <button class="btn btn-primary btn-md" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

</div>
</template>

<style scoped lang="scss">
@import "~assets/style/colors.scss";
 h3{
     margin-left: 25% !important;
     margin-top: 10% !important;
     margin-bottom: 15px !important;
 }
.search-form{
    margin-left: 30%;
}
.mb-5{
  height:43px;
  width:100%;
  padding-left:10px;
  border-radius: 45px;
}
.modal-header{
    background-color: #129992;
    padding: 25px;
}
.modal-body{
    padding: 15px;
}

.button{
  position:absolute;
  right: 0px;
  top: 4px;
  height:19px;
  width:36px;
  border-radius:45px;
  text-align:center;
  font-weight:bold;
  padding:2px;
  margin-right: 7px;
}
.insidebutton{
  position:relative;
  margin-bottom:10px;
  width: 60%;
}
@media screen and (max-width: 992px){
}

</style>

<script>
export default {
}
</script>
