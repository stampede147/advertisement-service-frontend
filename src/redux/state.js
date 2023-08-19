const imgSourceUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVX4e9TfOmFxxc9Veul-RLjWTnrX-FWPezbXNSHgAi&s";
let advertisement = {
    title: "Кроссовки синие",
    createdAt: "2022.12.23",
    id: 0,
    price: 140,
    address: "г. Москва, ул. Алябьева, 4к3",
    description: "HELLO WORLD HELLO WORLDHELLO WORLDHELLO WORLD".repeat(55),
    imgSourceUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVX4e9TfOmFxxc9Veul-RLjWTnrX-FWPezbXNSHgAi&s",
    owner: {
        name: "Evgeniy",
        imgSourceUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVX4e9TfOmFxxc9Veul-RLjWTnrX-FWPezbXNSHgAi&s"
    },
}

let pagedChatsJSON = '{"content":[' +
    `{"chatId":1,"advertisement":{"imgSourceUrl": "${imgSourceUrl}", "id":1,"title":"Advertisement title","price":140,"owner":{"imgSourceUrl": "${imgSourceUrl}","id":0,"name":"Evgeniy"}},"participants":[{"userId":0,"firstName":"string","lastName":"string"},{"userId":1,"firstName":"string","lastName":"string"}]},` +
    `{"chatId":2,"advertisement":{"imgSourceUrl": "${imgSourceUrl}", "id":2,"title":"Advertisement title","price":140,"owner":{"imgSourceUrl": "${imgSourceUrl}","id":0,"name":"Evgeniy"}},"participants":[{"userId":0,"firstName":"string","lastName":"string"},{"userId":1,"firstName":"string","lastName":"string"}]},` +
    `{"chatId":3,"advertisement":{"imgSourceUrl": "${imgSourceUrl}","id":3,"title":"Advertisement title","price":140,"owner":{"imgSourceUrl": "${imgSourceUrl}","id":0,"name":"Evgeniy"}},"participants":[{"userId":0,"firstName":"string","lastName":"string"},{"userId":1,"firstName":"string","lastName":"string"}]},` +
    `{"chatId":4,"advertisement":{"imgSourceUrl": "${imgSourceUrl}","id":4,"title":"Advertisement title","price":140,"owner":{"imgSourceUrl": "${imgSourceUrl}","id":0,"name":"Evgeniy"}},"participants":[{"userId":0,"firstName":"string","lastName":"string"},{"userId":1,"firstName":"string","lastName":"string"}]},` +
    `{"chatId":5,"advertisement":{"imgSourceUrl": "${imgSourceUrl}","id":5,"title":"Advertisement title","price":140,"owner":{"imgSourceUrl": "${imgSourceUrl}","id":0,"name":"Evgeniy"}},"participants":[{"userId":0,"firstName":"string","lastName":"string"},{"userId":1,"firstName":"string","lastName":"string"}]}` +
    '' +
    '],"totalPages":0,"totalElements":1,"size":1,"number":0}';
let pagedChats = JSON.parse(pagedChatsJSON.toString());

let pagedMessagesJSON = '{"content":[' +
    '{"messageId":1,"chatId":1,"body":"string","senderId":1,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":2,"chatId":1,"body":"string","senderId":0,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":3,"chatId":1,"body":"string","senderId":0,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":4,"chatId":1,"body":"string","senderId":0,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":5,"chatId":1,"body":"string","senderId":0,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":6,"chatId":1,"body":"string","senderId":1,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":7,"chatId":1,"body":"string","senderId":0,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"}' +
    '],"totalPages":0,"totalElements":0,"size":0,"number":0}';
let pagedMessages = JSON.parse(pagedMessagesJSON);

const State = {
    chatsPage: pagedChats,
    advertisementsPage: {
        content: [advertisement, advertisement, advertisement, advertisement]
    },
    messagesPage: pagedMessages,
}
export default State;