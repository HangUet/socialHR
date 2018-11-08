Vue.component('time-demo', {
    data: function () {
    },
    template: `
        <label>Time:</label>
        <div class="col-md-8 row">
            <div class="col-md-6"></div>
            <div class="col-md-6"></div>
        </div>
    `
})

var app = new Vue({
    el: '#time-detail'
});
