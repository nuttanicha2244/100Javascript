type BaseVehicle = {
    make: string;
    model: string;
}

type MotoBike = BaseVehicle & {
    type: 'motoBike';
    fuel:'petrol';
}

type Car = BaseVehicle & {
    type: 'car';
    fuel: 'petrol' | 'diesel';
    doors: number;
}

type Vehicle = Car | MotoBike;

const myBike: Vehicle = {
    make: 'Yamaha',
    model: 'MT-07',
    type: 'motoBike',
    fuel: 'petrol'
}