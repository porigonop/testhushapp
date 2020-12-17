function hello(){
    console.log('hello world jq');
}
$(function () {
    hello();
    $.ajax({
        type: "GET",
        url: "https://my-json-server.typicode.com/porigonop/demo/posts",
        crossDomain : true,
        success: function (response) {
            console.log('response', response)
        }
    });
});