const questions = [
  {
    id: 1,
    question: "Who directed Titanic?",
    answers: [
      { id: "A", text: "Steven Spielberg", correct: false },
      { id: "B", text: "Christopher Nolan", correct: false },
      { id: "C", text: "James Cameron", correct: true },
      { id: "D", text: "Ridley Scott", correct: false },
    ],
  },
  {
    id: 2,
    question: "Who played the Joker in The Dark Knight (2008)?",
    answers: [
      { id: "A", text: "Joaquin Phoenix", correct: false },
      { id: "B", text: "Heath Ledger", correct: true },
      { id: "C", text: "Jared Leto", correct: false },
      { id: "D", text: "Tom Hardy", correct: false },
    ],
  },
  {
    id: 3,
    question: "Which movie won the Academy Award for Best Picture in 1994?",
    answers: [
      { id: "A", text: "Pulp Fiction", correct: false },
      { id: "B", text: "The Shawshank Redemption", correct: false },
      { id: "C", text: "Forrest Gump", correct: true },
      { id: "D", text: "Braveheart", correct: false },
    ],
  },
  {
    id: 4,
    question: "In which film does the character Jack Sparrow appear?",
    answers: [
      { id: "A", text: "The Mummy", correct: false },
      { id: "B", text: "Pirates of the Caribbean", correct: true },
      { id: "C", text: "Hook", correct: false },
      { id: "D", text: "Treasure Planet", correct: false },
    ],
  },
  {
    id: 5,
    question: "Which animation studio produced Toy Story?",
    answers: [
      { id: "A", text: "DreamWorks", correct: false },
      { id: "B", text: "Pixar", correct: true },
      { id: "C", text: "Illumination", correct: false },
      { id: "D", text: "Studio Ghibli", correct: false },
    ],
  },
  {
    id: 6,
    question: "Who directed Inception (2010)?",
    answers: [
      { id: "A", text: "Denis Villeneuve", correct: false },
      { id: "B", text: "Martin Scorsese", correct: false },
      { id: "C", text: "Christopher Nolan", correct: true },
      { id: "D", text: "James Wan", correct: false },
    ],
  },
  {
    id: 7,
    question: "Which film begins with the line: 'In a galaxy far, far away…'?",
    answers: [
      { id: "A", text: "Star Trek", correct: false },
      { id: "B", text: "Guardians of the Galaxy", correct: false },
      { id: "C", text: "Star Wars", correct: true },
      { id: "D", text: "Dune", correct: false },
    ],
  },
  {
    id: 8,
    question: "Which actor plays Iron Man in the Marvel Cinematic Universe?",
    answers: [
      { id: "A", text: "Chris Evans", correct: false },
      { id: "B", text: "Mark Ruffalo", correct: false },
      { id: "C", text: "Robert Downey Jr.", correct: true },
      { id: "D", text: "Chris Hemsworth", correct: false },
    ],
  },
  {
    id: 9,
    question: "In which film does the character Neo appear?",
    answers: [
      { id: "A", text: "Blade Runner", correct: false },
      { id: "B", text: "The Matrix", correct: true },
      { id: "C", text: "Tron", correct: false },
      { id: "D", text: "Minority Report", correct: false },
    ],
  },
  {
    id: 10,
    question: "What was Disney’s first full-length animated feature film?",
    answers: [
      { id: "A", text: "Cinderella", correct: false },
      { id: "B", text: "Snow White and the Seven Dwarfs", correct: true },
      { id: "C", text: "Bambi", correct: false },
      { id: "D", text: "Pinocchio", correct: false },
    ],
  },
  {
    id: 11,
    question:
      "Which 1993 film about dinosaurs was directed by Steven Spielberg?",
    answers: [
      { id: "A", text: "King Kong", correct: false },
      { id: "B", text: "The Lost World", correct: false },
      { id: "C", text: "Jurassic Park", correct: true },
      { id: "D", text: "Godzilla", correct: false },
    ],
  },
  {
    id: 12,
    question: "Which film follows the story of boxer Rocky Balboa?",
    answers: [
      { id: "A", text: "Raging Bull", correct: false },
      { id: "B", text: "Million Dollar Baby", correct: false },
      { id: "C", text: "Creed", correct: false },
      { id: "D", text: "Rocky", correct: true },
    ],
  },
  {
    id: 13,
    question: "Which film introduces the character Harry Potter?",
    answers: [
      { id: "A", text: "The Chronicles of Narnia", correct: false },
      { id: "B", text: "Fantastic Beasts", correct: false },
      {
        id: "C",
        text: "Harry Potter and the Philosopher's Stone",
        correct: true,
      },
      { id: "D", text: "The Golden Compass", correct: false },
    ],
  },
  {
    id: 14,
    question: "Who directed Pulp Fiction?",
    answers: [
      { id: "A", text: "Guy Ritchie", correct: false },
      { id: "B", text: "Quentin Tarantino", correct: true },
      { id: "C", text: "David Fincher", correct: false },
      { id: "D", text: "Francis Ford Coppola", correct: false },
    ],
  },
  {
    id: 15,
    question: "Which film depicts the sinking of a luxury ship in 1912?",
    answers: [
      { id: "A", text: "The Perfect Storm", correct: false },
      { id: "B", text: "Titanic", correct: true },
      { id: "C", text: "Poseidon", correct: false },
      { id: "D", text: "Master and Commander", correct: false },
    ],
  },
  {
    id: 16,
    question: "Which animated film features a lion named Simba?",
    answers: [
      { id: "A", text: "Madagascar", correct: false },
      { id: "B", text: "Ice Age", correct: false },
      { id: "C", text: "The Lion King", correct: true },
      { id: "D", text: "Tarzan", correct: false },
    ],
  },
  {
    id: 17,
    question: "Which film follows the journey of Frodo and the One Ring?",
    answers: [
      { id: "A", text: "The Hobbit", correct: false },
      { id: "B", text: "The Lord of the Rings", correct: true },
      { id: "C", text: "Willow", correct: false },
      { id: "D", text: "Eragon", correct: false },
    ],
  },
  {
    id: 18,
    question: "Who plays the lead role in Gladiator (2000)?",
    answers: [
      { id: "A", text: "Russell Crowe", correct: true },
      { id: "B", text: "Mel Gibson", correct: false },
      { id: "C", text: "Hugh Jackman", correct: false },
      { id: "D", text: "Gerard Butler", correct: false },
    ],
  },
  {
    id: 19,
    question: "Which film is famous for the line: 'I'll be back'?",
    answers: [
      { id: "A", text: "Predator", correct: false },
      { id: "B", text: "RoboCop", correct: false },
      { id: "C", text: "The Terminator", correct: true },
      { id: "D", text: "Die Hard", correct: false },
    ],
  },
  {
    id: 20,
    question: "Which film tells the story of mathematician John Nash?",
    answers: [
      { id: "A", text: "The Theory of Everything", correct: false },
      { id: "B", text: "A Beautiful Mind", correct: true },
      { id: "C", text: "Good Will Hunting", correct: false },
      { id: "D", text: "The Imitation Game", correct: false },
    ],
  },
];
