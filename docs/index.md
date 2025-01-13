---
layout: doc
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

onMounted(() => {
  const router = useRouter()
  router.go('/book_work_and_life/preface/index')
})
</script>