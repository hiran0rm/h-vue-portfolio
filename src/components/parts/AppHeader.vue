<template>
    <header>
      <v-app-bar
        app
        dark
        color="blue"
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>MyPortfolioSite</v-toolbar-title>
        <v-tabs>
          <v-tab
            v-for="(menuItem, index) in menuItems"
            :key="index"
            :to="menuItem.url"
          >
            {{ menuItem.name }}
          </v-tab>
        </v-tabs>

      </v-app-bar>
      <!-- ここから -->
      <v-navigation-drawer
        v-model="drawer"
        dark
        color="primary"
        fixed
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group>
            <v-list-item
              v-for="(menuItem, index) in menuItems"
              :key="index"
              :to="menuItem.url"
            >
              <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <!-- ここまで -->
    </header>
</template>

<script>
import constants from '../../common/constants.js'

export default {
    name: 'AppHeader',
    data () {
      return {
        drawer: false,
        menuItems: constants.menuItems
      }
    }
}
</script>

<style lang="scss" scoped>
@import "../../styles/common/common.scss";

.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}

.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}
 
.v-tabs {
  display: none;
 
  @include display_pc {
    display: block !important;
  }
}
</style>
