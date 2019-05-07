export class Location {
    constructor(city, country, temperature, status) {
        this.city = city;
        this.country = country;
        this.temperature = temperature;
        this.status = status;
    }

    city: string;
    country: string;
    temperature: number;
    status: string;
}
