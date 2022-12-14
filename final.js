
  let naveBar = document.querySelector('.toggle-buton');
  let changeList = document.querySelector('.centre-head');
  let orNav = document.querySelector('.the-header');

  naveBar.addEventListener('click', function(){
      changeList.classList.toggle('activebar')

      naveBar.classList.toggle('burger')
      orNav.classList.toggle('activebg')
  })

let navbarz = document.querySelector('[head-data]');

            window.addEventListener('scroll', function(){
            if (window.scrollY > 20){
                navbarz.classList.add('enables')
            } else{
                navbarz.classList.remove('enables')
            }
            });


let buttons = document.querySelectorAll('[linkar]');
        let defaulty = document.querySelector('.container')
		buttons.forEach(button => {
			button.addEventListener('click', function(){
				buttons.forEach(btn => btn.classList.remove('activelm'));
				this.classList.add('activelm');
			})
		});

       
      
       let title= document.querySelector('#con-tit')
       let midCont = document.querySelector('#con-mid')
       let midBot= document.querySelector('#con-bot')

       

        let tryIt = document.querySelectorAll('[linkar]').length
        for ( i= 0; i<tryIt; i++ ){
          document.querySelectorAll('[linkar]')[i].addEventListener('click', theName);
        }
         
    
        function theName (){
                let theclick = this.id
        switch (theclick) {
            case 'but':
                // this.style.backgroundColor='red';
                document.querySelector('.fif-image').src='images/resume2.jpg'
                title.innerHTML = 'Work in company Generators'
                midCont.innerHTML = 'Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla inpariatur excepteur sint occaecat cupidatat non proiden oluptate velit esse cillum dolore eu fugiat nulla sunt in culpa qui officia inpariatur dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
                midBot.innerHTML= 'Duis aute irure dolor in reprehenderit voluptate cillum dolore eu fugiat nulla excepteur sinte occaecat cupidata non proident oluptate velit occaecat cupidatat non enim ad minim veniam.'

                break;
            
            case 'buts':
                // this.style.backgroundColor='blue';
                document.querySelector('.fif-image').src='images/of7.jpg'
                title.innerText= 'Work on Front-end Developer';
                midCont.innerHTML = 'Dolor id atque accusantium ut impedit provident soluta voluptatem Veritatis ipsam neque mollitia vero suscipit odit a laborum doloremque. Consectetur pariatur fugiat ipsam aperiam maiores. Nisi in dignissimos debitis expedita asperiores delectus vitae corporis. Elit voluptatibus quas ullam tenetur provident.'
                midBot.innerHTML= 'Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis quis nostrud exercitation ullamco laboris eveniet provident neque Ea ratione nostrud non minus ipsum Sunt minima.'
                break;
            case 'butz':
                // this.style.backgroundColor='blue';
                document.querySelector('.fif-image').src='images/of6.jpg'
                title.innerText= 'Work as Junior Developer';
                midCont.innerHTML = 'Amet asper natur delectus maxime ducimus piece similique Ratione asperiores corporis provident aut libero. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from looked up one of the more obscure Latin words, and going through the cites of the word in class.'
                midBot.innerHTML= 'Ratione delectus lorem minus ipsa architecto. Saepe officiis sint ipsa adipisci. Ipsum est aliquid eos saepe. Dolorum aperiam cupiditate labore vero deleniti unde deserunt neque voluptas.'
                break;
            case 'butx':
                // this.style.backgroundColor='blue';
                document.querySelector('.fif-image').src='images/of4.jpg'
                title.innerText= 'Work as Senior Developer';
                midCont.innerHTML = 'Sed ut perspi ciatis unde omnis iste natus error sit volup tatem accus antium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archi tecto beatae vitae dicta sunt explicabo. Nemo enim ipsam volu ptatem quia voluptas sit aspernatur aut odit aut fugit.'
                midBot.innerHTML= 'It is a long establish fact that a reader will be distracted by the readabled content of a page when looking at its layout. non proident oluptate but also the leap into electronic type setting.'
                break;
        
            default:
                break;
        } };

        let progressBar = document.querySelector(".circular-progress");
        let valueContainer = document.querySelector(".value-container");

        let progressValue = 0;
        let progressEndValue = 65;
        let speed = 50;

        let progress = setInterval(() => {
        progressValue++;
        valueContainer.textContent = `${progressValue}%`;
        progressBar.style.background = `conic-gradient(
            #FACA22 ${progressValue * 3.6}deg,
            #29282E ${progressValue * 3.6}deg
        )`;
        if (progressValue == progressEndValue) {
            clearInterval(progress);
        }
        }, speed);

        let progressBars = document.querySelector(".circular-progresses");
        let valueContainers = document.querySelector(".value-containers");

        let progressValues = 0;
        let progressEndValues = 70;
        let speeds = 50;

        let progresses = setInterval(() => {
        progressValues++;
        valueContainers.textContent = `${progressValues}%`;
        progressBars.style.background = `conic-gradient(
            #FACA22 ${progressValues * 3.6}deg,
            #29282E ${progressValues * 3.6}deg
        )`;
        if (progressValues == progressEndValues) {
            clearInterval(progresses);
        }
        }, speeds);

        let progressBarx = document.querySelector("#force");
        let valueContainerx = document.querySelector("#make");

        let progressValuex = 0;
        let progressEndValuex = 80;
        let speedx = 50;

        let progressex = setInterval(() => {
        progressValuex++;
        valueContainerx.textContent = `${progressValuex}%`;
        progressBarx.style.background = `conic-gradient(
            #FACA22 ${progressValuex * 3.6}deg,
            #29282E ${progressValuex * 3.6}deg
        )`;
        if (progressValuex == progressEndValuex) {
            clearInterval(progressex);
        }
        }, speedx);

        const buttonz = document.querySelectorAll("[data-carousel-button]")

            buttonz.forEach(button => { button.addEventListener("click", () => { 
                const offset = button.dataset.carouselButton === "next" ? 1 : -1 
                const slides = button 
                .closest("[data-carousel]") 
                .querySelector("[data-slides]") 

            const activeSlide = slides.querySelector("[data-active]") 

            let newIndex = [...slides.children].indexOf(activeSlide) + offset
            if (newIndex < 0) newIndex = slides.children.length - 1 
            if (newIndex >= slides.children.length) newIndex = 0 
           
            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active 
            }) 
            });

            let slideIndexx = 0;
showSlidez();

        function showSlidez() {
        let i;
        let slidez = document.getElementsByClassName("theSlidex");
        let dotz = document.getElementsByClassName("dot");
        for (i = 0; i < slidez.length; i++) {
            slidez[i].style.display = "none";
        }
        slideIndexx++;
        if (slideIndexx > slidez.length) {slideIndexx = 1}
        for (i = 0; i < dotz.length; i++) {
            dotz[i].className = dotz[i].className.replace(" active", "");
        }
        slidez[slideIndexx-1].style.display = "block";
        dotz[slideIndexx-1].className += " active";
        setTimeout(showSlidez, 2500); // Change image every 2 seconds
        };


let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
        showSlides(slideIndex += n);
        }

        function currentSlide(n) {
        showSlides(slideIndex = n);
        }

        function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        };
