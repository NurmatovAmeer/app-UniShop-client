function first() {
    document.getElementById('first-li').classList.add("active");
    document.getElementById('second-li').classList.remove("active");
    document.getElementById('third-li').classList.remove("active");
    document.getElementById('fourth-li').classList.remove("active");
}

function second() {
    document.getElementById('first-li').classList.remove("active");
    document.getElementById('second-li').classList.add("active");
    document.getElementById('third-li').classList.remove("active");
    document.getElementById('fourth-li').classList.remove("active");
}

function third() {
    document.getElementById('first-li').classList.remove("active");
    document.getElementById('second-li').classList.remove("active");
    document.getElementById('third-li').classList.add("active");
    document.getElementById('fourth-li').classList.remove("active");
}

function fourth() {
    document.getElementById('first-li').classList.remove("active");
    document.getElementById('second-li').classList.remove("active");
    document.getElementById('third-li').classList.remove("active");
    document.getElementById('fourth-li').classList.add("active");
}

function firstCard() {

    let result = "";
    let query = window.matchMedia("(max-width: 430px)");

    result = "<div class='col-12'>\n" +
        "                <div class='row'>\n" +
        "                    <div class='col-7'>\n" +
        "                        <div class='carousel slide' id='carousel' data-ride='carousel'>\n" +
        "                            <div class='carousel-inner'>\n" +
        "                                <div class=\"circle\"><a href=\"#\" class=\"far fa-heart\"></a></div>\n" +
        "                                <div class='carousel-item active'>\n" +
        "                                    <img src=\"assets/image/similar-column-1.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-2.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-3.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-4.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "\n" +
        "                            <ul class=\"d-flex justify-content-between align-items-center\">\n" +
        "                                <li data-target='#carousel' data-slide-to='0' class='active' id=\"first-li\"\n" +
        "                                    onclick=\"first()\"><img src=\"assets/image/similar-column-1.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='1' id=\"second-li\" onclick=\"second()\"><img\n" +
        "                                        src=\"assets/image/similar-column-2.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='2' id=\"third-li\" onclick=\"third()\"><img\n" +
        "                                        src=\"assets/image/similar-column-3.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='3' id=\"fourth-li\" onclick=\"fourth()\"><img\n" +
        "                                        src=\"assets/image/similar-column-4.png\" alt=\"Error\"></li>\n" +
        "                            </ul>\n" +
        "\n" +
        "\n" +
        "                            <a href='#carousel' class='carousel-control-prev' data-slide='prev'>\n" +
        "                                <div class=\"icon-out\"><span class='carousel-control-prev-icon'></span></div>\n" +
        "                            </a>\n" +
        "                            <a href='#carousel' class='carousel-control-next' data-slide='next'>\n" +
        "                                <div class=\"icon-out\"><span class='carousel-control-next-icon'></span></div>\n" +
        "                            </a>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <div class=\"main-footer\" >\n" +
        "                            <div class='main-footer-title d-flex justify-content-between align-items-center'>\n" +
        "                                     <h5 class='location'>Tashkent city Yunusabad .... 4-room apartment is ready with all\n" +
        "                                             conditi|ons...</h5>\n" +
        "\n" +
        "                                     <h5 class='summary'>180 000 000 Sum</h5>\n" +
        "                                 </div>\n" +
        "                             <h5 class='briefly'>Briefly about the product</h5>\n" +
        "                             <div class='main-footer-comment'>\n" +
        "                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n" +
        "                                         Ipsum has been the industry's standard dummy text ever since the 1500s, when an\n" +
        "                                         unknown printer took a galley of type and scrambled it to make a type specimen book.\n" +
        "                                         It has survived not only five centuries, but also the leap into electronic\n" +
        "                                         typesetting, remaining essentially unchanged. It was popularised in the 1960s with\n" +
        "                                         the release of Letraset sheets containing Lorem Ipsum passages, and more recently\n" +
        "                                         with desktop publishing software like Aldus PageMaker including versions of Lorem\n" +
        "                                         Ipsum.</p>\n" +
        "                                 <br>\n" +
        "                                 <p class='date'>8 January 2022</p>\n" +
        "                             </div>\n" +
        "\n" +
        "\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "\n" +
        "                    <div class=\"col-4\">\n" +
        "                        <div class=\"profile\">\n" +
        "                            <p>advertiser</p>\n" +
        "                            <div class=\"user \">\n" +
        "                                <div class=\"photo-out\"><img class=\"user-photo\" src=\"assets/icon/person.svg\" alt=\"Error\"></div>\n" +
        "                                <h4>Dilnoza Fayzullayeva</h4>\n" +
        "                                <p>online: 6 January</p>\n" +
        "\n" +
        "                                <a href=\"#\">see all adds</a>\n" +
        "                            </div>\n" +
        "                            <div class=\"contact\">\n" +
        "                                <button type=\"button\" class=\"btn outline\"><p>Contact</p></button>\n" +
        "                                <button type=\"button\" class=\"btn fulled\"><p>Write message</p></button>\n" +
        "                            </div>\n" +
        "                            <div class=\"location\">\n" +
        "                                <h5>Location</h5>\n" +
        "                                <div class=\"geo d-flex\">\n" +
        "                                    <img src=\"assets/icon/geo-alt.svg\" alt=\"Error\">\n" +
        "                                    <h5>Toshkent.sh Yunusobod</h5>\n" +
        "                                </div>\n" +
        "                                <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5060.7847593622055!2d69.32457973507572!3d41.35495476677142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1644325660196!5m2!1sru!2s\"\n" +
        "                                                                        ></iframe>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>";


    query.addEventListener(firstCard); // Attach listener function on state changes

    if (query.matches) { // If media query matches
        document.getElementById("productPresent").style.height = "1053px";
    }


    document.getElementById("products").style.marginTop = "1350px";
    document.getElementById("result").innerHTML = result;
}

