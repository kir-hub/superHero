import {$host} from './index'

export const createHero = async (hero)=>{
    const response = await $host.post('api/superhero/create', hero)
    return response

}

export const editHero = async (hero)=>{
    const response = await $host.put('api/superhero/edit', hero)
    return response
}

export const deleteHero = async (id)=>{
    const response = await $host.delete('api/superhero/remove', id)
    return response
    
}

export const getAllHeroes = async ()=>{
    const response = await $host.get('api/superhero/getAll')
    return response
}

export const getOneHero = async (id)=>{
    const response = await $host.get('api/superhero/getOne?id='+ id)
    return response
}
