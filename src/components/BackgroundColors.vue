<script>
export default {
    name: 'backgroundColors',
    props: {
        backgroundColors: {
            type: Array
        }
    }
}
</script>

<template>
    <div v-if="backgroundColors.length">
        <div class="tsg-flex tsg-justify-between tsg-mt-8 tsg-mb-4">
            <h2>Background Colours</h2>
            <!-- <tw-modules module="backgroundColors" :config="config"></tw-modules> -->
        </div>

        <div class="tsg-font-mono tsg-text-grey-darker tsg-mb-6">.bg-{size}</div>

        <div class="tsg-flex tsg-flex-wrap">
            <div v-for="bg in backgroundColors" class="tsg-pr-8 tsg-mb-4 tsg-w-1/2 sm:tsg-w-1/4 md:tsg-w-1/6">
                <div class="tsg-border tsg-border-light-grey tsg-w-full tsg-h-24" :class="[bg.className]" @click="$emit('toggleDemoClass', bg)"></div>
                <div class="tsg-class-text tsg-text-center">
                    <!-- {{ bg.class_prefix }}- -->
                    <div class="tsg-text-black">{{ bg.class_suffix }}</div>
                    <div class="tsg-text-grey tsg-font-mono">{{ bg.value }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
