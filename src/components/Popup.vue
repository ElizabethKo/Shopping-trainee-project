<template>
  <div class="popup">

  </div>
</template>

<script>
export default {
  name: "Popup",
  data(){
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.modal {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 5px;
}
</style>