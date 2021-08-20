var arrayOfQuotes = [{
        'author': 'Jim Rohn',
        'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {
        'author': 'Epictetus',
        'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {
        'author': 'Frank Sinatra',
        'quote': 'The best revenge is massive success.'
    },
    {
        'author': 'Wayne Gretzy',
        'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {
        'author': 'Nelson Mandela',
        'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {
        'author': '  Albert Einstein ',
        'quote': ' Two things are infinite: the universe and human stupidity; and Im not sure about the universe. '
    },

    {
        'author': 'Elbert Hubbard',
        'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {
        'author': ' Oscar Wilde ',
        'quote': ' Be yourself; everyone else is already taken. '
    },
    {
        'author': ' Marilyn Monroe ',
        'quote': ' Im selfish impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best. '
    },
    {
        'author': '  Frank Zappa ',
        'quote': ' So many books, so little time. '
    },
    {
        'author': '  Marcus Tullius Cicero ',
        'quote': ' A room without books is like a body without a soul. '
    },
    {
        'author': '  Bernard M. Baruch ',
        'quote': ' Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind. '
    },
    {
        'author': '  William W. Purkey ',
        'quote': 'You have gotta dance like there Is nobody watching Love like you WIll never be hurt Sing like there is nobody listening, And live like it is heaven on earth. '
    },
    {
        'author': '  Dr. Seuss ',
        'quote': ' You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams. '
    },


];

function generateQuote() {
    var random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `'${arrayOfQuotes[random].author}'`;

}