const quizData = [
  {
    question:
      "2. რა ციფრი უნდა ჩავსვათ *-ის ნაცვლად 354*67 ჩანაწერში, რომ მიღებული რიცხვი 9-ზე გაყოფისას ნაშთში გვაძლევდეს 3-ს?",
    a: " 2",
    b: "3 ",
    c: "5",
    d: "7",
    correct: " c",
  },
  {
    question: "3/2:(1-5/4)",
    a: "-6",
    b: "    -3/4 ",
    c: "-1/6",
    d: "-3/8",
    correct: "a",
  },
  {
    question:
      "a  რიცხვი b რიცხვზე 25%-ით მეტია. რამდენჯერ მეტია 1/b რიცხვი 1/a რიცხვზე?",
    a: "4/5 ჯერ",
    b: " 1.5 ჯერ ",
    c: "2.5 ჯერ",
    d: "5/4 ჯერ",
    correct: "d",
  },
  {
    question:
      "ტრაპეციის შუახაზი 2-ით ნაკლებია ტრაპეციის დიდ ფუძეზე. იპოვეთ ტრაპეციის შუახაზი, თუ ცნობილია, რომ ტრაპეციის მცირე ფუძე 6-ის ტოლია?",
    a: "7",
    b: " 8",
    c: "9",
    d: "10",
    correct: "b",
  },
  {
    question:
      "თუ a და b ნატურალური რიცხვები 6 -ის ჯერადია, მაშინ მათი უდიდესი საერთო გამყოფი არ შეიძლება იყოს",
    a: "6",
    b: "12",
    c: "15",
    d: "18",
    correct: "c",
  },
  {
    question:
      "ფერმერი ორ მიწის ნაკვეთს ფლობს, რომელთა ფართობები ისე შეეფარდება ერთმანეთს, როგორც 3:5 . მცირე ნაკვეთის 2/3 -ზე და დიდი ნაკვეთის 3/5 ნაწილზე  ფერმერმა ვაშლის ხეები დარგო. ორივე ნაკვეთის ჯამური ფართობის რა ნაწილზე დარგო ფერმერმა ვაშლის ხეები?",
    a: "2/5",
    b: "2/15",
    c: "3/5",
    d: "5/8",
    correct: "d",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
function deselectAnswer() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}
function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
          <h2> your answered  at ${score}/${quizData.length} questions correctly (ყოჩაღ ჯიგო <3)</h2>
          <button onclick= "location.reload()">Reload</button>
          
          `;
    }
  }
});
