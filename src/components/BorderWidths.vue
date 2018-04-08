<script>
export default {
    name: 'borderWidths',
    props: {
        borderWidths: {
            type: Array
        }
    }
}
</script>

<template>
    <div v-if="borderWidths.length">
        <h2 class="tsg-mt-8 tsg-mb-4">Border Sizes</h2>
        <div class="tsg-font-mono tsg-text-grey-darker tsg-mb-6">.border{side}-{size}</div>       
        <div class="tsg-flex tsg-flex-wrap">
            <div v-for="borderWidth in borderWidths" class="tsg-pr-4 tsg-mb-4 tsg-w-1/2 sm:tsg-w-1/4 md:tsg-w-1/6" @click="$emit('toggleDemoClass', borderWidth)">
                <div class="tsg-bg-grey-light tsg-border-red" :class="[borderWidth.className]" style="width: 100px; height: 100px;"></div>
                <div class="tsg-class-text tsg-text-center" style="width: 100px">
                    <!-- {{ borderWidth.class_prefix }}- -->
                    <span class="tsg-text-black">{{ borderWidth.class_suffix }}</span>
                </div>
            </div>
        </div>
    </div>
</template>