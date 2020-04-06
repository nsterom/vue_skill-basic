new Vue({
    el: '#exercise',
    data: {
        name: 'Neil',
        age: 30,
        image: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
        value: ''
    },
    methods: {
        getRandomNum: function(event) {
            return Math.random()
        },
        showAlert: function(event) {
            alert('Alert!')
        },
        saveValue: function(event) {
            this.value = event.target.value
        }
    }
})