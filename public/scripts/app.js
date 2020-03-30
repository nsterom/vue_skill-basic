new Vue({
    el: '#app',
    data: {
        title: 'Hello World2!',
        link: 'http://www.google.com'
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value
        },
        sayHello: function(event) {
            return this.title
        }
    }
})