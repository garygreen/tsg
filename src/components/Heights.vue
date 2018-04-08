<script>
export default {
    name: 'heights',
    props: {
        heights: {
            type: Array
        }
    }
}
</script>

<template>
    <div v-if="heights.length">
        <h2 class="tsg-mt-8 tsg-mb-8">Heights</h2>
        <div class="tsg-font-mono tsg-text-grey-darker tsg-mb-6">
            .h-{size}
        </div>
        <div class="tsg-flex tsg-flex-wrap">
            <div v-for="height in heights" class="tsg-pr-4 tsg-mb-4 tsg-w-1/2 sm:tsg-w-1/4 md:tsg-w-1/6" @click="$emit('toggleDemoClass', height)">
                <div class="tsg-bg-grey-light tsg-border-red" :class="[height.className]" style="width: 100px;"></div>
                <div class="class-text">
                    <!-- {{ height.class_prefix }}- -->
                    <span class="tsg-text-black">{{ height.class_suffix }}</span>
                </div>
            </div>
        </div>
    </div>
</template>