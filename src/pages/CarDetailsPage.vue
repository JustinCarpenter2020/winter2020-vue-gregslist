<template>
  <div class="car-details">
    <h1>Welcome to car details</h1>
    <img v-if="state.loaded" :src="car.imgUrl" alt="" />
    <h1 v-else>
      Loading...
    </h1>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { carsService } from '../services/CarsService'
// IMPORTANT REVIEW
export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      loaded: false
    })
    // onBeforeRouteLeave(() => {
    //   AppState.activeCar = {}
    // })
    onMounted(async() => {
      try {
        await carsService.getOne(route.params.id)
      } catch (error) {
        console.error(error)
      } finally {
        state.loaded = true
      }
    })
    return {
      state,
      car: computed(() => AppState.activeCar)
    }
  }
}
</script>

<style>
</style>
