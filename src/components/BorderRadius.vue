<script>
export default {
    name: 'borderRadius',
    props: {
        borderRadius: {
            type: Array
        }
    }
}
</script>

<template>
    <div v-if="borderRadius.length">
        <h2 class="tsg-mt-8 tsg-mb-8">Border Radius</h2>
        <div class="tsg-flex tsg-flex-wrap">
            <div v-for="border in borderRadius" class="tsg-pr-4 tsg-mb-4 tsg-w-1/2 sm:tsg-w-1/4 md:tsg-w-1/6" @click="$emit('toggleDemoClass', border)">
                <div class="tsg-bg-grey-light tsg-border-red" :class="[border.class_prefix == 'rounded' ? 'border-4' : ('border-' + border.className.substr(8, 1) + '-4'), border.className]"
                    style="width: 100px; height: 100px;"></div>
                <div class="tsg-class-text tsg-text-center" style="width: 100px">
                    <!-- {{ border.class_prefix }}- -->
                    <span class="tsg-text-black">{{ border.class_suffix }}</span>
                </div>
            </div>
        </div>
    </div>
</template>