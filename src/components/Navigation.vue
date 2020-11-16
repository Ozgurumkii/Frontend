<template>
    <div class="row">
        <nav class="navbar navbar-expand-lg navbar-light bg-info col-sm-12">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link class="nav-link text-dark" to="/"><i class="fa fa-home"></i> Anasayfa</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-dark" to="/appointment/list"><i class="fa fa-calendar-plus-o"></i> Randevular</router-link>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="/appointment/create"><i class="fa fa-plus"></i> Randevu Oluştur</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Genel Tanımlamalar
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" to="/customer/list"><i class="fa fa-users"></i> Müşteriler</router-link>
                <div class="dropdown-divider"></div>
                <router-link class="dropdown-item" to="/apartment/list"><i class="fa fa-institution"></i> Apartmantlar</router-link>
                </div>
            </li>
            </ul>
            <li class="dropdown navbar-nav">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-user-o"></i> Kullanıcı Adı
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Profil</a>
                <a class="dropdown-item" href="#">İstatistikler</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/logout">Çıkış Yap</a>
                </div>
            </li>
        </div>
        </nav>
    </div>
</template>