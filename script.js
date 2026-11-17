
"use strict";

const $ = id => document.getElementById(id);
const M = String.raw;

const lesson = {
  title:"Қисықсызықты трапецияның ауданы",
  chapter:"I тарау. Алғашқы функция және интеграл",
  page:13,
  goal:"Қисықсызықты трапецияның не екенін түсіну, оның ауданын анықталған интеграл арқылы есептеу және Ньютон–Лейбниц формуласын қолдану."
};

// 5 ТҮСІНДІРМЕ
const theory = [
  {
    title:"Қисықсызықты трапеция дегеніміз не?",
    definition:"Қисықсызықты трапеция — жоғарыдан функция графигімен, төменнен Ox осімен, екі жағынан x=a және x=b түзулерімен шектелген фигура. Мұнда функция [a;b] аралығында теріс емес деп алынады.",
    explanation:"Кәдімгі тіктөртбұрыштың жоғарғы жағы түзу болады. Ал қисықсызықты трапецияның жоғарғы шекарасы қисық сызық болуы мүмкін. Мысалы, y=x² параболасының астындағы фигура.",
    warning:"Қисықсызықты трапецияны қарастырғанда шекараларды дұрыс белгілеңдер: сол жақта a, оң жақта b. Функция графигі Ox осінен төмен түссе, ауданды табу үшін қосымша талдау қажет.",
    formula:M`a\leq x\leq b,\qquad 0\leq y\leq f(x)`
  },
  {
    title:"Қисықсызықты трапецияның ауданын табу",
    definition:"Егер f(x) функциясы [a;b] аралығында үздіксіз және теріс емес болса, қисықсызықты трапецияның ауданы анықталған интегралға тең.",
    explanation:"Алдымен функцияны анықтаймыз. Содан кейін сол жақ және оң жақ шекараны аламыз. Соңында осы шекаралар бойынша анықталған интегралды есептейміз.",
    warning:"Интегралдың шекараларын шатастырмаңдар. Төменгі шекара a, жоғарғы шекара b болады.",
    formula:M`S=\int_a^b f(x)\,dx`
  },
  {
    title:"Ауданды есептеу алгоритмі",
    definition:"Ауданды есептеу үшін алдымен функцияның алғашқы функциясын табамыз. Содан кейін алғашқы функцияның шекаралардағы мәндерінің айырмасын есептейміз.",
    explanation:"Мысалы, y=2x функциясы үшін алғашқы функция F(x)=x². Егер аралық [0;3] болса, F(3)=9 және F(0)=0. Демек аудан 9 квадрат бірлік болады.",
    warning:"Анықталған интегралдың нәтижесіне C тұрақтысы қосылмайды, өйткені жоғарғы және төменгі шекарадағы айырманы есептегенде тұрақты жойылады.",
    formula:M`S=F(b)-F(a)`
  },
  {
    title:"Функция графигі Ox осінен төмен болса",
    definition:"Анықталған интеграл таңбалы аудан береді. Функция Ox осінен төмен жатса, интегралдың мәні теріс болуы мүмкін.",
    explanation:"Геометриялық аудан әрқашан теріс емес. Сондықтан график түгелдей осьтен төмен орналасса, анықталған интегралдың қарама-қарсы мәнін аламыз.",
    warning:"Егер график Ox осін кесіп өтсе, аралықты түбірлер арқылы бөліп, әр бөліктің аудандарын қосамыз.",
    formula:M`S=\int_a^b |f(x)|\,dx`
  },
  {
    title:"Ауданның өлшем бірлігі және тексеру",
    definition:"Аудан квадрат бірлікпен өлшенеді. Егер координаталар метрмен берілсе, аудан квадрат метрмен өлшенеді.",
    explanation:"Есеп аяқталғанда шекаралардың дұрыстығын, интегралдың есептелуін және ауданның теріс еместігін тексереміз. Кей жағдайларда ауданның шамасын график арқылы жуықтап бағалауға болады.",
    warning:"Геометриялық аудан теріс сан болып шықса, графиктің орналасуын немесе есептеу таңбасын қайта тексеріңдер.",
    formula:M`S\geq0`
  }
];

