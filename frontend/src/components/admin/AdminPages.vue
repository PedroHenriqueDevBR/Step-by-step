<template>
  <div class="admin-pages">
      <PageTitle icon="fa fa-cogs" main="Administração do sistema" subtitle="Administração geral do sistema" />
      <div class="admin-pages-tabs">
        <b-card no-body>
          <b-tabs card>
            <b-tab title="Artigos" active>
              <h1>Artigos</h1>
            </b-tab>
            <b-tab title="Categorias">
              <h1>Categorias</h1>
            </b-tab>
            <b-tab title="Usuários">
              <h1>Usuários</h1>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
  </div>
</template>

<script>

import PageTitle from '@/components/template/PageTitle'

export default {
    name: 'AdminPageTitle',
    components: { PageTitle }
}
</script>

<style>

</style>