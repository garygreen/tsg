<script>
export default {
    name: 'shadows',
    props: {
        shadows: {
            type: Array
        }
    }
}
</script>

<template>
<div v-if="shadows.length">
    <h2 class="tsg-mt-8 tsg-mb-4">Shadows</h2>
    <div class="tsg-font-mono tsg-text-grey-darker tsg-mb-6">.shadow-{size}</div>
    <div class="tsg-flex tsg-flex-wrap">
        <div v-for="shadow in shadows" class="tsg-pr-4 tsg-mb-4 tsg-w-1/2 sm:tsg-w-1/4 md:tsg-w-1/6" @click="$emit('toggleDemoClass', shadow)">
            <div :class="[shadow.className]" style="width: 100px; height: 100px;"></div>
            <div class="tsg-class-text tsg-text-center" style="width: 100px">
                <!-- {{ shadow.class_prefix }}- -->
                <span class="tsg-text-black">{{ shadow.class_suffix }}</span>
            </div>
        </div>
    </div>
    </div>
</template>