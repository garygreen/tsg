 <script>
export default {
    name: 'otherWidths',
    props: {
        otherWidths: {
            type: Array
        }
    }
}
</script>

<template>
    <div v-if="otherWidths.length">
        <h2 class="tsg-mt-8 tsg-mb-8">Other Widths</h2>
        <div class="tsg-font-mono tsg-text-grey-darker tsg-mb-6">
            .w-{size}
        </div>
        <div class="tsg-flex tsg-flex-wrap tsg-overflow-auto">
            <div v-for="width in otherWidths" class="tsg-pr-4 tsg-mb-4 tsg-w-1/5">
                <div class="tsg-bg-grey-light tsg-tsg-border-red" :class="[width.className]" style="height: 100px;"></div>
                <div class="tsg-class-text">
                    <!-- {{ width.class_prefix }}- -->
                    <span class="tsg-text-black">{{ width.class_suffix }}</span>
                    <span class="tsg-ml-2 tsg-text-grey">{{ width.value }}</span>
                </div>
            </div>
        </div>
    </div>
</template>