<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-2">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="https://vuejs.org/images/logo.svg" alt="" width="30" height="24">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link exact-active-class="active" to="/brands" class="nav-link">Marcas</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link exact-active-class="active" to="/products" class="nav-link">Productos</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container">
            <router-view />
        </div>
    </main>
</template>

<script>
export default {
    name: "App"
}
</script>

<style scoped>

</style>
