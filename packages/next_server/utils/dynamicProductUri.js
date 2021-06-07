const modifyProductName = (productName) => {
    return productName.toLowerCase().split(' ').join('_')
}

export function dynamicProductUri(productName, productId, username = '') {
    const newProductName = modifyProductName(productName)
    if (username) {
        return `/ip/${newProductName}/${productId}?username=${username}`
    } else {
        return `/ip/${newProductName}/${productId}`
    }
}