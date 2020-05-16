module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation

    save = (req, res) => {
        const article = { ...req.body }
        if (req.params.id) article.id = req.params.id
        return
    }
}