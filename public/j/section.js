if (typeof HTMLElement !== 'function') {
    var _HTMLElement = function() {};
    _HTMLElement.prototype = HTMLElement.prototype;
    HTMLElement = _HTMLElement;
}
class section extends HTMLElement {

    isActive(tag,val) {
        if (tag == val) {
            return 'class ="active"';
        } else {
            return '';
        }
    }

    attachedCallback() {
     //   console.log(this.getAttribute('active'));
        this.innerHTML = `<div style="margin:100px;">
                            <nav class="navbar navbar-inverse navbar-static-top">
                                <div class="container">
                                    <ul class="nav navbar-nav">
                                        <li ${this.isActive('index', this.getAttribute('active'))}>
                                            <a href="/">Home</a>
                                        </li>
                                        <li ${this.isActive('about', this.getAttribute('active'))}>
                                            <a href="/about">About</a>
                                        </li>
                                        <li ${this.isActive('contact', this.getAttribute('active'))}>
                                            <a href="/contact">contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <div class="jumbotron" style="padding:40px;">
                                <h1>Hello, world!</h1>
                            </div>
                        </div>`;
    }
    // createdCallback() {

    //     console.log(this.getAttribute('active'));
    // }

}

document.registerElement('nauk-section', section);
