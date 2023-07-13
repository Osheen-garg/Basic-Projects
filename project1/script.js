const qoute =document.getElementById("qoute");
const person=document.getElementById("person");
const newquote=document.getElementById("newquote");

const quotes=[{
    qoute:"The best way to find yourself is to lose yourself in the service of others.",
    person:'Mahatma Gandhi'
},{
    qoute:"Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    person:'Roy T. Bennett'
},{
    qoute:"“Cry. Forgive. Learn. Move on. Let your tears water the seeds of your future happiness.”",
    person:'Steve Maraboli'
},{
    qoute:"“Lack of direction, not lack of time, is the problem. We all have twenty-four hour days.” ",
    person:'Zig Ziglar'
},{
    qoute:"“The only way of discovering the limits of the possible is to venture a little way past them into the impossible.”",
    person:'Arthur C. Clarke'
},{
    qoute:"“Learn the rules like a pro, so you can break them like an artist.”",
    person:' Pablo Picasso'
},{
    qoute:"“Change the way you look at things and the things you look at change.”",
    person:'Wayne W. Dyer'
},{
    qoute:"“At the end of the day, let there be no excuses, no explanations, no regrets.”",
    person:'Steve Maraboli'
},{
    qoute:"“Whatever the mind can conceive and believe, it can achieve.”",
    person:'Napoleon'
},{
    qoute:"“Although the world is full of suffering, it is full also of the overcoming of it.”",
    person:'Helen Keller'
},{
    qoute:"“Circumstances are the rulers of the weak; they are but the instruments of the wise.”",
    person:'Samuel Lover'
},{
    qoute:"“Action may not always bring happiness, but there is no happiness without action. ”",
    person:'William James'
},{
    qoute:"“You are the average of the five people you spend the most time with.”",
    person:'Jim Rohn'
},{
    qoute:"“I write for the same reason I breathe - because if I didn't, I would die.”",
    person:'Isaac Asimov'
},{
    qoute:"“You have to accept whatever comes, and the only important thing is that you meet it with the best you have to give.”",
    person:'Eleanor Roosevelt'
},{
    qoute:"T“Only he who attempts the absurd is capable of achieving the impossible.”",
    person:'Miguel de Unamuno'
},{
    qoute:"“In the end, you have to choose whether or not to trust someone.”",
    person:'Sophie Kinsella'
},{
    qoute:"“Don't fear failure. — Not failure, but low aim, is the crime. In great attempts it is glorious even to fail.”",
    person:'Bruce Lee'
},{
    qoute:"“I cannot let the fear of the past color the future.”",
    person:'Julie Kagawa'
}]

newquote.addEventListener("click",function(){
    let random=Math.floor(Math.random()*quotes.length);
    console.log(random);
    qoute.innerText=quotes[random].qoute;
    person.innerText=quotes[random].person;
});