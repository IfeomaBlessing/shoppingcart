 let OpenMenu = document.getElementById('open-menu');
 let closeMenu = document.getElementById('close-menu');
 let navlist = document.getElementById('nav-list');
 let bigImage = document.querySelector('.big-img');
 let smallImage = document.querySelectorAll('.sm-img');

 OpenMenu.addEventListener('click', function(){
    closeMenu.style.display = 'block';
    OpenMenu.style.display = 'none';
    navlist.classList.toggle("active");
 })

 closeMenu.addEventListener('click', function(){
    closeMenu.style.display = 'none';
    OpenMenu.style.display = 'block';
    navlist.classList.toggle("active");
 })

 navlist.addEventListener('click', function(){
    closeMenu.style.display = 'none';
    OpenMenu.style.display = 'block';
    navlist.classList.toggle("active");
 })

smallImage[0].onclick=function(){
   bigImage.src = smallImage[0].src;
}

smallImage[1].onclick=function(){
   bigImage.src = smallImage[1].src;
}

smallImage[2].onclick=function(){
   bigImage.src = smallImage[2].src;
}


function sendEmail(){
   Email.send({
       SecureToken : "4c48e481-fe8b-45ce-b5e1-7a1ff45b1d1f",
       To :'ifeoma.jib@gmail.com',
       From : "ifeoma.jib@gmail.com",
       Subject : "Customers Messages",
       Body : "Name: " + document.getElementById("name").value  
       + "<br> email: " + document.getElementById("email").value  
       + "<br> subject: " + document.getElementById("subject").value  
       + "<br> msg: " + document.getElementById("msg").value  
   }).then(
     message => alert("message sent successfully")
   );
}