// 10 КОНСПЕКТ
const notes = [
  {
    title:"Қисықсызықты трапеция",
    text:"Қисықсызықты трапеция — функция графигімен, Ox осімен және екі тік түзумен шектелген жазық фигура.",
    formula:M`y=f(x),\quad x=a,\quad x=b,\quad y=0`
  },
  {
    title:"Аудан формуласы",
    text:"Егер f(x) үздіксіз және теріс емес болса, қисықсызықты трапецияның ауданы анықталған интеграл арқылы есептеледі.",
    formula:M`S=\int_a^b f(x)\,dx`
  },
  {
    title:"Интеграл шекаралары",
    text:"a саны интегралдың төменгі шекарасы, ал b саны жоғарғы шекарасы деп аталады. Қисықсызықты трапецияда әдетте a<b.",
    formula:M`a<b`
  },
  {
    title:"Алғашқы функция",
    text:"Анықталған интегралды есептеу үшін f(x) функциясының F(x) алғашқы функциясын табамыз.",
    formula:M`F'(x)=f(x)`
  },
  {
    title:"Ньютон–Лейбниц формуласы",
    text:"Анықталған интеграл алғашқы функцияның жоғарғы шекарадағы мәнінен төменгі шекарадағы мәнін азайту арқылы есептеледі.",
    formula:M`\int_a^b f(x)\,dx=F(b)-F(a)`
  },
  {
    title:"Тұрақты функцияның астындағы аудан",
    text:"y=c, мұндағы c>0, функциясының [a;b] аралығындағы ауданы тіктөртбұрыш ауданына тең.",
    formula:M`S=c(b-a)`
  },
  {
    title:"Сызықтық функция мысалы",
    text:"y=2x функциясының [0;3] аралығындағы графигінің астындағы ауданды интеграл арқылы есептейміз.",
    formula:M`S=\int_0^3 2x\,dx=9`
  },
  {
    title:"Квадраттық функция мысалы",
    text:"y=x² функциясының [0;2] аралығындағы ауданы алғашқы функция көмегімен табылады.",
    formula:M`S=\int_0^2 x^2\,dx=\frac83`
  },
  {
    title:"График осьтен төмен орналасса",
    text:"Функция теріс болған аралықта анықталған интеграл теріс болуы мүмкін. Ал геометриялық аудан әрқашан теріс емес.",
    formula:M`S=-\int_a^b f(x)\,dx,\quad f(x)\leq0`
  },
  {
    title:"Жалпы геометриялық аудан",
    text:"Функция Ox осін бірнеше рет кесіп өтсе, әр бөлік жеке есептеледі. Оларды біріктіретін жалпы формула — модульдің интегралы.",
    formula:M`S=\int_a^b |f(x)|\,dx`
  }
];

// ФОРМУЛАЛАР
const formulas = [
  {
    name:"Теріс емес функцияның астындағы аудан",
    formula:M`S=\int_a^b f(x)\,dx`
  },
  {
    name:"Ньютон–Лейбниц формуласы",
    formula:M`\int_a^b f(x)\,dx=F(b)-F(a)`
  },
  {
    name:"Дәрежелік функцияның интегралы",
    formula:M`\int x^n\,dx=\frac{x^{n+1}}{n+1}+C,\quad n\ne-1`
  },
  {
    name:"Тұрақты функцияның ауданы",
    formula:M`S=c(b-a),\quad c\geq0`
  },
  {
    name:"График осьті кесіп өткендегі аудан",
    formula:M`S=\int_a^b |f(x)|\,dx`
  },
  {
    name:"Теріс функция үшін аудан",
    formula:M`S=-\int_a^b f(x)\,dx,\quad f(x)\leq0`
  }
];

// ШЫҒАРЫЛҒАН 4 ЕСЕП
const examples = [
  {
    title:"1-есеп. Түзу сызық астындағы аудан",
    question:M`y=2x,\quad x\in[0;3]`,
    explanation:"Берілген функция [0;3] аралығында теріс емес. Сондықтан ауданды анықталған интегралмен есептейміз.",
    steps:[
      M`S=\int_0^3 2x\,dx`,
      M`F(x)=x^2`,
      M`S=3^2-0^2=9`
    ],
    answer:M`S=9\text{ кв. бірлік}`
  },
  {
    title:"2-есеп. Парабола астындағы аудан",
    question:M`y=x^2,\quad x\in[0;2]`,
    explanation:"x² функциясының алғашқы функциясы x³/3 болады. Жоғарғы және төменгі шекараларды қоямыз.",
    steps:[
      M`S=\int_0^2 x^2\,dx`,
      M`F(x)=\frac{x^3}{3}`,
      M`S=\frac{2^3}{3}-\frac{0^3}{3}`
    ],
    answer:M`S=\frac83\text{ кв. бірлік}`
  },
  {
    title:"3-есеп. Тұрақты функция",
    question:M`y=4,\quad x\in[1;5]`,
    explanation:"Бұл жағдайда график горизонталь түзу. Оның астындағы фигура — ені 4 және биіктігі 4 болатын тіктөртбұрыш.",
    steps:[
      M`S=\int_1^5 4\,dx`,
      M`F(x)=4x`,
      M`S=4\cdot5-4\cdot1`
    ],
    answer:M`S=16\text{ кв. бірлік}`
  },
  {
    title:"4-есеп. График осьтен төмен",
    question:M`y=-x,\quad x\in[0;4]`,
    explanation:"Бұл функция теріс. Сондықтан интеграл мәні −8, бірақ геометриялық аудан оның модуліне тең.",
    steps:[
      M`\int_0^4(-x)\,dx`,
      M`=\left.-\frac{x^2}{2}\right|_0^4=-8`,
      M`S=|-8|`
    ],
    answer:M`S=8\text{ кв. бірлік}`
  }
];

