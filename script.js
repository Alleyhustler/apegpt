document.addEventListener("DOMContentLoaded", () => {
    const chatLog = document.getElementById("chat-log");
    const chatInput = document.getElementById("chat-input");
    const sendBtn = document.getElementById("send-btn");

    const fakeReplies = [
        "You can't go wrong with $BONK, the meme king of Solana!",
        "Feeling lucky? $WEN might be your ticket to the moon!",
        "Roll the dice with $DICE, GambleFi just got spicier!",
        "$SEAL is on a roll – get in before the big splash!",
        "Ape into $PONKE and swing through the jungle!",
        "$NPCS is your quirky memecoin for the win!",
        "Looking for that edge? $MOODENG could be your dark horse!",
        "Trust me, $LOCKIN is about to pop off!",
        "Haven't you heard? $BONK is the future!",
        "Wanna go big? $SEAL is your golden ticket!",
        "$WEN? How about right now!",
        "The community is buzzing around $PONKE, time to ape in!",
        "$DICE is about to make it big, are you in?",
        "The charts are loving $NPCS, it's time!",
        "$MOODENG is flying under the radar, grab it while you can!",
        "$LOCKIN is locking in gains for everyone who knows!",
        "Bonk yourself into wealth with $BONK!",
        "The dice are rolling, and $DICE is on fire!",
        "Nothing beats the meme power of $WEN!",
        "Feeling lucky? $SEAL could be your next moonshot!",
        "Get a grip on $PONKE, this one’s wild!",
        "$NPCS to the moon! Don’t miss this meme wave!",
        "What's moodier than $MOODENG? Only its price surge!",
        "Don’t sleep on $LOCKIN – it’s making waves!",
        "Go $BONK or go home!",
        "$WEN to ape in? Right now!",
        "Rumor has it $SEAL is ready to explode!",
        "They say $DICE is lucky for apes like us!",
        "Get in on $NPCS, the meme you didn't know you needed!",
        "You’ll love the vibes on $MOODENG – apes only!",
        "Feeling brave? Lock in gains with $LOCKIN!",
        "$BONK is the sound of profits!",
        "$WEN is what the pros are aping into!",
        "$SEAL's community is strong – join the movement!",
        "Take a gamble with $DICE – you might just win big!",
        "Catch the meme wave with $NPCS!",
        "$MOODENG has the perfect meme vibes for the season!",
        "Lock your gains with $LOCKIN – it’s going places!",
        "Apes go $BONK! Join the movement.",
        "Wondering what to buy? Try $WEN!",
        "$SEAL is slipping into top spots fast!",
        "Ape smarter with $DICE – it’s all or nothing!",
        "For the ultimate meme flex, get some $NPCS!",
        "$MOODENG has entered the chat!",
        "Your gains are safe with $LOCKIN!",
        "$BONK is leading the Solana meme charge!",
        "Not sure? $WEN is the meme king this season!",
        "$SEAL is making waves in the meme world!",
        "The GambleFi world is loving $DICE right now!",
        "$NPCS is soaring up the ranks!",
        "For the bold, there’s $MOODENG!",
        "Serious apes are locking in gains with $LOCKIN!",
        "Go big or go $BONK!",
        "$WEN is when you need it most!",
        "$SEAL's going for gold – don’t miss out!",
        "Ready to roll? $DICE is on fire!",
        "$NPCS is the meme wave we didn’t see coming!",
        "Get moody with $MOODENG!",
        "$LOCKIN has everyone talking – check it out!",
        "Have you bonked today? $BONK is your friend!",
        "Ape into $WEN could be the best move!",
        "$SEAL has the community buzzing!",
        "$DICE is rolling with high stakes – ape in!",
        "Meme coins come and go, but $NPCS is here to stay!",
        "$MOODENG has the meme market on fire!",
        "Don’t sleep on $LOCKIN!",
        "$BONK is the sound of success!",
        "$WEN is when you make your move!",
        "Get in on $SEAL, the hottest meme on Solana!",
        "$DICE could be the gamble of a lifetime!",
        "$NPCS is gaining momentum – ape fast!",
        "$MOODENG's energy is contagious!",
        "It’s time to lock in some $LOCKIN!",
        "If you're not $BONKing, you're not winning!",
        "$WEN's charts look great – now's the time!",
        "$SEAL is racing up the ranks – don’t miss out!",
        "Roll the dice with $DICE and see where it takes you!",
        "Jump on the $NPCS bandwagon before it's too late!",
        "Vibe with $MOODENG – it's making waves!",
        "Lock down your gains with $LOCKIN!",
        "It’s bonk o’clock with $BONK!",
        "$WEN has everyone aping in!",
        "Don't miss out on $SEAL!",
        "Feeling bold? Take a shot with $DICE!",
        "Meme lovers are going crazy for $NPCS!",
        "$MOODENG vibes only!",        
    ];
    
    function getRandomReply() {
        const randomIndex = Math.floor(Math.random() * fakeReplies.length);
        return fakeReplies[randomIndex];
    }

    function appendMessage(message, className) {
        const p = document.createElement("p");
        p.className = className;
        p.innerText = message;
        chatLog.appendChild(p);
        chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the latest message
    }

    sendBtn.addEventListener("click", () => {
        const userInput = chatInput.value.trim();
        if (userInput) {
            appendMessage(userInput, 'user-message');
            chatInput.value = "";

            setTimeout(() => {
                const reply = getRandomReply();
                appendMessage(reply, 'bot-message');
            }, 1000); // Delay for fake "thinking"
        }
    });
});