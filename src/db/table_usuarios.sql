create table usuarios (
    id serial primary key,
    nome text not null,
    email text not null unique,
    password text not null
)