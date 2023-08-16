let advertisement = {
    title: "Advertisement title",
    createdAt: "2022.12.23",
    id: 0,
    price: 140,
    address: "г. Москва, ул. Алябьева, 4к3",
    description: "HELLO WORLD HELLO WORLDHELLO WORLDHELLO WORLD".repeat(50),
    imgSourceUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVX4e9TfOmFxxc9Veul-RLjWTnrX-FWPezbXNSHgAi&s",
    owner: {
        name: "Evgeniy",
        imgSourceUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVX4e9TfOmFxxc9Veul-RLjWTnrX-FWPezbXNSHgAi&s"
    },
}

let pagedChatsJSON = '{"content":[{"chatId":0,"advertisement":{"id":0,"title":"Advertisement title","price":140,"owner":{"id":0,"name":"Evgeniy"}},"participants":[{"userId":0,"firstName":"string","lastName":"string"},{"userId":1,"firstName":"string","lastName":"string"}]},{"chatId":0,"advertisement":{"id":0,"title":"Advertisement title","price":140,"owner":{"id":0,"name":"Evgeniy"}},"participants":[{"userId":0,"firstName":"string","lastName":"string"},{"userId":1,"firstName":"string","lastName":"string"}]}],"totalPages":0,"totalElements":1,"size":1,"number":0}';
let pagedChats = JSON.parse(pagedChatsJSON.toString());

let pagedMessagesJSON = '{"content":[' +
    '{"messageId":0,"chatId":0,"body":"string","senderId":1,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":0,"chatId":0,"body":"string","senderId":0,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":0,"chatId":0,"body":"string","senderId":0,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":0,"chatId":0,"body":"string","senderId":0,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":0,"chatId":0,"body":"string","senderId":0,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":0,"chatId":0,"body":"string","senderId":1,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":0,"chatId":0,"body":"string","senderId":0,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":0,"chatId":0,"body":"string","senderId":0,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":0,"chatId":0,"body":"string","senderId":0,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":0,"chatId":0,"body":"string","senderId":0,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":0,"chatId":0,"body":"string","senderId":1,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":0,"chatId":0,"body":"string","senderId":0,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":0,"chatId":0,"body":"stringstringstringstringstringstringstring","senderId":0,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":0,"chatId":0,"body":"string","senderId":1,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":0,"chatId":0,"body":"string","senderId":0,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":0,"chatId":0,"body":"string","senderId":0,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":0,"chatId":0,"body":"string","senderId":0,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":0,"chatId":0,"body":"string","senderId":0,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":0,"chatId":0,"body":"string","senderId":0,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":0,"chatId":0,"body":"string","senderId":0,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"},' +
    '{"messageId":0,"chatId":0,"body":"string","senderId":0,"status":"CREATED","createdAt":"2023-08-15T12:01:06.317Z"}' +
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