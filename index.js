const app = "I don't do much.";
const token = '';

function getIssues() {
  // GET /repos/:owner/:repo/issues
  const token = getToken();
  const repo = 'iwilliams83/javascript-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(res => showIssues(res))
}

function showIssues(json) {
  //display a list of all issues associated with your repository on the page
  let myIssues = document.getElementById('issues')
  myIssues.innerHTML = JSON.stringify(json)
}

function createIssue() {
  // https://api.github.com/repos/octocat/Hello-World/issues
  //POST /repos/:owner/:repo/issues
  const token = getToken();
  const repo = 'iwilliams83/javascript-fetch-lab'; //https://github.com/iwilliams83/javascript-fetch-lab
  let title = document.getElementById('title').value
  let issueBody = document.getElementById('body').value
  const body = {
    "title": title,
    "body": issueBody
  };
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    },
    body: JSON.stringify(body)
  }).then(getIssues())

}

function showForkedRepo(json){
  let repoLink = json.html_url //"https://github.com/iwilliams83/javascript-fetch-lab"
  let myRepoLink = document.getElementById('my-repo-link')
  myRepoLink.innerHTML = `<a href="${repoLink}">My Repository</a>`
}

function showResults(json) {
  // innerHTML = "<a href="`${json.html_url}`"> Click here for fork </a>"
  let results = document.getElementById('results');
  let body = JSON.stringify(json, null, 4);

  results.innerHTML = `<code><pre>${body}</pre></code>`
  showForkedRepo(json)
}

function forkRepo() {
  const token = getToken();
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  // /repos/:owner/:repo/forks
  fetch(`https://api.github.com/repos/${repo}/forks`,{
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(res => showResults(res))

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
