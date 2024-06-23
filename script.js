const username = prompt("Please enter your name");
if (!username){
    document.getElementById('name').innerHTML = 'Guest';
}
else{
    document.getElementById('name').innerHTML = username;
}