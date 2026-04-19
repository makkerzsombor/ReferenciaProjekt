CREATE TABLE technology
(
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    knowledge INTEGER NOT NULL CHECK (knowledge > 0)
)
