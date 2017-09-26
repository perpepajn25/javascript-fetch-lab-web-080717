const base = 'https://api.github.com/repos/'

function getIssues() {
  fetch(`${base}perpepajn25/javascript-fetch-lab/issues`, {
    method: 'get',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json=>showIssues(json))
}

function showIssues(json) {
  json.forEach(item=> {
    let issues = $('#issues')
    let newIssue = document.createElement("DIV")
    newIssue.innerHTML=`<p> Title: ${item.title}</p>
      <p> Body: ${item.body}`
    issues.append(newIssue)
  })
}

function createIssue() {
  let issueTitle = $('#title').val()
  let issueBody =  $('#body').val()
  let data = {title: issueTitle, body: issueBody}
  fetch(`${base}perpepajn25/javascript-fetch-lab/issues`, {
    method: 'post',
    title: issueTitle,
    body: JSON.stringify(data),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => getIssues())
}

function showResults(json) {
  var results = document.getElementById("results")
  results.innerHTML = `<p><a href='${json.svn_url}'>${json.svn_url}</a></p>`
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

fetch(`${base}${repo}/forks`, {
  method: "post",
  headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  return ''
}
