new Vue({
    el: '#exercise',
    data: {
        name: 'Neil',
        age: 30,
        image: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
        value: 0
    },
    computed: {
        result: function(event) {
            return this.value == 37 ? 'done' : 'not there yet'
        }
    },
    watch: {
        result: function() {
            var vm = this
            setTimeout(function() {
                vm.value = 0
            }, 5000)
        }
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
}),
new Vue({
    el: '#styleex',
    methos: {
        startEffect: function() {
        }
    }
})