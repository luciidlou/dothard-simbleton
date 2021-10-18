export const agent = ( agentObject ) => {
    return `
        <section class="agent">
            <h2 class="agent__name">${agentObject.fullName}</h2>
            <div class="agent__company">
            ${agentObject.company}
            </div>
            <div class="agent__phone">
            ${agentObject.phoneNumber}
            </div>
        </section>
    `
}