function FedEx(){
    this.calculate = package => {
        // FedEx calculations...
        return 2.45;
    }
}
function UPS(){
    this.calculate = package => {
        // UPS calculations...
        return 1.56
    }
}
function USPS(){
    this.calculate = package => {
        // usps calculations...
        return 4.5
    }
}

function Shipping(){
    this.company = "";
    this.setStrategy = (company) => {
        this.company = company
    }
    this.calculate = package => {
        return this.company.calculate(package)
    }
}

const fedex = new FedEx()
const ups = new UPS()
const usps = new USPS()
const package = {from: 'Ha Noi', to: "TPHCM", weight: 6.9}

const shipping = new Shipping()
shipping.setStrategy(fedex)
console.log("FexEx: " + shipping.calculate(package))

shipping.setStrategy(ups)
console.log("UPS: " + shipping.calculate(package))

shipping.setStrategy(usps)
console.log("USPS: " + shipping.calculate(package))

