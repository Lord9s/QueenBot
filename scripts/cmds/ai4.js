const axios = require('axios');

const Prefixes = [
  'ai',
  'anya',
  'perfect',
  '+ai',
  'hi',
  '.ai',
  'ask',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {

      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply(" (•̀ᴗ•́)و");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;


    await message.reply({ body: `𝑳𝑶𝑹𝑫 𝑲𝑰𝑵𝑮 𝑨𝑰
______________________________  
${answer}
𝑩𝒐𝒕 𝒐𝒘𝒏𝒆𝒓 
https://m.me/lordjaydenSmith.1`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
