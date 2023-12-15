import {mapState, mapActions} from 'pinia'
import {exampleStore} from '../../stores/example-store.js'
export default{

    data(){
        return{
            example : "example"
        }
    },
    mounted(){
        this.get_all_products()
    },
    computed:{
        ...mapState(exampleStore,['list'])
    },
    methods:{
        ...mapActions(exampleStore,['get_all_products'])
    }


}