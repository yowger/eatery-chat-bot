import { NlpManager } from "node-nlp"

const manager = new NlpManager({ languages: ["en"] })

manager.addDocument("en", "Hello", "greeting")
manager.addDocument("en", "Hi", "greeting")
manager.addDocument("en", "Hello there", "greeting")
manager.addDocument("en", "Hi there", "greeting")

manager.addAnswer("en", "greeting", "Hello! How can I assist you today?")
manager.addAnswer("en", "greeting", "Hi! How can I help you today?")
manager.addAnswer("en", "greeting", "Hello! What can I do for you today?")
manager.addAnswer("en", "greeting", "Hi! What can I do for you today?")

manager.train().then(async () => {
    manager.save()

    const response = await manager.process("en", "Hello")
    console.log(response)
})
