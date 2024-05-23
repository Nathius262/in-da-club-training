function Header(){
    let el = `
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsWow" aria-controls="navbarsWow" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="container">
            <!-- Begin Logo -->
            <a class="navbar-brand" href="index">
                <img src="static/img/logo.png" width="250" alt="InDaClubTraining logo">
            </a>
            <!-- End Logo -->
            <!-- Begin Menu -->
            <div class="collapse navbar-collapse" id="navbarsWow">
                <!-- Begin Menu -->
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index">accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about">à propos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact">contact</a>
                    </li>
                    <li class="nav-item">
                        <a target="" class="nav-link highlight" href="https://pay.sumup.com/b2c/QXMC4SS0">Réserver ma place</a>
                    </li>
                </ul>
                <!-- End Menu -->
            </div>
        </div>

    `

    return el
}


export {Header}