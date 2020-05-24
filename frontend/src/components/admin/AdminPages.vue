<template>
  <div class="admin-pages">
      <PageTitle icon="fa fa-cogs" main="Administração do sistema" subtitle="Administração geral do sistema" />
      <div class="admin-pages-tabs">
        <b-card no-body>
          <b-tabs card vertical pills>
            <b-tab title="Artigos" active>
              <ArticleAdmin></ArticleAdmin>
            </b-tab>
            <b-tab title="Categorias">
              <CategoryAdmin></CategoryAdmin>
            </b-tab>
            <b-tab title="Usuários">
              <UserAdmin></UserAdmin>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
  </div>
</template>

<script>

import PageTitle from '@/components/template/PageTitle'
import ArticleAdmin from './ArticleAdmin'
import CategoryAdmin from './CategoryAdmin'
import UserAdmin from './UserAdmin'

export default {
    name: 'AdminPageTitle',
    components: { PageTitle, ArticleAdmin,  CategoryAdmin, UserAdmin }
}
</script>

<style>
ul.nav {
  border: 2px solid #ddd
}
li.nav-item {
  margin-top: 10px;
  margin-left: 0;
}
li.nav-item > a {
  background: wheat !important;
  color: #000 !important;
}

li.nav-item > a.active {
  background: #263238 !important;
  color: #fff !important;
}
</style>