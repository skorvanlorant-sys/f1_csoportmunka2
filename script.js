const quizForm = document.getElementById('quiz')
        const resultDiv = document.getElementById('result')
        const correctAnswer = ['b','c','b','d','d'];

        quizForm.addEventListener('submit', e => {
            e.preventDefault();

            let score = 0;
            const userAnswer = [quizForm.q1.value,
                                quizForm.q2.value,
                                quizForm.q3.value,
                                quizForm.q4.value,
                                quizForm.q5.value];
            userAnswer.forEach((answer, index) => {
                if(answer === correctAnswer[index]) {
                    score += 1;
                }
            });
            resultDiv.innerHTML = `Helyes válasz: ${correctAnswer.length}/${score}`;
        })
  