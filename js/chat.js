function onChatButtonClick(e) {
    const receiver = JSON.parse(User.getObjectbyEmail(e.dataset.email));
}