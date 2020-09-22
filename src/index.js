'use strict';
import {observable, computed, ObservableSet, autorun,reaction,action} from "mobx";

class Store {
    @observable str = 'hello'
    @observable num = 123

    @computed get mix(){
        return this.str + '/' + this.num
    }
    set mix(n){
        this.num = n
    }
}



let demo = new Store()
demo.mix = 1000
console.log(demo.mix)
demo.mix = 1000
console.log(demo.mix)
// autorun(() => {
//     console.log(demo.num)
// })


// class Store{
//     @observable string = 'hello'
//     @observable number = 123

//     // @action increment = () => {
//     //     this.number++
//     // }
//     @action.bound
//     increment(){
//         this.number++
//     }
// }

// let store = new Store()
// autorun(() => {
//     console.log(store.number)
// })

// setInterval(store.increment,1000)

function test(value = '123'){
    console.log(value+'123')
    let newValue = value + '234'
    return newValue
}
console.log(test())




