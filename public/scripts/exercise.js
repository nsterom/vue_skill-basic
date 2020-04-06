new Vue({
    el: '#exercise',
    data: {
        name: 'Neil',
        age: 30,
        image: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'
    },
    methods: {
        getRandomNum: function(event) {
            return Math.random()
        }
    }
})