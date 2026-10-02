# Landing Page - Banda Rock / Metal

Landing page moderna, rápida y segura diseñada para bandas de rock y metal, construida con la estética **Modern Dark Brutalist** y optimizada para ser desplegada en **Cloudflare Pages**.

---

## 🚀 Características

- **Diseño Modern Dark Brutalist**: Paleta en negro profundo (`#0b0b0e`), gris grafito y acentos en rojo carmesí (`#dc2626`), con tipografías de impacto (*Bebas Neue* y *Oswald*).
- **100% Modular**: Todos los datos de la banda (integrantes, biografía, música, fechas y contacto) se editan desde un único archivo: [`src/data/bandData.js`](src/data/bandData.js).
- **Secciones One-Page completas**:
  - **Hero**: Portada de alto impacto con llamada a la acción y enlaces a plataformas de streaming.
  - **Biografía / Banda**: Historia, sonido, filosofía, citas y estadísticas en vivo.
  - **Integrantes (Lineup)**: Tarjetas interactivas con foto, rol, biografía y equipamiento técnico.
  - **Música & Tour**: Lanzamiento destacado, enlaces a Spotify/YouTube/Bandcamp y tabla de próximas fechas con enlaces a venta de entradas.
  - **Contacto & Booking**: Canales oficiales directos (booking, prensa, management) y formulario de contacto.
- **Rendimiento Ultrarrápido**: Cero sobrecarga, compilación con Vite y estilos con Tailwind CSS v4.

---

## 🛠️ Tecnologías

- **React 18**
- **Vite 6**
- **Tailwind CSS v4**
- **Lucide Icons**

---

## ⚙️ Cómo Ejecutar en Local

1. Clona el repositorio (si aún no lo tienes):
   ```bash
   git clone https://github.com/franciscoOviedo-frcu/Landing_Page_CI-CD_Test.git
   cd Landing_Page_CI-CD_Test
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre en tu navegador `http://localhost:5173`.

---

## 📝 Cómo Personalizar los Datos de la Banda

Toda la información del sitio está centralizada en:
📁 **[`src/data/bandData.js`](src/data/bandData.js)**

Para personalizar tu banda, solo edita ese archivo:
- Cambia el nombre de la banda (`name`), género (`subgenre`) y lema (`tagline`).
- Modifica los miembros en la lista `members` (nombre, rol, instrumento/equipamiento, foto y bio).
- Agrega tu single o videoclip en `featuredRelease` con sus enlaces a Spotify y YouTube.
- Actualiza las fechas de conciertos en la lista `shows`.
- Coloca tus correos de contratación en `contact`.

---

## 🌐 Cómo Desplegar en Cloudflare Pages

### Opción 1: Conectar con GitHub (Recomendado - Automático)
1. Haz commit y push de tus cambios a GitHub:
   ```bash
   git add .
   git commit -m "feat: landing page de la banda con diseno brutalist"
   git push origin main
   ```
2. Entra a tu cuenta en [Cloudflare Dashboard](https://dash.cloudflare.com/).
3. Ve a **Compute (Workers) > Workers & Pages** y haz clic en **Create Application** > **Pages** > **Connect to Git**.
4. Selecciona tu repositorio `Landing_Page_CI-CD_Test`.
5. Configura los parámetros de build:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Haz clic en **Save and Deploy**. En menos de 1 minuto tendrás tu web activa con HTTPS y protección DDoS mundial. Cada push que hagas en `main` desplegará automáticamente.

---

### Opción 2: Despliegue Directo con Wrangler CLI
Si prefieres desplegar directamente desde la consola sin configurar la integración web de GitHub:
1. Compila el proyecto:
   ```bash
   npm run build
   ```
2. Despliega usando Wrangler:
   ```bash
   npx wrangler pages deploy dist --project-name=landing-banda
   ```
*(La primera vez te pedirá autenticarte en tu navegador con tu cuenta de Cloudflare).*
