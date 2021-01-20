<template>
  <div class="HousesPage container-fluid">
    <h1>Houses:</h1>
    <House v-for="house in houses" :key="house.id" :house="house" />
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { housesService } from '../services/HousesService'
import { AppState } from '../AppState'
import House from '../components/House.vue'
import { useRouter } from 'vue-router'
export default {
  name: 'HousesPage',
  setup() {
    // review not sure what use router does
    const router = useRouter()
    const state = reactive({
      newHouse: {}
    })

    onMounted(() => {
      try {
        housesService.getHouses()
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    })
    return {
      state,
      houses: computed(() => AppState.houses),

      async createHouse() {
        try {
          const id = await housesService.create(state.newHouse)
          state.newHouse = {}
          // change route in javascript using router.push()
          router.push({ name: 'housesDetails', params: { id } })
        } catch (error) {
          console.error(error)
        }
      }

    }
  },
  components: {
    House
  }
}
</script>

<style lang="scss" scoped>

</style>
