<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Vue Shopping Cart</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/"><i class="b bi-house"></i> Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/cart"><i class="bi bi-cart-check"></i> Cart ({{ cartStore.countCartItems }})</router-link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
</template>

<script setup>
    import { useCartStore } from '../stores/useCartStore'
    const cartStore = useCartStore()
</script>

<style scoped>

</style>