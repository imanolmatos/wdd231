//DATES
let current = document.querySelector("#currentyear");
let lastM = document.querySelector("#last");

let today = new Date();
let lastModif = new Date(document.lastModified);
let formatedLast = lastModif.toLocaleString("en-US", { timeZoneName: "short" });

current.innerHTML = today.getFullYear();
lastM.innerHTML = formatedLast;

// Hamburguer 

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const title = document.querySelector("#page-title");


hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
  title.classList.toggle("open");
});




const courses = [
  {
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
    technology: [
      'Python'
    ],
    completed: true
  },
  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
    technology: [
      'HTML',
      'CSS'
    ],
    completed: true
  },
  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
    technology: [
      'Python'
    ],
    completed: true
  },
  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
    technology: [
      'C#'
    ],
    completed: true
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
    technology: [
      'HTML',
      'CSS',
      'JavaScript'
    ],
    completed: true
  },
  {
    subject: 'WDD',
    number: 231,
    title: 'Frontend Web Development I',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
    technology: [
      'HTML',
      'CSS',
      'JavaScript'
    ],
    completed: false
  }
]

const certificates = document.querySelector("#list");
const totalCourse = document.querySelector("#totalcourse");
const totalCredit = document.querySelector("#totalcredit");


function createCertificateCard(filteredList) {
  document.querySelector("#list").innerHTML = "";
  const list = document.querySelector("#list");
  filteredList.forEach(certificate => {
    const li = document.createElement("li");
    if (certificate.completed) {
      li.innerHTML = `${certificate.subject} ${certificate.number} ✓ `;
      li.classList.add("completed");
    } else {
      li.innerHTML = `${certificate.subject} ${certificate.number}`;
      li.classList.add("notCompleted");
    }
    list.appendChild(li);
  });

  const countCredits = filteredList.reduce((total, course) => total + course.credits, 0);
  const countCourses = filteredList.length;
  totalCourse.innerHTML = countCourses;
  totalCredit.innerHTML = countCredits;
}


//Filters
const allLink = document.querySelector("#all");
const wddLink = document.querySelector("#wdd");
const cseLink = document.querySelector("#cse");



const navegationUpdated = document.querySelectorAll(".nav-link");
navegationUpdated.forEach(link =>
  link.addEventListener("click", () => {
    navegationUpdated.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  })


);

//All
allLink.addEventListener("click", () => {
  const allList = courses.filter(course =>
    course.credits >= 0);
  createCertificateCard(allList);
});

//wdd link
wddLink.addEventListener("click", () => {
  const wddList = courses.filter(course =>
    course.subject == "WDD");
  createCertificateCard(wddList);
});

//CSE link
cseLink.addEventListener("click", () => {
  const cseList = courses.filter(course =>
    course.subject == "CSE");
  createCertificateCard(cseList);
});

createCertificateCard(courses);





