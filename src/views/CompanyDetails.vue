<template>
  <h1>Company Details</h1>
  <p><strong>Delivery</strong></p>
  <p>Enter your home or work address when making your purchase and we will send the order to the address of your choice. {{id}} </p>

  <div>
    <p><strong>Contact us</strong></p>
    <p>
      E-MAIL

      Do you have any queries or questions? Send us an e-mail and we will reply to you as soon as possible.
      TELEPHONE

      You can call us on 02-511-0598. The telephone assistance hours are Monday to Friday,from 10:00 am to 7:00 pm Korea time (local rate).
      POST

      If you prefer, you can write to us at the following address:

      MANGO
      Dpto. de Atención al Cliente
      Calle Mercaders 9-11
      Pol. Ind. Riera de Caldes
      C.P. 08184 Palau-solità i Plegamans
      Barcelona (Spain){{id}}</p>
  </div>
</template>



<script>
export default {
  name: "CompanyDetails",
  props: ['id'],


}
</script>

<style scoped>

</style>