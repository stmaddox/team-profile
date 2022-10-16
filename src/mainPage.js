let teamDisplay = function(array) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <title>Team</title>
    </head>
    <body>
        <header class="text-info bg-dark d-flex justify-content-center align-items-center" style="height: 120px; width:100%">
            <h1>Here Is Your Team!</h1> 
        </header>
        <div class="d-flex justify-content-center align-items-center m-3">
            <div id="card-container" class="d-flex justify-content-evenly align-items-center">
                ${ array.join('') }
            </div>
        </div>
    </body>
    </html>
    
    `
}

module.exports = teamDisplay;