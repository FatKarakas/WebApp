function toplama(x,y)
{
    return x+y;
}
function cikarma(x,y)
{
    return x-y;
}
function carpma(x,y)
{
    return x*y;
}
function bolme(x,y)
{
    return x/y;
}
function tekCift(x)
{
    if(x%2==0)
    {
      return true;
    }
    else
    {
        return false;
    }
}   
function emainKullanimi(email)
{
    if(email.includes("@"))
    {
      return true;
    }
    else{
        return false;
    }
}
console.log(toplama(5,10));
console.log(cikarma(5,10));
console.log(carpma(5,10));
console.log(bolme(5,10));
console.log(tekCift(5));
console.log(emainKullanimi("deneme123@gmail.com"));
