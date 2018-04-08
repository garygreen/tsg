import Vue from 'vue';
import App from './components/App.vue';
import './tailwind.css';

var app = {
    el: '#app',
    render: function(createElement) {
        return createElement(App);
    }
};

window.vm = new Vue(app);