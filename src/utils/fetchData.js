const fetchData = (dataBase) => {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve(dataBase);
        }, 2000);
    })
}

export default fetchData;