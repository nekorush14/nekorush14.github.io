$(document).ready(function () {
  $('.sidenav')
    .sidenav()
    .on('click tap', 'li a', () => {
      $('.sidenav').sidenav('close');
    });
});

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-134623824-1');