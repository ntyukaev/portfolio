---
title: Мультиязычный сайт-блог с параллакс эффектом
preview: multilingual-parallax-blog-website.png
---

Исходный код можно найти [здесь](https://github.com/ntyukaev/gatsby-multilingual-parallax-theme)

Мультиязычный сайт-блог с параллакс эффектом

## Демо

- [Демо-сайт](https://ntyukaev.github.io/gatsby-multilingual-parallax-theme/)

Эта тема вдохновлена следующими проектами:

- [Gatsby Starter Portfolio: Cara](https://github.com/LekoArts/gatsby-starter-portfolio-cara)
- [Gatsby's blog starter](https://github.com/gatsbyjs/gatsby-starter-blog)

## Особенности

- Целевая страница с красивыми эффектами параллакса.
- Сообщения в блоге могут быть написаны на нескольких языках.
- Поддержка подсветки синтаксиса кода.
- Светлые/темные цветовые режимы.
- поддержка i18n

## Как начать использовать?

1.  **Склонировать репозиторий**

    Используйте интерфейс командной строки Gatsby ([инструкции по установке](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/#gatsby-cli)) для создания нового сайта.

    ```shell
    git clone https://github.com/ntyukaev/gatsby-multilingual-parallax-theme.git my-blog
    ```

2.  **Запустить**

    Перейдите в каталог вашего нового сайта и запустите его из командной строки.

    ```shell
    cd my-blog
    yarn
    gatsby develop
    ```

## Языковая конфигурация

Файл **gatsby-config.js** содержит пример конфигурации для английского и французского языков.
Дополнительные сведения см. на странице документации [gatsby-plugin-react-i18next](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-i18next/).

## Добавление контента

Веб-сайт использует markdown для написания контента.
Тема предварительно настроена для поиска содержимого в определенных папках:

- **./src/posts/\<lang\>/**: эта папка содержит блог посты на разных языках.
  Многоязычные посты должны иметь одно и то же название.
  Например, **./src/posts/en/post_1.md** и **./src/posts/fr/post_1.md**
- **./src/content/\<lang\>/**: содержимое страниц **about** и **contact** на разных языках.
- **./src/sections/\<lang\>/**: эта папка содержит контент для разделов на целевой странице.
- **./locales**: папка содержит конфигурацию локализации **i18n** для элементов веб-сайта.
