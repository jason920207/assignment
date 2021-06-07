const productIdValidation = (id) => {
    if (id.indexOf('$') === -1) {
        return true
    } else {
        return false
    }

}

module.exports = {
    productIdValidation
}


