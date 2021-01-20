<template>
  <div class="House">
    <div class="col-md-4 col-6 mt-3 d-flex align-items-stretch flex-wrap">
      <router-link :to="{ name: 'HousesDetails', params: { id : house.id } }">
        <div class="card cardFont cards">
          <img class="card-img-top" :src="house.imgUrl" alt="">
          <div class="card-body">
            <h4 class="card-title">
              {{ house.description }}
            </h4>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'House',
  props: {
    house: {
      type: Object,
      required: true
    }
  },
  setup(props) {
  }
}
</script>

<style lang="scss" scoped>

</style>
