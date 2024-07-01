const gp= require("generate-password")
const randompasword = () =>{
    var pw=gp.generate({
        length:15,
        symbols:true,
        uppercase:true,
        numbers:true,
        lowercase:true,
        exclude:"hamio12]{"
    })
    console.log(pw)
}
randompasword()