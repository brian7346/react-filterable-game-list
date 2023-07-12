# Используем официальный Node.js образ
FROM node:14 as build

#  Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем package.json и package-lock.json файлы внутрь контейнера
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все остальное внутрь контейнера
COPY . .

# Делаем билд нашего React приложения
RUN npm run build

# Используем официальный nginx образ для продаксш билда
FROM nginx:1.21-alpine

# Копируем папку build с предыдущей стадии вnginx сервер
COPY --from=build /app/build /usr/share/nginx/html

# Открываем порт 80 для сервера nginx
EXPOSE 80

# Запускаем nginx сервер
CMD ["nginx", "-g", "daemon off;"]