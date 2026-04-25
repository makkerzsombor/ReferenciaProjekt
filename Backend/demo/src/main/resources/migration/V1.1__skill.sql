CREATE TABLE skill
(
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    expertise INTEGER NOT NULL CHECK (expertise > 0)
)