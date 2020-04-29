
let express = require('express');
let app = express();
let data = require('./employees.json');


app.get('/employees', (req, res) => {
    if(!data) res.status(404).send(`We could not find the information you are looking for.`)
    
    // Line 15 evaluates when the if statement above does not apply.
    res.send(data);
})

app.get('/employees/:id', (req, res) => {
    // The following lines of code uses the find method,
    // which looks for the specific id an return a boolean value.
    const eData = data.employees.find( (employees) => {
        console.log(employees.id)
        return parseInt(req.params.id) === employees.id
    })
   
    if (!eData) res.status(404).send(`We could not find the specified employee in our database`)
    res.send(eData);
    
})

// .env is used for security purposes
const port = process.env.PORT || 4001;

// Assign a value to PORT by running express PORT=X in terminal 
app.listen(4001, () => {
    console.log(`Listening on port ${port}`)
})