function secondCard() {

    let result = "";

    result = "<div class='col-12'>\n" +
        "                <div class='row'>\n" +
        "                    <div class='col-7'>\n" +
        "                        <div class='carousel slide' id='carousel' data-ride='carousel'>\n" +
        "                            <div class='carousel-inner'>\n" +
        "                                <div class=\"circle\"><a href=\"#\" class=\"far fa-heart\"></a></div>\n" +
        "                                <div class='carousel-item active'>\n" +
        "                                    <img src=\"assets/image/similar-column-1.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-2.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-3.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-4.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "\n" +
        "                            <ul class=\"d-flex justify-content-between align-items-center\">\n" +
        "                                <li data-target='#carousel' data-slide-to='0' class='active' id=\"first-li\"\n" +
        "                                    onclick=\"first()\"><img src=\"assets/image/similar-column-1.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='1' id=\"second-li\" onclick=\"second()\"><img\n" +
        "                                        src=\"assets/image/similar-column-2.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='2' id=\"third-li\" onclick=\"third()\"><img\n" +
        "                                        src=\"assets/image/similar-column-3.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='3' id=\"fourth-li\" onclick=\"fourth()\"><img\n" +
        "                                        src=\"assets/image/similar-column-4.png\" alt=\"Error\"></li>\n" +
        "                            </ul>\n" +
        "\n" +
        "\n" +
        "                            <a href='#carousel' class='carousel-control-prev' data-slide='prev'>\n" +
        "                                <div class=\"icon-out\"><span class='carousel-control-prev-icon'></span></div>\n" +
        "                            </a>\n" +
        "                            <a href='#carousel' class='carousel-control-next' data-slide='next'>\n" +
        "                                <div class=\"icon-out\"><span class='carousel-control-next-icon'></span></div>\n" +
        "                            </a>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <div class=\"main-footer\" >\n" +
        "                            <div class='main-footer-title d-flex justify-content-between align-items-center'>\n" +
        "                                     <h5 class='location'>Tashkent city Yunusabad .... 4-room apartment is ready with all\n" +
        "                                             conditi|ons...</h5>\n" +
        "\n" +
        "                                     <h5 class='summary'>180 000 000 Sum</h5>\n" +
        "                                 </div>\n" +
        "                             <h5 class='briefly'>Briefly about the product</h5>\n" +
        "                             <div class='main-footer-comment'>\n" +
        "                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n" +
        "                                         Ipsum has been the industry's standard dummy text ever since the 1500s, when an\n" +
        "                                         unknown printer took a galley of type and scrambled it to make a type specimen book.\n" +
        "                                         It has survived not only five centuries, but also the leap into electronic\n" +
        "                                         typesetting, remaining essentially unchanged. It was popularised in the 1960s with\n" +
        "                                         the release of Letraset sheets containing Lorem Ipsum passages, and more recently\n" +
        "                                         with desktop publishing software like Aldus PageMaker including versions of Lorem\n" +
        "                                         Ipsum.</p>\n" +
        "                                 <br>\n" +
        "                                 <p class='date'>8 January 2022</p>\n" +
        "                             </div>\n" +
        "\n" +
        "\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "\n" +
        "                    <div class=\"col-4\">\n" +
        "                        <div class=\"profile\">\n" +
        "                            <p>advertiser</p>\n" +
        "                            <div class=\"user \">\n" +
        "                                <div class=\"photo-out\"><img class=\"user-photo\" src=\"assets/icon/person.svg\" alt=\"Error\"></div>\n" +
        "                                <h4>Dilnoza Fayzullayeva</h4>\n" +
        "                                <p>online: 6 January</p>\n" +
        "\n" +
        "                                <a href=\"#\">see all adds</a>\n" +
        "                            </div>\n" +
        "                            <div class=\"contact\">\n" +
        "                                <button type=\"button\" class=\"btn outline\"><p>Contact</p></button>\n" +
        "                                <button type=\"button\" class=\"btn fulled\"><p>Write message</p></button>\n" +
        "                            </div>\n" +
        "                            <div class=\"location\">\n" +
        "                                <h5>Location</h5>\n" +
        "                                <div class=\"geo d-flex\">\n" +
        "                                    <img src=\"assets/icon/geo-alt.svg\" alt=\"Error\">\n" +
        "                                    <h5>Toshkent.sh Yunusobod</h5>\n" +
        "                                </div>\n" +
        "                                <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5060.7847593622055!2d69.32457973507572!3d41.35495476677142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1644325660196!5m2!1sru!2s\"\n" +
        "                                                                        ></iframe>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>";

    document.getElementById("products").style.marginTop = "1350px";
    document.getElementById("result").innerHTML = result

}

