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
    el: '#ifforex',
    data: {
        show: true,
        friends: ['Peter', 'John', 'Mary'],
        lor: {
            title: 'Lord of the Rings',
            author: 'J.R.R Tolkiens',
            books: '3'
        },
        tObj: {
            name: 'TESTOBJECT',
            data: [1.67, 1.33, 0.98, 2.21]
        }
    }
}),
new Vue({
    el: '#styleex',
    data: {
        effectClasses: {
            highlight: false,
            shrink: true
        },
        float: 'float',
        userClass: '',
        isVisible: true,
        myStyle: {
            width: '100px',
            height: '150px',
            backgroundColor: 'gray'
        },
        progressBar: {
            width: '0px',
            backgroundColor: 'red'
        }
    },
    methods: {
        startEffect: function() {
            var vm = this
            setInterval(function() {
                vm.effectClasses.highlight = !vm.effectClasses.highlight
                vm.effectClasses.shrink = !vm.effectClasses.shrink
            }, 1000);
        },
        startProgress: function() {
            var vm = this
            wid = 0
            setInterval(function() {
                vm.progressBar.width = wid + 'px'
                wid += 10
            }, 1000)
        }
    }
})