new Vue({
    el: '#app',
    data: {
        title: 'Hello World2!',
        link: 'http://www.google.com',
        finishedLink: '<a href="http://google.com">Google</a>'
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value
        },
        sayHello: function(event) {
            this.title = 'in sayHello'
            return this.title
        }
    }
})