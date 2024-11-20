const enContent = {
  introTitle: "friendzone",
  introDesc: "The app that helps you find and maintain meaningful friendships.",
  heroText:
    "friendzone is designed to help users find new and meaningful friendships. " +
    "Through personality quizzes and matching algorithms, we help users find people that match their personality and interests. " +
    "Users are then able to chat with their matches and get offers for activities based on their common interests. ",
  section1Title: "What defines a good friendship?",
  section1Desc:
    "The Author Kira Asatryan tries to give us an answer in this article.",
  section2Title: "Why is it so hard to make new friends?",
  section2Desc: "This article gives us some insights and solutions.",
  section3Title: "The anatomy of friendships.",
  section3Desc:
    "The author provides a brief overview of the different types of friendships",

  navAbout: "About",
  navForBusinesses: "For Businesses",
  carouselTitle1: "Match with new friends",
  carouselDesc1:
    "Matching system that helps you find new friends based on your personality.",
  carouselTitle2: "Do something with your new friend",
  carouselDesc2: "Get different offers based on your common interests.",
  carouselTitle3: "Create a personality profile",
  carouselDesc3:
    "Create a personality profile through our quizzes that we then use to find people that match your personality.",
  forBusinessesDesc:
    "Advertisment on our platform is a great way to reach new customers and increase your sales. " +
    "We conduct targeted marketing, meaning only users with an interest will see your ad. When we deliver ads to our users we " +
    "make sure that they are relevant, interesting, and something they can do " +
    "togheter. For example, we will never have ads for online shopping on our " +
    "platform. But every phyisical business is welcome to advertise with us. " +
    "Peoples interests are wide and we want to make sure that we can offer " +
    "something for everyone. <br><br>  If you are interested in advertising with us, please fill out the form " +
    "below and we will get back to you as soon as possible. ",
  formCompanyName: "Company Name",
  formOrgNumber: "Organization Number",
  formEmail: "Email",
  formContactPerson: "Contact Person",
  formPhoneNumber: "Phone Number",
  formAddress: "Address",
  formCity: "City",
  formZip: "Zip",
  formAdInformation: "Ad Information",
  formAdInformationPlaceholder: "What do you want to offer or tell our users?",
  formHomepage: "Homepage",
  formSend: "Send",
};

const svContent = {
  introTitle: "friendzone",
  introDesc:
    "Appen som hjälper dig hitta och underhålla meningsfulla vänskaper.",
  heroText:
    "friendzone är designad för att hjälpa användare hitta nya och meningsfulla vänskaper. " +
    "Genom quizzar och matching-algoritmer hjälper vi användare att hitta personer som matchar deras personlighet och intressen. " +
    "Användare kan sedan chatta med varandra och få erbjudanden om aktiviteter baserat på deras gemensamma intressen. ",
  section1Title: "Vad definierar en bra vänskap?",
  section1Desc:
    "Författaren Kira Asatryan försöker ge oss ett svar i denna artikel.",
  section2Title: "Varför är det så svårt att finna nya vänner?",
  section2Desc: "Denna artikel ger oss några insikter och lösningar.",
  section3Title: "Vänskapens anatomi och kraft.",
  section3Desc:
    "Författaren ger en kort översikt över de olika typerna av vänskap.",

  navAbout: "Om oss",
  navForBusinesses: "För företag",
  carouselTitle1: "Matcha med nya vänner",
  carouselDesc1:
    "Matchingsystem som hjälper dig att hitta nya vänner utifrån din personlighet.",
  carouselTitle2: "Gör något med din nya vän",
  carouselDesc2: "Få olika erbjudanden utifrån era gemensamma intressen.",
  carouselTitle3: "Utforma en peronslighetsprofil",
  carouselDesc3:
    "Skapa en personlighetsprofil genom våra quiz:ar som vi sedan använder för att hitta folk som matchar med just din personlighet.",
  forBusinessesDesc:
    "Annonsering på vår plattform är ett bra sätt att nå nya kunder och öka din försäljning. " +
    "Vi bedriver riktad marknadsföring, vilket innebär att endast användare med intresse kommer att se din annons. När vi levererar annonser till våra användare har vi " +
    "se till att de är relevanta, intressanta och något de kan göra " +
    "tillsammans. Vi kommer till exempel aldrig att ha annonser för onlineshopping på vår " +
    "plattform. Men alla fysiska företag är välkomna att annonsera hos oss. " +
    "Människor är breda och vi vill se till att vi kan erbjuda " +
    "något för alla. <br><br> Om du är intresserad av att annonsera hos oss, vänligen fyll i formuläret " +
    "nedan så återkommer vi till dig så snart som möjligt. ",
  formCompanyName: "Företagsnamn",
  formOrgNumber: "Organisationsnummer",
  formEmail: "E-post",
  formContactPerson: "Kontaktperson",
  formPhoneNumber: "Telefonnummer",
  formAddress: "Adress",
  formCity: "Stad",
  formZip: "Postnummer",
  formAdInformation: "Annonserings-information",
  formAdInformationPlaceholder:
    "Vad vill ni erbjuda eller uppmärksamma våra användare om?",
  formHomepage: "Hemsida",
  formSend: "Skicka",
};

