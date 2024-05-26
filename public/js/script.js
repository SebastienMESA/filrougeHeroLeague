const app = {
    headerNav: document.querySelector('#header-nav'),
    burgerMenu: document.querySelector('#burger-menu'),
    burgerIcon: document.querySelector('#burger-menu-icon'),
    windowWidth: window.innerWidth,
    lastScroll:0,


    init() {
        window.addEventListener('resize', this.getWindowSize.bind(this));
        window.addEventListener('scroll', this.handleNavOnScroll.bind(this));
        this.burgerIcon.addEventListener('click', this.handleBurgerMenu.bind(this));


    },

    handleNavOnScroll() {
        let currentScroll = window.scrollY;
        
        if (currentScroll === 0) {
            this.headerNav.style.height = "10vh";
            this.headerNav.style.top = "0";
        }

        if (this.windowWidth > 992) {
            if (currentScroll > 100) {
                this.headerNav.style.height = "3.5rem";
                
                if (currentScroll < this.lastScroll) {
                    this.headerNav.style.top = 0;
                } else {
                    this.headerNav.style.top = '-3.5rem';
                }
                this.lastScroll = currentScroll;
            }
        }
    },

    handleBurgerMenu() {
        this.burgerMenu.classList.toggle("burgerOut");
    },

    getWindowSize() {
        this.windowWidth = window.innerWidth;
    }
};

app.init();