// ЖЕКЕ ТАПСЫРМАЛАР — 6 ЕСЕП
const tasks = [
  {
    level:"Жеңіл",
    question:M`y=3,\quad x\in[0;4]`,
    hint:"Тұрақты функция үшін тіктөртбұрыштың ауданын табыңдар.",
    answer:M`S=12`
  },
  {
    level:"Жеңіл",
    question:M`y=x,\quad x\in[0;6]`,
    hint:"x функциясының алғашқы функциясы x²/2 болады.",
    answer:M`S=18`
  },
  {
    level:"Орташа",
    question:M`y=3x^2,\quad x\in[0;2]`,
    hint:"3x² функциясының алғашқы функциясы x³ болады.",
    answer:M`S=8`
  },
  {
    level:"Орташа",
    question:M`y=x+2,\quad x\in[1;3]`,
    hint:"Алдымен x²/2+2x алғашқы функциясын табыңдар.",
    answer:M`S=8`
  },
  {
    level:"Қиын",
    question:M`y=x^3,\quad x\in[1;3]`,
    hint:"x³ функциясының алғашқы функциясы x⁴/4.",
    answer:M`S=20`
  },
  {
    level:"Қиын",
    question:M`y=x^2-1,\quad x\in[0;2]`,
    hint:"Функция x=1 нүктесінде таңбасын өзгертеді. Екі аралықтың ауданын жеке есептеңдер.",
    answer:M`S=2`
  }
];

// 3 ТОПҚА 15 СҰРАҚ
const quiz = [
  {
    q:"Қисықсызықты трапецияның ауданы қандай амалмен табылады?",
    options:["Анықталған интеграл","Тек көбейту","Логарифм","Тек туынды"],
    correct:0
  },
  {
    q:"y=2, [0;3] аралығындағы аудан?",
    options:["2","6","3","9"],
    correct:1
  },
  {
    q:"Анықталған интегралдың нәтижесі қандай?",
    options:["Кез келген функция","Тек C","Нақты сан","Тек бөлшек"],
    correct:2
  },
  {
    q:"Ньютон–Лейбниц формуласында қандай айырма бар?",
    options:["F(a)+F(b)","F(a)−F(b)","F(a)F(b)","F(b)−F(a)"],
    correct:3
  },
  {
    q:"y=x, [0;2] аралығындағы аудан?",
    options:["2","4","1","8"],
    correct:0
  },
  {
    q:"y=3, [1;4] аралығындағы аудан?",
    options:["12","9","3","6"],
    correct:1
  },
  {
    q:"∫₀²2x dx мәні?",
    options:["2","8","4","6"],
    correct:2
  },
  {
    q:"Геометриялық аудан қандай болуы мүмкін?",
    options:["Тек теріс","Тек бүтін","Кез келген теріс сан","Теріс емес"],
    correct:3
  },
  {
    q:"x² функциясының алғашқы функциясы?",
    options:["x³/3","2x","x²/2","3x²"],
    correct:0
  },
  {
    q:"∫₀¹3x² dx мәні?",
    options:["3","1","2","0"],
    correct:1
  },
  {
    q:"y=4, [0;2] аралығындағы аудан?",
    options:["4","2","8","16"],
    correct:2
  },
  {
    q:"∫₂²f(x)dx мәні?",
    options:["1","2","−2","0"],
    correct:3
  },
  {
    q:"y=x², [0;3] ауданы?",
    options:["9","3","27","6"],
    correct:0
  },
  {
    q:"y=−2, [0;3] геометриялық ауданы?",
    options:["−6","6","2","3"],
    correct:1
  },
  {
    q:"Егер график Ox осін кесіп өтсе, ауданды қалай табамыз?",
    options:["Интегралды есептемейміз","Нәтижеге C қосамыз","Аралықтарды бөліп, аудандарды қосамыз","Тек шекараларды қосамыз"],
    correct:2
  }
];

