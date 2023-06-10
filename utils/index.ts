

export async function fetchCars(){
    const headers= {
		'X-RapidAPI-Key': '2e25649266msh24d7974d5854e87p190ae5jsn4060b21626e6',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';

    const response = await fetch(url, {
        method:'GET',
        headers: headers
    });
    const result = await response.json();
    return result;
}