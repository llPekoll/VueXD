<template>
  <div id="app">
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="./assets/logo.png" width="50" height="200" viewBox="0 0 300 150">
          <span> </span>
          <span> </span>
          <span> </span>
          <p>_ TipsMeee!</p>
        </a>
          <div class="navbar-burger burger" @click="toggleNav" v-bind:class="{ 'is-active':isActive}">
            <span></span>
            <span></span>
            <span></span>
        </div>
      </div>
      <div class=" navbar-menu" v-bind:class="{ 'is-active':isActive}">
        <div class="navbar-end">
            <router-link to="tips" class="navbar-item r-item">Tips</router-link>
            <router-link to="tips" class="navbar-item r-item">About</router-link>
            <div class="navbar-item">
              <p class="control">
                <a class="button is-primary is-outlined">
                  <span>Log In</span>
                </a>
              </p>
            </div>
            <div class="navbar-item">
              <p class="control">
                <a class="button is-primary">
                  <span class="icon">
                    <i class="fas fa-download"></i>
                  </span>
                  <span>Sign In</span>
                </a>
              </p>
            </div>
            <!-- <router-link to="tips" class="navbar-item r-item">SignIn</router-link> -->
        </div>
      </div>
    </nav>
    <router-view/>
    <footer class="footer is-primary">
      <div class="container">
        <div class="columns ">
          <div class="column has-text-centered">
            <a class="icon" href="#"><i class="fab fa-facebook fa-2x"></i></a>
            <a class="icon" href="#"><i class="fab fa-twitter fa-2x"></i></a>
            <a class="icon" href="#"><i class="fab fa-wordpress fa-2x"></i></a>
            <a class="icon" href="#"><i class="fab fa-instagram fa-2x"></i></a>
            <a class="icon" href="#"><i class="fab fa-linkedin fa-2x"></i></a>
            <ul>
              <li>Conditions d'utilisations </li> |
              <li>Mentions légales </li> |
              <li>Cookies Politique de confidentialité </li> |
              <li>Contact </li> 
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function(){
    return{
      isActive: false
    }
  },
  methods: {
    toggleNav: function(){
      this.isActive = ! this.isActive;
    }
  }
}
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import 'mq'

.navbar
  background-color: #383838
  a
    color: $text-color
    &:hover
      color: pink

.navbar-brand a
  color: $text-color
  font-weight: bold

a.r-item
  color:#c1c1c1
  padding: 0.5rem 1.75rem
  +mobile
    color: gray
.burger:hover
  background-color: #f1f1f1
.burger span
  color: #c1c1c1
li
  display: inline

.footer
  color: $text-color
  background-color: $primary !important
  .icon
    color: $text-color
    margin-left: 20px
.navbar
   border: none

</style>