function thirdCard() {

    let result = "";

    result = "<div class='col-12'>\n" +
        "                <div class='row'>\n" +
        "                    <div class='col-7'>\n" +
        "                        <div class='carousel slide' id='carousel' data-ride='carousel'>\n" +
        "                            <div class='carousel-inner'>\n" +
        "                                <div class=\"circle\"><a href=\"#\" class=\"far fa-heart\"></a></div>\n" +
        "                                <div class='carousel-item active'>\n" +
        "                                    <img src=\"assets/image/similar-column-1.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-2.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-3.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-4.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "\n" +
        "                            <ul class=\"d-flex justify-content-between align-items-center\">\n" +
        "                                <li data-target='#carousel' data-slide-to='0' class='active' id=\"first-li\"\n" +
        "                                    onclick=\"first()\"><img src=\"assets/image/similar-column-1.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='1' id=\"second-li\" onclick=\"second()\"><img\n" +
        "                                        src=\"assets/image/similar-column-2.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='2' id=\"third-li\" onclick=\"third()\"><img\n" +
        "                                        src=\"assets/image/similar-column-3.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='3' id=\"fourth-li\" onclick=\"fourth()\"><img\n" +
        "                                        src=\"assets/image/similar-column-4.png\" alt=\"Error\"></li>\n" +
        "                            </ul>\n" +
        "\n" +
        "\n" +
        "                            <a href='#carousel' class='carousel-control-prev' data-slide='prev'>\n" +
        "                                <div class=\"icon-out\"><span class='carousel-control-prev-icon'></span></div>\n" +
        "                            </a>\n" +
        "                            <a href='#carousel' class='carousel-control-next' data-slide='next'>\n" +
        "                                <div class=\"icon-out\"><span class='carousel-control-next-icon'></span></div>\n" +
        "                            </a>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <div class=\"main-footer\" >\n" +
        "                            <div class='main-footer-title d-flex justify-content-between align-items-center'>\n" +
        "                                     <h5 class='location'>Tashkent city Yunusabad .... 4-room apartment is ready with all\n" +
        "                                             conditi|ons...</h5>\n" +
        "\n" +
        "                                     <h5 class='summary'>180 000 000 Sum</h5>\n" +
        "                                 </div>\n" +
        "                             <h5 class='briefly'>Briefly about the product</h5>\n" +
        "                             <div class='main-footer-comment'>\n" +
        "                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n" +
        "                                         Ipsum has been the industry's standard dummy text ever since the 1500s, when an\n" +
        "                                         unknown printer took a galley of type and scrambled it to make a type specimen book.\n" +
        "                                         It has survived not only five centuries, but also the leap into electronic\n" +
        "                                         typesetting, remaining essentially unchanged. It was popularised in the 1960s with\n" +
        "                                         the release of Letraset sheets containing Lorem Ipsum passages, and more recently\n" +
        "                                         with desktop publishing software like Aldus PageMaker including versions of Lorem\n" +
        "                                         Ipsum.</p>\n" +
        "                                 <br>\n" +
        "                                 <p class='date'>8 January 2022</p>\n" +
        "                             </div>\n" +
        "\n" +
        "\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "\n" +
        "                    <div class=\"col-4\">\n" +
        "                        <div class=\"profile\">\n" +
        "                            <p>advertiser</p>\n" +
        "                            <div class=\"user \">\n" +
        "                                <div class=\"photo-out\"><img class=\"user-photo\" src=\"assets/icon/person.svg\" alt=\"Error\"></div>\n" +
        "                                <h4>Dilnoza Fayzullayeva</h4>\n" +
        "                                <p>online: 6 January</p>\n" +
        "\n" +
        "                                <a href=\"#\">see all adds</a>\n" +
        "                            </div>\n" +
        "                            <div class=\"contact\">\n" +
        "                                <button type=\"button\" class=\"btn outline\"><p>Contact</p></button>\n" +
        "                                <button type=\"button\" class=\"btn fulled\"><p>Write message</p></button>\n" +
        "                            </div>\n" +
        "                            <div class=\"location\">\n" +
        "                                <h5>Location</h5>\n" +
        "                                <div class=\"geo d-flex\">\n" +
        "                                    <img src=\"assets/icon/geo-alt.svg\" alt=\"Error\">\n" +
        "                                    <h5>Toshkent.sh Yunusobod</h5>\n" +
        "                                </div>\n" +
        "                                <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5060.7847593622055!2d69.32457973507572!3d41.35495476677142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1644325660196!5m2!1sru!2s\"\n" +
        "                                                                        ></iframe>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>";

    document.getElementById("products").style.marginTop = "1350px";
    document.getElementById("result").innerHTML = result

}

function fourthCard() {

    let result = "";

    result = "<div class='col-12'>\n" +
        "                <div class='row'>\n" +
        "                    <div class='col-7'>\n" +
        "                        <div class='carousel slide' id='carousel' data-ride='carousel'>\n" +
        "                            <div class='carousel-inner'>\n" +
        "                                <div class=\"circle\"><a href=\"#\" class=\"far fa-heart\"></a></div>\n" +
        "                                <div class='carousel-item active'>\n" +
        "                                    <img src=\"assets/image/similar-column-1.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-2.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-3.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-4.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "\n" +
        "                            <ul class=\"d-flex justify-content-between align-items-center\">\n" +
        "                                <li data-target='#carousel' data-slide-to='0' class='active' id=\"first-li\"\n" +
        "                                    onclick=\"first()\"><img src=\"assets/image/similar-column-1.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='1' id=\"second-li\" onclick=\"second()\"><img\n" +
        "                                        src=\"assets/image/similar-column-2.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='2' id=\"third-li\" onclick=\"third()\"><img\n" +
        "                                        src=\"assets/image/similar-column-3.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='3' id=\"fourth-li\" onclick=\"fourth()\"><img\n" +
        "                                        src=\"assets/image/similar-column-4.png\" alt=\"Error\"></li>\n" +
        "                            </ul>\n" +
        "\n" +
        "\n" +
        "                            <a href='#carousel' class='carousel-control-prev' data-slide='prev'>\n" +
        "                                <div class=\"icon-out\"><span class='carousel-control-prev-icon'></span></div>\n" +
        "                            </a>\n" +
        "                            <a href='#carousel' class='carousel-control-next' data-slide='next'>\n" +
        "                                <div class=\"icon-out\"><span class='carousel-control-next-icon'></span></div>\n" +
        "                            </a>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <div class=\"main-footer\" >\n" +
        "                            <div class='main-footer-title d-flex justify-content-between align-items-center'>\n" +
        "                                     <h5 class='location'>Tashkent city Yunusabad .... 4-room apartment is ready with all\n" +
        "                                             conditi|ons...</h5>\n" +
        "\n" +
        "                                     <h5 class='summary'>180 000 000 Sum</h5>\n" +
        "                                 </div>\n" +
        "                             <h5 class='briefly'>Briefly about the product</h5>\n" +
        "                             <div class='main-footer-comment'>\n" +
        "                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n" +
        "                                         Ipsum has been the industry's standard dummy text ever since the 1500s, when an\n" +
        "                                         unknown printer took a galley of type and scrambled it to make a type specimen book.\n" +
        "                                         It has survived not only five centuries, but also the leap into electronic\n" +
        "                                         typesetting, remaining essentially unchanged. It was popularised in the 1960s with\n" +
        "                                         the release of Letraset sheets containing Lorem Ipsum passages, and more recently\n" +
        "                                         with desktop publishing software like Aldus PageMaker including versions of Lorem\n" +
        "                                         Ipsum.</p>\n" +
        "                                 <br>\n" +
        "                                 <p class='date'>8 January 2022</p>\n" +
        "                             </div>\n" +
        "\n" +
        "\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "\n" +
        "                    <div class=\"col-4\">\n" +
        "                        <div class=\"profile\">\n" +
        "                            <p>advertiser</p>\n" +
        "                            <div class=\"user \">\n" +
        "                                <div class=\"photo-out\"><img class=\"user-photo\" src=\"assets/icon/person.svg\" alt=\"Error\"></div>\n" +
        "                                <h4>Dilnoza Fayzullayeva</h4>\n" +
        "                                <p>online: 6 January</p>\n" +
        "\n" +
        "                                <a href=\"#\">see all adds</a>\n" +
        "                            </div>\n" +
        "                            <div class=\"contact\">\n" +
        "                                <button type=\"button\" class=\"btn outline\"><p>Contact</p></button>\n" +
        "                                <button type=\"button\" class=\"btn fulled\"><p>Write message</p></button>\n" +
        "                            </div>\n" +
        "                            <div class=\"location\">\n" +
        "                                <h5>Location</h5>\n" +
        "                                <div class=\"geo d-flex\">\n" +
        "                                    <img src=\"assets/icon/geo-alt.svg\" alt=\"Error\">\n" +
        "                                    <h5>Toshkent.sh Yunusobod</h5>\n" +
        "                                </div>\n" +
        "                                <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5060.7847593622055!2d69.32457973507572!3d41.35495476677142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1644325660196!5m2!1sru!2s\"\n" +
        "                                                                        ></iframe>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>";

    document.getElementById("products").style.marginTop = "1350px";
    document.getElementById("result").innerHTML = result

}

