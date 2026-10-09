/*import { createServer } from 'node:http'

const server = createServer((request  trás as respostas das requisições , response  devolve as respostas das requisições ) => {
   response.write('Hello')
   
   console.log('hello guys!')
    return response.end() 
})

server.listen(3333)*/

// import { DatabaseMemory } from "./database-memory.js"

import { DatabasePoestgres } from "./database-postgres.js"
import { fastify } from 'fastify'

const server = fastify()

// const database = new DatabaseMemory()
const database = new DatabasePoestgres()

server.post('/videos', async (request, reply) => {
    const {title, description, duration} = request.body

    const video = await database.create({
        title,
        description,
        duration,
    })

    console.log('Video created successfully!')

    console.log('Video created successfully!')


    return reply.status(201).send(video)
})

server.get('/videos', async (request) => {
    const search = request.query.search
    const videos = await database.list(search)

    console.log('Videos listed successfully!')

    return videos
})


server.put('/videos/:id', async (request, reply) => {
    const videoId = request.params.id
    const {title, description, duration} = request.body

    const video = await database.update(videoId, {
        title,
        description,
        duration,
    })
    console.log('Video updated successfully!')

    return reply.status(204).send()

})


server.delete('/videos/:id', async (request, reply) => {
    const videoId = request.params.id

    const video = await database.delete(videoId)

    console.log('Video deleted successfully!')

    return reply.status(204).send()
})

server.listen({ 
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333,})