const englishButton = document.getElementById("english");
const swedishButton = document.getElementById("swedish");

// Function to change content based on selected language
function setLanguage(language) {
  const content = language === "en" ? enContent : svContent;

  document.getElementById("intro-title").textContent = content.introTitle;
  document.getElementById("intro-desc").textContent = content.introDesc;
  document.getElementById("hero-text").textContent = content.heroText;
  document.getElementById("section1-title").textContent = content.section1Title;
  document.getElementById("section1-desc").textContent = content.section1Desc;
  document.getElementById("section2-title").textContent = content.section2Title;
  document.getElementById("section2-desc").textContent = content.section2Desc;
  document.getElementById("section3-title").textContent = content.section3Title;
  document.getElementById("section3-desc").textContent = content.section3Desc;

  document.getElementById("nav-about").textContent = content.navAbout;

  document.getElementById("nav-for-businesses").textContent =
    content.navForBusinesses;
  document.getElementById("carousel-title-1").textContent =
    content.carouselTitle1;
  document.getElementById("carousel-desc-1").textContent =
    content.carouselDesc1;
  document.getElementById("carousel-title-2").textContent =
    content.carouselTitle2;
  document.getElementById("carousel-desc-2").textContent =
    content.carouselDesc2;
  document.getElementById("carousel-title-3").textContent =
    content.carouselTitle3;
  document.getElementById("carousel-desc-3").textContent =
    content.carouselDesc3;
  document.getElementById("for-businesses").textContent =
    content.navForBusinesses;
  document.getElementById("for-businesses-desc").innerHTML =
    content.forBusinessesDesc;
  document.getElementById("form-company-name").textContent =
    content.formCompanyName;
  document.getElementById("form-organization-number").textContent =
    content.formOrgNumber;
  document.getElementById("form-email").textContent = content.formEmail;
  document.getElementById("form-contact-person").textContent =
    content.formContactPerson;
  document.getElementById("form-phonenumber").textContent =
    content.formPhoneNumber;
  document.getElementById("form-address").textContent = content.formAddress;
  document.getElementById("form-city").textContent = content.formCity;
  document.getElementById("form-zip").textContent = content.formZip;
  document.getElementById("form-ad-information").textContent =
    content.formAdInformation;
  document.getElementById("form-ad-information-placeholder").placeholder =
    content.formAdInformationPlaceholder;
  document.getElementById("form-homepage").textContent = content.formHomepage;
  document.getElementById("form-send").textContent = content.formSend;
}

// Event listeners for language change
//englishButton.addEventListener("click", () => setLanguage("en"));
//swedishButton.addEventListener("click", () => setLanguage("sv"));

// Set default language
setLanguage("en");

// Get the dropdown element by its ID
const languageSelect = document.getElementById("languageSelect");

// Add an event listener for the 'change' event
languageSelect.addEventListener("change", (event) => {
  const selectedLanguage = event.target.value; // Get the selected value (en or sv)

  if (selectedLanguage === "en") {
    console.log("English selected");
    // Logic for switching to English
    setLanguage("en");
  } else if (selectedLanguage === "sv") {
    console.log("Swedish selected");
    // Logic for switching to Swedish
    setLanguage("sv");
  }
});
