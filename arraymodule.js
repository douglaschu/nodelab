const hello = "Hi, I'm actor Troy McClure. You might remember me from ";
//every quote starts the same so I stored it in a string

//The array of unique quote endings
let movies = [
    `educational films as "Lead Paint: Delicious But Deadly," and "Here Comes the Metric System!"`,
    `fishing films as 'Cast Out' or 'The Reel Deal.'`,
    `such films as "The Sensual Adventures of Hercules" and "Dial 'M' for Murderousness".`,
    `such films as "'P' is for Psycho" and "The President's Neck is Missing".`,
    `such films as "Today We Kill, Tomorrow We Die" and "Gladys, the Groovy Mule".`,
    `such films as "The Greatest Story Ever Hula-ed" and "They Came to Burgle Carnegie Hall".`,
    `such Fox Network Specials as "Alien Nose Job" and "The Five Fabulous Weeks of the Chevy Chase Show".`,
    `such self-help videos as "Smoke Yourself Thin" and "Get Some Confidence, Stupid!"`,
    `such nature films as "Earwigs: Ewwww" and "Man vs. Nature: The Road to Victory".`,
    `such celebrity funerals as "Andre The Giant, We Hardly Knew Ye" and "Shemp Howard, Today We Mourn A Stooge".`,
    `such telethons as "Out With Gout '88" and "Let's Save Tony Orlando's House".`,
    `such cartoons as "Christmas Ape" and "Christmas Ape goes to Summer Camp".`,
    `such driver's ed films as "Alice's Adventures through the Windshield Glass" and "The Decapitation of Larry Leadfoot".`,
    `such TV spinoffs as "Son of Sanford and Son" and "After Mannix".`,
    `such instructional videos as "Mothballing Your Battleship" and "Dig Your Own Grave and Save".`,
    `such public service videos as "Designated Drivers, the Lifesaving Nerds" and "Phony Tornado Alarms Reduce Readiness".`,
    `such medical films as "Alice Doesn't Live Anymore" and "Mommy, What's Wrong With That Man's Face?".`,
    `such automated information kiosks as "Welcome to Springfield Airport" and "Where's Nordstrom?".`,
    `such Do-It-Yourself home videos such as "The half-assed approach to foundation repair."`,
]

//map function used to go through each element in array and concatenate each one
quotes = movies.map(i => hello + i);
console.log(quotes);

//export array as module
module.exports = quotes;

//form coding
    //create for loop and concatenate 'hello' + 'rest of line'
    //used map function