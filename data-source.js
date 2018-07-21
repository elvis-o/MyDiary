var entries = [
  {id : 1, title : "My first diary date", details: "My first date with Janey was remarkable, it went so well we had many more."},
  {id : 2, title : "PES 2018", details: "I kinda dislike this version of the game, its sluggish and slow"},
  {id : 3, title : "Presentation", details: "I was called for an impromptu presentation, i lost my cool and almost fainted"}
];

var endpointLists = [
{title : "Endpoint to retireve all entries", type: "GET", url : "https://elvis-o-diary-app.herokuapp.com/api/v1/entries"},
{title : "Endpoint to get entry by id", type: "GET" , url : "https://elvis-o-diary-app.herokuapp.com/api/v1/entries/entryID"},
{title : "Endpoint to create a new entry", type: "POST" , url : "https://elvis-o-diary-app.herokuapp.com/api/v1/entries"},
{title : "Endpoint to update an entry by its ID", type: "PUT" , url : "https://elvis-o-diary-app.herokuapp.com/api/v1/entries/entryID"}
];

module.exports = {
    entries : entries,
    endpointLists: endpointLists
}