function fifthCard() {

    let result = "";

    result = "<div class='col-12'>\n" +
        "                <div class='row'>\n" +
        "                    <div class='col-7'>\n" +
        "                        <div class='carousel slide' id='carousel' data-ride='carousel'>\n" +
        "                            <div class='carousel-inner'>\n" +
        "                                <div class=\"circle\"><a href=\"#\" class=\"far fa-heart\"></a></div>\n" +
        "                                <div class='carousel-item active'>\n" +
        "                                    <img src=\"assets/image/similar-column-1.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-2.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-3.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-4.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "\n" +
        "                            <ul class=\"d-flex justify-content-between align-items-center\">\n" +
        "                                <li data-target='#carousel' data-slide-to='0' class='active' id=\"first-li\"\n" +
        "                                    onclick=\"first()\"><img src=\"assets/image/similar-column-1.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='1' id=\"second-li\" onclick=\"second()\"><img\n" +
        "                                        src=\"assets/image/similar-column-2.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='2' id=\"third-li\" onclick=\"third()\"><img\n" +
        "                                        src=\"assets/image/similar-column-3.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='3' id=\"fourth-li\" onclick=\"fourth()\"><img\n" +
        "                                        src=\"assets/image/similar-column-4.png\" alt=\"Error\"></li>\n" +
        "                            </ul>\n" +
        "\n" +
        "\n" +
        "                            <a href='#carousel' class='carousel-control-prev' data-slide='prev'>\n" +
        "                                <div class=\"icon-out\"><span class='carousel-control-prev-icon'></span></div>\n" +
        "                            </a>\n" +
        "                            <a href='#carousel' class='carousel-control-next' data-slide='next'>\n" +
        "                                <div class=\"icon-out\"><span class='carousel-control-next-icon'></span></div>\n" +
        "                            </a>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <div class=\"main-footer\" >\n" +
        "                            <div class='main-footer-title d-flex justify-content-between align-items-center'>\n" +
        "                                     <h5 class='location'>Tashkent city Yunusabad .... 4-room apartment is ready with all\n" +
        "                                             conditi|ons...</h5>\n" +
        "\n" +
        "                                     <h5 class='summary'>180 000 000 Sum</h5>\n" +
        "                                 </div>\n" +
        "                             <h5 class='briefly'>Briefly about the product</h5>\n" +
        "                             <div class='main-footer-comment'>\n" +
        "                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n" +
        "                                         Ipsum has been the industry's standard dummy text ever since the 1500s, when an\n" +
        "                                         unknown printer took a galley of type and scrambled it to make a type specimen book.\n" +
        "                                         It has survived not only five centuries, but also the leap into electronic\n" +
        "                                         typesetting, remaining essentially unchanged. It was popularised in the 1960s with\n" +
        "                                         the release of Letraset sheets containing Lorem Ipsum passages, and more recently\n" +
        "                                         with desktop publishing software like Aldus PageMaker including versions of Lorem\n" +
        "                                         Ipsum.</p>\n" +
        "                                 <br>\n" +
        "                                 <p class='date'>8 January 2022</p>\n" +
        "                             </div>\n" +
        "\n" +
        "\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "\n" +
        "                    <div class=\"col-4\">\n" +
        "                        <div class=\"profile\">\n" +
        "                            <p>advertiser</p>\n" +
        "                            <div class=\"user \">\n" +
        "                                <div class=\"photo-out\"><img class=\"user-photo\" src=\"assets/icon/person.svg\" alt=\"Error\"></div>\n" +
        "                                <h4>Dilnoza Fayzullayeva</h4>\n" +
        "                                <p>online: 6 January</p>\n" +
        "\n" +
        "                                <a href=\"#\">see all adds</a>\n" +
        "                            </div>\n" +
        "                            <div class=\"contact\">\n" +
        "                                <button type=\"button\" class=\"btn outline\"><p>Contact</p></button>\n" +
        "                                <button type=\"button\" class=\"btn fulled\"><p>Write message</p></button>\n" +
        "                            </div>\n" +
        "                            <div class=\"location\">\n" +
        "                                <h5>Location</h5>\n" +
        "                                <div class=\"geo d-flex\">\n" +
        "                                    <img src=\"assets/icon/geo-alt.svg\" alt=\"Error\">\n" +
        "                                    <h5>Toshkent.sh Yunusobod</h5>\n" +
        "                                </div>\n" +
        "                                <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5060.7847593622055!2d69.32457973507572!3d41.35495476677142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1644325660196!5m2!1sru!2s\"\n" +
        "                                                                        ></iframe>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>";

    document.getElementById("products").style.marginTop = "1350px";
    document.getElementById("result").innerHTML = result

}

