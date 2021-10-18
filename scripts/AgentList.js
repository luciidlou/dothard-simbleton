import { getPurchasingAgents } from "./database.js"
import { agent } from "./Agent.js"

const purchasingAgentContainer = document.querySelector(".agents")

export const purchasingAgentsList = () => {
    const purchasingAgentsArray = getPurchasingAgents()
    purchasingAgentContainer.innerHTML = "<h1>List of Purchasing Agents</h1>"

    purchasingAgentsArray.forEach(
        (agentObject) => {
            purchasingAgentContainer.innerHTML += agent(agentObject)
        }
    )
}