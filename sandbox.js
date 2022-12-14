const correctAnswers=['B','D','A','D','A'];
const form=document.querySelector('.quiz-form');
const result=document.querySelector('.result');
const percentage=document.querySelector('span')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let score=0;
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];
    console.log(userAnswers);

    userAnswers.forEach((answer,index)=>{
        if(answer === correctAnswers[index]){
            score += 20;
        }
    });
    console.log(score);
    scrollTo(0,0)
    result.classList.remove('d-none');
    

    let output=0;
    const timer=setInterval(()=>{
        percentage.textContent=`${score}%`;
        if(output === score){
            clearInterval(timer);
        }
        else{

            output++;
            percentage.textContent=`${score}%`;
        }

    },10);
});