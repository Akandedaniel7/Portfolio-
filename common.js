/* =========== BACKGROUND HEADER  ========= */
function scrollHeader(){
  const header = document.getElementById('header');

if (this.scrollY >= 50) header.classList.add('scroll-header');
else header.classList.remove('scroll-header');
}


window.addEventListener("scroll", scrollHeader);

 /* =========== CONTACT FORM  ========= */
 const contactMe = document.getElementById('contact-form'),
 nameMe = document.getElementById('contact-name'),
 emailMe = document.getElementById('contact-email'),
 messageMe = document.getElementById('message'),
 contactMessage = document.getElementById('contact-message');

 const sendEmail = (e) => {
 	e.preventDefault();

 	if (contactMe.value === "" || emailMe.value === ""|| messageMe.value === "" ) {
 		contactMessage.classList.remove('color-light');
 		contactMessage.classList.add('color-dark');

 		contactMessage.textContent = 'Write all the input fields';
 	}else{
 		emailjs
 		.sendForm('service_chjjpwm', 
 			'template_xytd55m',
 			 '#contact-form', 
 			 'NaW_rbPGSaRfoK4kr')
 		.then(
 			() =>{
 			contactMessage.classList.add('color-light');
 			contactMessage.textContent = 'Message sent';

 			setTimeout(() =>{
 				contactMessage.textContent = '';
 			}, 5000);
 		},
 		 (error) => {
 			alert('OOPs! SOMETHING WENT WRONG...', error);
 		}
 		);
 		nameMe.value = '';
 		emailMe.value = '';
 		messageMe.value = '';
 	}
 };

 contactMe.addEventListener('submit', sendEmail);