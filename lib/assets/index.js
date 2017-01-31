const Vue = require('vue');
const $ = require('jquery');

document.write(process.versions.node);
document.write(process.versions.chrome);
document.write(process.versions.electron);

$('body').on('click', 'a', function() {
  alert(1);
});
