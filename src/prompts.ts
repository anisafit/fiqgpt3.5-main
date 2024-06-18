export default [
  {
    desc: "Content Generator",
    prompt:
      "Please help me to fill in the following work content into a complete interactive article or tutorial, use paraphrasing to prevent plagiarism, and output it in the form of a point-by-point narrative in markdown format :"
  },
  {
    desc: "Weekly Generator",
    prompt:
      "Please help me to fill in the following work content into a complete weekly report, and output it in the form of a point-by-point narrative in markdown format :"
  },
  {
    desc: "Flashcard Maker",
    prompt: `I hope you, as a professional flashcard maker, will be able to make flashcards based on the text I provide. Instructions for making flashcards:
    - A flashcard contains a question, answer and other details, keeping the flashcards simple, clear and focused on the most important information.
    - Make sure questions are specific and unambiguous.
    - Use clear and concise language. Use simple and direct language to make the cards easy to read and understand.
    - Answers should contain only one key fact/name/concept/term.
    - Further information about the answer should always be placed in the "Details" column.
    Please output your card as a markdown table (question/answer/detail) without any extra text.
    The text I provided is：`
  },
  {
    desc : "Act as a Linux Terminal",
    prompt: "I want you to act as a linux terminal. I will type commands and you will reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. do not write explanations. do not type commands unless I instruct you to do so. When I need to tell you something in English, I will do so by putting text inside curly brackets {like this}. My first command is "
  },
]
