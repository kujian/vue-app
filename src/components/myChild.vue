<template>
    <div v-on:click="showData">子组件从父组件得到的数据：{{getData}}</div>
</template>
<script>
export default{
    props:{
        getData:{
            type:String
        }
    },
    methods:{
        showData(){
            this.$emit('showData','子组件触发事件发送数据给父组件')
        }
    }
}

</script>