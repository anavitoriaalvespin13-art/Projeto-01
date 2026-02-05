const input = document.querySelector('.login_input')
const button = document.querySelector('.login_button')
const form = document.querySelector('.login')

/* Isso é um funçao chamada validar input */
const validainput = ({target}) => {
  if (target.value.length > 2){ 
    button. removeAttribute('disabled');
    return;
  }
    button.setAttribute('disabled', '');
 
}
/* Essa função salva o nome digitado pelo ususario */
const handleSubmit = (event) =>{
    event.preventDefault();
    
    localStorage.setItem('player', input.value);
    window.location = 'game.html' /* Isso leva o usuario para outra pagina */
}

input.addEventListener('input', validainput);
form.addEventListener('submit', handleSubmit);

/*  */
