<script>
export default {
    name: 'textSizes',
    props: {
        textSizes: {
            type: Array
        }
    }
}
</script>

<template>
    <div v-if="textSizes.length">
        <div class="tsg-flex tsg-justify-between tsg-mt-8 tsg-mb-4">
            <h2>Text Sizes</h2>
            <!-- <tw-modules module="textSizes" :config="config"></tw-modules> -->
        </div>

        <div class="tsg-font-mono tsg-text-grey-darker tsg-mb-6">.text-{size}</div>

        <div class="tsg-flex tsg-flex-wrap">
            <div v-for="textSize in textSizes" class="tsg-pr-4 tsg-mb-4 tsg-w-full sm:tsg-w-1/2 md:tsg-w-1/5" @click="$emit('toggleDemoClass', textSize)">
                <div :class="[textSize.className]" v-text="textSize.className"></div>
            </div>
        </div>
    </div>
</template>