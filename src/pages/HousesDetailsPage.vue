<template>
  <div class="HousesDetails">
    <h1>House Details</h1>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { housesService } from '../services/HousesService'
export default {
  setup() {
    const route = useRoute()

    onMounted(async() => {
      try {
        await housesService.getOne(route.params.id)
      } catch (error) {
      }
    })
    return {
      house: computed(() => AppState.activeHouse)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
