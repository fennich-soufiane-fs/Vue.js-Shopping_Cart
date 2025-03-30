<template>
    <div class="row my-4">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in data.cartItems" :key="item.id">
                                <td>{{ item.id }}</td>
                                <td>
                                    <img :src="item.image" width="60" height="60" alt="">
                                </td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.quantity }}</td>
                                <td>{{ item.price }}</td>
                                <td>{{ item.price * item.quantity }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {useCartStore} from '../stores/useCartStore'
    const data = useCartStore()
</script>

<style scoped>

</style>