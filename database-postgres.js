import { sql } from "./dbsql.js"

export class DatabasePoestgres {

    async list(search) {
        let videos
        
        if(search){
            videos = await sql`SELECT * FROM videos WHERE title ILIKE ${`%${search}%`}`
        }else{
            videos = await sql`SELECT * FROM videos`
        }

        return videos
    }

    async create(video){
        const [createdVideo] = await sql`
            INSERT INTO videos (title, description, duration)
            VALUES (${video.title}, ${video.description}, ${video.duration})
            RETURNING *
        `

        return createdVideo
    }

    async update(id, video){
        const [updatedVideo] = await sql`
            UPDATE videos
            SET title = ${video.title}, description = ${video.description}, duration = ${video.duration}
            WHERE id = ${id}
            RETURNING *
        `
        return updatedVideo
    }

    async delete(id){
        const [deletedVideo] = await sql`
            DELETE FROM videos
            WHERE id = ${id}
            RETURNING *
        `
        return deletedVideo
    }
}