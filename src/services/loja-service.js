import { http } from './config'

export default	{

	salvar:(loja)=>{
		return http.post('loja/',loja);
  },
    
	atualizar:(loja)=>{
		return http.put('loja/'+loja.id+'/', loja);
  },

    listar:()=>{
		return http.get('loja/')
  },
    
	apagar:(loja)=>{
		return http.delete('loja/'+loja.id+'/', { data: loja })
	}
}