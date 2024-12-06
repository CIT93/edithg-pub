const saveLS = (data) => {
    const serializedArr = JSON.stringify(data);
    localStorage.setItem('data', serializedArr);
}

const getLS = () => {
    const retrievedArr = localStorage.getItem('data');
    if(retrievedArr !== null) {
        return JSON.parse(retrievedArr);
    } else {
        return [];
    }
}
const data = getLS();
export { data, saveLS, getLS};