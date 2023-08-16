function Tech_hardware(Processador, ram ,Armazenamento, GPU){
    this.Processador = Processador;
    this.ram = ram;
    this.Armazenamento = Armazenamento;
    this.GPU = GPU;
}

function Laptop(Processador, ram ,Armazenamento, GPU){
    Tech_hardware.call(this, Processador, ram ,Armazenamento, GPU);
}

function Desktop(Processador, ram ,Armazenamento, GPU){
    Tech_hardware.call(this, Processador, ram ,Armazenamento, GPU);
}

function Mobile(Processador, ram ,Armazenamento, GPU){
    Tech_hardware.call(this, Processador, ram ,Armazenamento, GPU);
}


const LaptopPablo = new Laptop("i5 1100H", "8GB", "256GB", "GTX 1650");
console.log(LaptopPablo);
const DesktopTroli = new Desktop("M2 Ultra","64GB", "1TB", "Apple-GPU"); 
console.log(DesktopTroli);
const MobileTroli = new Mobile("A16 BIONIC", "12GB", "512GB", "Apple-GPU");
console.log(MobileTroli);