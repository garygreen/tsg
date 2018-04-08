 <script>
export default {
    name: 'fontWeights',
    props: {
        fontWeights: {
            type: Array
        }
    }
}
</script>

<template>
    <div v-if="fontWeights.length">
        <h2 class="tsg-mt-8 tsg-mb-8">Font Weights</h2>
        <div class="tsg-flex tsg-flex-wrap">
            <div v-for="fontWeight in fontWeights" class="tsg-pr-4 tsg-mb-8 tsg-w-full sm:tsg-w-1/3" @click="$emit('toggleDemoClass', fontWeight)">
                <div :class="[fontWeight.className]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </div>
                <div class="tsg-class-text tsg-font-mono tsg-text-grey-dark">
                    {{ fontWeight.className }}
                </div>
            </div>
        </div>
    </div>
</template>