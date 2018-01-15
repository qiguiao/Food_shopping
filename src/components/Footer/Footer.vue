<template>
    <dl>
        <dt>
            <i v-bind:class="icon"></i>
        </dt>
        <dd>
            {{text}}
        </dd>
    </dl>
</template>

<script>
export default {
    props: {
        text: {
            type:String
        },
        icon:{
            type:String
        }
    }
}
</script>

<style>

</style>
