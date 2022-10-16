const managerCard = (name, id, email, office) => {

    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
    </div>
    <div>
        <h4>ID: ${id}</h4>
        <a href="mailto:${email}" class="card-link">${email}</a>
        <h4>Office Number: ${office}</h4>
    </div>
</div>
    `
}

module.exports = managerCard;