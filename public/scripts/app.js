new Vue({
    el: '#app',
    data: {
        title: 'Hello World2!'
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value
        }
    }
})