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
      document.querySelector('.stage1').style.display = "none";
   }
   if(localStorage.getItem('login_stage') == 1) {
      document.querySelector('.stage0').style.display = "none";
      document.querySelector('.stage1').style.display = "block";
   }
   if(window.location.href.indexOf(`?`) > -1) {
      document.querySelector('.stage0').style.display = "none";
      document.querySelector('.stage1').style.display = "none";
      document.querySelector('.stage2').style.display = "block";

      let href = window.location.href;
      let href_q = href.indexOf(`?uid=`);
      let href_q_exit = href.indexOf(`&`);
      let id = href.slice(href_q+4,href_q_exit-1);
      href_q = href.indexOf(`&first_name=`);
      href_q_exit = href.indexOf(`&`);
      let first_name = href.slice(href_q+11,href_q_exit-1);
      href_q = href.indexOf(`&last_name=`);
      href_q_exit = href.indexOf(`&`);
      let last_name = href.slice(href_q+10,href_q_exit-1);

      document.querySelector('.stage2').innerHTML += `
      <div>Страница ${id}</div>`;
   }
}
stage();

function submitJoinStart() {
	let form = document.forms.JoinStart;
	let first_name = form.elements.ij_first_name;
	let last_name = form.elements.ij_last_name;
	let id = form.elements.ij_id;
	let password = form.elements.ij_password;

   localStorage.setItem('login_form_first_name', `${first_name}`);
   localStorage.setItem('login_form_last_name', `${last_name}`);
   localStorage.setItem('login_form_id', `${id}`);
   localStorage.setItem('login_form_password', `${password}`);
   localStorage.setItem('login_form-data', `${Math.round(new Date().getTime()/1000.0)}`);
   
   localStorage.setItem('login_stage', `1`);
   stage();
}