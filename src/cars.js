let cars = [
    {
        name: 'Golf',
        fabricante: 'Volksvagem',
        ano: 2016,
        cambio: 'manual',
        km_rodado: 45782,
        preco: 126999,
        ipva:1269
    },
    {
        name: 'Onix',
        fabricante: 'Chevrolet',
        ano: 2019,
        cambio:'manual' ,
        km_rodado: 28478,
        preco: 62500,
        ipva:625
    },
    {
        name: 'Cruze',
        fabricante: 'Chevrolet',
        ano: 2022,
        cambio: 'automatico' ,
        km_rodado: 14571,
        preco: 172000,
        ipva:1720
    },
    {
        name: 'i30',
        fabricante: 'Hyundai',
        ano: 2012,
        cambio: 'automatico' ,
        km_rodado: 52481,
        preco: 45300,
        ipva:453
    },
    {
        name: 'Corola',
        fabricante: 'Toyota',
        ano: 2015,
        cambio: 'manual',
        km_rodado: 35648,
        preco: 86451,
        ipva:854
    },
    
]

function getCars(){
    return cars
}

export default getCars()