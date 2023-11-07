window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
  });
  
  const navToggler = document.querySelector(".navbar__toggler");
  const navTogglerBurger = document.querySelector(".navbar__toggler-burger");
  const navBar = document.querySelector(".navbar__menu");
  
  navToggler.addEventListener("click", () => {
    navToggler.classList.toggle("open");
    navTogglerBurger.classList.toggle("open");
    navBar.classList.toggle("open");
  });
  
  
  window.addEventListener("mouseup", function (e) {
    if (navBar.classList.contains("open")) {
      navBar.classList.remove("open");
      navTogglerBurger.classList.remove("open");
    }
    
  });
  
  //! Temperature Converter
  
  const errorMsg = document.querySelector(".errorMsg");
  const tempFahr = document.querySelector("#tempChoice2");
  const tempCels = document.querySelector("#tempChoice1");
  const displayResult = document.querySelector(".content-display");
  const convertBtn = document.querySelector(".tempBtn");
  const cupBtn = document.querySelector(".cupBtn");
  
  // !Temp Converter
  convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const tempInput = document.querySelector("#temp").value;
  
    if (tempInput === "") {
      errorMsg.classList.add("active");
      displayResult.classList.remove("active");
      errorMsg.innerText = "Please enter a number";
    } else {
      if ((errorMsg.innerText = "Please enter a number"))
          errorMsg.classList.remove("active");
        if (tempFahr.checked) {
           let tempConversion = parseInt((tempInput * 9 / 5) + 32 );
           displayResult.classList.add("active");
           displayResult.innerText = tempConversion;
        } else {
            let tempConversion = ( (parseInt(tempInput) - 32) * 5/9).toFixed(2);
            displayResult.classList.add("active");
            displayResult.innerText = tempConversion;
            
        }
        
    }
  });
  
  //! Text Converter
  
  const textToConvert = document.getElementById('text');
  const textBtn = document.querySelector('.textBtn');
  
  
  textBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const textConverted = textToConvert.value.toLowerCase();
    textToConvert.value = '';
    textToConvert.value = textConverted;
  
  
    
  
  })
  

  
  const scary = document.querySelectorAll('.content-visual-item');
  const scaryDisplay = document.querySelector('.spookyText');
  
  console.log(scaryDisplay);
   const files = ['scarymovie.png','jennifercheck.png','badguybeast.png','woodsman.png','emily.png','scaryman.png','grimbetter.png','chuck.png','hoteltra.png'];
  scary.forEach((el) => {
    el.addEventListener('click', () => {
      scaryDisplay.innerText = '';

      
      document.querySelector('.questionn img');
      const scaryQuest = document.querySelector(".questionn img");
      let randomFile = Math.floor(Math.random() * files.length);
      const fileName = `./img/${files[randomFile]}`
      console.log(fileName);
      scaryQuest.src=fileName

      scaryQuest.style.width = '300px'; 
    scaryQuest.style.height = '450px'; 

    scaryQuest.src = fileName;
  
    })
  });


