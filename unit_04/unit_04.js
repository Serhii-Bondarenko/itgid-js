// Task 1
// При нажатии (click) на .b-1 запускайте f1, которая выводите в .out-1 число 1.
let btn1 = document.querySelector('.b-1 ');
let out1 = document.querySelector('.out-1 ');
btn1.onclick = function f1() {
    out1.innerHTML = 1;
}

// document.querySelector('.b-1').onclick = f1;


// Task 2
// При нажатии (click) на .i-2 запускайте f2, которая выводите в .out-2 число 2. Т.е. как видите, мы можем повесить клик на любой элемент.

let out2 = document.querySelector('.out-2 ');
function f2() {
    out2.innerHTML = 2;
}

document.querySelector('.i-2').onclick = f2;


// Task 3
//  При нажатии (click) на .p-3 запускайте f3, которая выводите в .out-3 число 3. Т.е. как видите, мы можем повеcить клик на любой элемент.
let out3 = document.querySelector('.out-3 ');
function f3() {
    out3.innerHTML = 3;
}

document.querySelector('.p-3').onclick = f3;


// Task 4. 
// При клике по кнопке .b-4 запускается функция f4. Функция проверяет состояние .i-4 и если он checked - выводит true, если не выбран - false. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае - div.out-4
let checkBox4 = document.querySelector('.i-4 ');
let out4 = document.querySelector('.out-4 ');
function f4() {
    if (checkBox4.checked) {
        out4.innerHTML = "true";
    } else {
        out4.innerHTML = "false"
    }
}

document.querySelector('.b-4').onclick = f4;

// Task 5.
// При клике по кнопке .b-5 запускается функция f5. Функция проверяет состояние .i-5 и если он checked - выводит value данного элемента, если не выбран - false. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-5
let checkBox5 = document.querySelector('.i-5 ');
let out5 = document.querySelector('.out-5 ');
function f5() {
    if (checkBox5.checked) {
        out5.innerHTML = checkBox5.value ;
    } else {
        out5.innerHTML = "false"
    }
}

document.querySelector('.b-5').onclick = f5;


