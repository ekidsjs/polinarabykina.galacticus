   function run (){
        //Правильные ответы
        const rightAnsvers=['2','1','3','1','3'];
        //Ответы пользователя
        const userAnswers=[];
        //Баллы за правильные ответы
        let raiting=0;
        let status='';
        const name = prompt("Введите свое имя:", "Пользователь");
        const years = prompt("Сколько вам лет?",'100');
        userAnswers[0]=prompt("Луна это планета?\n1. Да\n2. Нет",'1');
        userAnswers[1]=prompt("Из чего состоит солнце?\n1.Из газа\n2. Изо льда\n3. Из ваты",'1');
        userAnswers[2]=prompt("Какой по счету марс от солнца? \n1. 1-й\n2.3-й\n3.4-й",'1');
        userAnswers[3]=prompt("Есть ли у урана кольца? \n1. Да\2n. Нет",'1');
        userAnswers[4]=prompt("Какая самая большая планета солнечной системы?\n1. Земля\n2.Луна\n3. Юпитер",'1');
        //Если ответ пользователя равен правильному ответу то прибавляем к баллам один балл
        if(rightAnsvers[0] === userAnswers[0]){
            raiting += 1;
        }
        if(rightAnsvers[1] === userAnswers[1]){
            raiting += 1;
        }
        if(rightAnsvers[2] === userAnswers[2]){
            raiting += 1;
        }
        if(rightAnsvers[3] === userAnswers[3]){
            raiting += 1;
        }
        if(rightAnsvers[4] === userAnswers[4]){
            raiting += 1;
        }
       // Определяем статус пользователz
       if (raiting <= 2) {
           status='Ты очень мало знаешь о космосе,тебе стоит читать больше книг.'
       } 
       else if (raiting < 5) {
       status='Ты довольно хорошо знаешь космос, продолжфй в томже духе и ты станещь космическим рейнджиром.'
       }
       else{
       status='Ты знаешь о космосе gпрактически все, продолжай в томже духе, ты молодец!'
       }
       //Выводит пользователю сообщение
       alert(`Привет, ${name}! Тебе уже ${years} лет и ${status}`);
    }