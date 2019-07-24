<template>
  <div>
    
    <main>
      <slot> {{user}}</slot>
    </main>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: 'Ross'
    }
  }
}
</script>
