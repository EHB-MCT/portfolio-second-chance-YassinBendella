use resolume;
create table clips (
id int auto_increment primary key,
clip_path varchar(255) not null,
current_active varchar(255) not null);