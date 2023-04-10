import { defineStore } from 'pinia'

import products from '@/assets/data/product.json'

export const useProductStore = defineStore('ProductStore', {
    state: () => {
        return {
            products: products
        }
    }
})