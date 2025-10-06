drop table profile;
drop table stack;
drop table projects;
drop table social_links;

-- ==============================
-- 🌟 PORTAFOLIO JM DEV DATABASE
-- ==============================
-- 1️⃣ Tabla: perfil / datos generales
create table if not exists profile (
  id uuid primary key default gen_random_uuid (),
  dev_name text,
  full_name text,
  header_description text,
  profile_photo_url text,
  location text,
  about_me_description text,
  cvLink text
);

-- 2️⃣ Tabla: stack / tecnologías
create table if not exists stack (
  id uuid primary key default gen_random_uuid (),
  name text not null,
  icon_url text
);

-- 3️⃣ Tabla: projects / proyectos
create table if not exists projects (
  id uuid primary key default gen_random_uuid (),
  name text not null,
  description text,
  icon_url text,
  link text,
  created_at timestamp default now()
);

-- 4️⃣ Tabla: social_links / redes sociales
create table if not exists social_links (
  id uuid primary key default gen_random_uuid (),
  name text not null,
  icon_url text,
  link text
);

-- ==============================
-- 🌍 INSERTAR DATOS INICIALES
-- ==============================
insert into
  profile (
    dev_name,
    full_name,
    header_description,
    profile_photo_url,
    location,
    about_me_description,
    cvLink
  )
values
  (
    'JM Dev',
    'Juan Manuel Velázquez',
    'Técnico Informático | Desarrollador web frontend',
    'https://avatars.githubusercontent.com/u/115042535?s=400&u=62a596cea79ad50f38ed1e841b021acae7b7b79a&v=4',
    'Ciudad de Limpio, Paraguay',
    'Soy un desarrollador apasionado por crear aplicaciones y sitios web modernos, intuitivos y funcionales. Mi objetivo es combinar diseño atractivo con tecnología para brindar experiencias excepcionales a los usuarios.',
    'https://drive.google.com/file/d/10u5nQp08dynd3C_7DuViF8Vq-jBoK-Cv/view?usp=sharing'
  );

-- ==============================
-- 💻 Stack inicial
-- ==============================
insert into
  stack (name, icon_url)
values
  ('React', 'https://skillicons.dev/icons?i=react'),
  (
    'TailwindCSS',
    'https://skillicons.dev/icons?i=tailwind'
  ),
  ('JS', 'https://skillicons.dev/icons?i=javascript'),
  (
    'Supabase',
    'https://skillicons.dev/icons?i=supabase'
  ),
  (
    'Android Jetpack Compose',
    'https://skillicons.dev/icons?i=androidstudio'
  ),
  ('Kotlin', 'https://skillicons.dev/icons?i=kotlin');

-- ==============================
-- 🚀 Proyectos iniciales
-- ==============================
insert into
  projects (name, description, icon_url, link)
values
  (
    'E-commerce Backend & Admin Panel con Supabase',
    'Solución completa de gestión de productos para pequeños negocios, compuesta por dos partes clave: 1) Una API RESTful robusta (Node.js/JavaScript) para el manejo de inventario y catálogo, que usa Supabase (Base de Datos y Storage) para la persistencia. 2) Un Panel de Control totalmente funcional, que permite al usuario administrar el stock, crear, editar y eliminar productos, y gestionar sus imágenes. Este diseño desacoplado asegura que la API pueda alimentar tanto el panel de administración como cualquier otro frontend de ventas (web o móvil) personalizado.',
    'https://skillicons.dev/icons?i=nodejs',
    'https://github.com/juanmadev5/GestorDeProductos'
  ),
  (
    'Control de Inventarios en Consola con C#',
    'Este proyecto utiliza JSON para guardar y cargar datos, e implementa el patrón Singleton para la gestión centralizada de la información. El uso de ConcurrentDictionary asegura un manejo de datos seguro y eficiente.',
    'https://skillicons.dev/icons?i=cs',
    'https://github.com/juanmadev5/InventorySystem'
  ),
  (
    'Imagify: Aplicación de búsqueda y descarga de imágenes',
    'Desarrollada de forma nativa para Android utilizando Jetpack Compose para la interfaz de usuario. Conectada a la API de Unsplash, esta app permite a los usuarios buscar y descargar imágenes de alta calidad de forma eficiente, demostrando experiencia en el consumo de APIs y desarrollo moderno de UI en Android.',
    'https://skillicons.dev/icons?i=androidstudio',
    'https://github.com/juanmadev5/Imagify'
  ),
  (
    'LearnWithMe: Blog personal',
    'Un blog personal desarrollado con AstroJS para demostrar habilidades en la creación de sitios web modernos. Su arquitectura sin servidor garantiza un rendimiento y una optimización excepcionales, destacando mi experiencia en el desarrollo de aplicaciones web de alto rendimiento.',
    'https://skillicons.dev/icons?i=astro',
    'https://github.com/juanmadev5/learn-with-me'
  );

-- ==============================
-- 🌐 Redes sociales
-- ==============================
insert into
  social_links (name, icon_url, link)
values
  (
    'GitHub',
    'https://img.icons8.com/external-tal-revivo-light-tal-revivo/48/external-github-community-for-software-building-and-testing-online-logo-light-tal-revivo.png',
    'https://github.com/juanmadev5'
  ),
  (
    'LinkedIn',
    'https://img.icons8.com/fluency-systems-regular/48/linkedin.png',
    'https://www.linkedin.com/in/jmdev365/'
  ),
  (
    'Contactame',
    'https://img.icons8.com/pulsar-line/48/mail.png',
    '#form'
  );