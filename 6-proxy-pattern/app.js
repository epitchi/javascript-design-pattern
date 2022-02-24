//External API Service
function CryptoCurrencyAPI(){
    this.getValue = function(coin){
        console.log("Calling External API...")
        switch(coin){
            case "Bitcoin":
                return "$35,338"
            case "Solana":
                return "$82,99"
            case "Ethereum":
                return "$2,397"    
        }
    }
}

///////////////////////////////////////////////////////////
// const api = new CryptoCurrencyAPI()

// console.log(api.getValue("Bitcoin"))
// console.log(api.getValue("Solana"))
// console.log(api.getValue("Etherz"))

function CryptoCurrencyProxy(){
    this.api = new CryptoCurrencyAPI()
    this.cache = {}

    this.getValue = function(coin){
        if(this.cache[coin] == null){
            this.cache[coin] = this.api.getValue(coin)
        }
        return this.cache[coin]
    }
}

const proxy = new CryptoCurrencyProxy()

console.log(proxy.getValue("Bitcoin"))
console.log(proxy.getValue("Ethereum"))
console.log(proxy.getValue("Solana"))
console.log(proxy.getValue("Bitcoin"))
console.log(proxy.getValue("Ethereum"))
console.log(proxy.getValue("Solana"))
console.log(proxy.getValue("Bitcoin"))
console.log(proxy.getValue("Ethereum"))
console.log(proxy.getValue("Solana"))
console.log(proxy.getValue("Bitcoin"))
console.log(proxy.getValue("Ethereum"))
console.log(proxy.getValue("Solana"))
console.log(proxy.getValue("Bitcoin"))
console.log(proxy.getValue("Ethereum"))
console.log(proxy.getValue("Solana"))
console.log(proxy.getValue("Bitcoin"))
console.log(proxy.getValue("Ethereum"))
console.log(proxy.getValue("Solana"))
console.log(proxy.getValue("Bitcoin"))
console.log(proxy.getValue("Ethereum"))
console.log(proxy.getValue("Solana"))
console.log(proxy.getValue("Bitcoin"))
console.log(proxy.getValue("Ethereum"))
console.log(proxy.getValue("Solana"))
console.log(proxy.getValue("Bitcoin"))
console.log(proxy.getValue("Ethereum"))
console.log(proxy.getValue("Solana"))