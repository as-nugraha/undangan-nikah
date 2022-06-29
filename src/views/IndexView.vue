<template>
  <!--Modal-->
  <p>
    <button @click="showModal">Show modal</button>
  </p>
  <!-- If the option changed modal component the name
  <MyModal>
  -->
  <Modal v-model="isShow" :close="closeModal">
    <div class="modal">
      <p>Hello</p>
      <button @click="closeModal">close</button>
    </div>
  </Modal>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const isShow = ref(false);

    function showModal() {
      isShow.value = true;
    }

    function closeModal() {
      isShow.value = false;
    }

    return {
      isShow,
      showModal,
      closeModal,
    };
  },
});
</script>

<style scoped>
.modal {
  width: 300px;
  padding: 30px;
  box-sizing: border-box;
  background-color: #fff;
  font-size: 20px;
  text-align: center;
}
  /* .modal {
  transition: opacity 0.25s ease;
  }
  body.modal-active {
  overflow-x: hidden;
  overflow-y: visible !important;
  }
  .opacity-95 {opacity: .95;} */
</style>