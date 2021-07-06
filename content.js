// Notification body.
console.log('chuoi18-ok');

if (document.querySelector('body').style.overflow === 'hidden') {
    document.querySelector('body').style = 'none';
    document.querySelector('#alphaBlind')?.remove();
    document.querySelector('#loginLayer')?.remove();
}
