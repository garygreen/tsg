<script>
export default {
    name: 'borderColors',
    props: {
        borderColors: {
            type: Array
        }
    }
}
</script>

<template>
    <div v-if="borderColors.length">
        <h2 class="tsg-mt-8 tsg-mb-4">Borders Colours</h2>
        <div class="tsg-font-mono tsg-text-grey-darker tsg-mb-6">.border-{size}</div>
        <div class="tsg-flex tsg-flex-wrap">
            <div v-for="border in borderColors" class="tsg-pr-4 tsg-mb-4 tsg-w-1/2 sm:tsg-w-1/4 md:tsg-w-1/6" @click="$emit('toggleDemoClass', border)">
                <div class="tsg-bg-grey-light tsg-border-4" :class="[border.className]" style="width: 100px; height: 100px;"></div>
                <div class="tsg-class-text tsg-text-center" style="width: 100px">
                    <!-- {{ border.class_prefix }}- -->
                    <span class="tsg-text-black">{{ border.class_suffix }}</span>
                </div>
            </div>
        </div>
    </div>
</template>