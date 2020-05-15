const app = require('express')()

app.get('', (req, res) => {
    res.send(`asddsa`)
})

app.listen(3000, () => {
    console.log('Application running in the port 3000')
})