function sixthCard() {

    let result = "";

    result = "<div class='col-12'>\n" +
        "                <div class='row'>\n" +
        "                    <div class='col-7'>\n" +
        "                        <div class='carousel slide' id='carousel' data-ride='carousel'>\n" +
        "                            <div class='carousel-inner'>\n" +
        "                                <div class=\"circle\"><a href=\"#\" class=\"far fa-heart\"></a></div>\n" +
        "                                <div class='carousel-item active'>\n" +
        "                                    <img src=\"assets/image/similar-column-1.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-2.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-3.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-4.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "\n" +
        "                            <ul class=\"d-flex justify-content-between align-items-center\">\n" +
        "                                <li data-target='#carousel' data-slide-to='0' class='active' id=\"first-li\"\n" +
        "                                    onclick=\"first()\"><img src=\"assets/image/similar-column-1.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='1' id=\"second-li\" onclick=\"second()\"><img\n" +
        "                                        src=\"assets/image/similar-column-2.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='2' id=\"third-li\" onclick=\"third()\"><img\n" +
        "                                        src=\"assets/image/similar-column-3.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='3' id=\"fourth-li\" onclick=\"fourth()\"><img\n" +
        "                                        src=\"assets/image/similar-column-4.png\" alt=\"Error\"></li>\n" +
        "                            </ul>\n" +
        "\n" +
        "\n" +
        "                            <a href='#carousel' class='carousel-control-prev' data-slide='prev'>\n" +
        "                                <div class=\"icon-out\"><span class='carousel-control-prev-icon'></span></div>\n" +
        "                            </a>\n" +
        "                            <a href='#carousel' class='carousel-control-next' data-slide='next'>\n" +
        "                                <div class=\"icon-out\"><span class='carousel-control-next-icon'></span></div>\n" +
        "                            </a>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <div class=\"main-footer\" >\n" +
        "                            <div class='main-footer-title d-flex justify-content-between align-items-center'>\n" +
        "                                     <h5 class='location'>Tashkent city Yunusabad .... 4-room apartment is ready with all\n" +
        "                                             conditi|ons...</h5>\n" +
        "\n" +
        "                                     <h5 class='summary'>180 000 000 Sum</h5>\n" +
        "                                 </div>\n" +
        "                             <h5 class='briefly'>Briefly about the product</h5>\n" +
        "                             <div class='main-footer-comment'>\n" +
        "                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n" +
        "                                         Ipsum has been the industry's standard dummy text ever since the 1500s, when an\n" +
        "                                         unknown printer took a galley of type and scrambled it to make a type specimen book.\n" +
        "                                         It has survived not only five centuries, but also the leap into electronic\n" +
        "                                         typesetting, remaining essentially unchanged. It was popularised in the 1960s with\n" +
        "                                         the release of Letraset sheets containing Lorem Ipsum passages, and more recently\n" +
        "                                         with desktop publishing software like Aldus PageMaker including versions of Lorem\n" +
        "                                         Ipsum.</p>\n" +
        "                                 <br>\n" +
        "                                 <p class='date'>8 January 2022</p>\n" +
        "                             </div>\n" +
        "\n" +
        "\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "\n" +
        "                    <div class=\"col-4\">\n" +
        "                        <div class=\"profile\">\n" +
        "                            <p>advertiser</p>\n" +
        "                            <div class=\"user \">\n" +
        "                                <div class=\"photo-out\"><img class=\"user-photo\" src=\"assets/icon/person.svg\" alt=\"Error\"></div>\n" +
        "                                <h4>Dilnoza Fayzullayeva</h4>\n" +
        "                                <p>online: 6 January</p>\n" +
        "\n" +
        "                                <a href=\"#\">see all adds</a>\n" +
        "                            </div>\n" +
        "                            <div class=\"contact\">\n" +
        "                                <button type=\"button\" class=\"btn outline\"><p>Contact</p></button>\n" +
        "                                <button type=\"button\" class=\"btn fulled\"><p>Write message</p></button>\n" +
        "                            </div>\n" +
        "                            <div class=\"location\">\n" +
        "                                <h5>Location</h5>\n" +
        "                                <div class=\"geo d-flex\">\n" +
        "                                    <img src=\"assets/icon/geo-alt.svg\" alt=\"Error\">\n" +
        "                                    <h5>Toshkent.sh Yunusobod</h5>\n" +
        "                                </div>\n" +
        "                                <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5060.7847593622055!2d69.32457973507572!3d41.35495476677142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1644325660196!5m2!1sru!2s\"\n" +
        "                                                                        ></iframe>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>";

    document.getElementById("products").style.marginTop = "1350px";
    document.getElementById("result").innerHTML = result

}

