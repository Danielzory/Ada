const useApi = () => {
    return fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error; // Rethrow the error to propagate it further
        });
}

export default useApi;