localStorage.clear();

if(localStorage.getItem('login_data') == null) {
   localStorage.setItem('login_data', `${Math.round(new Date().getTime()/1000.0)}`);
   localStorage.setItem('login_stage', `0`);
   localStorage.setItem('login_form_first_name', ``);
   localStorage.setItem('login_form_last_name', ``);
   localStorage.setItem('login_form_id', ``);
   localStorage.setItem('login_form_password', ``);
   localStorage.setItem('login_form-data', ``);
}

function stage() {
   if(localStorage.getItem('login_stage') == 0) {
      document.querySelector('.stage0').style.display = "block";
      document.querySelector('.stage0-form').style.display = "none";
      document.querySelector('.stage0-button').style.display = "none";
      document.querySelector('.stage1').style.display = "none";

      if(window.location.href.indexOf(`?`) > -1) {
         let href = window.location.href;
         let href_q = href.indexOf(`uid=`);
         let href_q_exit = href.indexOf(`&`);
         let id = href.slice(href_q+4,href_q_exit-1);
         href_q = href.indexOf(`&first_name=`);
         href_q_exit = href.indexOf(`&`);
         let first_name = href.slice(href_q+12,href_q_exit-1);
         href_q = href.indexOf(`&last_name=`);
         href_q_exit = href.indexOf(`&`);
         let last_name = href.slice(href_q+11,href_q_exit-1);
   
         // document.querySelector('.stage2').innerHTML += `<div>Страница ${id} и ${first_name} ${last_name}</div>`;
         document.getElementById('stage0-form-id').value = id;
         document.querySelector('.stage0-form').style.display = "block";
         document.querySelector('.stage0-button').style.display = "block";
      }
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
      setTimeout(`window.location = "login.html";`, 50000);
      return;
   } else {
      document.querySelector('.p').innerHTML = `Пароль введён верно.`;
      document.querySelector('.p').style.display = "block";
      // document.querySelector('.p').style.display = "none";
   }

   localStorage.setItem('login_form_id', `${id}`);
   localStorage.setItem('login_form_password', `${password}`);
   localStorage.setItem('login_form-data', `${Math.round(new Date().getTime()/1000.0)}`);
   
   localStorage.setItem('login_stage', `1`);
   stage();
}