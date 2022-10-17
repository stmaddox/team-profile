const managerCard = (name, id, email, office) => {
  return `
    <div class="card p-0 m-3 col-lg-3 col-md-5">
        <div class="card-title text-info bg-dark d-flex flex-column justify-content-center p-2">
            <h5 class="">${name}</h5>
            <h6 class="card-subtitle mb-2 text-light">Manager</h6>
        </div>
        <div class="card-body">
            <ul class="list-unstyled"> 
                <li>ID: ${id}</li>
                <li><a href="mailto:${email}" class="card-link">${email}</a></li>
                <li>Office Number: ${office}</li>
            </ul>   
        </div>
    </div>
    `;
};

module.exports = managerCard;
