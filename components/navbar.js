document.addEventListener('DOMContentLoaded', () => {
    const menuComponent = `

    <div id="preloader" class="preloader ">
        <button class="th-btn th-radius preloaderCls">Cancel Preloader </button>
        <div id="loader" class="th-preloader">
            <div class="animation-preloader">
                <div class="txt-loading">
                    <span preloader-text="W" class="characters">W</span>

                    <span preloader-text="E" class="characters">E</span>

                    <span preloader-text="B" class="characters">B</span>

                    <span preloader-text="T" class="characters">T</span>

                    <span preloader-text="E" class="characters">E</span>

                    <span preloader-text="C" class="characters">C</span>

                    <span preloader-text="K" class="characters">K</span>
                </div>
            </div>
        </div>
    </div> <!--==============================
    Sidemenu
============================== -->
    <div class="sidemenu-wrapper ">
        <div class="sidemenu-content">
            <button class="closeButton sideMenuCls"><i class="far fa-times"></i></button>
            <div class="widget woocommerce widget_shopping_cart">
                <h3 class="widget_title">Shopping cart</h3>
                <div class="widget_shopping_cart_content">
                    <ul class="woocommerce-mini-cart cart_list product_list_widget ">
                        <li class="woocommerce-mini-cart-item mini_cart_item">
                            <a href="#" class="remove remove_from_cart_button"><i class="far fa-times"></i></a>
                            <a href="#"><img src="./assets/img/product/product_thumb_1_1.jpg" alt="Cart Image">Gaming Computer</a>
                            <span class="quantity">1 ×
                                <span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">$</span>940.00</span>
                            </span>
                        </li>
                        <li class="woocommerce-mini-cart-item mini_cart_item">
                            <a href="#" class="remove remove_from_cart_button"><i class="far fa-times"></i></a>
                            <a href="#"><img src="./assets/img/product/product_thumb_1_2.jpg" alt="Cart Image">Smartphone Vivo V9</a>
                            <span class="quantity">1 ×
                                <span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">$</span>899.00</span>
                            </span>
                        </li>
                        <li class="woocommerce-mini-cart-item mini_cart_item">
                            <a href="#" class="remove remove_from_cart_button"><i class="far fa-times"></i></a>
                            <a href="#"><img src="./assets/img/product/product_thumb_1_3.jpg" alt="Cart Image">SanDisk Flash Drive</a>
                            <span class="quantity">1 ×
                                <span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">$</span>756.00</span>
                            </span>
                        </li>
                        <li class="woocommerce-mini-cart-item mini_cart_item">
                            <a href="#" class="remove remove_from_cart_button"><i class="far fa-times"></i></a>
                            <a href="#"><img src="./assets/img/product/product_thumb_1_4.jpg" alt="Cart Image">Smart Power Bank</a>
                            <span class="quantity">1 ×
                                <span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">$</span>723.00</span>
                            </span>
                        </li>
                        <li class="woocommerce-mini-cart-item mini_cart_item">
                            <a href="#" class="remove remove_from_cart_button"><i class="far fa-times"></i></a>
                            <a href="#"><img src="./assets/img/product/product_thumb_1_5.jpg" alt="Cart Image">Apple Smartwatch</a>
                            <span class="quantity">1 ×
                                <span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">$</span>1080.00</span>
                            </span>
                        </li>
                    </ul>
                    <p class="woocommerce-mini-cart__total total">
                        <strong>Subtotal:</strong>
                        <span class="woocommerce-Price-amount amount">
                            <span class="woocommerce-Price-currencySymbol">$</span>4398.00</span>
                    </p>
                    <p class="woocommerce-mini-cart__buttons buttons btn-wrap">
                        <a href="cart.html" class="th-btn wc-forward">View cart</a>
                        <a href="checkout.html" class="th-btn checkout wc-forward">Checkout</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="popup-search-box d-none d-lg-block">
        <button class="searchClose"><i class="fal fa-times"></i></button>
        <form action="#">
            <input type="text" placeholder="What are you looking for?">
            <button type="submit"><i class="fal fa-search"></i></button>
        </form>
    </div><!--==============================
    Mobile Menu
  ============================== -->
    <div class="th-menu-wrapper">
        <div class="th-menu-area text-center">
            <button class="th-menu-toggle"><i class="fal fa-times"></i></button>
            <div class="mobile-logo">
                <a href="index.html"><img src="./assets/img/logo.svg" alt="Webteck"></a>
            </div>
            <div class="th-mobile-menu">
                <ul>
                    <li class="menu-item-has-children mega-menu-wrap">
                        <a href="#">Home</a>
                        <ul class="mega-menu">
                            <li><a href="#">Multipage</a>
                                <ul>
                                    <li><a href="index.html">Digital Agency</a></li>
                                    <li><a href="home-web-development.html">Web Development</a></li>
                                    <li><a href="home-software-company.html">Software Company</a></li>
                                    <li><a href="home-software-company-2.html">Software Company Style 2</a></li>
                                    <li><a href="home-startup-company.html">Startup Company</a></li>
                                    <li><a href="home-it-solution.html">IT Solution</a></li>
                                    <li><a href="home-web-agency.html">Web Agency</a></li>
                                    <li><a href="home-sass-marketing.html">Sass Marketing</a></li>

                                </ul>
                            </li>
                            <li><a href="#">Multipage</a>
                                <ul>
                                    <li><a href="home-sass-landing.html">Sass Landing</a></li>
                                    <li><a href="home-sass-landing-2.html">Sass Landing Style 2</a></li>
                                    <li><a href="home-app-landing.html">App Landing</a></li>
                                    <li><a href="home-ai-technology.html">AI Technology</a></li>
                                    <li><a href="home-cyber-security.html">Cyber Security</a></li>
                                    <li><a href="home-it-company.html">IT Company</a></li>
                                    <li><a href="home-it-agency.html">IT Agency</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Onepage</a>
                                <ul>
                                    <li><a href="home-digital-agency-op.html">Digital Agency Onepage</a></li>
                                    <li><a href="home-web-development-op.html">Web Development Onepage</a></li>
                                    <li><a href="home-software-company-op.html">Software Company Onepage</a></li>
                                    <li><a href="home-software-company-2-op.html">Software Company Style 2 Onepage</a></li>
                                    <li><a href="home-startup-company-op.html">Startup Company Onepage</a></li>
                                    <li><a href="home-it-solution-op.html">IT Solution Onepage</a></li>
                                    <li><a href="home-web-agency-op.html">Web Agency Onepage</a></li>
                                    <li><a href="home-sass-marketing-op.html">Sass Marketing Onepage</a></li>

                                </ul>
                            </li>
                            <li><a href="#">Onepage</a>
                                <ul>
                                    <li><a href="home-sass-landing-op.html">Sass Landing Onepage</a></li>
                                    <li><a href="home-sass-landing-2-op.html">Sass Landing Style 2 Onepage</a></li>
                                    <li><a href="home-app-landing-op.html">App Landing Onepage</a></li>
                                    <li><a href="home-ai-technology-op.html">AI Technology Onepage</a></li>
                                    <li><a href="home-cyber-security-op.html">Cyber Security Onepage</a></li>
                                    <li><a href="home-it-company-op.html">IT Company Onepage</a></li>
                                    <li><a href="home-it-agency-op.html">IT Agency Onepage</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="about.html">About Us</a></li>
                    <li class="menu-item-has-children">
                        <a href="#">Services</a>
                        <ul class="sub-menu">
                            <li><a href="service.html">Services</a></li>
                            <li><a href="service-details.html">Services Details</a></li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul class="sub-menu">
                            <li class="menu-item-has-children">
                                <a href="#">Shop</a>
                                <ul class="sub-menu">
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="shop-details.html">Shop Details</a></li>
                                    <li><a href="cart.html">Cart Page</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="wishlist.html">Wishlist</a></li>
                                </ul>
                            </li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="team-details.html">Team Details</a></li>
                            <li><a href="project.html">Project</a></li>
                            <li><a href="project-details.html">Project Details</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="pricing.html">Pricing</a></li>
                            <li><a href="faq.html">Faq Page</a></li>
                            <li><a href="error.html">Error Page</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </div><!--==============================
	Header Area
==============================-->
    <header class="th-header header-layout2">
        <div class="header-top">
            <div class="container">
                <div class="row justify-content-center justify-content-lg-between align-items-center gy-2">
                    <div class="col-auto d-none d-lg-block">
                        <div class="header-links">
                            <ul>
                                <li><i class="fas fa-map-location"></i>54 NJ-12, Flemington, United States</li>
                                <li><i class="fas fa-phone"></i><a href="tel:+1539873657">+153-987-3657</a></li>
                                <li><i class="fas fa-envelope"></i><a href="mailto:info@webteck.com">info@webteck.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="header-social">
                            <span class="social-title">Follow Us On : </span>
                            <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                            <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sticky-wrapper">
            <!-- Main Menu Area -->
            <div class="menu-area">
                <div class="container">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-auto">
                            <div class="header-logo">
                                <a class="icon-masking" href="index.html"><span data-mask-src="./assets/img/logo.svg" class="mask-icon"></span><img src="./assets/img/logo.svg" alt="Webteck"></a>
                            </div>
                        </div>
                        <div class="col-auto">
                            <nav class="main-menu d-none d-lg-inline-block">
                                <ul>
                                    <li class="menu-item-has-children mega-menu-wrap">
                                        <a href="#">Home</a>
                                        <ul class="mega-menu">
                                            <li><a href="#">Multipage</a>
                                                <ul>
                                                    <li><a href="index.html">Digital Agency</a></li>
                                                    <li><a href="home-web-development.html">Web Development</a></li>
                                                    <li><a href="home-software-company.html">Software Company</a></li>
                                                    <li><a href="home-software-company-2.html">Software Company Style 2</a></li>
                                                    <li><a href="home-startup-company.html">Startup Company</a></li>
                                                    <li><a href="home-it-solution.html">IT Solution</a></li>
                                                    <li><a href="home-web-agency.html">Web Agency</a></li>
                                                    <li><a href="home-sass-marketing.html">Sass Marketing</a></li>

                                                </ul>
                                            </li>
                                            <li><a href="#">Multipage</a>
                                                <ul>
                                                    <li><a href="home-sass-landing.html">Sass Landing</a></li>
                                                    <li><a href="home-sass-landing-2.html">Sass Landing Style 2</a></li>
                                                    <li><a href="home-app-landing.html">App Landing</a></li>
                                                    <li><a href="home-ai-technology.html">AI Technology</a></li>
                                                    <li><a href="home-cyber-security.html">Cyber Security</a></li>
                                                    <li><a href="home-it-company.html">IT Company</a></li>
                                                    <li><a href="home-it-agency.html">IT Agency</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Onepage</a>
                                                <ul>
                                                    <li><a href="home-digital-agency-op.html">Digital Agency Onepage</a></li>
                                                    <li><a href="home-web-development-op.html">Web Development Onepage</a></li>
                                                    <li><a href="home-software-company-op.html">Software Company Onepage</a></li>
                                                    <li><a href="home-software-company-2-op.html">Software Company Style 2 Onepage</a></li>
                                                    <li><a href="home-startup-company-op.html">Startup Company Onepage</a></li>
                                                    <li><a href="home-it-solution-op.html">IT Solution Onepage</a></li>
                                                    <li><a href="home-web-agency-op.html">Web Agency Onepage</a></li>
                                                    <li><a href="home-sass-marketing-op.html">Sass Marketing Onepage</a></li>

                                                </ul>
                                            </li>
                                            <li><a href="#">Onepage</a>
                                                <ul>
                                                    <li><a href="home-sass-landing-op.html">Sass Landing Onepage</a></li>
                                                    <li><a href="home-sass-landing-2-op.html">Sass Landing Style 2 Onepage</a></li>
                                                    <li><a href="home-app-landing-op.html">App Landing Onepage</a></li>
                                                    <li><a href="home-ai-technology-op.html">AI Technology Onepage</a></li>
                                                    <li><a href="home-cyber-security-op.html">Cyber Security Onepage</a></li>
                                                    <li><a href="home-it-company-op.html">IT Company Onepage</a></li>
                                                    <li><a href="home-it-agency-op.html">IT Agency Onepage</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="about.html">About Us</a></li>
                                    <li class="menu-item-has-children">
                                        <a href="#">Services</a>
                                        <ul class="sub-menu">
                                            <li><a href="service.html">Services</a></li>
                                            <li><a href="service-details.html">Services Details</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="#">Pages</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item-has-children">
                                                <a href="#">Shop</a>
                                                <ul class="sub-menu">
                                                    <li><a href="shop.html">Shop</a></li>
                                                    <li><a href="shop-details.html">Shop Details</a></li>
                                                    <li><a href="cart.html">Cart Page</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="wishlist.html">Wishlist</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="team.html">Team</a></li>
                                            <li><a href="team-details.html">Team Details</a></li>
                                            <li><a href="project.html">Project</a></li>
                                            <li><a href="project-details.html">Project Details</a></li>
                                            <li><a href="gallery.html">Gallery</a></li>
                                            <li><a href="pricing.html">Pricing</a></li>
                                            <li><a href="faq.html">Faq Page</a></li>
                                            <li><a href="error.html">Error Page</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                            <div class="header-button">
                                <button type="button" class="icon-btn sideMenuToggler d-inline-block d-lg-none">
                                    <i class="far fa-shopping-cart"></i>
                                    <span class="badge">5</span>
                                </button>
                                <button type="button" class="th-menu-toggle d-inline-block d-lg-none"><i class="far fa-bars"></i></button>
                            </div>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <div class="header-button">
                                <button type="button" class="icon-btn searchBoxToggler"><i class="far fa-search"></i></button>
                                <button type="button" class="icon-btn sideMenuToggler">
                                    <i class="far fa-shopping-cart"></i>
                                    <span class="badge">5</span>
                                </button>
                                <a href="contact.html" class="th-btn shadow-none">Make Appointment<i class="fas fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    `;

    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = menuComponent;
});
