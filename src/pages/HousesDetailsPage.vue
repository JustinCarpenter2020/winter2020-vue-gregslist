<template>
  <div class="HousesDetails">
    <h1>House Details: $ {{ house.price }}</h1>
    <div class="row">
      <div class="col-12">
        <h3>
          {{ house.description }}
        </h3>
        <p>
          Bath {{ house.bathrooms }} | Bedrooms {{ house.bedrooms }}
        </p>
        <p>
          {{ house.year }}
        </p>
        <img :src="house.imgUrl" />
      </div>
    </div>
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
