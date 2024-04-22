CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    created_at timestamptz DEFAULT NOW(),
    updated_at timestamptz DEFAULT NOW(),
    deadline_at timestamptz,
    title VARCHAR(255),
    description TEXT,
    is_done BOOLEAN DEFAULT FALSE
)