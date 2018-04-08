<script>
export default {
    data: function() {
        var data = {
            demoClasses: []
        }

        return data;
    },
    methods: {
        toggleDemoClass: function(opts) {
            var demoClasses = this.demoClasses.filter(function(checkOpts) {
                return checkOpts.type != opts.type;
            });
        
            demoClasses.push({
                type: opts.type,
                className: opts.className
            });

            this.demoClasses = demoClasses;
        },
        removeDemoClass: function(opts) {
            for (var i = 0; i < this.demoClasses.length; i++) {
                if (this.demoClasses[i] == opts) {
                    this.demoClasses.splice(i, 1);
                }
            }
        }
    },

    computed: {
        demoClassString: function() {
            return this.demoClasses.map(function(opts) {
                return opts.className;
            }).join(' ');
        }
    }
}
</script>

<template>
    <div class="tsg-fixed tsg-pin-r tsg-w-70 tsg-mr-8 tsg-shadow-lg">
        <div :class="demoClassString" style="min-height: 100px;">
            Lorem ipsum
        </div>
        <template v-if="demoClasses.length">
            <div v-for="opts in demoClasses" class="tsg-flex tsg-justify-between tsg-w-full tsg-bg-grey-lighter tsg-px-2 tsg-py-2 tsg-text-grey-darkest">
                <span>{{ opts.className }}</span>
                <a href="#" class="tsg-no-underline tsg-text-grey hover:tsg-text-grey-dark" @click.prevent="removeDemoClass(opts)">X</a>
            </div>
        </template>
        <div v-else class="tsg-px-2 tsg-py-2 tsg-text-grey-darkest tsg-border-t tsg-border-grey-light">
            Click on classes to demo.
        </div>
    </div>
</template>