function seventhCard() {

    let result = "";

    result = "<div class='col-12'>\n" +
        "                <div class='row'>\n" +
        "                    <div class='col-7'>\n" +
        "                        <div class='carousel slide' id='carousel' data-ride='carousel'>\n" +
        "                            <div class='carousel-inner'>\n" +
        "                                <div class=\"circle\"><a href=\"#\" class=\"far fa-heart\"></a></div>\n" +
        "                                <div class='carousel-item active'>\n" +
        "                                    <img src=\"assets/image/similar-column-1.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-2.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-3.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-4.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "\n" +
        "                            <ul class=\"d-flex justify-content-between align-items-center\">\n" +
        "                                <li data-target='#carousel' data-slide-to='0' class='active' id=\"first-li\"\n" +
        "                                    onclick=\"first()\"><img src=\"assets/image/similar-column-1.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='1' id=\"second-li\" onclick=\"second()\"><img\n" +
        "                                        src=\"assets/image/similar-column-2.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='2' id=\"third-li\" onclick=\"third()\"><img\n" +
        "                                        src=\"assets/image/similar-column-3.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='3' id=\"fourth-li\" onclick=\"fourth()\"><img\n" +
        "                                        src=\"assets/image/similar-column-4.png\" alt=\"Error\"></li>\n" +
        "                            </ul>\n" +
        "\n" +
        "\n" +
        "                            <a href='#carousel' class='carousel-control-prev' data-slide='prev'>\n" +
        "                                <div class=\"icon-out\"><span class='carousel-control-prev-icon'></span></div>\n" +
        "                            </a>\n" +
        "                            <a href='#carousel' class='carousel-control-next' data-slide='next'>\n" +
        "                                <div class=\"icon-out\"><span class='carousel-control-next-icon'></span></div>\n" +
        "                            </a>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <div class=\"main-footer\" >\n" +
        "                            <div class='main-footer-title d-flex justify-content-between align-items-center'>\n" +
        "                                     <h5 class='location'>Tashkent city Yunusabad .... 4-room apartment is ready with all\n" +
        "                                             conditi|ons...</h5>\n" +
        "\n" +
        "                                     <h5 class='summary'>180 000 000 Sum</h5>\n" +
        "                                 </div>\n" +
        "                             <h5 class='briefly'>Briefly about the product</h5>\n" +
        "                             <div class='main-footer-comment'>\n" +
        "                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n" +
        "                                         Ipsum has been the industry's standard dummy text ever since the 1500s, when an\n" +
        "                                         unknown printer took a galley of type and scrambled it to make a type specimen book.\n" +
        "                                         It has survived not only five centuries, but also the leap into electronic\n" +
        "                                         typesetting, remaining essentially unchanged. It was popularised in the 1960s with\n" +
        "                                         the release of Letraset sheets containing Lorem Ipsum passages, and more recently\n" +
        "                                         with desktop publishing software like Aldus PageMaker including versions of Lorem\n" +
        "                                         Ipsum.</p>\n" +
        "                                 <br>\n" +
        "                                 <p class='date'>8 January 2022</p>\n" +
        "                             </div>\n" +
        "\n" +
        "\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "\n" +
        "                    <div class=\"col-4\">\n" +
        "                        <div class=\"profile\">\n" +
        "                            <p>advertiser</p>\n" +
        "                            <div class=\"user \">\n" +
        "                                <div class=\"photo-out\"><img class=\"user-photo\" src=\"assets/icon/person.svg\" alt=\"Error\"></div>\n" +
        "                                <h4>Dilnoza Fayzullayeva</h4>\n" +
        "                                <p>online: 6 January</p>\n" +
        "\n" +
        "                                <a href=\"#\">see all adds</a>\n" +
        "                            </div>\n" +
        "                            <div class=\"contact\">\n" +
        "                                <button type=\"button\" class=\"btn outline\"><p>Contact</p></button>\n" +
        "                                <button type=\"button\" class=\"btn fulled\"><p>Write message</p></button>\n" +
        "                            </div>\n" +
        "                            <div class=\"location\">\n" +
        "                                <h5>Location</h5>\n" +
        "                                <div class=\"geo d-flex\">\n" +
        "                                    <img src=\"assets/icon/geo-alt.svg\" alt=\"Error\">\n" +
        "                                    <h5>Toshkent.sh Yunusobod</h5>\n" +
        "                                </div>\n" +
        "                                <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5060.7847593622055!2d69.32457973507572!3d41.35495476677142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1644325660196!5m2!1sru!2s\"\n" +
        "                                                                        ></iframe>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>";

    document.getElementById("products").style.marginTop = "1350px";
    document.getElementById("result").innerHTML = result

}

