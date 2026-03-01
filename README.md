# Django Slider Test Project

Проект представляет собой страницу, собранную по макету из Figma с использованием Bootstrap 5.

Реализован слайдер с синхронизацией превью (Slick Slider), полноэкранная модальная галерея, а также управление слайдами через административную панель Django.

## Стек проекта

- Python 3.12
- Django 5.2
- MySQL
- Bootstrap 5
- Slick Slider
- django-filer
- django-admin-sortable2

---

## Функциональность

### Frontend

- Верстка страницы выполнена по макету Figma с использованием Bootstrap 5
- Полностью адаптивный layout (desktop / tablet / mobile)
- Слайдер реализован через Slick Slider (Slider Syncing)
- Главный слайдер + превью с синхронизацией
- По клику на главное изображение открывается fullscreen modal
- В модальном окне реализовано листание галереи

---

### Backend

- Django 5.2
- База данных: MySQL
- Модель слайдера `Slide`
- Изображения загружаются через django-filer
- Слайды добавляются через Django Admin
- В админке:
  - Отображается название
  - Отображается превью изображения
  - Поля отображаются на русском языке
- Реализована drag & drop сортировка слайдов через django-admin-sortable2

---

## 🗂 Структура модели

```python
class Slide(models.Model):
    title = models.CharField("Название", max_length=200)
    image = FilerImageField(...)
    order = models.PositiveIntegerField("Порядок", default=0)
```
Сортировка выполняется по полю order

--

## Установка и запуск

1. **Клонируйте репозиторий:**
```bash
   git clone https://github.com/sonyanyaw/django-slider-test.git
   cd django-slider-test
```

2. **Создать виртуальное окружение**
```bash
    python -m venv venv
    source venv/Scripts/activate
```

3. **Установить зависимости**
```bash
    pip install -r req.pip
```

4. **Настроить базу данных MySQL**

* Создайте базу данных в MySQL
```SQL
    CREATE DATABASE slider_project CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

* В корне проекта создайте файл .env
```env
    SECRET_KEY=ваш_секретный_ключ
    DB_NAME=slider_project
    DB_USER=ваш_пользователь_mysql (обычно root)
    DB_PASSWORD=ваш_пароль
    DB_HOST=localhost
    DB_PORT=3306
```

5. **Выполнить миграции**
```bash
    python manage.py migrate
```

6. **Создать суперпользователя**
```bash
    python manage.py createsuperuser
```

7. **Запустить сервер**
```bash
    python manage.py runserver
```

Перейти в браузере:
```
    http://127.0.0.1:8000/
```
Админка:
```
    http://127.0.0.1:8000/admin
```

--

## Используемые пакеты

* Django 5.2
* django-filer
* django-admin-sortable2
* mysqlclient

Все зависимости указаны в req.pip.

--

## Управление слайдами

1. Перейти в админку /admin

2. Добавить новый слайд

3. Загрузить изображение через django-filer

4. Перетащить слайды для изменения порядка отображения (drag & drop)