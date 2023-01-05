export const converIcon = (weatherCode: number) => {
    switch (weatherCode) {
        case 0 :
            return 'sun'
        case 1:
        case 2:
        case 3:
            return 'cloudy-sun';
        case 61:
        case 63:
        case 65:
            return 'cloudy-sun-rain';
        case 95:
        case 96:
        case 99:
            return 'storm';
        default:
            return 'cloudy-sun';
    }
}