import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Button,
  Field,
  CellGroup,
  Row,
  Col,
  Grid,
  GridItem,
  Image,
  Tabbar,
  Cell,
  TabbarItem,
  Picker,
  Popup,
  Form, NavBar, Stepper, CheckboxGroup, Checkbox
} from 'vant';
import 'vant/lib/index.css';

Vue.use(Button).use(Field).use(CellGroup).use(Row).use(Col).use(Grid).use(GridItem).use(Image);
Vue.use(Tabbar).use(TabbarItem).use(Cell).use(Picker).use(Popup).use(Form).use(NavBar).use(Stepper).use(CheckboxGroup)
    .use(Checkbox)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
