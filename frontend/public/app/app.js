const DOM = {
    headerNav: document.querySelector("#header-nav"),

    init() {
        window.addEventListener('scroll', this.handleNavEvent.bind(this))
        
    },
    handleNavEvent() {
        if (window.scrollY > 100){
            this.headerNav.style.padding = "0.25rem 0"
        } else {
            this.headerNav.style.padding = "2rem 0"
        }
    
    },
}

DOM.init();