// ӘРТҮРЛІ ҮЙ ЖҰМЫСЫ
const homework = [
  {
    title:"1-тапсырма. Геометриялық сызба",
    text:"Координаталық жазықтықта y=x² графигін салып, x=0 және x=3 түзулерімен шектелген фигураны бояңдар. Содан кейін оның ауданын табыңдар.",
    formulas:[
      M`S=\int_0^3 x^2\,dx`
    ]
  },
  {
    title:"2-тапсырма. Есеп шығару",
    text:"Берілген функциялардың көрсетілген аралықтағы графигі мен Ox осі арасындағы геометриялық аудандарын есептеңдер.",
    formulas:[
      M`y=2x+1,\quad x\in[0;4]`,
      M`y=4x^3,\quad x\in[0;2]`
    ]
  },
  {
    title:"3-тапсырма. Теориялық салыстыру",
    text:"«Анықталған интеграл мен геометриялық ауданның айырмашылығы» тақырыбында 6–8 сөйлем жазыңдар. Функция теріс болған жағдайға өз мысалдарыңды келтіріңдер.",
    formulas:[]
  }
];

// =====================================
// СЛАЙДТАР
// =====================================

const slides = [{type:"intro",name:"Кіріспе"}];

theory.forEach((item,index)=>{
  slides.push({
    type:"theory",index,
    name:"Түсіндірме "+(index+1)
  });
});

notes.forEach((item,index)=>{
  slides.push({
    type:"notes",index,
    name:"Конспект "+(index+1)
  });
});

slides.push({type:"formulas",name:"Формулалар"});

examples.forEach((item,index)=>{
  slides.push({
    type:"examples",index,
    name:"Үлгі есеп "+(index+1)
  });
});

tasks.forEach((item,index)=>{
  slides.push({
    type:"tasks",index,
    name:"Тапсырма "+(index+1)
  });
});

quiz.forEach((item,index)=>{
  slides.push({
    type:"game",index,
    name:(index%3+1)+"-топ, "+(index+1)+"-сұрақ"
  });
});

slides.push({type:"homework",name:"Үй жұмысы"});
slides.push({type:"finish",name:"Қорытынды"});

let currentPage=0;
let scores=[0,0,0];
let answered=new Map();
let remainingSeconds=4800;
let timerInterval=null;
let timerEndAt=0;

