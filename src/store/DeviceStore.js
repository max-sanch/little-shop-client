import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'},
            {id: 5, name: 'Наушники'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'}
        ]
        this._devices =  [
            {id: 1, name: 'Iphone 12 pro', price: 67000, rating: 4.5, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
            {id: 2, name: 'Iphone 13 pro max', price: 120000, rating: 4.9, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
            {id: 3, name: 'Samsung galaxy 8', price: 54000, rating: 4.6, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
            {id: 4, name: 'Samsung galaxy 2', price: 13000, rating: 3.4, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
            {id: 5, name: 'Honor 10 Lite', price: 13000, rating: 4.6, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
            {id: 6, name: 'LG Pro 100', price: 119000, rating: 2.1, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`}
        ]
        this._selectedType = {}
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }
    setBrands(brands) {
        this._brands = brands;
    }
    setDevices(devices) {
        this._devices = devices;
    }
    setSelectedType(type) {
        this._selectedType = type;
    }

    get types() {
        return this._types;
    }
    get brands() {
        return this._brands;
    }
    get devices() {
        return this._devices;
    }
    get selectedType() {
        return this._selectedType;
    }
}