<template>
    <div class="test">{{ a }}
        <img :src="bbb" />
        {{ bbb }}
        <div>456</div>
        <div>789</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            a: 1,
            // VERSION: VERSION,
        }
    },
    mounted() {
        console.log('VERSION-from-vue', VERSION)
    }
}
</script>
<style lang="less">
    .test {
        color: red;
        font-size: 18px;
    }
</style>