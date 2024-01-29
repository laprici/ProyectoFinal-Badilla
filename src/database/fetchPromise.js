const FetchPromise = (dataBase) => {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve(dataBase);
        }, 3000);
    })
}