$( document ).ready(function() {

    // Header Functions
    
    const header_menu_link = document.querySelector('#header-menu-link');
    const header_help_link = document.querySelector('#header-help-link');
    
    const menu_continue_button = document.querySelector('#menu-continue-button');
    
    const logo_text = document.querySelectorAll('.logo-text');
    const cards = document.querySelector('#cards');
    const card = document.querySelectorAll('.card');
    const title = document.querySelector('#title');
    
    for (let i = 0; i < logo_text.length; i++) {
        
        logo_text[i].addEventListener('click', () => {
            location.reload();
            return false;
        });
    };
    
    header_menu_link.addEventListener('click', () => {
        showModal();
        modal_menu.style.display = "flex";
        modal_close_button.style.display = "none";
        setTimeout(function(){
            modal_menu.style.top = "50vh"
            },250);
    });
    
    
    header_help_link.addEventListener('click', () => {
        showModal();
        modal_help.style.display = "flex";
    });
    
    // Modal
    
    const modal_backdrop = document.querySelector('#modal-backdrop');
    const modal_container = document.querySelector('#modal-container');
    const modal_close_button = document.querySelector('.modal-close');
    
    const modal_menu = document.querySelector('#modal-menu');
    const modal_recipe = document.querySelector('#modal-recipe');
    const modal_help = document.querySelector('#modal-help');
    
    function closeAllModals() {
        // modal_recipe.style.display = "none";
        modal_help.style.display = "none";
        modal_menu.style.top = "-20vh"
        hideModal();
        setTimeout(function(){
            modal_menu.style.display = "none";
            modalCloseButtonCheck();
        },250);
    };
    
    function showModal() {
        modal_backdrop.style.display = "flex";
        modal_container.style.display = "flex";
        modal_close_button.style.display = "flex";
        document.querySelector('#html').style.overflowY = "hidden";
        setTimeout(function(){
            modal_backdrop.style.opacity = ".9";
            modal_close_button.style.top = "1rem";
            modal_container.style.top = "0";
            modalCloseButtonCheck();
        },250);
    };
    
    function hideModal() {
        modal_backdrop.style.opacity = "0";
        modal_close_button.style.top = "105%";
        modal_container.style.top = "100%";
        setTimeout(function(){
            modal_backdrop.style.display = "none";
            modal_container.style.display = "none";
            modal_close_button.style.display = "none";
            document.querySelector('#html').style.overflowY = "auto";
            },250);
    };
    
    menu_continue_button.addEventListener('click', closeAllModals);
    modal_close_button.addEventListener('click', closeAllModals);
    
    // modal_recipe.addEventListener('click', closeAllModals);
    // Need to get rid of behind modal clicking
    
    // for (let i = 0; i < card.length; i++) {
    //     card[i].addEventListener('click', () => {
    //         cardSelect();
    //     });
    // };

    // function cardSelect() {
    //     modal_menu.style.display = "none";
    //     modal_help.style.display = "none";
    //     modal_recipe.style.display = "flex";
            
    //     showModal();
    // };
    
    // Search
    
    const search_input = document.querySelector('#search-input');
    const search_button = document.querySelector('#search-button');
    
    const no_results = document.querySelector('#no-results');
    const search_okay_button = document.querySelector('#no-results-button');
    
    // search_button.addEventListener('click', nullSearchQuery);
    search_okay_button.addEventListener('click', clearSearch);
    
    function toggleSearch() {
        if (no_results.hidden = true) {
            no_results.hidden = false;
        }
        else {
            no_results.hidden = true
        }
    };
    
    function nullSearchQuery() {
        no_results.hidden = false;
        cards.style.display = 'none';
        title.innerHTML = 'Search Results';
        footerCheck_pushDown();
    };
    
    function clearSearch() {
        no_results.hidden = true;
        cards.style.display = 'flex';
        title.innerHTML = 'All Recipes';
        search_input.value = '';
        footerCheck_revert();
    };
    
    // Filter
    
    const filter_menu = document.querySelector('.filter');
    const filter_hitbox = document.querySelector('#filter-hitbox');
    const filter_content = document.querySelector('#filter-content');
    const filter_ranges = document.querySelectorAll('.range-1-slider');
    
    const filter_checkboxes = document.querySelectorAll('.filter-checkbox');
    
    filter_hitbox.addEventListener('click', toggleFilter);
    
    function toggleFilter() {
        clearSearch();
        if (filter_menu.hasAttribute('opened')) {
            filter_menu.removeAttribute('opened');
            filter_menu.setAttribute('closed', 'true');
            filter_content.style.opacity = 0;
            filter_menu.style.height = "3rem";
            setTimeout(function(){
                filter_content.style.display = "none";
            },250);
        }
        else {
            showFilter();
        }
    };
    
    function showFilter() {
        filter_menu.removeAttribute('closed')
        filter_menu.setAttribute('opened', 'true');
        filter_menu.style.height = "756.78px";
        filter_content.style.display = "block";
        setTimeout(function(){
            filter_content.style.opacity = 1;
        },250);
    };
    
    // Slideshow
    
    $("#slideshow > img:gt(0)").hide();
    
    setInterval(function() {
        $('#slideshow > img:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    }, 12000);
    
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const footer = document.querySelector('footer');
    
    function footerCheck_pushDown() {
        if (viewportWidth >= 1100 && viewportHeight >= 640) {
            footer.style.position = 'fixed';
            footer.style.bottom = '0';
            footer.style.left = '0';
        }
    }
    
    window.onresize = modalCloseButtonCheck;
    window.onresize = footerCheck_pushDown;
    
    function modalCloseButtonCheck() {
        if (viewportWidth <= 848) {
            modal_close_button.style.top = "1rem";
            modal_close_button.style.right = "1rem";
        }
    }
    
    function footerCheck_revert() {
        footer.style.position = '';
        footer.style.bottom = '';
        footer.style.left = '';
    }

    // Help Menu

    const help_expand_head = document.querySelectorAll('.help-expand-head');
    const help_expand_box = document.querySelectorAll('.help-expand-box');

    for (let i = 0; i < help_expand_head.length; i++) {
        help_expand_head[i].addEventListener('click', toggleHelpLink);
    }

    function toggleHelpLink() {
        var box = this.nextElementSibling;
        var arrow = this.childNodes[3];
        
        if (box.hasAttribute('closed')) {
            console.log('opening');
            openHelpLink(box, arrow);
        } else {
            console.log('closing');
            closeHelpLink(box, arrow);
        }
    }
    
    function openHelpLink(box, arrow) {
        arrow.style.transform = "rotate(-180deg)";
        box.removeAttribute('closed');
        box.setAttribute('open', 'true');
        
        box.style.display = "block";
        box.style.maxHeight = "232px";
        setTimeout(function(){
            box.style.opacity = 1;
        },250);
    }
    
    function closeHelpLink(box, arrow) {
        arrow.style.transform = "rotate(0deg)";
        box.removeAttribute('open');
        box.setAttribute('closed', 'true');

        box.style.opacity = 0;
        box.style.maxHeight = "0px";
            setTimeout(function(){
                box.style.display = "none";
            },250);
    }

    // KeyUp Events
    
    document.onkeyup = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            // Keys (27 = ESC)
                event.preventDefault();
                closeAllModals();
        }
    };
    
    document.onkeyup = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 90) {
            // Keys (27 = P)
                // event.preventDefault();
        }
    };
    
    // Range Slider
    
    function getVals() {
        // Get slider values
        var parent = this.parentNode.parentNode;
        var slides = parent.getElementsByTagName("input");
        var slide1 = parseFloat( slides[0].value );
        var slide2 = parseFloat( slides[1].value );
        // Neither slider will clip the other, so make sure we determine which is larger
        if( slide1 > slide2 ){ var tmp = slide2; slide2 = slide1; slide1 = tmp; }
        
        var displayElement = parent.getElementsByClassName("rangeValues")[0];
        displayElement.innerHTML = "Cook Times: "+slide1+" - "+ slide2+" mins";
        console.log(parent);
    }
    
    window.onload = function() {
        // Initialize Sliders
        var sliderSections = document.getElementsByClassName("range-slider");
        for( var x = 0; x < sliderSections.length; x++ ){
            var sliders = sliderSections[x].getElementsByTagName("input");
            for( var y = 0; y < sliders.length; y++ ){
                if( sliders[y].type ==="range" ){
                    sliders[y].oninput = getVals;
                    // Manually trigger event first time to display values
                    sliders[y].oninput();
                }
            }
        }
    }

    // AJAX

    
    
    // End of JS
    
    });