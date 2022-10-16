const internCard = (name, id, email, school) => {

    return`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
    </div>
    <div>
        <h4>ID: ${id}</h4>
        <a href="mailto:${email}" class="card-link">${email}</a>
        <h4>College: ${school}</h4>
    </div>
</div>
    `
}

module.exports = internCard;