

page('/', index);
page('/about', about);
page('/contact', contact);

page('*', function(){
  renderContent('Not found!')
});

page();


function renderContent(content) {
    $('.jumbotron').find('h1').html(content);
}

function index() {
//	$('.navbar-nav').find('li').eq(0).toggleClass('active','');
    renderContent('Home page')
    console.log('Home page handler')
}

function about() {
//	$('.navbar-nav').find('li').eq(1).toggleClass('active','');
    renderContent('About page')
    console.log('about page handler')
}

function contact() {
//	$('.navbar-nav').find('li').eq(2).toggleClass('active','');
    renderContent('Contact page')
    console.log('contact page handler')
}


