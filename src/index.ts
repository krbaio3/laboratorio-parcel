console.log('entra');

const index = () => {
  const text = document.getElementsByClassName('text');
  const textSayHello = text[0].getElementsByClassName('text__say-hello');
  textSayHello[0].innerHTML = 'Hello Word';
};

index();
