import { nanoid } from "nanoid";

export const HISTORIAL_DATES_TITlE = "Исторические даты";

export const HISTORIAL_DATES_DATA = [
  {
    id: 1,
    area: "Музыка",
    years: [2010, 2016],
    events: [
      {
        id: nanoid(),
        year: 2010,
        description: "Выход культового альбома группы.",
      },
      {
        id: nanoid(),
        year: 2011,
        description: "Мировой тур популярного исполнителя.",
      },
      {
        id: nanoid(),
        year: 2012,
        description: "Фестиваль собрал рекордное количество зрителей.",
      },
      { id: nanoid(), year: 2013, description: "Выход хитового сингла года." },
      {
        id: nanoid(),
        year: 2014,
        description: "Музыкальная премия за лучший альбом.",
      },
      {
        id: nanoid(),
        year: 2015,
        description: "Группа объявила о глобальном турне.",
      },
      {
        id: nanoid(),
        year: 2016,
        description: "Релиз альбома, изменившего жанр.",
      },
    ],
  },
  {
    id: 2,
    area: "Кино",
    years: [2015, 2022],
    events: [
      { id: nanoid(), year: 2015, description: "Премьера блокбастера года." },
      {
        id: nanoid(),
        year: 2016,
        description: "Фильм получил главный «Оскар».",
      },
      { id: nanoid(), year: 2017, description: "Запуск новой киновселенной." },
      {
        id: nanoid(),
        year: 2018,
        description: "Фильм собрал рекордные кассовые сборы.",
      },
      {
        id: nanoid(),
        year: 2019,
        description: "Выход продолжения культового фильма.",
      },
      {
        id: nanoid(),
        year: 2020,
        description: "Фестивальный фильм получил международное признание.",
      },
      {
        id: nanoid(),
        year: 2021,
        description: "Новая премия за лучший режиссёрский дебют.",
      },
      {
        id: nanoid(),
        year: 2022,
        description: "Выход высокобюджетного блокбастера.",
      },
    ],
  },
  {
    id: 3,
    area: "Литература",
    years: [2008, 2014],
    events: [
      { id: nanoid(), year: 2008, description: "Опубликован бестселлер года." },
      {
        id: nanoid(),
        year: 2009,
        description: "Литературная премия за роман.",
      },
      {
        id: nanoid(),
        year: 2010,
        description: "Издан культовый сборник рассказов.",
      },
      {
        id: nanoid(),
        year: 2011,
        description: "Автор получил международное признание.",
      },
      {
        id: nanoid(),
        year: 2012,
        description: "Выход новой книги с мировым успехом.",
      },
      {
        id: nanoid(),
        year: 2013,
        description:
          "Литературный фестиваль собрал рекордное число участников.",
      },
      {
        id: nanoid(),
        year: 2014,
        description: "Классический роман переиздан с новой обложкой.",
      },
    ],
  },
  {
    id: 4,
    area: "Театр",
    years: [2011, 2017],
    events: [
      {
        id: nanoid(),
        year: 2011,
        description: "Премьера спектакля открыла сезон.",
      },
      {
        id: nanoid(),
        year: 2012,
        description: "Труппа выступила на международном фестивале.",
      },
      {
        id: nanoid(),
        year: 2013,
        description: "Режиссёр получил награду за постановку.",
      },
      {
        id: nanoid(),
        year: 2014,
        description: "Экспериментальный спектакль собрал полный зал.",
      },
      {
        id: nanoid(),
        year: 2015,
        description: "Классическая пьеса представлена в новой постановке.",
      },
      {
        id: nanoid(),
        year: 2016,
        description: "Молодые актёры получили признание критиков.",
      },
      {
        id: nanoid(),
        year: 2017,
        description: "Труппа завершила международный тур.",
      },
    ],
  },
  {
    id: 5,
    area: "Живопись",
    years: [2005, 2011],
    events: [
      {
        id: nanoid(),
        year: 2005,
        description: "Открыта выставка современного искусства.",
      },
      {
        id: nanoid(),
        year: 2006,
        description: "Продана картина за рекордную сумму.",
      },
      {
        id: nanoid(),
        year: 2007,
        description: "Художник представил новый стиль.",
      },
      {
        id: nanoid(),
        year: 2008,
        description: "Международная выставка собрала коллекционеров.",
      },
      {
        id: nanoid(),
        year: 2009,
        description: "Персональная выставка получила высокие оценки критиков.",
      },
      {
        id: nanoid(),
        year: 2010,
        description: "Выставка современных художников прошла в столице.",
      },
      {
        id: nanoid(),
        year: 2011,
        description: "Галерея представила ретроспективу мастера.",
      },
    ],
  },
  {
    id: 6,
    area: "Наука",
    years: [2016, 2022],
    events: [
      {
        id: nanoid(),
        year: 2016,
        description: "Зафиксированы гравитационные волны.",
      },
      { id: nanoid(), year: 2017, description: "Открытие нового вида планет." },
      {
        id: nanoid(),
        year: 2018,
        description: "Прорыв в области искусственного интеллекта.",
      },
      {
        id: nanoid(),
        year: 2019,
        description: "Получено первое фото чёрной дыры.",
      },
      {
        id: nanoid(),
        year: 2020,
        description: "Разработана вакцина против глобальной пандемии.",
      },
      {
        id: nanoid(),
        year: 2021,
        description: "Запуск нового космического телескопа.",
      },
      {
        id: nanoid(),
        year: 2022,
        description: "Учёные создали квантовый прототип компьютера.",
      },
    ],
  },
];
