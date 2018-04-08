<script>
export default {
    name: 'margins',
    props: {
        margins: {
            type: Array
        }
    }
}
</script>

<template>
    <div v-if="margins.length">
        <h2 class="tsg-mt-8 tsg-mb-4">Margins</h2>
        <div class="tsg-font-mono tsg-text-grey-darker tsg-mb-6">
            .m{side}-{size}
        </div>
        <div class="tsg-flex tsg-flex-wrap">
            <div v-for="margin in margins" class="tsg-pr-4 tsg-mb-4 tsg-w-1/2 sm:tsg-w-1/4 md:tsg-w-1/6" @click="$emit('toggleDemoClass', margin)">
                <div class="tsg-bg-grey-light tsg-inline-flex">
                    <div class="tsg-bg-grey-dark tsg-text-grey-dark" :class="[margin.className]" style="width: 100px; height: 100px;">
                        test
                    </div>
                </div>
                <div class="tsg-class-text tsg-text-center" style="width: 100px">
                    <!-- {{ margin.class_prefix }}- -->
                    <span class="tsg-text-black">{{ margin.class_suffix }}</span>
                </div>
            </div>
        </div>
    </div>
</template>