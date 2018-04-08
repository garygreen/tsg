<script>
export default {
    name: 'leadings',
    props: {
        leadings: {
            type: Array
        }
    }
}
</script>

<template>
    <div v-if="leadings.length">
        <h2 class="tsg-mt-8 mb-4">Leadings</h2>
        <div class="tsg-font-mono tsg-text-grey-darker tsg-mb-6">
            .leading-{size}
        </div>
        <div class="tsg-flex tsg-flex-wrap">
            <div v-for="leading in leadings" class="tsg-pr-4 tsg-mb-4 tsg-w-full sm:tsg-w-1/2 md:tsg-w-1/5" @click="$emit('toggleDemoClass', leading)">
                <div :class="[leading.className]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </div>
                <div class="tsg-class-text tsg-text-grey-darker tsg-font-mono">
                    {{ leading.className }}
                </div>
            </div>
        </div>
    </div>
</template>