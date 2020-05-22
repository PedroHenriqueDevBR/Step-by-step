module.exports = app => {
    const get = async (req, res) => {
        try {
            const categories = await app.db('categories').count().first()
            const users = await app.db('users').count().first()
            const articles = await app.db('articles').count().first()
            
            const countCategories = categories['count(*)']
            const countUsers = users['count(*)']
            const countArticles = articles['count(*)']

            res.status(200).json({
                categories: countCategories,
                articles: countArticles,
                users: countUsers
            })
        } catch(err) {
            res.status(500).send(err)
        }
    }

    return {
        get
    }
}