<template>
  <div id="loja">

    <nav>
      <div class="nav-wrapper light-blue darken-4">
        <a href="#" class="brand-logo center">Lojas</a>
      </div>
    </nav>

    <div class="container">

      <form @submit.prevent="salvar">

          <label>Nome</label>
          <input type="text" placeholder="Nome" v-model="loja.nome">
          <label>Endereço</label>
          <input type="text" placeholder="Rua, Avenida" v-model="loja.endereco">
          <label>Cidade</label>
          <input type="text" placeholder="Cidade" v-model="loja.cidade">
          <label>Estado</label>
          <input type="text" placeholder="Estado" v-model="loja.estado">

          <button class="waves-effect waves-light btn-small ">Salvar<i class="material-icons left">save</i></button>

      </form>

      <p></p>

      <table>

        <thead>

          <tr>
            <th>#</th>
            <th>NOME</th>
            <th>ENDEREÇO</th>
            <th>CIDADE</th>
            <th>ESTADO</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="loja of lojas" :key="loja.id"> 
            <td>{{ loja.id }}</td>
            <td>{{ loja.nome }}</td>
            <td>{{ loja.endereco }}</td>
            <td>{{ loja.cidade }}</td>
            <td>{{ loja.estado }}</td>
            <td>
              <button @click="editar(loja)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button @click="remover(loja)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>
  import loja from '../services/loja-service'
  export default {
    //name: 'loja',
    data () {
      return {
        loja:{
          id: '',
          nome: '',
          endereco: '',
          cidade: '',
          estado: ''
        },
        lojas: [],
        errors: []
      }
    },
    mounted(){
      this.listar()
    },
    methods:{
      
        listar(){
          loja.listar().then(resposta => {
            this.lojas = resposta.data
          }).catch(e => {
            console.log(e)
          })
        },
        salvar(){
          if(!this.loja.id){
            loja.salvar(this.loja).then(() => {
              this.loja = {}
              alert('Cadastrado com sucesso!')
              this.listar()
              this.errors = {}
            }).catch(e => {
              this.errors = e.response.errors
            })
          }else{
            loja.atualizar(this.loja).then(() => {
              this.loja = {}
              this.errors = {}
              alert('Atualizado com sucesso!')
              this.listar()
            }).catch(e => {
              this.errors = e.response.errors
            })
          }
          
        },
        editar(loja){
          this.loja = loja
        },
        remover(loja){
          if(confirm('Deseja excluir o loja?')){
            loja.apagar(loja).then(() => {
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