<template>
  <div>
    <h1>Data from Backend</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
interface Item {
  id: string;
  name: string;
}
const items = ref<Item[]>([]);

onMounted(async () => {
  const response = await fetch("/api/items");
  items.value = await response.json();
});
</script>
