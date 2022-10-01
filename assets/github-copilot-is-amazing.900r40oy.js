import{d as a,o as n,c as l,w as t,k as r,a as e,b as o}from"./index.1nk7ancw.js";const c="/blog/copilot-account.webp",h="/blog/copilot-schema.webp",p=e("div",{class:"markdown-body"},[e("p",null,"GitHub Copilot is an amazing tool that can autocomplete code snippets for you. In this article I share my experience using GitHub Copilot: the upsides, the downsides, and what I think it could become."),e("h2",{id:"what-is-github-copilot%3F",tabindex:"-1"},"What is GitHub Copilot?"),e("p",null,"GitHub Copilot basically completes sections of code for you. There are other autocompleters, but they\u2019ll only complete a single variable or function name, whereas Copilot completes the entire line. Here\u2019s an example:"),e("p",null,[e("img",{src:c,alt:"An example of Copilot in action"})]),e("p",null,[o("The picture above shows me writing a "),e("code",{class:""},"getPassword"),o(" function for the account system. Once I wrote the function signature, Copilot suggested a function body, which I got completely correct. You can also see the previously written "),e("code",{class:""},"getUsername"),o(" function above, which Copilot probably based its suggestion on.")]),e("p",null,"Let\u2019s look at another example."),e("p",null,[e("img",{src:h,alt:"Another example of Copilot"})]),e("p",null,[o("In this picture it\u2019s completing some stuff from a custom schema system into a Fastify schema. Copilot completes the entire line of code and even recognizes that it needs to change the name of the schema from "),e("code",{class:""},"reply"),o(" to "),e("code",{class:""},"response"),o("!")]),e("p",null,"Copilot can also create functions from comments and generate lots of suggestions for a single prompt, but I\u2019ve never used these functions. I just use it for the autocompletion feature."),e("h2",{id:"the-upsides-of-copilot",tabindex:"-1"},"The Upsides of Copilot"),e("p",null,"Some of the things that I love about Copilot are that it\u2019s fast, it\u2019s context-aware, and it\u2019s easy to use. For example, if I want Copilot to complete something, I only have to wait a second or so before seeing a result. It also keeps track of context in a file and will suggest things based on my coding style. I also love how it just works. Some other tools require you to hit a keyboard shortcut or something else to trigger it, whereas Copilot starts itself."),e("h2",{id:"the-downsides-of-copilot",tabindex:"-1"},"The Downsides of Copilot"),e("p",null,"Sometimes Copilot suggests a piece of code when I\u2019m trying to use the standard autocomplete. This often happens when I\u2019m writing a new piece of code and Copilot gives a bad suggestion. When it happens I have to hit \u201CEscape\u201D, which is one extra keystroke. However, it\u2019s still a great tool overall and I\u2019d recommend it to anybody except people new to coding or who haven\u2019t grasped their language completely yet."),e("h2",{id:"beginners%2C-avoid-copilot!",tabindex:"-1"},"Beginners, Avoid Copilot!"),e("p",null,"While autocompletion tools are great for writing code and can save lots of time, I think that beginners should avoid them. This is because it can be too easy to avoid writing your own code, which can make you forget the basics of the language. This in turn leads to you moving backwards in the progress spectrum, which is never good."),e("hr"),e("p",null,"Overall, I think that Copilot is a great tool. I hope that it gets better and can help more, but I also believe that nobody should rely on it too much.")],-1),u=e("nav",null,[e("ul",null,[e("li",null,[e("a",{href:"#what-is-github-copilot%3F"},"What is GitHub Copilot?")]),e("li",null,[e("a",{href:"#the-upsides-of-copilot"},"The Upsides of Copilot")]),e("li",null,[e("a",{href:"#the-downsides-of-copilot"},"The Downsides of Copilot")]),e("li",null,[e("a",{href:"#beginners%2C-avoid-copilot!"},"Beginners, Avoid Copilot!")])])],-1),d={author:"Zachary Sakowitz",category:"code",date:16390944e5,hasToc:!0},w="",y=a({__name:"github-copilot-is-amazing",setup(m,{expose:i}){return i({frontmatter:{author:"Zachary Sakowitz",category:"code",date:16390944e5,hasToc:!0},excerpt:void 0}),(g,f)=>{const s=r("prose");return n(),l(s,{frontmatter:d},{aside:t(()=>[u]),default:t(()=>[p]),_:1})}}});export{y as default,w as excerpt,d as frontmatter};
