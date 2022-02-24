function Subject(){
    this.observer = [] // array of observer functions
}

Subject.prototype = {
    subscribe: function(fn){
        this.observer.push(fn)
    },
    unsubscribe: function(fnToRemove){
        this.observer = this.observer.filter(fn => {
            if(fn != fnToRemove){
                return fn
            }
        })
    },
    fire: function(){
        this.observer.forEach( fn => {
            fn.call()
        })
    }
}

const subject = new Subject()

function Observer1(){
    console.log("Observer 1 Firing!")
}

function Observer2(){
    console.log("Observer 2 Firing!")
}

subject.subscribe(Observer1)
subject.subscribe(Observer2)
subject.unsubscribe(Observer1)

subject.fire()