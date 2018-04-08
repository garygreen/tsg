 <script>
export default {
    name: 'paddings',
    props: {
        paddings: {
            type: Array
        }
    }
}
</script>

<template>
    <div v-if="paddings.length">
        <h2 class="tsg-mt-8 tsg-mb-4">Paddings</h2>
        <div class="tsg-font-mono tsg-text-grey-darker tsg-mb-6">
            .p{side}-{size}
        </div>
        <div class="tsg-flex tsg-flex-wrap">
            <div v-for="padding in paddings" class="tsg-pr-4 tsg-mb-4 tsg-w-1/2 sm:tsg-w-1/4 md:tsg-w-1/6" @click="$emit('toggleDemoClass', padding)">
                <div class="tsg-bg-grey-light tsg-text-grey-dark tsg-border-red" :class="[padding.className]" style="width: 100px; height: 100px;">
                    <div class="tsg-bg-grey-dark tsg-h-full"></div>
                </div>
                <div class="tsg-class-text tsg-text-center" style="width: 100px">
                    <!-- {{ padding.class_prefix }}- -->
                    <span class="tsg-text-black">{{ padding.class_suffix }}</span>
                </div>
            </div>
        </div>
    </div>
</template>