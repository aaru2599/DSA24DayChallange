function callPrep() {
    function Car(type, fuel) {
        this.type = type;
        this.fuel = fuel
    }
    function setBrand(brand) {
        Car.call(this, "portable", "electric");
        this.brand = brand;
        console.log("Car11", Car);

    }
    const newBrand=new setBrand("Lembo");

}
callPrep();