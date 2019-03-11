//adding animation delay for code generator
let codetext=[...document.querySelectorAll(".code-window p")];
let animdelay=0;
codetext.forEach(a => {
  a.style.animationDelay=`${animdelay}s`;
  animdelay+=7;
});