function safe(value) {
  return String(value).replace(/[&<>"']/g,c=>({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  }[c]));
}

function math(value) {
  return "\\["+value+"\\]";
}

function mathBox(value) {
  return `<div class="math-box">${math(value)}</div>`;
}

function card(color,title,body) {
  return `
    <section class="card ${color}">
      <h3>${safe(title)}</h3>
      ${body}
    </section>`;
}

let mathRenderId=0;

function refreshMath() {
  const id=++mathRenderId;
  if(!window.MathJax) return;

  MathJax.startup.promise.then(()=>{
    if(id!==mathRenderId) return;
    return MathJax.typesetPromise([$("content")]);
  }).catch(error=>console.warn(error));
}

// =====================================
// БЕТТІ КӨРСЕТУ
// =====================================

function render() {
  const s=slides[currentPage];

  $("pageCount").textContent=
    `${currentPage+1} / ${slides.length}`;

  $("pageName").textContent=s.name;

  $("pageProgress").style.width=
    ((currentPage+1)/slides.length*100)+"%";

  $("totalScore").textContent=
    scores.reduce((a,b)=>a+b,0);

  let html=`
    <div class="slide">
      <div class="eyebrow">
        ${safe(lesson.chapter)} • ${lesson.page}-бет
      </div>`;

  if(s.type==="intro") {
    html+=`
      <h1 class="gradient">
        §2. ${safe(lesson.title)}
      </h1>

      ${card("blue","Сабақтың мақсаты",
        `<p>${safe(lesson.goal)}</p>`)}

      ${card("green","Бүгін не үйренеміз?",`
        <p>Қисықсызықты трапецияны анықтаймыз.</p>
        <p>Графиктің астындағы ауданды интегралмен есептейміз.</p>
        <p>Ньютон–Лейбниц формуласын пайдаланамыз.</p>
        <p>Жеке және топтық есептер шығарамыз.</p>
      `)}

      ${card("yellow","80 минуттық сабақ",`
        <p>Теория → Конспект → Формула → Есептер → Топтық ойын → Үй жұмысы</p>
      `)}
    `;
  }

  if(s.type==="theory") {
    const t=theory[s.index];

    html+=`<h2>📖 ${safe(t.title)}</h2>`;

    html+=card("blue","Анықтама",
      `<p>${safe(t.definition)}</p>`);

    html+=card("green","Түсінікті ереже",
      `<p>${safe(t.explanation)}</p>`);

    html+=card("yellow","Формула",
      mathBox(t.formula));

    html+=card("red","Назар аударыңдар!",
      `<p>${safe(t.warning)}</p>`);
  }

  if(s.type==="notes") {
    const n=notes[s.index];

    html+=`<h2>📝 Конспект ${s.index+1}/10</h2>`;

    html+=card("yellow",n.title,`
      <p class="blue-text">Дәптерге көшіріп жазыңдар:</p>
      <div class="note-box">${safe(n.text)}</div>
      ${mathBox(n.formula)}
    `);

    html+=card("green","Ауызша түсіндіру",`
      <p>Осы формуланы қай жағдайда қолданатынымызды өз сөздеріңмен түсіндіріңдер.</p>
    `);
  }

  if(s.type==="formulas") {
    html+=`<h2>∫ Негізгі формулалар</h2>`;

    formulas.forEach((f,i)=>{
      html+=card(i%2===0?"yellow":"blue",
        `${i+1}. ${f.name}`,
        mathBox(f.formula));
    });
  }

  if(s.type==="examples") {
    const e=examples[s.index];

    html+=`<h2>✏️ ${safe(e.title)}</h2>`;

    html+=card("blue","Есептің шарты",
      mathBox(e.question));

    html+=card("green","Түсіндірме",
      `<p>${safe(e.explanation)}</p>`);

    e.steps.forEach((step,i)=>{
      html+=card("yellow",
        `${i+1}-қадам`,
        mathBox(step));
    });

    html+=card("green","Дұрыс жауап",
      mathBox(e.answer));
  }

  if(s.type==="tasks") {
    const t=tasks[s.index];

    html+=`<h2>📐 ${s.index+1}-тапсырма</h2>`;

    html+=card("blue",`Деңгейі: ${t.level}`,`
      ${mathBox(t.question)}
      <p>Ауданды есептеп, толық шешу жолын дәптерге жазыңдар.</p>
    `);

    html+=card("purple","Көмек",`
      <button class="action" data-reveal="hint">
        Көмекті көрсету
      </button>
      <div id="hint" class="reveal">${safe(t.hint)}</div>
    `);

    html+=card("green","Жауап",`
      <button class="action" data-reveal="answer">
        Жауапты көрсету
      </button>
      <div id="answer" class="reveal">
        ${math(t.answer)}
      </div>
    `);
  }

  if(s.type==="game") {
    const i=s.index;
    const q=quiz[i];
    const team=i%3;
    const saved=answered.get(i);

    html+=`<h2>🏆 Топтық ойын</h2>`;

    html+=`
      <div class="scores">
        ${scores.map((value,index)=>`
          <div class="team ${index===team?"current":""}">
            ${index+1}-топ
            <strong>${value}</strong>
          </div>`).join("")}
      </div>`;

    html+=`
      <section class="card yellow">
        <h3>${i+1}-сұрақ / 15</h3>
        <p class="yellow-text">
          ${team+1}-топтың кезегі
        </p>
        <p>${safe(q.q)}</p>

        <div class="answers">
          ${q.options.map((option,index)=>{
            let className="";
            if(saved!==undefined) {
              if(index===q.correct)className="correct";
              else if(index===saved)className="wrong";
            }

            return `
              <button
                class="${className}"
                data-answer="${index}"
                ${saved!==undefined?"disabled":""}>
                ${"ABCD"[index]}. ${safe(option)}
              </button>`;
          }).join("")}
        </div>

        <p id="gameMessage">
          ${saved===undefined
            ?"Бір жауапты таңдаңдар."
            :saved===q.correct
              ?"✓ Дұрыс! +10 ұпай."
              :"Дұрыс жауап: "+safe(q.options[q.correct])}
        </p>
      </section>`;

    html+=card("blue","Ойын ережесі",`
      <p>Әр дұрыс жауапқа 10 ұпай.</p>
      <p>Топтар 1 → 2 → 3 кезегімен ауысады.</p>
      <p>Жауаптан кейін «Келесі» батырмасын басыңдар.</p>
    `);
  }

  if(s.type==="homework") {
    html+=`<h2>📚 Үй тапсырмасы</h2>`;

    homework.forEach((h,i)=>{
      html+=card(
        ["blue","yellow","green"][i],
        h.title,
        `<p>${safe(h.text)}</p>`+
        h.formulas.map(mathBox).join("")
      );
    });

    html+=card("red","Ескерту",`
      <p>Әр есепте графиктің орналасуын және ауданның теріс еместігін тексеріңдер.</p>
    `);
  }

  if(s.type==="finish") {
    const best=Math.max(...scores);

    const winners=scores
      .map((score,i)=>score===best?`${i+1}-топ`:null)
      .filter(Boolean);

    html+=`<h1 class="gradient">Сабақ аяқталды!</h1>`;

    html+=`
      <div class="scores">
        ${scores.map((v,i)=>`
          <div class="team">
            ${i+1}-топ
            <strong>${v}</strong>
          </div>`).join("")}
      </div>`;

    html+=card("green","Ойын нәтижесі",`
      <p>${winners.join(", ")}
        ${winners.length===1?"— жеңімпаз!":"— тең ұпай жинады!"}
      </p>
    `);

    html+=card("blue","Қорытынды",`
      <p>Қисықсызықты трапецияның анықтамасын үйрендік.</p>
      <p>Анықталған интеграл арқылы аудан табуды меңгердік.</p>
      <p>График осьтен төмен орналасқанда ауданның таңбасын ескеруді үйрендік.</p>
    `);

    html+=card("yellow","Сау болыңыздар!",`
      <p>Сабаққа қатысқандарыңызға рақмет!</p>
    `);
  }

  $("content").innerHTML=html+"</div>";
  $("content").scrollTop=0;

  updateSidebar();
  refreshMath();
}

// =====================================
// БАСҚАРУ
// =====================================

function nextPage() {
  if(currentPage<slides.length-1) {
    currentPage++;
    render();
  }
}

function previousPage() {
  if(currentPage>0) {
    currentPage--;
    render();
  }
}

function goSection(type) {
  const index=slides.findIndex(s=>s.type===type);
  if(index>=0) {
    currentPage=index;
    render();
  }
}

function updateSidebar() {
  const type=slides[currentPage].type;

  document.querySelectorAll("[data-section]").forEach(btn=>{
    btn.classList.toggle("active",btn.dataset.section===type);
  });

  $("previousPage").disabled=currentPage===0;
  $("nextPage").disabled=currentPage===slides.length-1;
}

$("content").addEventListener("click",event=>{
  const reveal=event.target.closest("[data-reveal]");

  if(reveal) {
    const element=$(reveal.dataset.reveal);
    if(element) {
      element.style.display=
        getComputedStyle(element).display==="none"?"block":"none";

      refreshMath();
    }
    return;
  }

  const choice=event.target.closest("[data-answer]");
  if(choice) answerQuestion(Number(choice.dataset.answer));
});

function answerQuestion(choice) {
  const slide=slides[currentPage];
  if(slide.type!=="game") return;
  if(answered.has(slide.index)) return;

  const q=quiz[slide.index];
  answered.set(slide.index,choice);

  if(choice===q.correct) {
    scores[slide.index%3]+=10;
  }

  render();
}

function resetGame() {
  scores=[0,0,0];
  answered.clear();
  render();
}

document.querySelectorAll("[data-section]").forEach(btn=>{
  btn.addEventListener("click",()=>goSection(btn.dataset.section));
});

$("nextPage").addEventListener("click",nextPage);
$("previousPage").addEventListener("click",previousPage);
$("resetGame").addEventListener("click",resetGame);

$("fullscreenBtn").addEventListener("click",async()=>{
  try {
    if(!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch(error) {
    console.warn("Толық экран қолжетімсіз",error);
  }
});

// =====================================
// 80 МИНУТТЫҚ ТАЙМЕР
// =====================================

function formatTime(t) {
  return String(Math.floor(t/60)).padStart(2,"0")+
    ":"+String(t%60).padStart(2,"0");
}

function updateTimer() {
  $("remaining").textContent=formatTime(remainingSeconds);
  $("elapsed").textContent=formatTime(4800-remainingSeconds);
  $("timeProgress").style.width=
    ((4800-remainingSeconds)/4800*100)+"%";
}

function startTimer() {
  if(timerInterval!==null || remainingSeconds<=0)return;

  timerEndAt=Date.now()+remainingSeconds*1000;

  timerInterval=setInterval(()=>{
    remainingSeconds=Math.max(
      0,Math.ceil((timerEndAt-Date.now())/1000)
    );
    updateTimer();

    if(remainingSeconds===0)pauseTimer();
  },250);
}

function pauseTimer() {
  if(timerInterval!==null)clearInterval(timerInterval);
  timerInterval=null;
}

function resetTimer() {
  pauseTimer();
  remainingSeconds=4800;
  updateTimer();
}

$("startTimer").addEventListener("click",startTimer);
$("pauseTimer").addEventListener("click",pauseTimer);
$("resetTimer").addEventListener("click",resetTimer);

function updateClock() {
  $("clock").textContent=new Intl.DateTimeFormat("kk-KZ",{
    timeZone:"Asia/Almaty",
    hour:"2-digit",minute:"2-digit",second:"2-digit",
    hour12:false
  }).format(new Date());
}

updateClock();
setInterval(updateClock,1000);

// =====================================
// ҚАРАПАЙЫМ ЖӘНЕ ҒЫЛЫМИ КАЛЬКУЛЯТОР
// =====================================

const calcValues={
  basic:"",
  scientific:""
};

const calcButtons={
  basic:[
    "C","⌫","(",")",
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","−",
    "%","0",".","+",
    "="
  ],
  scientific:[
    "C","⌫","(",")",
    "sin","cos","tan","√",
    "log","ln","π","e",
    "x²","xʸ","1/x","÷",
    "7","8","9","×",
    "4","5","6","−",
    "1","2","3","+",
    "%","0",".","="
  ]
};

const replacements={
  "×":"*",
  "÷":"/",
  "−":"-",
  "√":"sqrt(",
  "sin":"sin(",
  "cos":"cos(",
  "tan":"tan(",
  "log":"log(",
  "ln":"ln(",
  "π":"pi",
  "x²":"^2",
  "xʸ":"^",
  "1/x":"1/("
};

function createCalculator(type) {
  const grid=$(type+"Keys");

  calcButtons[type].forEach(key=>{
    const btn=document.createElement("button");
    btn.type="button";
    btn.textContent=key;

    if(key==="C")btn.classList.add("clear");
    if(key==="=")btn.classList.add("equal");

    if([
      "+","−","×","÷","%","√","sin","cos",
      "tan","log","ln","x²","xʸ","1/x"
    ].includes(key)) {
      btn.classList.add("operator");
    }

    btn.addEventListener("click",()=>{
      pressCalc(type,key);
    });

    grid.appendChild(btn);
  });
}

function pressCalc(type,key) {
  let value=calcValues[type];

  if(key==="C") {
    value="";
  } else if(key==="⌫") {
    value=value.slice(0,-1);
  } else if(key==="=") {
    try {
      const result=calculate(value);
      value=String(Number(result.toPrecision(12)));
    } catch(error) {
      value="Қате";
    }
  } else {
    if(value==="Қате")value="";
    value+=replacements[key]??key;
  }

  calcValues[type]=value;

  const display=$(type+"Display");
  display.textContent=value||"0";
  display.scrollLeft=display.scrollWidth;
}

function openCalculator(type) {
  const element=$(type+"Calculator");
  const opening=!element.classList.contains("visible");

  const other=type==="basic"?"scientific":"basic";
  $(other+"Calculator").classList.remove("visible");

  element.classList.toggle("visible",opening);

  if(opening) {
    const maxX=Math.max(0,innerWidth-element.offsetWidth);
    const maxY=Math.max(0,innerHeight-element.offsetHeight);

    const currentX=element.getBoundingClientRect().left;
    const currentY=element.getBoundingClientRect().top;

    element.style.left=
      Math.max(0,Math.min(maxX,currentX))+"px";
    element.style.top=
      Math.max(0,Math.min(maxY,currentY))+"px";
  }
}

function closeCalculator(type) {
  $(type+"Calculator").classList.remove("visible");
}

$("openBasic").addEventListener("click",()=>{
  openCalculator("basic");
});

$("openScientific").addEventListener("click",()=>{
  openCalculator("scientific");
});

document.querySelectorAll("[data-close]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    closeCalculator(btn.dataset.close);
  });
});

// =====================================
// МАТЕМАТИКАЛЫҚ ЕСЕПТЕУ ПАРСЕРІ
// =====================================
// sin, cos, tan — градуспен
// eval() қолданылмайды

function calculate(input) {
  const source=String(input).replace(/\s+/g,"");
  let position=0;

  const functions={
    sin:x=>Math.sin(x*Math.PI/180),
    cos:x=>Math.cos(x*Math.PI/180),
    tan:x=>{
      const rad=x*Math.PI/180;
      if(Math.abs(Math.cos(rad))<1e-12) {
        throw new Error("Тангенс анықталмаған");
      }
      return Math.tan(rad);
    },
    sqrt:x=>Math.sqrt(x),
    log:x=>Math.log10(x),
    ln:x=>Math.log(x)
  };

  function take(ch) {
    if(source[position]===ch) {
      position++;
      return true;
    }
    return false;
  }

  function atom() {
    if(take("(")) {
      const result=expression();
      if(!take(")"))throw new Error("Жақша");
      return result;
    }

    const rest=source.slice(position);

    const number=rest.match(/^(?:\d+\.?\d*|\.\d+)/);

    if(number) {
      position+=number[0].length;
      return Number(number[0]);
    }

    if(rest.startsWith("pi")) {
      position+=2;
      return Math.PI;
    }

    if(rest.startsWith("e")) {
      position++;
      return Math.E;
    }

    for(const name of Object.keys(functions)) {
      if(rest.startsWith(name+"(")) {
        position+=name.length+1;
        const argument=expression();

        if(!take(")"))throw new Error("Жақша");

        return functions[name](argument);
      }
    }

    throw new Error("Белгісіз өрнек");
  }

  function postfix() {
    let v=atom();
    while(take("%"))v/=100;
    return v;
  }

  function power() {
    let v=postfix();
    if(take("^"))v=Math.pow(v,unary());
    return v;
  }

  function unary() {
    if(take("+"))return unary();
    if(take("-"))return -unary();
    return power();
  }

  function term() {
    let v=unary();
    while(true) {
      if(take("*"))v*=unary();
      else if(take("/"))v/=unary();
      else break;
    }
    return v;
  }

  function expression() {
    let v=term();
    while(true) {
      if(take("+"))v+=term();
      else if(take("-"))v-=term();
      else break;
    }
    return v;
  }

  if(!source)throw new Error("Бос өрнек");

  const result=expression();

  if(position!==source.length || !Number.isFinite(result)) {
    throw new Error("Есептеу қатесі");
  }

  return result;
}

// =====================================
// КЕЗ КЕЛГЕН ЖЕРІНЕН ЖЫЛЖЫТУ
// =====================================

function enableDragging(element) {
  let drag=null;
  let suppressClick=false;

  element.addEventListener("pointerdown",event=>{
    if(event.target.closest(".calc-close"))return;
    if(event.pointerType==="mouse" && event.button!==0)return;

    const rect=element.getBoundingClientRect();

    drag={
      id:event.pointerId,
      startX:event.clientX,
      startY:event.clientY,
      left:rect.left,
      top:rect.top,
      moved:false
    };
  });

  window.addEventListener("pointermove",event=>{
    if(!drag || drag.id!==event.pointerId)return;

    const dx=event.clientX-drag.startX;
    const dy=event.clientY-drag.startY;

    if(Math.hypot(dx,dy)>6)drag.moved=true;
    if(!drag.moved)return;

    element.classList.add("dragging");

    const maxX=Math.max(0,innerWidth-element.offsetWidth);
    const maxY=Math.max(0,innerHeight-element.offsetHeight);

    const x=Math.max(0,Math.min(maxX,drag.left+dx));
    const y=Math.max(0,Math.min(maxY,drag.top+dy));

    element.style.left=x+"px";
    element.style.top=y+"px";
  });

  window.addEventListener("pointerup",event=>{
    if(!drag || drag.id!==event.pointerId)return;

    suppressClick=drag.moved;
    drag=null;
    element.classList.remove("dragging");
  });

  window.addEventListener("pointercancel",event=>{
    if(!drag || drag.id!==event.pointerId)return;
    drag=null;
    element.classList.remove("dragging");
  });

  element.addEventListener("click",event=>{
    if(!suppressClick)return;
    event.preventDefault();
    event.stopImmediatePropagation();
    suppressClick=false;
  },true);
}

// =====================================
// ІСКЕ ҚОСУ
// =====================================

createCalculator("basic");
createCalculator("scientific");

enableDragging($("basicCalculator"));
enableDragging($("scientificCalculator"));

updateTimer();
render();
