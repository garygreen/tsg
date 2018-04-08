<script>
export default {
    data: function () {
        var data = {
            configFiles: window.configFiles,
            activeConfigName: window.configFiles[0]
        };

        return data;
    },
    watch: {
        activeConfigName: function() {
            this.loadConfig();
        }
    },
    methods: {
        loadConfig: function() {
            var vm = this;
            window.tailwindConfig = undefined;
            var script = document.createElement('script');
            script.addEventListener('load', function() {
                vm.$emit('loaded', window.tailwindConfig);
            });
            document.querySelector('head').appendChild(script);
            script.src = 'configs/' + this.activeConfigName;
            document.querySelector('#site-css').href = 'configs/' + this.activeConfigName.replace(/\.js$/, '.css');
        }
    }
}
</script>

<template>
    <div class="tsg-fixed tsg-pin-r tsg-pin-b tsg-mr-8 tsg-mb-4 tsg-shadow-lg">
        <select v-model="activeConfigName" @change="loadConfig()">
            <option v-for="name in configFiles" :value="name">
                {{ name }}
            </option>
        </select>
    </div>
</template>