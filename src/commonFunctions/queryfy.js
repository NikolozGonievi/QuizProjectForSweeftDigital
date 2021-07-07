export const objectToQueryString = (object) => {
    let queryString = ''
    if (object.amount) {
        queryString = queryString.concat(`amount=${object.amount}`,'&') 
    }
    if (object.category) {
        queryString = queryString.concat(`category=${object.category}`,'&')
    }
    if(object.difficulty) {
        queryString = queryString.concat(`difficulty=${object.difficulty}`,'&')
    }
    if(object.type){
        queryString = queryString.concat(`type=${object.type}`,'&')
    }
    
    return queryString
}