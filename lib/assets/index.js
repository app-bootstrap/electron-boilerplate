const $ = require('jquery');

/*
document.write(process.versions.node);
document.write(process.versions.chrome);
document.write(process.versions.electron);
*/

const Home = {
  template: `
    <div>
      foo12323
    </div>
  `
};
const About = {
  template: `
    <div>
      
    </div>
  `
};

const routes = [
  {
    path: '/home',
    component: Home
  }, {
    path: '/about',
    component: About
  }
];

const router = new VueRouter({
  routes
});

const app = new Vue({
  router,
  template: `
    <div id="content">
      <router-view></router-view>
    </div>
  `
}).$mount('#content');

$('body').on('click', '.nav-item', function() {
  var id = $(this).data('id');
  location.replace(`#/${id}`);
  $('.selected').removeClass('selected');
  $(this).addClass('selected');
});
