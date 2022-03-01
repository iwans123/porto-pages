<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <a class="navbar-brand Scoot" href="/">Porto_WEB</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav Buggy">
                        <a class="nav-link" href="/">Home</a>
                        <a class="nav-link" href="/contact">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Shizuru&display=swap');
@font-face {
    font-family: 'Scoot';
    src: url('../assets/font/Scott Room.ttf');
}
@font-face {
    font-family: 'Buggy';
    src: url('../assets/font/Buggy.otf') format("opentype");
}

.Scoot {
    font-family: 'Scoot';
    font-size: 25pt;
    color: brown;
}

.Buggy {
    font-family: 'Buggy';
    font-size: 15pt;
}
</style>
