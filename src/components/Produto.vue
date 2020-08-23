<template>
  <div id="produto">

    <nav>
      <div class="nav-wrapper light-blue darken-4">
        <a href="#" class="brand-logo center">Produtos</a>
      </div>
    </nav>

    <div class="container ">

      <form @submit.prevent="salvar">

          <label>Nome</label>
          <input type="text" placeholder="Nome" v-model="produto.nome">
          <label>Descrição</label>
          <input type="text" placeholder="Decrição" v-model="produto.descricao">
          <label>Preço</label>
          <input type="number" placeholder="Preço" min="0.01" step="0.01" v-model="produto.preco">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <p></p>

      <table>

        <thead>

          <tr>
            <th>#</th>
            <th>NOME</th>
            <th>DESCRIÇÃO</th>
            <th>PREÇO</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="produto of produtos" :key="produto.id"> 
            <td>{{ produto.id }}</td>
            <td>{{ produto.nome }}</td>
            <td>{{ produto.descricao }}</td>
            <td>{{ produto.preco }}</td>
            <td>
              <button @click="editar(produto)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button @click="remover(produto)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>
      

    </div>

  </div>
</template>

<script>

  import Produto from '../services/produto-service'
  export default {
    //name: 'produto',
    data () {
      return {
        produto:{
          id: '',
          nome: '',
          descricao: '',
          preco: ''
        },
        produtos: [],
        errors: []
      }
    },
    mounted(){
      this.listar()
    },
    methods:{
      
        listar(){
          Produto.listar().then(resposta => {
            this.produtos = resposta.data
          }).catch(e => {
            console.log(e)
          })
        },
        salvar(){
          if(!this.produto.id){
            Produto.salvar(this.produto).then(() => {
              this.produto = {}
              alert('Cadastrado com sucesso!')
              this.listar()
              this.errors = {}
            }).catch(e => {
              this.errors = e.response.errors
            })
          }else{
            Produto.atualizar(this.produto).then(() => {
              this.produto = {}
              this.errors = {}
              alert('Atualizado com sucesso!')
              this.listar()
            }).catch(e => {
              this.errors = e.response.errors
            })
          }
          
        },
        editar(produto){
          this.produto = produto
        },
        remover(produto){
          if(confirm('Deseja excluir o produto?')){
            Produto.apagar(produto).then(() => {
              this.listar()
              this.errors = {}
            }).catch(e => {
              this.errors = e.response.errors
            })
          }
        }
    }
  }

</script>