function eightthCard() {

    let result = "";

    result = "<div class='col-12'>\n" +
        "                <div class='row'>\n" +
        "                    <div class='col-7'>\n" +
        "                        <div class='carousel slide' id='carousel' data-ride='carousel'>\n" +
        "                            <div class='carousel-inner'>\n" +
        "                                <div class=\"circle\"><a href=\"#\" class=\"far fa-heart\"></a></div>\n" +
        "                                <div class='carousel-item active'>\n" +
        "                                    <img src=\"assets/image/similar-column-1.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-2.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-3.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-4.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "\n" +
        "                            <ul class=\"d-flex justify-content-between align-items-center\">\n" +
        "                                <li data-target='#carousel' data-slide-to='0' class='active' id=\"first-li\"\n" +
        "                                    onclick=\"first()\"><img src=\"assets/image/similar-column-1.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='1' id=\"second-li\" onclick=\"second()\"><img\n" +
        "                                        src=\"assets/image/similar-column-2.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='2' id=\"third-li\" onclick=\"third()\"><img\n" +
        "                                        src=\"assets/image/similar-column-3.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='3' id=\"fourth-li\" onclick=\"fourth()\"><img\n" +
        "                                        src=\"assets/image/similar-column-4.png\" alt=\"Error\"></li>\n" +
        "                            </ul>\n" +
        "\n" +
        "\n" +
        "                            <a href='#carousel' class='carousel-control-prev' data-slide='prev'>\n" +
        "                                <div class=\"icon-out\"><span class='carousel-control-prev-icon'></span></div>\n" +
        "                            </a>\n" +
        "                            <a href='#carousel' class='carousel-control-next' data-slide='next'>\n" +
        "                                <div class=\"icon-out\"><span class='carousel-control-next-icon'></span></div>\n" +
        "                            </a>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <div class=\"main-footer\" >\n" +
        "                            <div class='main-footer-title d-flex justify-content-between align-items-center'>\n" +
        "                                     <h5 class='location'>Tashkent city Yunusabad .... 4-room apartment is ready with all\n" +
        "                                             conditi|ons...</h5>\n" +
        "\n" +
        "                                     <h5 class='summary'>180 000 000 Sum</h5>\n" +
        "                                 </div>\n" +
        "                             <h5 class='briefly'>Briefly about the product</h5>\n" +
        "                             <div class='main-footer-comment'>\n" +
        "                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n" +
        "                                         Ipsum has been the industry's standard dummy text ever since the 1500s, when an\n" +
        "                                         unknown printer took a galley of type and scrambled it to make a type specimen book.\n" +
        "                                         It has survived not only five centuries, but also the leap into electronic\n" +
        "                                         typesetting, remaining essentially unchanged. It was popularised in the 1960s with\n" +
        "                                         the release of Letraset sheets containing Lorem Ipsum passages, and more recently\n" +
        "                                         with desktop publishing software like Aldus PageMaker including versions of Lorem\n" +
        "                                         Ipsum.</p>\n" +
        "                                 <br>\n" +
        "                                 <p class='date'>8 January 2022</p>\n" +
        "                             </div>\n" +
        "\n" +
        "\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "\n" +
        "                    <div class=\"col-4\">\n" +
        "                        <div class=\"profile\">\n" +
        "                            <p>advertiser</p>\n" +
        "                            <div class=\"user \">\n" +
        "                                <div class=\"photo-out\"><img class=\"user-photo\" src=\"assets/icon/person.svg\" alt=\"Error\"></div>\n" +
        "                                <h4>Dilnoza Fayzullayeva</h4>\n" +
        "                                <p>online: 6 January</p>\n" +
        "\n" +
        "                                <a href=\"#\">see all adds</a>\n" +
        "                            </div>\n" +
        "                            <div class=\"contact\">\n" +
        "                                <button type=\"button\" class=\"btn outline\"><p>Contact</p></button>\n" +
        "                                <button type=\"button\" class=\"btn fulled\"><p>Write message</p></button>\n" +
        "                            </div>\n" +
        "                            <div class=\"location\">\n" +
        "                                <h5>Location</h5>\n" +
        "                                <div class=\"geo d-flex\">\n" +
        "                                    <img src=\"assets/icon/geo-alt.svg\" alt=\"Error\">\n" +
        "                                    <h5>Toshkent.sh Yunusobod</h5>\n" +
        "                                </div>\n" +
        "                                <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5060.7847593622055!2d69.32457973507572!3d41.35495476677142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1644325660196!5m2!1sru!2s\"\n" +
        "                                                                        ></iframe>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>";

    document.getElementById("products").style.marginTop = "1350px";
    document.getElementById("result").innerHTML = result

}

function ninethCard() {

    let result = "";

    result = "<div class='col-12'>\n" +
        "                <div class='row'>\n" +
        "                    <div class='col-7'>\n" +
        "                        <div class='carousel slide' id='carousel' data-ride='carousel'>\n" +
        "                            <div class='carousel-inner'>\n" +
        "                                <div class=\"circle\"><a href=\"#\" class=\"far fa-heart\"></a></div>\n" +
        "                                <div class='carousel-item active'>\n" +
        "                                    <img src=\"assets/image/similar-column-1.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-2.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-3.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-4.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "\n" +
        "                            <ul class=\"d-flex justify-content-between align-items-center\">\n" +
        "                                <li data-target='#carousel' data-slide-to='0' class='active' id=\"first-li\"\n" +
        "                                    onclick=\"first()\"><img src=\"assets/image/similar-column-1.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='1' id=\"second-li\" onclick=\"second()\"><img\n" +
        "                                        src=\"assets/image/similar-column-2.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='2' id=\"third-li\" onclick=\"third()\"><img\n" +
        "                                        src=\"assets/image/similar-column-3.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='3' id=\"fourth-li\" onclick=\"fourth()\"><img\n" +
        "                                        src=\"assets/image/similar-column-4.png\" alt=\"Error\"></li>\n" +
        "                            </ul>\n" +
        "\n" +
        "\n" +
        "                            <a href='#carousel' class='carousel-control-prev' data-slide='prev'>\n" +
        "                                <div class=\"icon-out\"><span class='carousel-control-prev-icon'></span></div>\n" +
        "                            </a>\n" +
        "                            <a href='#carousel' class='carousel-control-next' data-slide='next'>\n" +
        "                                <div class=\"icon-out\"><span class='carousel-control-next-icon'></span></div>\n" +
        "                            </a>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <div class=\"main-footer\" >\n" +
        "                            <div class='main-footer-title d-flex justify-content-between align-items-center'>\n" +
        "                                     <h5 class='location'>Tashkent city Yunusabad .... 4-room apartment is ready with all\n" +
        "                                             conditi|ons...</h5>\n" +
        "\n" +
        "                                     <h5 class='summary'>180 000 000 Sum</h5>\n" +
        "                                 </div>\n" +
        "                             <h5 class='briefly'>Briefly about the product</h5>\n" +
        "                             <div class='main-footer-comment'>\n" +
        "                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n" +
        "                                         Ipsum has been the industry's standard dummy text ever since the 1500s, when an\n" +
        "                                         unknown printer took a galley of type and scrambled it to make a type specimen book.\n" +
        "                                         It has survived not only five centuries, but also the leap into electronic\n" +
        "                                         typesetting, remaining essentially unchanged. It was popularised in the 1960s with\n" +
        "                                         the release of Letraset sheets containing Lorem Ipsum passages, and more recently\n" +
        "                                         with desktop publishing software like Aldus PageMaker including versions of Lorem\n" +
        "                                         Ipsum.</p>\n" +
        "                                 <br>\n" +
        "                                 <p class='date'>8 January 2022</p>\n" +
        "                             </div>\n" +
        "\n" +
        "\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "\n" +
        "                    <div class=\"col-4\">\n" +
        "                        <div class=\"profile\">\n" +
        "                            <p>advertiser</p>\n" +
        "                            <div class=\"user \">\n" +
        "                                <div class=\"photo-out\"><img class=\"user-photo\" src=\"assets/icon/person.svg\" alt=\"Error\"></div>\n" +
        "                                <h4>Dilnoza Fayzullayeva</h4>\n" +
        "                                <p>online: 6 January</p>\n" +
        "\n" +
        "                                <a href=\"#\">see all adds</a>\n" +
        "                            </div>\n" +
        "                            <div class=\"contact\">\n" +
        "                                <button type=\"button\" class=\"btn outline\"><p>Contact</p></button>\n" +
        "                                <button type=\"button\" class=\"btn fulled\"><p>Write message</p></button>\n" +
        "                            </div>\n" +
        "                            <div class=\"location\">\n" +
        "                                <h5>Location</h5>\n" +
        "                                <div class=\"geo d-flex\">\n" +
        "                                    <img src=\"assets/icon/geo-alt.svg\" alt=\"Error\">\n" +
        "                                    <h5>Toshkent.sh Yunusobod</h5>\n" +
        "                                </div>\n" +
        "                                <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5060.7847593622055!2d69.32457973507572!3d41.35495476677142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1644325660196!5m2!1sru!2s\"\n" +
        "                                                                        ></iframe>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>";

    document.getElementById("products").style.marginTop = "1350px";
    document.getElementById("result").innerHTML = result

}

