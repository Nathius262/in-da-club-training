let date = new Date()
date = date.getFullYear()

function footer(){
    let el = `
    <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="footer-widget">
                        <a href="#" class="">
                        <img src="static/img/logo.png" width="200" alt="logo footer">
                        </a>
                    </div>
                    <!--
                    <div class="footer-widget">
                        <h5 class="title">Author</h5>
                        <ul>
                            <li><a href="/about">À propos de nous</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/privacy-policy">Confidentialité</a></li>
                        </ul>
                    </div>
                    -->
                </div>
                
                <div class="col-sm-6 mt-4 text-light text-md-right footersocial">
                    <p class="h5">Connecte-toi avec nous</p>
                    <a href="mailto:idctraining95@gmail.com"><i class="fa-brands fa-google"></i></a>
                    <a href="https://www.instagram.com/indaclub_training?igsh=MW1pMmNsbXRydDBkag%3D%3D&utm_source=qr"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            <div class="row justify-content-center">
            <div class="copyright col text-center">
                <p class="pull-left">
                    droits d'auteur © ${date} IN DA CLUB Training
                </p>
                <!--
                <p class="pull-right">
                    
                    <a href="#">"Alimenté par"</a> - Yoaan Chotkan
                </p>
                -->

            </div>
            </div>
        </div>
    `
    return el
}

export {footer}