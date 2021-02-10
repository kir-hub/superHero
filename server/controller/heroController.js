const Superhero = require('../models/models')
const uuid = require('uuid')
const path = require('path')


class heroController {
    async create(req, res, next){
        try {
            const {nickname, real_name, origin_description, superpowers, catch_phrase} = req.body
            const {images} = req.files
            let fileName = uuid.v4() + '.jpg'
            images.mv(path.resolve(__dirname, '..', 'static', fileName))

            const hero = await Superhero.create({nickname, real_name, origin_description, superpowers, catch_phrase, images: fileName})
            return res.json(hero)
            
        } catch (error) {
            next(console.log(error))
        }
    }
    
    async edit(req, res, next){
        try {
            
            const {images} = req.files
            
            const fileName = uuid.v4() + '.jpg'
            images.mv(path.resolve(__dirname, '..', 'static', fileName))
            const img = path.basename(fileName)

            if(req.files){
                req.body.images = img
            }
            
            const [updatedCount, updatedHero] = await Superhero.update(req.body,  {
                where: {
                    id: req.body.id
                }, returning: true,  
            })
            if(updatedCount){
                
                res.json(updatedHero);           
             }
            next()
        } catch (error) {
            
            console.log(error);
        }

    }
    
    async remove(req, res, next){
        try {
            const deletedCount = await Superhero.destroy(
                {
                    where: {id: req.body.id}
                }
            )
            if(deletedCount){
                res.json(deletedCount)
            }
            next()
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(req,res,next){
        try {
            
            
            const heroes = await Superhero.findAndCountAll()
            res.json(heroes)
        } catch (error) {
            console.log(error);
        }
    }

    async getOne(req, res, next){
        try {
            const {id} =  req.query
            const hero = await Superhero.findOne({
                where: {id},
                
            })
            res.json(hero)
        } catch (error) {
            console.log(error);
        }
    }
    
}

module.exports = new heroController()