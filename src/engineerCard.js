const engineerCard = (name, id, email, github) => {

    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
        </div>
        <div>
            <h4>ID: ${id}</h4>
            <a href="mailto:${email}" class="card-link">${email}</a>
            <a href="https://github.com/${github}" class="card-link">${github}</a>
        </div>
    </div>
    
    `
}

module.exports = engineerCard;