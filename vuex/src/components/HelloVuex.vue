<template>
<div>
{{$store.state.counter}}
{{$store.getters.powerCount}}
</div>
  
</template>

<script>
export default {
  name: 'HelloVuex'
}
</script>

<style>

</style>