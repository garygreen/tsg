<script>
export default {
    name: 'trackings',
    props: {
        trackings: {
            type: Array
        }
    }
}
</script>
<template>
    <div v-if="trackings.length">
        <h2 class="tsg-mt-8 tsg-mb-8">Trackings</h2>
        <div class="tsg-font-mono tsg-text-grey-darker tsg-mb-6">
            .tracking-{size}
        </div>
        <div class="tsg-flex tsg-flex-wrap">
            <div v-for="tracking in trackings" class="tsg-pr-4 tsg-mb-4 tsg-w-full" @click="$emit('toggleDemoClass', tracking)">
                <div class="tsg-mb-1" :class="[tracking.className]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </div>
                <div class="tsg-text-grey-darker tsg-font-mono">
                    {{ tracking.className }}
                </div>
            </div>
        </div>
    </div>
</template>