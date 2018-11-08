Vue.component('name-demo', {
    data: function () {
    },
    template: `
        <label>Name:</label>
        <strong>------</strong>
    `
})

var app = new Vue({
    el: '#name-detail'
});
