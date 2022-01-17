export const currencyFormater = new Intl.NumberFormat(undefined, {
    style: 'currency', 
    currency: 'EUR',
    minimumFractionDigits: 0
})