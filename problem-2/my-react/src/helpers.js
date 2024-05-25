export const generateUniqueId = (product) => {
    return ${ product.company } -${ product.category } -${ product.name } -${ product.price };
};