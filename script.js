const text = document.querySelector('.text')
const onel = document.querySelector('.onel')
const twol = document.querySelector('.twol')
const threel = document.querySelector('.threel')
const fourl = document.querySelector('.fourl')
const verl = document.querySelector('.ver')
const neverl = document.querySelector('.never')
const prav = document.querySelector('.prav')


const initialCards = [
    {
        id: 1,
        text: '1.	Какие базовые функции ОС не выполняют модули ядра? ',
        one: 'а)	управление процессами;',
        two: 'б)	управление полетами;',
        three: "в)	управление памятью;",
        four: "г)	управление устройствами ввода-вывода.",
        otvet: "two"
    },
    {
        id: 2,
        text: '2.	Какие программы предназначены для обслуживания конкретных периферийных устройств? ',
        one: 'а)	библиотеки;',
        two: 'б)	утилиты;',
        three: "в)	драйверы;",
        four: "г)	оболочки.",
        otvet: "three"
    },
    {
        id: 3,
        text: '3.	Что дистрибутив Ubuntu имеет в качестве графической рабочей среды?',
        one: 'а)	KDE;',
        two: 'б)	Gnome;',
        three: "в)	Xfce;",
        four: "г)	 Lxde.",
        otvet: "two"
    },
    {
        id: 4,
        text: '4.	Какой из корневых разделов системного реестра хранит информацию об установленных в данный момент аппаратурных средствах?',
        one: 'а)	HKEY_CLASSES_ROOT;',
        two: 'б)	HKEY_CURRENT_USER;',
        three: "в)	HKEY_LOCAL_MACHINE;",
        four: "г)	HKEY_CURRENT_CONFIG.",
        otvet: "four"
    },
    {
        id: 5,
        text: '5.	Какие программы предназначены для обнаружения подозрительных действий при работе компьютера? ',
        one: 'а)	программы-детекторы;',
        two: 'б)	программы-доктора;',
        three: "в)	программы-ревизоры;",
        four: "г)	программы-фильтры.",
        otvet: "four"
    },
    {
        id: 6,
        text: '6.	Какая программа позволяет программным способом увеличить доступное пространство на жестком диске?',
        one: 'а)	файловый архиватор;',
        two: 'б)	дисковый архиватор;',
        three: "в)	программный архиватор;",
        four: "г)	симметричный архиватор.",
        otvet: "two"
    },
    {
        id: 7,
        text: '7.	Какой тип параметров реестра не существует?',
        one: 'а)	строковые;',
        two: 'б)	двоичные;',
        three: "в)	Dword;",
        four: "г)	Dexcel.",
        otvet: "four"
    },
    {
        id: 8,
        text: '8.	Как называются программы, позволяющие создавать копии файлов меньшего размера и объединять копии нескольких файлов в один архивный файл? ',
        one: 'а)	антивирусными;',
        two: 'б)	системными;',
        three: "в)	архиваторами;",
        four: "г)	файловыми менеджерами.",
        otvet: "three"
    },
    {
        id: 9,
        text: '9.	Какой раздел опций позволяет изменять настройки устройств ручного ввода?',
        one: 'а)	Advanced BIOS Features;',
        two: 'б)	Hard Disk Boot Priority;',
        three: "в)	Standard CMOS Features;",
        four: "г)	Advanced Chipset Features",
        otvet: "three"
    },
    {
        id: 10,
        text: '10.	Как называются неподвижные или анимированные изображения, которые появляются на экране компьютера после какого-то времени бездействия?',
        one: 'а)	фон;',
        two: 'б)	заставка;',
        three: "в)	тема рабочего стола;",
        four: "г)	панель управления.",
        otvet: "two"
    },
    {
        id: 11,
        text: '11.	Какие функции обеспечивает оператор REN?',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 12,
        text: '12.	Какое расширение имеют пакетные командные файлы MS DOS?',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 13,
        text: '13.	Что такое системный реестр?',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 14,
        text: '14.	Какой операционной системы не существует?',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 15,
        text: '15.	Где находится BIOS?',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 16,
        text: '16.	Какой тип ОС не относится к многозадачным?',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 17,
        text: '17.	Какая команда используется для переименования файла?',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 18,
        text: '18.	Какие команды ОС DOS называются внутренними?',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 19,
        text: '19.	Какая команда используется для создания папки из bat файла?',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 20,
        text: '20.	Для чего служит загрузчик операционной системы?',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 21,
        text: '21.	Какой подсистемы управления нет в ОС?',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 22,
        text: '22.	Как называется информационная структура, которая содержит информацию, необходимую для возобновления выполнения процесса после прерывания и поэтому сохраняемую перед прерыванием?',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 23,
        text: '23.	Какое состояние не определено для потока в системе?',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 24,
        text: '24.	Каких классов прерываний не существует?',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 25,
        text: '25.	Частью чего является файловая система?',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 26,
        text: '26.	Какую структуру образуют файлы?',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 27,
        text: '27.	Какие типы разделов поддерживает ОС Windows?',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 28,
        text: '28.	Какую информацию не содержит дескриптор процесса?',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 29,
        text: '29.	Какой максимальный размер диска поддерживает FAT16?',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 30,
        text: '30.	Что из ниже перечисленного является недостатком файловой системы FAT?',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 31,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 32,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 33,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 34,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 35,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 36,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 37,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 38,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 39,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 40,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 41,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 42,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 43,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 44,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 45,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 46,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 47,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 48,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 49,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 50,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 51,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 52,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 53,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 54,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 55,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 56,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 57,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 58,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 59,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },

    {
        id: 60,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 61,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 62,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 63,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 64,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 65,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 66,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 67,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 68,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 69,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 70,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 71,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 72,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 73,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 74,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 75,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 76,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 77,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 78,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 79,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 80,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 81,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 82,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 83,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 84,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 85,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 86,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 87,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 88,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 89,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },
    {
        id: 90,
        text: '',
        one: '', two: '', three: "", four: "", otvet: ""
    },

];
let ver = 0
let never = 0
min = Math.ceil(1);
max = Math.floor(10);
function open() {

    const a = Math.floor(Math.random() * (max - min + 1)) + min;
    initialCards.map((i) => {
        if (i.id == a) {
            text.textContent = i.text;
            onel.textContent = i.one;
            twol.textContent = i.two;
            threel.textContent = i.three;
            fourl.textContent = i.four;
            if (i.otvet == "one") {
                onel.addEventListener('click', verny)
                twol.addEventListener('click', () => { neverny(i.one) })
                threel.addEventListener('click', () => { neverny(i.one) })
                fourl.addEventListener('click', () => { neverny(i.one) })
            }
            if (i.otvet == "two") {
                onel.addEventListener('click', () => { neverny(i.two) })
                twol.addEventListener('click', verny)
                threel.addEventListener('click', () => { neverny(i.two) })
                fourl.addEventListener('click', () => { neverny(i.two) })
            }
            if (i.otvet == "three") {
                onel.addEventListener('click', () => { neverny(i.three) })
                twol.addEventListener('click', () => { neverny(i.three) })
                threel.addEventListener('click', verny)
                fourl.addEventListener('click', () => { neverny(i.three) })
            }
            if (i.otvet == "four") {
                onel.addEventListener('click', () => { neverny(i.four) })
                twol.addEventListener('click', () => { neverny(i.four) })
                threel.addEventListener('click', () => { neverny(i.four) })
                fourl.addEventListener('click', verny)
            }
        }
        console.log(ver, never)
    })
}

function verny() {
    prav.textContent = "OK"
    console.log('ok', ver);
    open()
    ver = ver + 1
    verl.textContent = 'правильных' + " " + ver

}
function neverny(pravl) {
    console.log('no', never);
    open()
    never = never + 1
    prav.textContent = 'правильным было' + " " + pravl
    neverl.textContent = 'неправильных' + " " + never

}

open()