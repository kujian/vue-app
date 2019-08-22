<template>
    <div id="on">
        <p>{{message}}</p>
    </div>
</template>
<script>
/* eslint-disable */
    import Bus from './bus.js'
    export default {
        name: 'brother2',
        data() {
            return {
                message: ''
            }
        },
        mounted() {　　　
            let self = this
            Bus.$on('msg', (e) => {
                self.message = e
                console.log(`传来的数据是：${e}`)
            })
        }
    }
</script>