// Task 6. 
// При нажатии на кнопку выводите value из input.i-6 в div.out-6. Обратите внимание, что даже скрытый hidden input - нам не помеха. 
let i6Val = document.querySelector('.i-6 ').value;
let out6 = document.querySelector('.out-6 ');
function f6() {
    out6.innerHTML = i6Val;
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// При нажатии на кнопку выводите в div.out-71 value прописанное в input .i-7. В .out-72 выводите 1 если длина пароля больше или равна 6 или 0 если меньше. Для подсчета количества символов в строке используйте length.
let i7 =document.querySelector('.i-7 ');
let out71 = document.querySelector('.out-71 ');
let out72 = document.querySelector('.out-72 ');
function f7() {
    out71.innerHTML = i7.value;
    if (i7.value.length >= 6 ) {
        out72.innerHTML = 1;
    } else {
        out72.innerHTML = 0;
    }
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// При нажатии кнопки .b-8 запускается функция f8. Функция с помощью innerHTML создает в .out-8 новый div с классом "js2" и текстом "new div". Нажали несколько раз? Создаем несколько раз!
let out8 = document.querySelector('.out-8 ');
function f8() {
    out8.innerHTML = "<div className={'js2'}>new div</div>";
}
document.querySelector('.b-8').onclick = f8;

// Task 9
// При нажатии кнопки .b-9 запускаем функцию f9. Функция проверяет checked элемента .r-9. Если элемент выбран (checked) то выводит в .out-9 value radiobutton. Если не выбран - выводит false.
let r9 = document.querySelector('.r-9 ');
let out9 = document.querySelector('.out-9 ');
function f9() {
    if (r9.checked) {
        out9.innerHTML = r9.value;
    } else {
        out9.innerHTML = false;
    }
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// При нажатии кнопки .b-10 запускаем функцию f10. Функция получает из .i-10 значение цвета и окрашивает style.background элемента .out-10 в этот цвет.
let i10 = document.querySelector('.i-10 ');
let out10 = document.querySelector('.out-10 ');
function f10() {
    out10.style.backgroundColor = i10.value;
}

document.querySelector('.b-10').onclick = f10;


// Task 11
// При нажатии кнопки .b-11 запускается функция f11. Функция получает цвет из .i-111 и присваивает как value элементу .i-112. Т.е. после нажатия кнопки выбранный цвета в первом и втором input станут одинаковые.
let i111 = document.querySelector('.i-111 ').value;
let i112 = document.querySelector('.i-112 ');
function f11() {
  console.log(i112.value);
  i112.value = i111;
}

document.querySelector('.b-11').onclick = f11;

// Task 12
// При нажатии кнопки .b-12 запускается функция f12. Функция выводит дату из .i-12 в out-12.
let i12 = document.querySelector('.i-12 ');
let out12 = document.querySelector('.out-12 ');
function f12() {
    out12.innerHTML = i12.value;
}

document.querySelector('.b-12').onclick = f12;

// Task 13
//  При изменении положения ползунка .i-13 выводите его значение в out-13. Обратите внимание на событие.
let i13 = document.querySelector('.i-13 ');
let out13 = document.querySelector('.out-13 ');
function f13() {
    out13.innerHTML = i13.value;
}

document.querySelector('.i-13').oninput = f13;

// Task 14
// При нажатии на кнопку выводите текст из textarea .t-14 в .out-14.

let t14 = document.querySelector('.t-14 ');
let out14 = document.querySelector('.out-14 ');
function f14() {
    out14.innerHTML = t14.value;
}

document.querySelector('.b-14').onclick = f14;

// Task 15
// При нажатии кнопки .b-15 функция должна выводить текст из .i-15 в textarea .t-15 и в .out-15.
let i15 = document.querySelector('.i-15 ');
let t15 = document.querySelector('.t-15 ');
let out15 = document.querySelector('.out-15 ');
function f15() {
    let inputValue = i15.value;
    t15.innerHTML = inputValue;
    out15.innerHTML = inputValue;
}

document.querySelector('.b-15').onclick = f15;

// Task 16
// При нажатии на кнопку .b-16 выводите в .out-16 value выбранного option из .s-16.
let s16 = document.querySelector('.s-16 ');
let out16 = document.querySelector('.out-16 ');
function f16() {
    // для получения выбранного option просто получите select в переменную и select.value;
    let select = s16.value;
    out16.innerHTML = select;
}

document.querySelector('.b-16').onclick = f16;

// Task 17
// При смене выбранного значения .s-17 выводите в .out-17 value выбранного option из .s-17.
let s17 = document.querySelector('.s-17 ');
let out17 = document.querySelector('.out-17 ');
function f17() {
    out17.innerHTML = s17.value;
}

document.querySelector('.s-17').onchange = f17;

// Task 18
// При смене выбранного значения в s-18, получайте из него value выбранного option и присвойте данный value в input .i-18.
let s18 = document.querySelector('.s-18 ');
let i18 = document.querySelector('.i-18 ');
function f18() {
    let selectValue = s18.value;
    i18.value = selectValue ;
}

document.querySelector('.s-18').onchange = f18;

// Task 19
// На странице создан div.out-19. По нажатию кнопки, получите из него текст и присвойте в value элемента .i-19.
let out19 = document.querySelector('.out-19 ');
let i19 = document.querySelector('.i-19 ');
function f19() {
    let txt = out19.textContent;
    i19.value = txt;
}

document.querySelector('.b-19').onclick = f19;

// Task 20
// У вас есть два select. Напишите код, который при изменении select .s-201 будет аналогично изменять выбранный option в .s-202.
let s201 = document.querySelector('.s-201 ');
let s202 = document.querySelector('.s-202 ');
function f20() {
    let s201Val = s201.value;
    s202.value = s201Val;
}

document.querySelector('.s-201').onchange = f20;