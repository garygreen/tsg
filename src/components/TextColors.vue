<script>
export default {
    name: 'textColors',
    props: {
        textColors: {
            type: Array
        }
    }
}
</script>

<template>
    <div v-if="textColors.length">
        <div class="tsg-flex tsg-justify-between tsg-mt-8 tsg-mb-4">
            <h2>Text Colours</h2>
            <!-- <tw-modules module="textColors" :config="config"></tw-modules> -->
        </div>

        <div class="tsg-font-mono tsg-text-grey-darker tsg-mb-6">.text-{size}</div>

        <div class="tsg-flex tsg-flex-wrap">
            <div v-for="text in textColors" class="tsg-pr-4 tsg-mb-4 tsg-w-full sm:tsg-w-1/2 md:tsg-w-1/5" @click="$emit('toggleDemoClass', text)">
                <div :class="[text.className]" v-text="text.class_suffix"></div>
                <span class="tsg-text-grey-light" v-text="text.value"></span>
            </div>
        </div>
    </div>
</template>