function tenthCard() {

    let result = "";

    result = "<div class='col-12'>\n" +
        "                <div class='row'>\n" +
        "                    <div class='col-7'>\n" +
        "                        <div class='carousel slide' id='carousel' data-ride='carousel'>\n" +
        "                            <div class='carousel-inner'>\n" +
        "                                <div class=\"circle\"><a href=\"#\" class=\"far fa-heart\"></a></div>\n" +
        "                                <div class='carousel-item active'>\n" +
        "                                    <img src=\"assets/image/similar-column-1.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-2.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-3.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                                <div class='carousel-item'>\n" +
        "                                    <img src=\"assets/image/similar-column-4.png\" alt=\"Error\">\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "\n" +
        "                            <ul class=\"d-flex justify-content-between align-items-center\">\n" +
        "                                <li data-target='#carousel' data-slide-to='0' class='active' id=\"first-li\"\n" +
        "                                    onclick=\"first()\"><img src=\"assets/image/similar-column-1.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='1' id=\"second-li\" onclick=\"second()\"><img\n" +
        "                                        src=\"assets/image/similar-column-2.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='2' id=\"third-li\" onclick=\"third()\"><img\n" +
        "                                        src=\"assets/image/similar-column-3.png\" alt=\"Error\"></li>\n" +
        "                                <li data-target='#carousel' data-slide-to='3' id=\"fourth-li\" onclick=\"fourth()\"><img\n" +
        "                                        src=\"assets/image/similar-column-4.png\" alt=\"Error\"></li>\n" +
        "                            </ul>\n" +
        "\n" +
        "\n" +
        "                            <a href='#carousel' class='carousel-control-prev' data-slide='prev'>\n" +
        "                                <div class=\"icon-out\"><span class='carousel-control-prev-icon'></span></div>\n" +
        "                            </a>\n" +
        "                            <a href='#carousel' class='carousel-control-next' data-slide='next'>\n" +
        "                                <div class=\"icon-out\"><span class='carousel-control-next-icon'></span></div>\n" +
        "                            </a>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <div class=\"main-footer\" >\n" +
        "                            <div class='main-footer-title d-flex justify-content-between align-items-center'>\n" +
        "                                     <h5 class='location'>Tashkent city Yunusabad .... 4-room apartment is ready with all\n" +
        "                                             conditi|ons...</h5>\n" +
        "\n" +
        "                                     <h5 class='summary'>180 000 000 Sum</h5>\n" +
        "                                 </div>\n" +
        "                             <h5 class='briefly'>Briefly about the product</h5>\n" +
        "                             <div class='main-footer-comment'>\n" +
        "                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n" +
        "                                         Ipsum has been the industry's standard dummy text ever since the 1500s, when an\n" +
        "                                         unknown printer took a galley of type and scrambled it to make a type specimen book.\n" +
        "                                         It has survived not only five centuries, but also the leap into electronic\n" +
        "                                         typesetting, remaining essentially unchanged. It was popularised in the 1960s with\n" +
        "                                         the release of Letraset sheets containing Lorem Ipsum passages, and more recently\n" +
        "                                         with desktop publishing software like Aldus PageMaker including versions of Lorem\n" +
        "                                         Ipsum.</p>\n" +
        "                                 <br>\n" +
        "                                 <p class='date'>8 January 2022</p>\n" +
        "                             </div>\n" +
        "\n" +
        "\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "\n" +
        "                    <div class=\"col-4\">\n" +
        "                        <div class=\"profile\">\n" +
        "                            <p>advertiser</p>\n" +
        "                            <div class=\"user \">\n" +
        "                                <div class=\"photo-out\"><img class=\"user-photo\" src=\"assets/icon/person.svg\" alt=\"Error\"></div>\n" +
        "                                <h4>Dilnoza Fayzullayeva</h4>\n" +
        "                                <p>online: 6 January</p>\n" +
        "\n" +
        "                                <a href=\"#\">see all adds</a>\n" +
        "                            </div>\n" +
        "                            <div class=\"contact\">\n" +
        "                                <button type=\"button\" class=\"btn outline\"><p>Contact</p></button>\n" +
        "                                <button type=\"button\" class=\"btn fulled\"><p>Write message</p></button>\n" +
        "                            </div>\n" +
        "                            <div class=\"location\">\n" +
        "                                <h5>Location</h5>\n" +
        "                                <div class=\"geo d-flex\">\n" +
        "                                    <img src=\"assets/icon/geo-alt.svg\" alt=\"Error\">\n" +
        "                                    <h5>Toshkent.sh Yunusobod</h5>\n" +
        "                                </div>\n" +
        "                                <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5060.7847593622055!2d69.32457973507572!3d41.35495476677142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1644325660196!5m2!1sru!2s\"\n" +
        "                                                                        ></iframe>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>";

    document.getElementById("products").style.marginTop = "1350px";
    document.getElementById("result").innerHTML = result

}