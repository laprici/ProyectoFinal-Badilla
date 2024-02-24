const fetchData = (dataBase) => {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve(dataBase);
        }, 500);
    })
}

export default fetchData;