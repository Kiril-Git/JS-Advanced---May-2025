function factory(library, orders) {

    const result = []

    for (let el of orders) {
        const product = Object.assign({}, el.template)

        for (let part of el.parts) {
            product[part] = library[part]
        }
        result.push(product)
    }



    return result
}

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [
    {
        template: { name: 'ACME Printer'},
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner'},
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier'},
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo'},
        parts: ['play']
    }
];

const products = factory(library, orders);
console.log(products);
