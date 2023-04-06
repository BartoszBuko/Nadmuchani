const nav = document.querySelector("[data-nav]");
const navOpen = document.querySelector("[data-nav-open]");
const navClose = document.querySelector("[data-nav-close]");
const navLink = document.querySelectorAll("[data-link]");
const questions = document.querySelectorAll("[data-question]");
const answers = document.querySelectorAll("[data-answer]");
const faqWrapper = document.querySelector("[data-faq-wrapper]");
const desktopAnswer = document.querySelector("[data-answer-desktop]");
const desktopAnswerText = document.querySelector("[data-answer-text]");
const body = document.querySelector("body");
const html = document.querySelector("html");

const yearSpan = (document.querySelector("[data-year]").innerText =
  new Date().getFullYear());

// nav functionality

navOpen.addEventListener("click", () => {
  window.scrollTo(0, 0);
  body.classList.add("prevent-scroll");
  html.classList.add("prevent-scroll");
  nav.classList.remove("closed");
  navOpen.classList.add("display-none");
  setTimeout(() => {
    for (let i = 0; i < navLink.length; i++) {
      setTimeout(() => {
        if (i === 0 || i % 2 == 0) {
          navLink[i].classList.add("slide-in-left");
        } else {
          navLink[i].classList.add("slide-in-right");
        }
      }, i * 100);
    }
  }, 800);
});

navClose.addEventListener("click", () => {
  setTimeout(() => {
    navLink.forEach((link, i) => {
      if (i === 0 || i % 2 == 0) {
        link.classList.remove("slide-in-left");
      } else {
        link.classList.remove("slide-in-right");
      }
    });
    body.classList.remove("prevent-scroll");
    html.classList.remove("prevent-scroll");
  }, 700);
  navOpen.classList.remove("display-none");
  nav.classList.add("closed");
});

const main = document.querySelector("[data-main]");
const mainHeight = main.getBoundingClientRect().top;

const offer = document.querySelector("[data-offer]");

const gallery = document.querySelector("[data-gallery]");

const faq = document.querySelector("[data-faq]");

const regulations = document.querySelector("[data-regulation]");

navLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    setTimeout(() => {
      navLink.forEach((link, i) => {
        if (i === 0 || i % 2 == 0) {
          link.classList.remove("slide-in-left");
        } else {
          link.classList.remove("slide-in-right");
        }
      });
      body.classList.remove("prevent-scroll");
      html.classList.remove("prevent-scroll");
      const section = e.target.textContent;
      if (section === "Oferta") {
        const offerHeight = offer.getBoundingClientRect().top;

        window.scrollTo(0, offerHeight);
      }
      if (section === "FAQ") {
        const faqHeight = faq.getBoundingClientRect().top;
        window.scrollTo(0, faqHeight);
      }
      if (section === "Galeria") {
        const galleryHeight = gallery.getBoundingClientRect().top;
        window.scrollTo(0, galleryHeight);
      }
      if (section === "Regulamin") {
        const regulationsHeight = regulations.getBoundingClientRect().top;
        window.scrollTo(0, regulationsHeight);
      }
    }, 700);
    navOpen.classList.remove("display-none");
    nav.classList.add("closed");
  });
});

// faq functionality

const faqAnswers = [
  "Dmuchańce powinny być użytkowane na miękkim, trawiastym podłożu. Jeśli nie masz takiej możliwości - poinformuj nas wcześniej! Teren dla naszych urządzeń powinien być w miarę równy oraz dokładnie oczyszczony z wszystkich zanieczyszczeń. Wymiary naszych urządzeń znajdziesz w ofercie. Zadbaj o to, aby uczestnicy imprezy mieli zapewnione dookoła nich swobodne przejście.",
  "Dostęp do źródła zasilania zapewnia organizator imprezy. Każdy nasz dmuchaniec jest zasilany dmuchawą 1,1kW.Posiadamy ze sobą przedłużacze o długości 50m. W przypadku większej odległości od źródła zasilania - ostrzeż nas już podczas składania zamówienia.",
  "Czas obsługi urządzeń wynosi 6h. Dla osób prywatnych czas wynajmu wynosi 5 godzin (7 godzin wraz z montażem i demontażem). Istnieje możliwość przedłużenia czasu za dodatkową opłatą.",
  "Kwestię zaliczkowania ustalamy z każdym klientem indywidualnie.",
  " Sprzęt dostarczamy w okolicach południa (11:00-13:00), odbieramy wieczorem (18:00-20:00). O indywidualnych wymaganiach godzinowych należy poinformować wcześniej.",
  "Dla osób prywatnych: Urządzenie może być wynajęte tylko na terenie prywatnym (np. w ogrodzie) i nie może być użytkowane w ramach imprez publicznych.",
  "Przed rozpoczęciem korzystania z urządzeń wymagamy podpisania umowy najmu oraz regulaminu.",
  " Nie ponosimy odpowiedzialności za zdarzenia losowe, np. nagłe zmiany pogodowe lub awarie prądu.",
];

questions.forEach((question, i) => {
  if (window.innerWidth <= 1100) {
    question.addEventListener("click", () => {
      if (answers[i].classList.contains("answer__opened")) {
        answers[i].classList.remove("answer__opened");
        answers[i].classList.add("answer__closed");
        // question.classList.add("question-active");
      } else {
        answers[i].classList.add("answer__opened");
        answers[i].classList.remove("answer__closed");
        // question.classList.remove("question-active");
      }
    });
  } else {
    desktopAnswer.style.height = faqWrapper.offsetHeight + "px";
    desktopAnswer.classList.remove("mobile__hidden");
    question.addEventListener("click", () => {
      if (questions[i].classList.contains("opened__desktop--answer")) {
        questions.forEach((question) => {
          question.classList.remove("opened__desktop--answer");
        });
        setTimeout(() => {
          desktopAnswerText.innerHTML = "";
        }, 1000);
      } else {
        questions.forEach((question) => {
          question.classList.remove("opened__desktop--answer");
        });
        setTimeout(() => {
          questions[i].classList.add("opened__desktop--answer");
          setTimeout(() => {
            desktopAnswerText.innerHTML = faqAnswers[i];
          }, 500);
        }, 1000);

        // question.classList.remove("question-active");
      }
    });
  }
});

// scroll to top

const goToTop = document.querySelector("[data-scroll-top]");

window.addEventListener("scroll", () => {
  if (window.scrollY > main.offsetHeight) {
    goToTop.classList.remove("hide__arrow");
  } else {
    goToTop.classList.add("hide__arrow");
  }
});
goToTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
});

// gsap quickSeter()

const ball = document.querySelector(".ball");

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  ball.classList.add("hide-ball");
} else {
  gsap.set(".ball", { xPercent: -50, yPercent: -50 });

  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };
  const speed = 0.2;

  const xSet = gsap.quickSetter(ball, "x", "px");
  const ySet = gsap.quickSetter(ball, "y", "px");

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  gsap.ticker.add(() => {
    // adjust speed for higher refresh monitors
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    xSet(pos.x);
    ySet(pos.y);
  });
}
