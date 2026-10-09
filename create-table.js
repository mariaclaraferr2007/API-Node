import { sql } from './dbsql.js'

sql`
    CREATE TABLE videos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INTEGER NOT NULL CHECK (duration >= 0)
);`.then(() => {
    console.log('Table created successfully!')
}).catch((error) => {
    console.error('Failed to create table:', error)
    process.exitCode = 1
})