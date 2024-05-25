const app = {
    headerNav: document.querySelector('#header-nav'),
    burgerMenu: document.querySelector('#burger-menu'),
    burgerIcon: document.querySelector('#burger-menu-icon'),
    lastScroll:0,


    init() {
        window.addEventListener('scroll', this.handleNavOnScroll.bind(this));
        this.burgerIcon.addEventListener('click', this.handleBurgerMenu.bind(this));

    },

    handleNavOnScroll() {
        let currentScroll = window.scrollY;
        
        if (currentScroll === 0) {
            this.headerNav.style.height = "7rem";
            this.headerNav.style.top = "0";
        }

        if (currentScroll > 100) {
            this.headerNav.style.height = "3.5rem";
            this.headerNav.style.padding = "0.2rem 0"
            
            if (currentScroll < this.lastScroll) {
                this.headerNav.style.top = 0;
            } else {
                this.headerNav.style.top = '-100px';
            }
            this.lastScroll = currentScroll;
        }
    },

    handleBurgerMenu() {
        this.burgerMenu.classList.toggle("burgerOut");
    }
};

app.init();