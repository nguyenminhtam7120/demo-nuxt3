<template>
    <h1>This is Home Banner</h1>
</template>
<script>
const { $modelAPI } = useNuxtApp();
const appConfig = useAppConfig();
const defaultStore = useDefaultStore();

const appDisplayName = appConfig.appDisplayName;
const mediaBreakpoint = computed(() => {
  return defaultStore.mediaBreakpoint;
});

const contractStore = useContractStore();
console.log(contractStore.getContract('8FE934A1-DBF6-4A84-92EF-CA9C585D4260'))
</script>