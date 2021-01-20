<template>
  <div class="Job">
    <div class="col-md-4 col-6 mt-3 d-flex align-items-stretch flex-wrap">
      <router-link :to="{ name: 'JobDetails', params: { id : job.id } }">
        <div class="card cardFont cards">
          <h4 class="card-title">
            {{ job.company }}
          </h4>
          <p>Searching for a {{ job.jobTitle }}</p>
          <div class="card-body">
            <p>Work Description: {{ job.description }} </p>
            <p>Hours Required {{ job.hours }} per week | Rate {{ job.rate }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Job',
  props: {
    job: {
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
