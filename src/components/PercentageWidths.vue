<script>
export default {
    name: 'percentageWidths',
    props: {
        percentageWidths: {
            type: Array
        }
    }
}
</script>
        
<template>
    <div v-if="percentageWidths.length">
        <h2 class="tsg-mt-8 tsg-mb-8">Widths</h2>
        <h3 class="tsg-mb-4">Percentage Based</h3>
        <div class="tsg-font-mono tsg-text-grey-darker tsg-mb-6">
            .w-{size}
        </div>
        <div v-for="width in percentageWidths" class="tsg-flex tsg-mb-4 tsg-overflow-auto">
            <div v-for="col in width.cols" class="tsg-pr-2 tsg-mb-4" :class="[width.className]">
                <div class="tsg-bg-grey-light tsg-border-red tsg-w-full" style="height: 100px;"></div>
                <div class="tsg-class-text">
                    <!-- {{ width.class_prefix }}- -->
                    <span class="tsg-text-black">{{ width.class_suffix }}</span>
                    <span class="tsg-ml-2 tsg-text-grey">{{ width.value }}</span>
                </div>
            </div>
            <div class="tsg-flex-1">
                <div class="tsg-bg-grey-lightest tsg-border-red tsg-w-full" style="height: 100px;"></div>
                <div class="tsg-class-text">

                </div>
            </div>
        </div>
    </div>
</template>