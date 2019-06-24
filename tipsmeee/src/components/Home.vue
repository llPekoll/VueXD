<template>
  <div class="home">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ heading}}</h1>
          <div class="is-two-third column is-paddingless">
            <h2 class="subtitle is-4" style="white-space: pre-line">{{subheading}}</h2>
          </div>
          <a class="button is-large is-primary" id="learn">learn More</a>
          <div class="field has-addons">
            <div class="control">
              <input class="input" type="text" placeholder="Find a Tips">
            </div>
            <div class="control">
              <a class="button is-info">Search</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{
      heading:'TipsMee',
      subheading:'POURBOIRES & DONS SANS APPLI \n NI MATÉRIEL AVEC TIPSMEEE',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'
.hero
  background: url('../assets/01desktop.jpg')
  background-size: cover
.home
  border: none
</style>
