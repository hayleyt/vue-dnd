Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }} - assigned to {{ todo.owner.name }}</li>'
})

var app = new Vue({ 
    el: '#app',

    data () {
        return {
            items: [
            {
            id: 0,
            title: 'Item A',
            list: 1
            },
            {
            id: 1,
            title: 'Item B',
            list: 1
            },
            {
            id: 2,
            title: 'Item C',
            list: 2
            }]
        }
    },
        
    computed: {
        listOne () {
            return this.items.filter(item => item.list === 1)
        },
        listTwo () {
            return this.items.filter(item => item.list === 2)
        }
    },
    methods: {
        startDrag: (evt, item) => {
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.effectAllowed = 'move'
            evt.dataTransfer.setData('itemID', item.id)
        },
        onDrop (evt, list) {
            const itemID = evt.dataTransfer.getData('itemID')
            const item = this.items.find(item => item.id == itemID)
            item.list = list
         }
    },

});