function f1() {
    console.log('Teste f1');
}

const f2 = function(){
    console.log('Teste f2');
}

const f3 = () => {
    console.log('Teste f3');
}

function f4(){
    const ob = {"nome":"Billy", "idade":45,"score":870};
    const {nome,score} = ob;
    console.log(nome);
    console.log(score);
}

//module.exports = f3;
module.exports = {f1,f2,f3,f4};