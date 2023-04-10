<template>
    <h1>This is Home Banner</h1>
</template>
<script>
import { useProductStore } from '@/stores/product'
const store = useProductStore();
console.log(store.products[0].product_name);

</script>