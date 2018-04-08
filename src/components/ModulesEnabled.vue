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

var TailwindModules = Vue.component('tw-modules', {
    props: ['config', 'module'],
    template: `
        <div>
            <span v-for="(value, screen) in config.screens" class="bg-grey-lighter text-grey-dark px-2 py-1 mr-2">
                {{ screen }}:
            </span>
            <template v-for="module in config.modules[module]">
                <span v-if="module != 'responsive'" class="tsg-bg-grey-lighter tsg-text-grey-dark tsg-px-2 tsg-py-1 tsg-mr-2">
                    {{ module }}:
                </span>
            </template>
        </div>
    `
});