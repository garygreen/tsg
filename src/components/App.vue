<script>
import BackgroundColors from './BackgroundColors.vue';
import BorderColors from './BorderColors.vue';
import BorderRadius from './BorderRadius.vue';
import BorderWidths from './BorderWidths.vue';
import FontWeights from './FontWeights.vue';
import Heights from './Heights.vue';
import Leadings from './Leadings.vue';
import Margins from './Margins.vue';
import Opacities from './Opacities.vue';
import OtherWidths from './OtherWidths.vue';
import Paddings from './Paddings.vue';
import PercentageWidths from './PercentageWidths.vue';
import Shadows from './Shadows.vue';
import TextColors from './TextColors.vue';
import TextSizes from './TextSizes.vue';
import Trackings from './Trackings.vue';
import DemoPanel from './DemoPanel.vue';
import ConfigSwitcher from './ConfigSwitcher.vue';

export default {
    components: {
        backgroundColors: BackgroundColors,
        borderColors: BorderColors,
        borderRadius: BorderRadius,
        borderWidths: BorderWidths,
        fontWeights: FontWeights,
        heights: Heights,
        leadings: Leadings,
        margins: Margins,
        opacities: Opacities,
        otherWidths: OtherWidths,
        paddings: Paddings,
        percentageWidths: PercentageWidths,
        shadows: Shadows,
        textColors: TextColors,
        textSizes: TextSizes,
        trackings: Trackings,
        demoPanel: DemoPanel,
        configSwitcher: ConfigSwitcher
    },

    data: function () {
        var data = {
            config: {}
        };

        return data;
    },

    mounted: function() {
        this.$refs.configSwitcher.loadConfig();
    },

    methods: {
        getClasses: function (type, prefix) {
            if (! this.isModuleEnabled(type)) {
                return [];
            }

            var classes = [];
            var configClasses = this.config[type];

            for (var classSuffix in configClasses) {
                var value = configClasses[classSuffix];
                var numericValue = typeof value === 'string' ? value.match(/(\d+)/, value) : 0;

                classes.push({
                    type: type,
                    value: value,
                    class_prefix: prefix,
                    class_suffix: classSuffix,
                    numeric_value: parseFloat(value),
                    className: value.toString().length ? [prefix, classSuffix].join('-') : prefix
                });
            }

            return classes;
        },

        isModuleEnabled: function(type) {
            return this.config.modules && this.config.modules[type] !== false;
        },

        chunk: function (array, number) {
            var i, j, temparray = [], chunk = number;
            for (i = 0, j = array.length; i < j; i += chunk) {
                temparray.push(array.slice(i, i + chunk));
            }

            return temparray;
        },

        toggleDemoClass: function(opts) {
            this.$refs.demoPanel.toggleDemoClass(opts);
        },

        loadedConfig: function(config) {
            this.config = config;
            this.$refs.demoPanel.demoClasses = [];
        }
    },

    computed: {
        borderWidths: function () {
            return this.getClasses('borderWidths', 'border');
                // .concat(this.getClasses('borderWidths', 'border-l'))
                // .concat(this.getClasses('borderWidths', 'border-r'))
                // .concat(this.getClasses('borderWidths', 'border-t'))
                // .concat(this.getClasses('borderWidths', 'border-b'));
        },

        borderColors: function () {
            return this.getClasses('borderColors', 'border');
        },

        backgroundColors: function () {
            return this.getClasses('backgroundColors', 'bg');
        },

        textColors: function () {
            return this.getClasses('textColors', 'text');
        },

        textSizes: function () {
            return this.getClasses('textSizes', 'text');
        },

        fontWeights: function () {
            return this.getClasses('fontWeights', 'font');
        },

        leadings: function () {
            return this.getClasses('leading', 'leading');
        },

        trackings: function () {
            return this.getClasses('tracking', 'tracking');
        },

        shadows: function () {
            return this.getClasses('shadows', 'shadow');
        },

        borderRadius: function () {
            return this.getClasses('borderRadius', 'rounded');
                // .concat(this.getClasses('borderRadius', 'rounded-l'))
                // .concat(this.getClasses('borderRadius', 'rounded-r'))
                // .concat(this.getClasses('borderRadius', 'rounded-t'))
                // .concat(this.getClasses('borderRadius', 'rounded-b'));
        },

        heights: function () {
            return this.getClasses('height', 'h');
        },

        percentageWidths: function () {
            return this.getClasses('width', 'w').filter(function (width) {
                return typeof width.value === 'string' && width.value.match(/%/) ? true :
                    false;
            }).map(function (width) {
                var max = parseInt(100 / width.numeric_value, 10);
                if (max < 1) {
                    max = 1;
                }

                width.cols = max;

                return width;
            });
        },

        otherWidths: function () {
            return this.getClasses('width', 'w').filter(function (width) {
                return typeof width.value === 'string' && width.value.match(/%/) ? false :
                    true;
            });
        },

        paddings: function () {
            return this.getClasses('padding', 'p');
                // .concat(this.getClasses('padding', 'px'))
                // .concat(this.getClasses('padding', 'py'));
        },

        margins: function () {
            return this.getClasses('margin', 'm');
                // .concat(this.getClasses('margin', 'mx'))
                // .concat(this.getClasses('margin', 'my'));
        },

        opacities: function () {
            return this.getClasses('opacity', 'opacity');
        }
    }
}
</script>

<template>
  <div class="container pt-8 pl-8" id="app">
     <h1>Tailwind Style Guide</h1>
     <demoPanel ref="demoPanel"></demoPanel>
     <configSwitcher ref="configSwitcher" @loaded="loadedConfig"></configSwitcher>
     <backgroundColors :backgroundColors="backgroundColors" @toggleDemoClass="toggleDemoClass"></backgroundColors>
     <textColors :textColors="textColors" @toggleDemoClass="toggleDemoClass"></textColors>
     <textSizes :textSizes="textSizes" @toggleDemoClass="toggleDemoClass"></textSizes>
     <fontWeights :fontWeights="fontWeights" @toggleDemoClass="toggleDemoClass"></fontWeights>
     <paddings :paddings="paddings" @toggleDemoClass="toggleDemoClass"></paddings>
     <margins :margins="margins" @toggleDemoClass="toggleDemoClass"></margins>
     <leadings :leadings="leadings" @toggleDemoClass="toggleDemoClass"></leadings>
     <trackings :trackings="trackings" @toggleDemoClass="toggleDemoClass"></trackings>
     <borderColors :borderColors="borderColors" @toggleDemoClass="toggleDemoClass"></borderColors>
     <borderWidths :borderWidths="borderWidths" @toggleDemoClass="toggleDemoClass"></borderWidths>
     <borderRadius :borderRadius="borderRadius" @toggleDemoClass="toggleDemoClass"></borderRadius>   
     <percentageWidths :percentageWidths="percentageWidths"></percentageWidths>
     <otherWidths :otherWidths="otherWidths"></otherWidths>
     <heights :heights="heights" @toggleDemoClass="toggleDemoClass"></heights>
     <shadows :shadows="shadows" @toggleDemoClass="toggleDemoClass"></shadows> 
     <opacities :opacities="opacities" @toggleDemoClass="toggleDemoClass"></opacities>
  </div>
</template>
