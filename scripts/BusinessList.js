import { getBusinesses, getSum } from "./database.js";
import { getNewYorkBusinesses } from "./database.js";
import { getManufacturingBusinesses } from "./database.js";
import { business } from "./Business.js"


const mainContainer = document.querySelector("#businessList")
const newYorkContainer = document.querySelector(".businessList--newYork")
const manufacturingContainer = document.querySelector(".businessList--manufacturing")


export const businessList = () => {
    const businessArray = getBusinesses()
    mainContainer.innerHTML = "<h1>Active Businesses</h1>"

    businessArray.forEach(
        (businessObject) => { 
            mainContainer.innerHTML += business(businessObject)
        }
    );
}

export const newYorkBusinessList = () => {
    const newYorkBusinessArray = getNewYorkBusinesses()
    newYorkContainer.innerHTML = "<h1>Active New York Businesses</h1>"

    newYorkBusinessArray.forEach(
        (businessObject) => {
            newYorkContainer.innerHTML += business(businessObject)
        }
    );
}

export const manufacturingBusinessList = () => {
    const manufacturingBusinessArray = getManufacturingBusinesses()
    manufacturingContainer.innerHTML = "<h1>Active Manufacturing Businesses</h1>"

    manufacturingBusinessArray.forEach(
        (businessObject) => {
            manufacturingContainer.innerHTML += business(businessObject)
        }
    );
}



const companySearchResultArticle = document.querySelector(".foundCompanies")


document
    .querySelector("#companySearch")
        .addEventListener(
            "keypress",
            keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    const businessArray = getBusinesses()
                    /*
                        When the user presses 'Enter', find the matching business.

                        You can use the `.includes()` string method to
                        see if a smaller string is part of a larger string.

                        Example: business.companyName.includes(keyPressEvent.target.value)
                    */

                    const foundBusiness = businessArray.find(business => business.companyName.includes(keyPressEvent.target.value))/** implement .find() method here */
                    // debugger
                    companySearchResultArticle.innerHTML = business(foundBusiness);
                }
        });
