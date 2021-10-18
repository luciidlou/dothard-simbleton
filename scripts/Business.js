import { getSum } from "./database.js"

export const business = ( businessObject ) => {
    return `
        <section class="business">
            <h2 class="business__name">${businessObject.companyName} ($${Math.floor(getSum(businessObject) * 100) / 100})</h2>
            <div class="business__address">
            ${businessObject.addressFullStreet}
            </div>
            ${businessObject.addressCity}, ${businessObject.addressStateCode}, ${businessObject.addressZipCode}
        </section>
    `
}
