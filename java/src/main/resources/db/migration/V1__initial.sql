CREATE TABLE IF NOT EXISTS todos (
     id SERIAL PRIMARY KEY,
    createdAt timestamptz DEFAULT NOW(),
    updatedAt timestamptz DEFAULT NOW(),
    deadlineAt timestamptz,
    title VARCHAR(255),
    description TEXT,
    isDone BOOLEAN DEFAULT FALSE
)