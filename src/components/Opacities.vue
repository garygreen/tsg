 <script>
export default {
    name: 'opacities',
    props: {
        opacities: {
            type: Array
        }
    }
}
</script>

<template>
    <div v-if="opacities.length">
        <h2 class="tsg-mt-8 tsg-mb-8">Opacities</h2>
        <div class="tsg-font-mono tsg-text-grey-darker tsg-mb-6">.opacity-{size}</div>
        <div class="tsg-flex tsg-flex-wrap">
            <div v-for="opacity in opacities" class="tsg-pr-4 tsg-mb-4 tsg-w-1/2 sm:tsg-w-1/4 md:tsg-w-1/6" @click="$emit('toggleDemoClass', opacity)">
                <div class="tsg-border tsg-border-grey-light" style="width: 100px; height: 100px;">
                    <div class="tsg-bg-black tsg-h-full" :class="[opacity.className]"></div>
                    <div class="tsg-class-text tsg-text-center" style="width: 100px">
                        <!-- {{ opacity.class_prefix }}- -->
                        <span class="tsg-text-black">{{ opacity.class_suffix }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>