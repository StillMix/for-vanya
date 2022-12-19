export const text = document.querySelector('.text')
export const onel = document.querySelector('.onel')
export const twol = document.querySelector('.twol')
export const threel = document.querySelector('.threel')
export const fourl = document.querySelector('.fourl')
export const fivel = document.querySelector('.fivel')
export const sixl = document.querySelector('.sixl')
export const verl = document.querySelector('.ver')
export const neverl = document.querySelector('.never')
export const prav = document.querySelector('.prav')
export const btn = document.querySelector('.start')
export const div =document.querySelector('.div')









export const initialCardsAlgor = [
    {
        id: 1,
        text: ' Для чего можно использовать язык C#? ',
        one: 'Всё перечисленное',
        two: 'Для создания лишь игр и программ',
        three: "Для создания программ под ПК",
        four: "Для создания веб сайтов",
        five: 'Для написания игр',
        otvet: "one"
    },
    {
        id: 2,
        text: 'Какие типы переменных существуют? ',
        one: 'Все перечисленные',
        two: 'Ни один из них',
        three: "int, char, bool, float, double, uint, short",
        four: "int, char, bool, float, double",
        five: ' int, char, bool, string',
        otvet: "one"
    },
    {
        id: 3,
        text: 'Где правильно создана переменная?',
        one: 'float big_num = 23.2234;',
        two: "char symbol = 'A';",
        three: 'int num = "1"',
        four: "$x = 10;",
        five: 'x = 0;',
        otvet: "two"
    },
    {
        id: 4,
        text: 'Где верно происходит вывод данных в консоль?',
        one: 'print("Hi");',
        two: 'Console.WriteLine("Hi");',
        three: 'сonsole.log("Hi");',
        four: 'Console.write("Hi");',
        otvet: "two"
    },
    {
        id: 5,
        text: ' В чем отличие между break и continue?',
        one: 'Break используется в Switch case, а continue в циклах',
        two: 'Continue работает только в циклах, break дополнительно в методах',
        three: "Continue пропускает итерацию, break выходит из цикла",
        four: "Нет отличий",
        otvet: "three"
    },
    {
        id: 6,
        text: 'При каком условии результат будет равен значению true?',
        one: '(some && a != 2) || b > 5',
        two: '(b <= 5 || a == 3) && some',
        three: "(b != 5 || a == 3) || (!some && a > 1)",
        four: "some || a == 4 || b < 3",
        five: '(b > 5 && a <= 3) || (!some || a < 1)',
        otvet: "five"
    },
    {
        id: 7,
        text: 'Что делает try-catch?',
        one: 'Работает с исключениями',
        two: 'Работает с классами',
        three: "Работает с базой данных",
        four: "Работает с файлами",
        otvet: "one"
    },
    {
        id: 8,
        text: 'Какие циклы существуют в языке C#?',
        one: 'for, while, do while, foreach',
        two: 'for',
        three: 'for, while, foreach',
        four: 'for, while',
        five: 'for, while, do while',
        otvet: "one"
    },
    {
        id: 9,
        text: 'Где правильно создан массив?',
        one: 'int[] arr = new Array [2, 5];',
        two: 'int arr = [2, 5];',
        three: "int arr = {2, 5};",
        four: "int[] arr = new int [2] {2, 5};",
        five: 'int arr[] = {2, 5};',
        otvet: "four"
    },
    {
        id: 10,
        text: 'Какая функция корректно сравнивает две подстроки?',
        one: 'String.Equal("hi", "hello");',
        two: 'String.Match("hi", "hello");',
        three: 'String.Compare("hi", "hello");',
        four: 'String.Check("hi", "hello");',
        otvet: "three"
    },
    {
        id: 11,
        text: 'Что такое перегрузка методов?',
        one: 'Передача слишком большого файла через return', 
        two: 'Передача слишком больших данных в функцию', 
        three: "Использование одного имени для разных методов", 
        otvet: "three"
    },
    {
        id: 12,
        text: `Что покажет код ниже?
        static int num = 0;
        public static void Main (string[] args) {
            testFunc(num);
            testFunc(num);
        }
        
        public static void testFunc (int num) {
            num++;
            Console.Write(num);
        }`,
        one: '11', 
        two: 'ошибку в коде', 
        three: "00", 
        four: "12", 
        five: '01', 
        otvet: "one"
    },
    {
        id: 13,
        text: `Что покажет код ниже?
        namespace ProjectOne {
            class MainClass {
                static int num = 0;
                public static void Main (string[] args) {
                    testFunc(num);
                    testFunc(num);
                }
        
                public static void testFunc (int num) {
                    MainClass.num++;
                    Console.Write(MainClass.num);
                }
            }
        }`,
        one: '00', 
        two: '11', 
        three: "ошибку в коде", 
        four: "01",
        five: '12', 
        otvet: "five"
    },
    {
        id: 14,
        text: 'какие из перечисленных типов данных относятся к целочисленным?',
        one: 'sbyte', 
        two: 'float', 
        three: "char", 
        four: "bool",
        five: 'int',
         otvet: "one and five"
    },
    {
        id: 15,
        text: 'К какому типу данных из перечисленных относится тип с плавающей запятой?',
        one: 'int', 
        two: 'double', 
        three: "long", 
        four: "short", 
        five: 'float', 
        otvet: "two and five"
    },
    {
        id: 16,
        text: 'Какой из перечисленных типов является десятичным?',
        one: 'int', 
        two: 'decimal', 
        three: "long", 
        four: "sbyte", 
        otvet: "two"
    },
    {
        id: 17,
        text: 'Выберите символьный тип данных',
        one: 'bool', 
        two: 'ulong', 
        three: "ushot", 
        four: "char", 
        otvet: "four"
    },
    {
        id: 18,
        text: 'Выберите логический тип данных',
        one: 'char', 
        two: 'bool', 
        otvet: "two"
    },
    {
        id: 19,
        text: 'Выберите правильный способ инициализации переменной',
        one: 'int i = 10;', 
        two: 'int x(10);', 
        three: "int x = 5, y = 10, z = 12;", 
        otvet: "one and three"
    },
    {
        id: 20,
        text: 'Как правильно объявляется неявно типизированные переменные?',
        one: 'float f = 15.7F;', 
        two: 'int i1 = 3, i2 = 4;', 
        three: "var f = 0.34F;", 
        four: "var d = 12.3;",
        otvet: "three and four"
    },
    {
        id: 21,
        text: 'В качестве инициализаторов переменных C# допускается ли динамическая инициализация переменных с помощью любого выражения, действительного на момент объявления переменной?',
        one: 'Да', 
        two: 'Нет', 
        otvet: "one"
    },
    {
        id: 22,
        text: 'Для того чтобы получить данные, вводимые пользователем вручную (то есть с консоли), применяются команды',
        one: 'Console.WriteLine();', 
        two: 'Console.ReadLine();', 
        three: "Обе команды не подходят", 
        otvet: "two"
    },
    {
        id: 23,
        text: 'Для того чтобы вывести на экран какое-либо сообщение, воспользуйтесь процедурой?',
        one: 'Console.ReadLine',
        two: 'Console.WriteLine', 
        three: "Console.Write", 
        four: "Console.Read",
        otvet: "two and three"
    },
    {
        id: 24,
        text: 'Выберите операторы отношения',
        one: '<', 
        two: '>', 
        three: "!", 
        four: "==", 
        five: '&&',
        six: '^', 
        otvet: "one and two and three"
    },
    {
        id: 25,
        text: 'Выберите логические операторы',
        one: '!',
         two: '&&', 
         three: "!=", 
         four: "^", 
         otvet: "one and two and four"
    },
    {
        id: 26,
        text: 'Выберите оператор инкремента',
        one: '++', 
        two: '--',
        otvet: "one"
    },
    {
        id: 27,
        text: 'Выберите оператор декремента',
        one: '++', 
        two: '--',
        otvet: "two"
    },
    {
        id: 28,
        text: 'В языке Си Шарп классом математических методов является',
        one: 'класс - age.',
        two: 'класс - Math.', 
        three: "класс - string.", 
        otvet: "two"
    },
    {
        id: 29,
        text: 'Как правильно оформляется математически в Си Шарп, Sin?',
        one: 'Math.Sin', 
        two: 'Math.Asin', 
        three: "Asin.Math", 
        otvet: "two"
    },
    {
        id: 30,
        text: 'Как правильно оформляется математически в Си Шарп, квадратный корень?',
        one: 'Math.Asqrt', 
        two: 'Math.Sqrt', 
        three: "Math.Abs", 
        four: "Math.APow", 
        otvet: "two"
    },
    {
        id: 31,
        text: 'Сколько в классе Math имеется методом математических вычислений?',
        one: '15', 
        two: '20', 
        three: "25", 
        four: "30", 
        five: '18',
        otvet: "three"
    },
    {
        id: 32,
        text: 'Оператор использующий инкремент или декремент, правильно оформлен в варианте?',
        one: 'x+=5;',
         two: 'x = x +1;', 
         otvet: "one"
    },
    {
        id: 33,
        text: 'Укороченные логические операторы иногда оказываются более эффективными?',
        one: 'да', 
        two: 'нет',
        otvet: "one"
    }
];