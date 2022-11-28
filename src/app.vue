<script setup lang="ts">
import { useQueries } from '@tanstack/vue-query'
import { computed, ref } from 'vue';

async function getStuff(id: string) {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return { id }
}

const ids = ref(['one', 'two'])
const queries = useQueries({ queries: computed(() => {
  return ids.value.map(id => {
    return {
      queryKey: ['stuff', 'by-id', { id }],
      queryFn() {
        return getStuff(id)
      }
    }
  })
})})

// this will log the following error to the console:
// "Vue 2 does not support readonly arrays."
// and then fail to update the loading state.
const isLoading = computed(() => {
  return queries.some(query => query.isInitialLoading)
})
</script>

<template>
  <main>
    <h1>Queries</h1>
    <pre>{{ isLoading ? 'loading...' : 'done.' }}</pre>
    <pre>{{ queries }}</pre>
  </main>
</template>
