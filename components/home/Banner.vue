<template>
    <h1>This is Home Banner</h1>
</template>
<script>
import { useProductStore } from '@/stores/product'
const store = useProductStore();
const testLodash = _.slice(store.products, [start = 0], [end = store.products.length])
console.log(testLodash ? testLodash : 'empty');

</script>