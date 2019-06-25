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
    <section class="section">
      <div class="container">
        <div class="columns pd is-desktop">
          <div class="column is-one-third">
            <i class="fa fa-heart log icon is-large has-text-centered"></i> 
            <p class="title column log"><strong>LE COEUR</strong>
            <p>TIPSmeee est un nouveau geste de générosité, pour revaloriser le service et concrètiser des projets. Un service pourvoyeur de lien et de reconnaissance.</p> 
            </p> 
          </div>
          <div class="column is-one-third has-text-center">
          <i class="fa fa-cog log icon is-large inline-flex"></i> 
            <p class="title log"><strong>100% SéCURISé</strong>
            <p>Vos transactions et vos documents sont traités en toute sécurité par nos partenaires bancaires.</p> 
            </p> 
          </div>
          <div class="column is-one-third has-text-center">
          <i class="fab fa-slideshare log icon is-large"></i> 
            <p class="title log"><strong>FACILE POUR PARTAGER</strong>
            <p>Créez des Teams avec vos collègues afin de répartir vos gains entre vous et selon vos règles.</p> 
            </p> 
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
.log
  color: $primary
.hero
  background: url('../assets/01desktop.jpg')
  background-size: cover

  .title
    color: $text-color

  +mobile
    font-weight: bold
  +tablet
    font-size: 2.5rem
  +desktop
    font-size: 4rem
    margin-top: 2rem
h2
  margin: 1.5rem 0 2rem 0 !important
  color: $text-color

.home
  border: none
</style>
