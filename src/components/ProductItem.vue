<template>
  <div class="col-md-4 mb-2">
    <div class="card">
      <img height="200" :src="product.image" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, iure.
        </p>
        <div>
          <span class="badge bg-danger">{{ product.price }}</span>
        </div>
        <button class="btn btn-primary" @click="cartStore.addToCart(product)">
          <i class="bi bi-cart-check"></i>
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/useCartStore'
const cartStore = useCartStore()
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped></style>
