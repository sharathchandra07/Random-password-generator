function myfunc() {
    event.preventDefault();
    let n = document.getElementById('num').value;
    if (n<=0 || n===undefined) {
        window.alert("Please enter a valid number");
    }
    n=Math.round(n);
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZab1234567890cdefghijklmnopqrstuvwxyz!@#$^&*(){}[]+_-/`~<>,.?:|;';
    let res='';
    for (let i=0;i<n;i++) {
        res+=char.charAt(Math.floor(Math.random()*char.length));
    }
    document.getElementById('result').innerHTML = res;
}