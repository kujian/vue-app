<template>
  <div>
    <myChild v-bind:getData="giveChild" v-on:showData="showData"></myChild>
  </div>
</template>
<script>
  import myChild from '@/components/myChild.vue';
  export default {
    data() {
      return {
        giveChild: '222'
      }
    },
    methods: {
      showData(val) {
        alert(val);
      }
    },
    components: {
      myChild
    }
  }
</script>