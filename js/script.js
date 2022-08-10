let form = document.querySelector('form');
const defaultValue = 'no submission';

form.addEventListener('submit', submitHandler);
form.addEventListener('reset', resetHandler);

function resetHandler(event) {
  let preThanks = document.querySelector('#thankyou');
  if (preThanks != null) {
    form.removeChild(preThanks);
  }
}

function submitHandler(event) {
  const username = form.elements.username;
  const usernameValue =
    username.value.length > 0 ? username.value : defaultValue;

  const email = form.elements.email;
  const emailValue = email.value.length > 0 ? email.value : defaultValue;

  const message = form.elements.message;
  const messageValue = message.value.length > 0 ? message.value : defaultValue;

  if (usernameValue === defaultValue || emailValue === defaultValue || messageValue === defaultValue) 
  {
    console.warn('You must fill all fields to submit this form');
    event.preventDefault();
  } else {
    console.group('========= Form Submission ===========');
    console.log('Name: ' + usernameValue);
    console.log('Email: ' + emailValue);
    console.log('Message: ' + messageValue);
    console.groupEnd();

    let preThanks = document.querySelector('#thankyou');
    if (preThanks != null) {
      return;
    }
    let thankyou = document.createElement('aside');
    thankyou.textContent = 'Thanks for your Message!';
    thankyou.id = 'thankyou';
    thankyou.style.paddingTop = '15px';
    thankyou.style.paddingBottom = '0px';
    thankyou.style.fontWeight = 'bold';
    thankyou.className = 'brand';
    form.append(thankyou);
  }

  event.preventDefault();
}

