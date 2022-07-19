const theBible = [
    {
        passage: 'If the world hates you, you know that it hated Me before it hated you.',
        from: 'John 15:18'
    },
    {
        passage: 'Then I said, "I will not make mention of Him, Nor speak anymore in His name." But His word was in my heart like a burning fire Shut up in my bones. I was weary of holding it back, And I could not.',
        from: 'Jeremiah 20:9'
    },
    {
        passage: 'My grace is sufficient for you, for My strength is made perfect in weakness.',
        from: 'Corinthians 12:9'
    }
];

const passage = document.querySelector("#passage");
const from = document.querySelector("#from");
const ranBible = Math.floor(Math.random() * theBible.length);

passage.innerHTML =`${theBible[ranBible].passage}`;
from.innerHTML = `${theBible[ranBible].from}`;
