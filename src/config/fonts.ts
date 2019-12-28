import FontFaceObserver from 'fontfaceobserver';

export default () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Lato:400,700';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const lato = new FontFaceObserver('Lato');

  lato.load().then(() => {
    document.documentElement.classList.add('lato');
  });
};
