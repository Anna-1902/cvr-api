
<template>

  <main>
    <h1>CVR opslag</h1>

    <input type="text" v-model="input">
    <button @click="search">Søg</button>

    <div v-if="result != ''">
      <p>{{result}}</p>
    </div>
  </main>
</template>

<script>

import cvr from '@arpi-1902/cvr-api'

export default {
  data () {
    return {
      input: '',
      result:''
    }
  },

  methods: {
    async search(){
      let response = await cvr.getCompanyBySearch(this.input, 'dk')
      console.log(response)
      this.result = response

    }
  }
}
</script>

<style>



</style>
