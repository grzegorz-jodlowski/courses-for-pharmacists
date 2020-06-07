export const initialState = {
  isLogged: true,
  courses: {
    currentCourse: {},
    data: [
      {
        _id: '1',
        title: 'Kurs VIDEO: Opatrunki specjalistyczne w aptece',
        price: 149,
        length: '4:10',
        image: 'bandage.jpg',
        description: 'Kurs zawiera filmy z prezentacją i szczegółową charakterystyką opatrunków specjalistycznych. Cechy kursu: 20 rozdziałów praktycznej wiedzy, ponad 4 i pół godziny nagrań video, praktyczna prezentację opatrunków po wyjęciu z opakowania, podsumowania rozdziałów z punktu widzenia farmaceuty Wiedzę zarówno dla osób pracujących dłużej w aptece jak i dla stażystów, praktykantów zaczynających pracę w aptece',
        chapters: 20,
        gallery: ['1', '2'],
      },
      {
        _id: '2',
        title: 'Kurs VIDEO: Program apteczny – moduł Zakupy',
        price: 199,
        length: '7:15',
        image: 'basket.png',
        description: 'Filmy instruktażowe (nagrania pulpitu komputera i prezentacji)  dotyczące modułu “Zakupy” programu aptecznego. Cechy kursu: 15 rozdziałów praktycznej wiedzy, ponad 7 godzin nagrań video, dodatkowe przykłady do większości rozdziałów, funkcje, udogodnienia, koncepcje pracy i procedury związane z modułem “Zakupy” - od podstawowych do bardziej zaawansowanych, iedza dla osób pracujących z programem i tych, którzy nigdy na nim nie pracowali',
        chapters: 15,
        gallery: ['1', '2'],
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
