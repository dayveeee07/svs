class MainHeader extends HTMLElement {
  connectedCallback () { 
    this.innerHTML = `
    <header id="navbar">
    <div class="navbar">
    <!-- <div class="navbar_container"> -->
      <div class="logo_title">
      <div class="img_logo">
        <img src="image/sarca.png" alt="sarca" id="logo">
      </div>  
        <div class="name">
         <a href="/"> SARCA VIRTUAL SHIPYARD</a>
        </div>
      </div>

      <!-- HAMBURGER MENU -->
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <!-- HAMBURGER MENU END -->

      <ul class="navbar_menu">
        <li class="navbar_items"><a class="navbar_links" href="ships.html">SHIPS</a></li>
        <li class="navbar_items"><a class="navbar_links" href="sceneries.html">SCENERIES</a></li>
        <!-- <li class="navbar_items"><a class="navbar_links" href="about.html">ABOUT</a></li> -->
        <li class="navbar_items"><a class="navbar_links" href="contact me.html">CONTACT ME</a></li>
      </ul>
    <!-- </div> -->
  </div>
</header>

    `
  }


}

customElements.define('main-header', MainHeader)

class MainFooter extends HTMLElement {
  connectedCallback () {
    this.innerHTML = `
    <section class="footer_container">
    <div class="footer_socials">
    <h2>SARCA VIRTUAL SHIPYARD</h2>
    <div class="footer_social_links">
      <a href="https://discord.com/channels/@me" target="_blank"><img src="/image/social logo/logo-discord.svg" alt="logo-discord"></a>
      <a href="https://web.facebook.com/dayveeee07" target="_blank"><img src="/image/social logo/logo-facebook.svg" alt="logo-facebook"></a>
      <a href="https://github.com/dayveeee07" target="_blank"><img src="/image/social logo/logo-github.svg" alt="logo-github"></a>
      <a href="https://twitter.com/dave_daveeeeeee" target="_blank"><img src="/image/social logo/logo-twitter.svg" alt="logo-twitter"></a>
      <!-- <a href="https://open.spotify.com/user/rdwku7mm5ja42e6wuph1rq5ts"><img src="/image/social logo/logo-spotify.svg" alt="logo-github"></a> -->
    </div>

    </div>

  
    <!-- <div class="footer_contact">
    <h4>REQUEST ADD-ON</h4>
    <div class="footer_form">
      <input type="text" placeholder="Your request">
      <button class="footer_send">SEND</button>
    </div> -->

    </div>
    <div class="footer_cc">
    <p>ALL RIGHTS RESERVED DAVE. 2022</p>
    </div>
    </section>
    `
    
    
  }

  
}

customElements.define('main-footer' , MainFooter)