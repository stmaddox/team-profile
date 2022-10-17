const engineerCard = (name, id, email, github) => {
  return `
    <div class="card p-0 m-3 col-lg-3 col-md-5">
        <div class="card-title text-info bg-dark d-flex flex-column justify-content-center p-2">
            <h5 class="">${name}</h5>
            <h6 class="card-subtitle mb-2 text-light">Engineer</h6>
        </div>
        <div class="card-body">
            <ul class="list-unstyled"> 
                <li>ID: ${id}</li>
                <li>email: <a href="mailto:${email}" class="card-link">${email}</a></li>
                <li>GitHub: <a href="https://github.com/${github}" class="card-link">${github}</a></li>
            </ul>   
        </div>
    </div>
    `;
};

module.exports = engineerCard;
