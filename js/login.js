// localStorage.clear();

if(localStorage.getItem('login_data') == null) {
   localStorage.setItem('login_data', `${Math.round(new Date().getTime()/1000.0)}`);
   localStorage.setItem('login_stage', `0`);
   localStorage.setItem('login_form_first_name', ``);
   localStorage.setItem('login_form_last_name', ``);
   localStorage.setItem('login_form_photo', ``);
   localStorage.setItem('login_form_id', ``);
   localStorage.setItem('login_form_password', ``);
}

function stage() {
   if(localStorage.getItem('login_stage') == 0) {
      document.title = "Регистрация";
      document.querySelector('.stage0').style.display = "block";
      document.querySelector('.stage0-form').style.display = "none";
      document.querySelector('.stage0-button').style.display = "none";
      document.querySelector('.stage1').style.display = "none";
      document.querySelector('.stage2').style.display = "none";

      if(window.location.href.indexOf(`?`) > -1) {
         href = decodeURI(window.location.href);
         href_q = href.indexOf(`uid=`);
         href_q_exit = href.indexOf(`&f`);
         id = href.slice(href_q+4,href_q_exit);

         href = href.slice(href_q_exit,href.length);
         href_q = href.indexOf(`&first_name=`);
         href_q_exit = href.indexOf(`&l`);
         first_name = href.slice(href_q+12,href_q_exit);

         href = href.slice(href_q_exit,href.length);
         href_q = href.indexOf(`&last_name=`);
         href_q_exit = href.indexOf(`&p`);
         last_name = href.slice(href_q+11,href_q_exit);

         href = href.slice(href_q_exit,href.length);
         href_q = href.indexOf(`&photo_rec=`);
         photo = href.slice(href_q+11,href.length);

         localStorage.setItem('login_form_first_name', `${first_name}`);
         localStorage.setItem('login_form_last_name', `${last_name}`);
         localStorage.setItem('login_form_photo', `${photo}`);
         localStorage.setItem('login_form_id', `${id}`);
   
         // document.querySelector('.stage2').innerHTML += `<div>Страница ${id} и ${first_name} ${last_name}</div>`;
         document.querySelector('.ava').innerHTML += `<img src="${photo}"></img>`;
         document.getElementById('stage0-form-id').value = id;
         document.querySelector('.stage0-form').style.display = "block";
         document.querySelector('.stage0-button').style.display = "block";
      }
   }
   if(localStorage.getItem('login_stage') == 1) {
      document.title = "Завершение регистрации";
      document.querySelector('.stage0').style.display = "none";
      document.querySelector('.stage1').style.display = "block";
      document.querySelector('.stage2').style.display = "none";
   }
   if(localStorage.getItem('login_stage') == 2) {
      document.title = "Профиль";
      document.querySelector('.stage0').style.display = "none";
      document.querySelector('.stage1').style.display = "none";

      document.getElementById('stage0-form-2-first').value = localStorage.getItem('login_form_first_name');
      document.getElementById('stage0-form-2-last').value = localStorage.getItem('login_form_last_name');
      document.getElementById('stage0-form-2-id').value = localStorage.getItem('login_form_id');

      document.querySelector('.stage2').style.display = "block";
   }

   let auth_height = document.querySelector('.auth');
   auth_height = getComputedStyle(auth_height);
   let auth_wigth = Math.round((parseInt(auth_height.width))/2);
   auth_height = Math.round((parseInt(auth_height.height))/2);
   document.querySelector('.auth').style.margin = `-${auth_height}px 0 0 -${auth_wigth}px`;
}
stage();

function submitJoinStart() {
	let form = document.forms.JoinStart;
	let id = form.elements.ij_id.value;
	let password = form.elements.ij_password.value;

   let pass = Math.round(Number(id/2));
   let pass_string = `${pass}`;
   let pass_block = Number(((new Date().getMonth())+1) * new Date().getDate());
   let pass_id = 0;
   for(let i in pass_string) {
      pass_id += Number(pass_string[i]);
   }
   pass_block = Math.round(pass_block);
   pass_block = Number(`${pass_block}${pass_id}`);
   if(new Date().getDate() % 2 == 0) {
      pass_block += new Date().getFullYear();
      pass_block -= (new Date().getDate()*2);
   } else {
      pass_block += (((new Date().getMonth())+1)*500);
      pass_block -= new Date().getFullYear();
   }
   console.log(pass_block);
   if(Number(password) !== Number(pass_block)) {
      document.querySelector('.p').innerHTML = `Пароль введён не верно.`;
      document.querySelector('.p').style.display = "block";
      setTimeout(`window.location = "login.html";`, 500);
      return;
   } else {
      document.querySelector('.p').style.display = "none";
   }
   
   localStorage.setItem('login_stage', `1`);
   location.href = "login.html";
}

function submitJoinStop() {
   localStorage.setItem('login_stage', `2`);
   stage();
}

function submitExit() {
   localStorage.clear();
   location.href = "login.html";
}

let JoinStop = document.getElementById('ij_submit1');
JoinStop.onclick = submitJoinStop;
let Exit = document.getElementById('ij_submit2');
Exit.onclick = submitExit;