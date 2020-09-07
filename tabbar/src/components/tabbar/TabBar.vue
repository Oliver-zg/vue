<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>
#tab-bar {
  display: flex;
  justify-content: space-around;
  height: 49px;
  background-color: #dadada;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 4px #F7F7F7;
}
</style>