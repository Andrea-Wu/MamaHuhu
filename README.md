Welcome to my webapp!

The name of this app "MaMaHuHu" comes from NYTimes CN article I was reading
when this idea came to me. 

This app will make my Chinese learning more efficient. My goal is to
consolidate my current learning methodology into one app, so that I no longer
need like 5 different docs & apps open at the same time. Eventually I'll be
able to collect metrics on my learning speed, fluency level, etc.

My current methodology is as follows:
*    Find a NYTimes article and attempt to read it.
*    Use Google Translate to tokenize the characters into words.
*    Use ArchChinese to translate words (Google Translate is sometimes not
     specific enough, doesn't tell me part of speech, is wrong about tones)
*    Self-testing of how well I memorized new words.
*    Review old words.
*    Use Google Translate's CN -> EN while covering up the chinese characters,
     to make sure that I can write the Chinese characters given the PinYin.

Milestone #1: get a functional webapp up, with minimal functionality.
*    Input text box
*    Input text should be parseable using Chinese word Segmentation API.
*    Store the number of times a word has been encountered across all inputs.

Challenges for milestone #1
*    I don't really know webdev, and I'll need to choose a stack. For now, 
     I have decided on a react.js frontend and a node.js/express backend, and
     a MySQL db.

Milestone #2: 
*    Flashcard system. This can be a simple pictogram -> definition
     mapping for now.

Milestone #3:
*    "Spaced repetition" algorithm for the flashcards. I'll probably just copy
     how Anki does it.

Milestone #4:
*    Create a interface for reading the text that's inputed. Integrate the
     reading experience into the "spaced repetition" algorithm- that is, each
     word in the input text becomes a flashcard, and as I read the text, I
     record whether or not I correctly read each word.

Milestone #N:
*    Data analytics- I want to quantify my reading fluency!
     I can begin aggregating data early as milestone #1, by tracking
     how many words I've seen vs words I have never seen.
