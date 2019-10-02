<template>
  <div class="hello">
    <header id="header">
        <div class="center">
            <!--logo-->
            <div id="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/ESCUDO-UNAULA.png" alt="logotipo" class="app-logo">
            </div>

            <!--menu nav representa la navegacion en la pag-->
            <nav id="menu">
                <ul>
                    <li>
                        <router-link to="/">Principal</router-link> |
                    </li>
                    <li>
                        <router-link to="/login">Login</router-link> |
                    </li>
                    <li>
                        <router-link to="/buscar">Buscar mi trámite</router-link>
                    </li>
                </ul>
            </nav>

            <!-- LIMPIAR FLOTADOS-->
            <div class="clearfix"></div>
        </div>
    </header>
    <div id="slider" class="slider-big">
        <h1>Trabajo ingeniería de software-- Empresa Seguridad</h1>
    </div>

    <div class="center">
        <section id="content">
            <h2></h2>
        </section>


        <aside id="sidebar">
            <div id="nav-blog" class="sidebar-item">
                <h3>puesdes hacer esto</h3>
                <a href="#" class="btn btn-success">Crear artículo</a>
            </div>

            <div id="search" class="sidebar-item">
                <h3>Buscador</h3>
                <p>Encuentra el artículo que buscas</p>
                <form action="">
                    <input type="text" name="search">
                    <input type="submit" name="submit" value="Buscar" class="btn">
                </form>
            </div>
        </aside>

        <div class="clearfix"></div>
    </div>
    <footer id="footer">
        <div class="center">
            <p>
                &copy; Proyecto ingeniería de sofware por: Duban Alexis Echavarria Restrepo-Yonny Cuesta
            </p>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
    height: 120px;
    width: 100%;
    background: white;
    border-bottom: 1px solid #ccc;
    border-top: 5px solid #fb6161;

}

.center {
    width: 75%;
    margin: 0px auto;
}

.clearfix {
    clear: both;
    float: none;
}

#logo {
    width: 30%;
    font-size: 30px;
    float: left;
    margin-top: 35px;
}

#logo img {
    display: block;
    float: left;
    height: 60px;
    margin-top: -9px;
    margin-right: -10px;
    animation: girar infinite 20s linear;
}

@keyframes girar {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

#brand {
    display: block;
    margin: 0px;
    float: left;
}

#menu {
    width: 70%;
    float: right;
    font-size: 18px;

}

#menu ul {
    line-height: 85px;
    width: 70%;
    float: right;
}

#menu ul li {
    display: inline-block;
    list-style: none;
    height: 46px;
    margin-left: 15px;
    margin-right: 15px;
}

#menu a {
    text-decoration: none;
    color: #444;
    transition: 300ms all;
}

#menu a:hover {
    color: rgba(158, 25, 25, 0.493);
}

#slider {
    width: 100%;
    height: 350px;
    /*line-height: 320px;*/
    color: white;
    text-shadow: 0px 0px 5px #444;

    /*Degradado css */
    background: rgba(248,80,50,1);
    background: -moz-radial-gradient(center, ellipse cover, rgba(248,80,50,1) 0%, rgba(241,111,92,0.92) 33%, rgba(246,41,12,0.88) 51%, rgba(240,47,23,0.84) 71%, rgba(231,56,39,0.77) 100%);
    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(248,80,50,1)), color-stop(33%, rgba(241,111,92,0.92)), color-stop(51%, rgba(246,41,12,0.88)), color-stop(71%, rgba(240,47,23,0.84)), color-stop(100%, rgba(231,56,39,0.77)));
    background: -webkit-radial-gradient(center, ellipse cover, rgba(248,80,50,1) 0%, rgba(241,111,92,0.92) 33%, rgba(246,41,12,0.88) 51%, rgba(240,47,23,0.84) 71%, rgba(231,56,39,0.77) 100%);
    background: -o-radial-gradient(center, ellipse cover, rgba(248,80,50,1) 0%, rgba(241,111,92,0.92) 33%, rgba(246,41,12,0.88) 51%, rgba(240,47,23,0.84) 71%, rgba(231,56,39,0.77) 100%);
    background: -ms-radial-gradient(center, ellipse cover, rgba(248,80,50,1) 0%, rgba(241,111,92,0.92) 33%, rgba(246,41,12,0.88) 51%, rgba(240,47,23,0.84) 71%, rgba(231,56,39,0.77) 100%);
    background: radial-gradient(ellipse at center, rgba(248,80,50,1) 0%, rgba(241,111,92,0.92) 33%, rgba(246,41,12,0.88) 51%, rgba(240,47,23,0.84) 71%, rgba(231,56,39,0.77) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f85032', endColorstr='#e73827', GradientType=1 );
}

#slider h1 {
    margin: 0.2px;
    padding: 0px;
    padding-top: 155px;
    text-align: center;
}

.btn-white {
    display: block;
    background: white;
    color: rgb(58, 57, 57);
    padding: 10px;
    width: 90px;
    height: 20px;
    margin: 0px auto;
    font-size: 18px;
    text-transform: uppercase;
    text-shadow: none;
    text-decoration: none;
    line-height: 20px;
    box-shadow: 0px 0px 5px rgb(124, 124, 124);
    margin-top: 40px;
    border-radius: 4px;
    transition: 300ms all;
}

.btn-white:hover {
    background: #444;
    color: white;
    box-shadow: 0px 0px 5px rgb(241, 236, 236);
}

#slider.slider-small {
    height: 150px;
}

#slider.slider-small h1 {
    margin: 0.2px;
    padding: 0px;
    padding-top: 60px;
}

#content{
    width: 70%;
    float: left;
    min-height: 650px;
    margin-right: 25px
}

#sidebar {
    width: 25%;
    float: left;
}

.sidebar-item {
    background: #f7f7f7;
    padding: 20px;
    margin-top: 30px;
}

.sidebar-item h3{
    text-transform: uppercase;
    font-size: 17px;
    margin: 0px;
    border-bottom: 3px solid #ccc;
    padding-bottom: 10px;
    margin-bottom: 10px;
}


.btn {
    display: block;
    background: black;
    color: white;
    padding: 15px;
    font-weight: bold;
    text-transform: uppercase;
    font-size:14px;
    text-decoration: none;
    max-width: 118;
    transition: 800ms all;
    border: none;
    cursor: pointer;
}

.sidebar-item .btn {
    margin: 0px auto;
    margin-top: 10px;
}

.btn-success{
    background: #fb6161
}

.btn-success:hover {
    background: black;
}

input[type="text"] {
    width: 100%;
    height: 30px;
    border: 1px solid #ccc;
    padding: 3px;
    margin-bottom: 3px;
    transition: 800ms all;
}

input[type="text"]:focus {
    box-shadow: 0px 0px 5px #ccc inset;
}

#footer {
    background: #f7f7f7;
    width: 100%;
    height: 70px;
    line-height: 70px;
    color: #444;
}

#footer p {
    margin: 0px;
    padding: 0px;
}
</style>
