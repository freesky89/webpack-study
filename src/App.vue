<template>
    <div class="test">{{ a }}</div>
</template>
<script>
export default {
    data() {
        return {
            a: 1,
        }
    }
}
</script>
<style lang="less">
    .test {
        color: red;
        font-size: 18px;
    }
</style>